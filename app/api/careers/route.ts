import { NextRequest, NextResponse } from 'next/server';
import { getMongoDb } from '@/lib/mongodb';
import { uploadToR2 } from '@/lib/r2';

const MAX_BYTES = 2 * 1024 * 1024;
const COLLECTION = process.env.MONGODB_COLLECTION ?? 'applicants';

export async function POST(request: NextRequest) {
  try {
    const form = await request.formData();
    const name = String(form.get('name') ?? '').trim();
    const email = String(form.get('email') ?? '').trim();
    const phone = String(form.get('phone') ?? '').trim();
    const resume = form.get('resume');

    if (!name || !email || !phone || !(resume instanceof File)) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields or resume file.' },
        { status: 400 }
      );
    }

    if (resume.type !== 'application/pdf' || resume.size > MAX_BYTES) {
      return NextResponse.json(
        { success: false, message: 'Resume must be a PDF under 2 MB.' },
        { status: 400 }
      );
    }

    const buffer = Buffer.from(await resume.arrayBuffer());

    const bucket = process.env.R2_BUCKET_NAME ?? 'resumes';
    const key = `${Date.now()}-${Math.random().toString(36).slice(2)}-${resume.name}`;

    const uploadResult = await uploadToR2({
      bucket,
      key,
      contentType: resume.type,
      body: buffer,
    });

    const db = await getMongoDb();
    const collection = db.collection(COLLECTION);

    const document = {
      name,
      email,
      phone,
      resume: {
        filename: resume.name,
        mimeType: resume.type,
        size: resume.size,
        objectKey: uploadResult.key,
        url: uploadResult.publicUrl,
      },
      submittedAt: new Date(),
      source: request.headers.get('referer') ?? '/careers',
    };

    const insertResult = await collection.insertOne(document);

    return NextResponse.json({
      success: true,
      message: 'Submitted.',
      id: insertResult.insertedId,
      resumeUrl: uploadResult.publicUrl,
    });
  } catch (error: unknown) {
    const message = error instanceof Error ? error.message : 'Unexpected server error.';
    const details = {
      name: (error as any)?.name,
      code: (error as any)?.code,
      cause: (error as any)?.cause,
      message,
    };
    console.error('Careers submission failed', details);
    return NextResponse.json({ success: false, message }, { status: 500 });
  }
}
