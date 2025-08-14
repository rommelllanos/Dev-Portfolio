import { NextResponse } from 'next/server';
import { ServerClient } from 'postmark';

export async function POST(request: Request) {
  const {
    POSTMARK_SERVER_TOKEN,
    POSTMARK_SENDER_EMAIL,
    POSTMARK_RECIPIENT_EMAIL,
  } = process.env;

  if (
    !POSTMARK_SERVER_TOKEN ||
    !POSTMARK_SENDER_EMAIL ||
    !POSTMARK_RECIPIENT_EMAIL
  ) {
    return NextResponse.json(
      { message: 'Postmark environment variables are not configured.' },
      { status: 500 }
    );
  }

  try {
    const body = await request.json();
    const { name, email, message } = body;

    const postmarkClient = new ServerClient(POSTMARK_SERVER_TOKEN);

    const emailBody = `
      Name: ${name}
      Email: ${email}
      Message: ${message}
    `;

    await postmarkClient.sendEmail({
      From: POSTMARK_SENDER_EMAIL,
      To: POSTMARK_RECIPIENT_EMAIL,
      Subject: `New message from ${name} via portfolio`,
      TextBody: emailBody,
    });

    return NextResponse.json({ message: 'Message sent successfully!' }, { status: 200 });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ message: 'Error sending email.' }, { status: 500 });
  }
}
