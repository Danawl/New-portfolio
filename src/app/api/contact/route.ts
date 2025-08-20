import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'
interface ContactRequestBody {
  name: string;
  email: string;
  message: string;
}

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json() as ContactRequestBody
    if (!name || !message) {
      return NextResponse.json(
        { message: 'All fields are required' },)
    }
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS
      }
    })
    await transporter.sendMail ({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
       subject: `New message from ${name}`,
       text: message,
    })
    // For now, we'll just simulate a successful response
    return NextResponse.json(
      { message: 'Message sent successfully' },
      { status: 200 }
    )
  } catch (error: unknown) {
    console.log(error); 
    const errorMessage = error instanceof Error ? error.message : 'Failed to send message'
    return NextResponse.json(
      { message: errorMessage },
      { status: 500 }
    )
  }
} 