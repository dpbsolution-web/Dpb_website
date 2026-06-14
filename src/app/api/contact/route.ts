import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { companyInfo } from '@/config/site';

export async function POST(request: Request) {
  try {
    const { name, email, phone, company, message, position, subject } = await request.json();

    // Validate input (position is optional — only present for job applications)
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Please fill in your name, email and message.' },
        { status: 400 }
      );
    }

    // Email credentials come from environment variables (never hard-code secrets)
    const EMAIL_USER = process.env.EMAIL_USER;
    const EMAIL_PASS = process.env.EMAIL_PASS;
    const RECIPIENT = process.env.CONTACT_RECIPIENT_EMAIL || companyInfo.contact.email;

    if (!EMAIL_USER || !EMAIL_PASS) {
      console.error('Email not configured: set EMAIL_USER and EMAIL_PASS environment variables.');
      return NextResponse.json(
        {
          success: false,
          error: 'Email service not configured',
          details: 'Set EMAIL_USER and EMAIL_PASS environment variables (Gmail address + App Password).',
        },
        { status: 500 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: { user: EMAIL_USER, pass: EMAIL_PASS },
    });

    // Verify connection
    await transporter.verify();

    const isApplication = Boolean(position);
    const heading = isApplication ? 'New Job Application' : 'New Contact Inquiry';
    const mailSubject = isApplication
      ? `New Job Application: ${position}`
      : subject || `New Contact Inquiry from ${name}`;

    const detailRows = [
      isApplication ? `<p><strong>Position:</strong> ${position}</p>` : '',
      `<p><strong>Name:</strong> ${name}</p>`,
      `<p><strong>Email:</strong> ${email}</p>`,
      phone ? `<p><strong>Phone:</strong> ${phone}</p>` : '',
      company ? `<p><strong>Company:</strong> ${company}</p>` : '',
    ]
      .filter(Boolean)
      .join('');

    const messageLabel = isApplication ? 'Cover Letter' : 'Message';

    const mailOptions = {
      from: EMAIL_USER,
      to: RECIPIENT,
      replyTo: email,
      subject: mailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #2563eb;">${heading}</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            ${detailRows}
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">${messageLabel}:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            Submitted through the ${companyInfo.name} website.
          </p>
        </div>
      `,
      text: `${heading}

${isApplication ? `Position: ${position}\n` : ''}Name: ${name}
Email: ${email}
${phone ? `Phone: ${phone}\n` : ''}${company ? `Company: ${company}\n` : ''}
${messageLabel}:
${message}
`,
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ success: true, message: 'Message sent successfully!' });
  } catch (error: unknown) {
    console.error('Email error:', error);

    const errorMessage = 'Failed to send message';
    let errorDetails = 'Unknown error';

    // Safely extract error details
    if (error && typeof error === 'object') {
      if ('message' in error && typeof error.message === 'string') {
        errorDetails = error.message;
      }

      // Provide specific error messages
      if ('code' in error) {
        if (error.code === 'EAUTH') {
          errorDetails = 'Invalid email credentials. Please check your Gmail username and app password.';
        } else if (error.code === 'ECONNECTION') {
          errorDetails = 'Cannot connect to email server. Check your internet connection.';
        } else if (error.code === 'ETIMEDOUT') {
          errorDetails = 'Connection timeout. Please try again.';
        }
      }
    }

    return NextResponse.json(
      { success: false, error: errorMessage, details: errorDetails },
      { status: 500 }
    );
  }
}
