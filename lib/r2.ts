import { S3Client, PutObjectCommand } from '@aws-sdk/client-s3';

let cachedClient: S3Client | null = null;

function getClient(): S3Client {
  if (cachedClient) {
    return cachedClient;
  }

  const accountId = process.env.R2_ACCOUNT_ID;
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;

  if (!accountId || !accessKeyId || !secretAccessKey) {
    throw new Error('Missing R2 configuration environment variables.');
  }

  cachedClient = new S3Client({
    region: 'auto',
    endpoint: `https://${accountId}.r2.cloudflarestorage.com`,
    credentials: {
      accessKeyId,
      secretAccessKey,
    },
    forcePathStyle: true,
  });

  return cachedClient;
}

export interface UploadToR2Options {
  bucket: string;
  key: string;
  contentType: string;
  body: Buffer;
}

export interface UploadToR2Result {
  key: string;
  publicUrl: string;
}

export async function uploadToR2(options: UploadToR2Options): Promise<UploadToR2Result> {
  const client = getClient();
  const bucket = options.bucket || process.env.R2_BUCKET_NAME;
  if (!bucket) {
    throw new Error('Missing R2 bucket name. Set R2_BUCKET_NAME or provide bucket in options.');
  }

  const command = new PutObjectCommand({
    Bucket: bucket,
    Key: options.key,
    Body: options.body,
    ContentType: options.contentType,
  });
  try {
    await client.send(command);
  } catch (err) {
    // Surface detailed context without leaking credentials
    const meta = {
      bucket,
      key: options.key,
      name: (err as any)?.name,
      code: (err as any)?.code,
      message: (err as any)?.message,
    };
    console.error('R2 upload failed', meta);
    throw new Error(`R2 upload failed: ${meta.code || meta.name || 'unknown error'}`);
  }

  const publicBase = process.env.R2_PUBLIC_BASE_URL;
  const publicUrl = publicBase
    ? `${publicBase.replace(/\/$/, '')}/${encodeURIComponent(options.key)}`
    : `https://${bucket}.${process.env.R2_ACCOUNT_ID}.r2.cloudflarestorage.com/${encodeURIComponent(options.key)}`;

  return {
    key: options.key,
    publicUrl,
  };
}
