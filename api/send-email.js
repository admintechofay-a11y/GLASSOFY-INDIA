import { sendEnquiryEmail } from '../server/emailService.js';

export default async function handler(req, res) {
  // CORS support
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const data = typeof req.body === 'string' ? JSON.parse(req.body || '{}') : req.body || {};
    const { name, phone, email, category, dimensions, message, source } = data;

    if (!name || !name.trim()) {
      return res.status(400).json({ error: 'Name is required' });
    }

    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      return res.status(400).json({ error: 'Valid 10-digit phone number is required' });
    }

    const result = await sendEnquiryEmail({
      name: name.trim(),
      phone: cleanPhone,
      email: (email || '').trim(),
      category: category || 'General Glass & Aluminium Enquiry',
      dimensions: (dimensions || '').trim(),
      message: (message || '').trim(),
      source: source || 'Website Contact Form',
    });

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been received. Our team will contact you shortly!',
      messageId: result.messageId,
    });
  } catch (err) {
    console.error('[Vercel send-email error]:', err);
    return res.status(500).json({
      error: 'Unable to send email at this time. Please contact us via WhatsApp.',
      details: err.message,
    });
  }
}
