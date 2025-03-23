const nodemailer = require('nodemailer');
const dotenv = require('dotenv');
dotenv.config();

// Create transporter with updated Gmail settings
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,    // razgiri456@gmail.com
    pass: process.env.EMAIL_PASS     // rtnn rkrt qaop lvtd
  },
  debug: true,
  logger: true
});

// Verify connection function
const verifyConnection = async () => {
  return new Promise((resolve, reject) => {
    transporter.verify((error, success) => {
      if (error) {
        console.error('Email verification error:', error);
        reject(error);
      } else {
        console.log('Email server is ready');
        resolve(success);
      }
    });
  });
};

const formatEmailContent = (data, type) => {
  if (type === 'registration') {
    return `
      <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #4F46E5;">New Registration Form Submission</h2>
        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Phone:</strong> ${data.phone}</p>
          <p><strong>Country:</strong> ${data.country}</p>
          <p><strong>Program:</strong> ${data.program}</p>
          <p><strong>University:</strong> ${data.university}</p>
          <p><strong>Message:</strong> ${data.message || 'No additional message'}</p>
        </div>
        <p style="color: #64748b; font-size: 12px;">This is an automated notification from Gigabyte Education System</p>
      </div>
    `;
  }

  // Contact form email template
  return `
    <div style="font-family: Arial, sans-serif; padding: 20px; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #4F46E5;">New Contact Form Submission</h2>
      <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Phone:</strong> ${data.phone}</p>
        <p><strong>Subject:</strong> ${data.subject}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      </div>
      <p style="color: #64748b; font-size: 12px;">This is an automated notification from Gigabyte Education System</p>
    </div>
  `;
};

// Add debug logging for email sending
const sendNotificationEmail = async (data, type = 'contact') => {
  try {
    console.log('Email sending attempt with:', {
      from: process.env.EMAIL_USER,
      to: [process.env.NOTIFICATION_EMAIL, process.env.ADMIN_EMAIL],
      subject: type === 'registration' ? `Registration from ${data.name}` : `Contact from ${data.name}`
    });

    const mailOptions = {
      from: `"Gigabyte Education" <${process.env.EMAIL_USER}>`,
      to: [process.env.NOTIFICATION_EMAIL, process.env.ADMIN_EMAIL].join(','),
      subject: type === 'registration' 
        ? `🎓 New Student Registration - ${data.university}`
        : `📧 New Contact Form Submission - ${data.subject}`,
      html: formatEmailContent(data, type)
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', {
      messageId: info.messageId,
      response: info.response
    });
    return info;
  } catch (error) {
    console.error('Detailed email error:', {
      error: error.message,
      stack: error.stack,
      code: error.code
    });
    throw error;
  }
};

// Add this test function
const testEmail = async () => {
  try {
    const testMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.NOTIFICATION_EMAIL,
      subject: "Test Email from Gigabyte Education System",
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2>Test Email</h2>
          <p>This is a test email to verify the email notification system is working.</p>
          <p>Time sent: ${new Date().toLocaleString()}</p>
        </div>
      `
    };

    const info = await transporter.sendMail(testMailOptions);
    console.log('Test email sent:', info.messageId);
    return info;
  } catch (error) {
    console.error('Test email failed:', error);
    throw error;
  }
};

module.exports = {
  transporter,
  verifyConnection,
  sendNotificationEmail,
  testEmail
};
