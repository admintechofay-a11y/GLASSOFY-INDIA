import { sendEnquiryEmail } from './emailService.js';

/**
 * Connect/Express compatible handler for POST /api/send-email
 */
export function handleEmailApi(req, res) {
  if (req.method !== 'POST') {
    res.statusCode = 405;
    res.setHeader('Content-Type', 'application/json');
    return res.end(JSON.stringify({ error: 'Method Not Allowed' }));
  }

  // If express already parsed body
  if (req.body && typeof req.body === 'object') {
    return processEmailData(req.body, res);
  }

  // Otherwise read raw stream (e.g. Vite connect middleware)
  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
  });

  req.on('end', () => {
    try {
      const data = JSON.parse(body || '{}');
      processEmailData(data, res);
    } catch (parseErr) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      res.end(JSON.stringify({ error: 'Invalid JSON payload' }));
    }
  });
}

async function processEmailData(data, res) {
  try {
    const { name, phone, email, category, dimensions, message, source } = data;

    if (!name || !name.trim()) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: 'Name is required' }));
    }

    const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
    if (cleanPhone.length < 10) {
      res.statusCode = 400;
      res.setHeader('Content-Type', 'application/json');
      return res.end(JSON.stringify({ error: 'Valid 10-digit phone number is required' }));
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

    res.statusCode = 200;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        success: true,
        message: 'Your enquiry has been received. Our team will contact you shortly!',
        messageId: result.messageId,
      })
    );
  } catch (err) {
    console.error('[API send-email error]:', err);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    return res.end(
      JSON.stringify({
        error: 'Unable to send email at this time. Please contact us via WhatsApp.',
        details: err.message,
      })
    );
  }
}
