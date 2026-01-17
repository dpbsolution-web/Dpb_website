import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, message, position } = await request.json();

    // Validate input
    if (!name || !email || !message || !position) {
      return NextResponse.json(
        { success: false, error: 'All required fields must be filled' },
        { status: 400 }
      );
    }

    // Email configuration - UPDATE THESE WITH YOUR GMAIL CREDENTIALS
    const EMAIL_USER = 'your-email@gmail.com';  // ⚠️ Replace with your Gmail
    const EMAIL_PASS = 'your-app-password';     // ⚠️ Replace with Gmail App Password
    const RECIPIENT = 'shankarsumit49@gmail.com';

    // Check if credentials are still default
    if (EMAIL_USER === 'your-email@gmail.com' || EMAIL_PASS === 'your-app-password') {
      console.error('Email credentials not configured!');
      return NextResponse.json(
        { 
          success: false, 
          error: 'Email service not configured', 
          details: 'Please configure email credentials in the API route' 
        },
        { status: 500 }
      );
    }

    // Create transporter with Gmail
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASS
      }
    });

    // Verify connection
    await transporter.verify();

    // Email options
    const mailOptions = {
      from: EMAIL_USER,
      to: RECIPIENT,
      replyTo: email,
      subject: `New Job Application: ${position}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px;">
          <h2 style="color: #2563eb;">New Job Application</h2>
          <div style="background: #f3f4f6; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Position:</strong> ${position}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
          </div>
          <div style="margin-top: 20px;">
            <h3 style="color: #374151;">Cover Letter:</h3>
            <p style="line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="margin: 20px 0; border: none; border-top: 1px solid #e5e7eb;">
          <p style="font-size: 12px; color: #6b7280;">
            This application was submitted through the DPB Solution careers page.
          </p>
        </div>
      `,
      text: `
        New Job Application
        
        Position: ${position}
        Name: ${name}
        Email: ${email}
        ${phone ? `Phone: ${phone}` : ''}
        
        Cover Letter:
        ${message}
      `
    };

    // Send email
    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', info.messageId);

    return NextResponse.json({ 
      success: true, 
      message: 'Application sent successfully!' 
    });
  } catch (error: unknown) {
    console.error('Email error:', error);
    
    const errorMessage = 'Failed to send application';
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
      { 
        success: false, 
        error: errorMessage, 
        details: errorDetails 
      },
      { status: 500 }
    );
  }
}
