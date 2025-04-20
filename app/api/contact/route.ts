import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Create reusable transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    // Use application-specific password for Gmail
    user: 'talhazafar0007@gmail.com', // Replace with your email in production
    pass: 'anzx txpx xgzr rfrk', // Replace with your app password in production
  },
});

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    
    const name = formData.get('name') as string;
    const phone = formData.get('phone') as string;
    const email = formData.get('email') as string;
    const address = formData.get('address') as string || 'Not provided';
    const message = formData.get('message') as string;
    
    // Validate required fields
    if (!name || !phone || !email || !message) {
      return NextResponse.json(
        { success: false, message: 'Missing required fields' },
        { status: 400 }
      );
    }
    
    // Email content with HTML formatting
    const htmlContent = `
      <h2>New Website Inquiry</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Address:</strong> ${address}</p>
      <h3>Message:</h3>
      <p>${message.replace(/\n/g, '<br>')}</p>
    `;
    
    // Plain text version as fallback
    const textContent = `
      New Website Inquiry
      
      Name: ${name}
      Phone: ${phone}
      Email: ${email}
      Address: ${address}
      
      Message:
      ${message}
    `;
    
    // Send email
    const mailOptions = {
      from: process.env.EMAIL_USER || 'Dynamicstarcons@gmail.com', // Replace with your email
      to: 'Dynamicstarcons@gmail.com',
      replyTo: email,
      subject: `Website Inquiry from ${name}`,
      text: textContent,
      html: htmlContent,
    };
    
    const info = await transporter.sendMail(mailOptions);
    
    if (info.messageId) {
      return NextResponse.json({ 
        success: true, 
        message: 'Your message has been sent successfully!' 
      });
    } else {
      throw new Error('Failed to send email');
    }
    
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to send your message. Please try again later.' },
      { status: 500 }
    );
  }
} 