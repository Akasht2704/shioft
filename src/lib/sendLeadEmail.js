import axios from 'axios';

export async function sendLeadsEmail(name, email, message) {
  try {
    const response = await axios.post(
      'https://api.brevo.com/v3/smtp/email',
      {
        sender: { name, email },
        to: [{ email:'developer@shioft.com' }],
        subject: 'Lead Mesaages From Shioft site',
        htmlContent: `
          <html>
            <body style="font-family:sans-serif; padding:20px;">
              <h2>New Contact Message</h2>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong> ${message}</p>
            </body>
          </html>
        `,
      },
      {
        headers: {
          'api-key': process.env.BREVO_API_KEY,
          'Content-Type': 'application/json',
        },
      }
    );
      
    if (response.status === 201) {
      return { success: true };
    } else {
      return { success: false };
    }

  } catch (error) {
    console.error('Email sending error:', error.response?.data || error.message);
    throw new Error('Failed to send email');
  }
}
