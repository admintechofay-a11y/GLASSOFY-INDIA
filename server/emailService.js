import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load .env
dotenv.config({ path: path.resolve(__dirname, '../.env') });

const smtpUser = process.env.SMTP_USER || 'admin.techofay@gmail.com';
const smtpPass = (process.env.SMTP_PASS || 'vatlfruxzkezdszy').replace(/\s+/g, '');
const recipients = process.env.NOTIFICATION_RECIPIENTS || 'info.glassofyindia@gmail.com,admin.techofay@gmail.com';

// Create Nodemailer Transporter
export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: smtpUser,
    pass: smtpPass,
  },
});

/**
 * Send an enquiry email to admins and customer confirmation
 */
export async function sendEnquiryEmail({ name, phone, email, category, dimensions, message, source = 'Website Enquiry' }) {
  const timestamp = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    dateStyle: 'full',
    timeStyle: 'medium',
  });

  const cleanPhone = (phone || '').replace(/[^0-9]/g, '');
  const waLink = `https://wa.me/91${cleanPhone}?text=${encodeURIComponent(`Hello ${name}, thank you for contacting Glassofy India regarding ${category}.`)}`;

  // 1. Admin Notification Email Template
  const adminHtml = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>New Glassofy India Enquiry</title>
      <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F6F9; margin: 0; padding: 24px; color: #1F2937; }
        .container { max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E5E7EB; }
        .header { background: linear-gradient(135deg, #070F1E 0%, #0A1628 100%); padding: 32px 28px; text-align: center; border-bottom: 3px solid #D4AF37; }
        .brand-name { color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: 1px; margin: 0; }
        .brand-tagline { color: #D4AF37; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-top: 6px; }
        .badge { display: inline-block; background-color: rgba(212, 175, 55, 0.2); border: 1px solid #D4AF37; color: #D4AF37; font-size: 11px; font-weight: 700; padding: 4px 12px; border-radius: 20px; text-transform: uppercase; margin-top: 14px; letter-spacing: 1px; }
        .content { padding: 32px 28px; }
        .title { font-size: 20px; font-weight: 700; color: #0A1628; margin-top: 0; margin-bottom: 20px; }
        .info-table { width: 100%; border-collapse: collapse; margin-bottom: 24px; }
        .info-table td { padding: 12px 14px; border-bottom: 1px solid #F3F4F6; font-size: 14px; }
        .info-table td.label { font-weight: 600; color: #6B7280; width: 35%; background-color: #F9FAFB; }
        .info-table td.value { font-weight: 500; color: #111827; }
        .message-box { background-color: #F8FAFC; border-left: 4px solid #D4AF37; padding: 16px; border-radius: 8px; margin-bottom: 24px; font-size: 14px; line-height: 1.6; color: #374151; }
        .actions { text-align: center; margin-top: 28px; padding-top: 20px; border-top: 1px solid #E5E7EB; }
        .btn { display: inline-block; padding: 12px 24px; border-radius: 50px; font-size: 13px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; margin: 6px; }
        .btn-call { background-color: #0A1628; color: #FFFFFF !important; }
        .btn-wa { background-color: #25D366; color: #FFFFFF !important; }
        .footer { background-color: #F9FAFB; padding: 20px 28px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E5E7EB; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1 class="brand-name">GLASSOFY INDIA</h1>
          <div class="brand-tagline">From Mirrors to Rooftops — We Do It All</div>
          <span class="badge">🔔 New Customer Enquiry</span>
        </div>
        <div class="content">
          <h2 class="title">Lead Details — ${category}</h2>
          <table class="info-table">
            <tr>
              <td class="label">Customer Name</td>
              <td class="value"><strong>${name}</strong></td>
            </tr>
            <tr>
              <td class="label">Phone Number</td>
              <td class="value"><a href="tel:${cleanPhone}" style="color: #0A1628; font-weight: 700; text-decoration: none;">+91 ${phone}</a></td>
            </tr>
            <tr>
              <td class="label">Email</td>
              <td class="value">${email ? `<a href="mailto:${email}" style="color: #2563EB;">${email}</a>` : '<em>Not provided</em>'}</td>
            </tr>
            <tr>
              <td class="label">Product / Service</td>
              <td class="value"><strong>${category}</strong></td>
            </tr>
            ${dimensions ? `
            <tr>
              <td class="label">Dimensions / Sizing</td>
              <td class="value">${dimensions}</td>
            </tr>` : ''}
            <tr>
              <td class="label">Source Form</td>
              <td class="value">${source}</td>
            </tr>
            <tr>
              <td class="label">Received At</td>
              <td class="value">${timestamp}</td>
            </tr>
          </table>

          <div style="font-size: 13px; font-weight: 700; text-transform: uppercase; color: #6B7280; margin-bottom: 8px; letter-spacing: 0.5px;">Customer Message / Requirement</div>
          <div class="message-box">
            ${message ? message.replace(/\n/g, '<br>') : '<em>No additional message provided. Customer requested catalogue & pricing.</em>'}
          </div>

          <div class="actions">
            <a href="tel:${cleanPhone}" class="btn btn-call">📞 Call Customer</a>
            <a href="${waLink}" target="_blank" class="btn btn-wa">💬 Reply on WhatsApp</a>
          </div>
        </div>
        <div class="footer">
          Glassofy India · Vadodara, Gujarat · Experience Centers: Fatehgunj & Chhani<br>
          Direct Sales: +91 94125 97560 | Catalogue: +91 9359339000
        </div>
      </div>
    </body>
    </html>
  `;

  // Admin Notification
  const adminMailOptions = {
    from: `"Glassofy India Website" <${smtpUser}>`,
    to: recipients,
    replyTo: email || smtpUser,
    subject: `🔔 New Enquiry: ${name} — ${category}`,
    html: adminHtml,
  };

  const adminResult = await transporter.sendMail(adminMailOptions);
  console.log(`[EmailService] Admin notification sent successfully: ${adminResult.messageId}`);

  // 2. Customer Confirmation Email (if valid email provided)
  if (email && email.includes('@') && email.includes('.')) {
    try {
      const customerHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <title>Thank you for contacting Glassofy India</title>
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F4F6F9; margin: 0; padding: 24px; color: #1F2937; }
            .container { max-width: 600px; margin: 0 auto; background-color: #FFFFFF; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08); border: 1px solid #E5E7EB; }
            .header { background: linear-gradient(135deg, #070F1E 0%, #0A1628 100%); padding: 32px 28px; text-align: center; border-bottom: 3px solid #D4AF37; }
            .brand-name { color: #FFFFFF; font-size: 24px; font-weight: 800; letter-spacing: 1px; margin: 0; }
            .brand-tagline { color: #D4AF37; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-top: 6px; }
            .content { padding: 32px 28px; }
            .greeting { font-size: 20px; font-weight: 700; color: #0A1628; margin-top: 0; margin-bottom: 14px; }
            .p-text { font-size: 14px; line-height: 1.6; color: #4B5563; margin-bottom: 16px; }
            .highlight-card { background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 12px; padding: 20px; margin: 20px 0; }
            .highlight-item { font-size: 13px; color: #1F2937; margin-bottom: 8px; display: flex; align-items: center; }
            .highlight-item strong { color: #0A1628; width: 140px; }
            .warranty-banner { background: #FEF9C3; border: 1px solid #FDE047; border-radius: 8px; padding: 12px 16px; font-size: 13px; color: #854D0E; font-weight: 600; margin: 20px 0; text-align: center; }
            .btn-wa { display: inline-block; background-color: #25D366; color: #FFFFFF !important; padding: 14px 28px; border-radius: 50px; font-size: 14px; font-weight: 700; text-decoration: none; text-transform: uppercase; letter-spacing: 0.5px; }
            .footer { background-color: #F9FAFB; padding: 20px 28px; text-align: center; font-size: 12px; color: #9CA3AF; border-top: 1px solid #E5E7EB; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1 class="brand-name">GLASSOFY INDIA</h1>
              <div class="brand-tagline">From Mirrors to Rooftops — We Do It All</div>
            </div>
            <div class="content">
              <h2 class="greeting">Dear ${name},</h2>
              <p class="p-text">
                Thank you for your interest in <strong>Glassofy India</strong>. We have received your enquiry regarding <strong>${category}</strong>. Our senior glazing and mirror specialist is reviewing your requirements and will reach out to you shortly.
              </p>

              <div class="highlight-card">
                <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #D4AF37; margin-bottom: 12px; letter-spacing: 1px;">Summary of Your Request</div>
                <div class="highlight-item"><strong>Product:</strong> ${category}</div>
                ${dimensions ? `<div class="highlight-item"><strong>Sizing:</strong> ${dimensions}</div>` : ''}
                <div class="highlight-item"><strong>Contact Phone:</strong> +91 ${phone}</div>
                ${message ? `<div class="highlight-item"><strong>Your Notes:</strong> ${message}</div>` : ''}
              </div>

              <div class="warranty-banner">
                🛡️ All Glassofy LED Mirrors include an Industry-Leading 2-Year Direct Replacement Warranty.
              </div>

              <p class="p-text">
                Need urgent site measurement or customized quote immediately? Connect with our technical team directly on WhatsApp:
              </p>

              <div style="text-align: center; margin: 24px 0;">
                <a href="https://wa.me/919412597560?text=${encodeURIComponent(`Hi Glassofy India, I recently submitted an enquiry for ${category} on your website.`)}" class="btn-wa">
                  💬 Chat on WhatsApp (+91 94125 97560)
                </a>
              </div>

              <div style="margin-top: 28px; padding-top: 20px; border-top: 1px solid #E5E7EB;">
                <h4 style="font-size: 13px; font-weight: 700; color: #0A1628; margin: 0 0 8px 0; text-transform: uppercase; letter-spacing: 0.5px;">Visit Our Vadodara Experience Centers</h4>
                <p style="font-size: 12px; color: #6B7280; line-height: 1.5; margin: 0 0 6px 0;">
                  📍 <strong>Showroom 1:</strong> A-1, Beside Fatehgunj Police Station, Old Channi Road, Vadodara – 390002
                </p>
                <p style="font-size: 12px; color: #6B7280; line-height: 1.5; margin: 0;">
                  📍 <strong>Showroom 2 (M&M Glass):</strong> GF 12, Dar Al Ashraf, Police Chowki, Phulwadi Char Rasta, Opp. Chhani Bridge, TP 13, Chhani Jakatnaka, Vadodara – 390002
                </p>
              </div>
            </div>
            <div class="footer">
              Glassofy India · Vadodara, Gujarat · info.glassofyindia@gmail.com · +91 94125 97560
            </div>
          </div>
        </body>
        </html>
      `;

      await transporter.sendMail({
        from: `"Glassofy India" <${smtpUser}>`,
        to: email,
        subject: `✨ Thank you for choosing Glassofy India — We've received your enquiry`,
        html: customerHtml,
      });
      console.log(`[EmailService] Customer confirmation sent to ${email}`);
    } catch (cErr) {
      console.error(`[EmailService] Customer confirmation error (non-fatal):`, cErr.message);
    }
  }

  return { success: true, messageId: adminResult.messageId };
}
