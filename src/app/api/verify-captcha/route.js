import { NextResponse } from 'next/server'

export async function POST(req) {
  const { token } = await req.json()

  const secretKey = process.env.RECAPTCHA_SECRET_KEY

  const verify = await fetch(`https://www.google.com/recaptcha/api/siteverify`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: `secret=${secretKey}&response=${token}`,
  })

  const data = await verify.json()

  return NextResponse.json({ success: data.success })
}
