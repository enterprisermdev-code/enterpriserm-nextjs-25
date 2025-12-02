import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    // Read FormData from client
    const incoming = await request.formData();

    // Prepare FormData for Web3Forms
    const formData = new FormData();
    for (const [key, value] of incoming.entries()) {
      if (typeof value === 'string') formData.append(key, value);
    }
    const accessKey = process.env.WEB3FORMS_ACCESS_KEY || '';
    if (!accessKey) {
      return NextResponse.json(
        { success: false, message: 'Server misconfiguration: missing WEB3FORMS_ACCESS_KEY' },
        { status: 500 }
      );
    }
    formData.append('access_key', accessKey);
    // Optional helpful fields
    if (!formData.get('subject')) formData.append('subject', 'New contact form submission');
    if (!formData.get('from_name')) formData.append('from_name', 'EnterpriseRM.ai');

    // Build headers to reduce Cloudflare challenges
    const ua = request.headers.get('user-agent') || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/118.0.0.0 Safari/537.36';
    const origin = request.headers.get('origin') || process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
    const referer = request.headers.get('referer') || `${origin}/contact`;
    const clientIp = (request.headers.get('x-forwarded-for') || '').split(',')[0]?.trim() || '';

    // Send as multipart/form-data but request JSON response
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'User-Agent': ua,
        'Origin': origin,
        'Referer': referer,
        ...(clientIp ? { 'X-Forwarded-For': clientIp, 'CF-Connecting-IP': clientIp } : {}),
      },
      body: formData,
    });

    const contentType = response.headers.get('content-type') || '';

    if (contentType.includes('application/json')) {
      const data = await response.json();
      return NextResponse.json(data, { status: response.ok ? 200 : response.status });
    }

    const text = await response.text();
    console.error('Unexpected response from Web3Forms', {
      status: response.status,
      contentType,
      bodySample: text.slice(0, 500),
    });
    return NextResponse.json(
      { success: false, message: 'Unexpected response from Web3Forms', status: response.status, details: text.slice(0, 300) },
      { status: 502 }
    );
  } catch (error) {
    console.error('Form submission error:', error);
    return NextResponse.json(
      { success: false, message: 'Error submitting form' },
      { status: 500 }
    );
  }
}
