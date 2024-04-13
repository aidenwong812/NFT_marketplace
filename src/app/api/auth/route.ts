import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest, res: NextResponse) {
    const body = await req.json();
    const { email, otpCode } = body;
    console.log(email);
    console.log(otpCode);
    try {
        const { data, error } = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: [email],
            subject: "Welcome to SOFT COQ INU",
            html: `<p>Your Otp Code is <strong>${otpCode}</strong>!</p>`,
        });

        if (error) {
            return Response.json({ error });
        }

        return Response.json({ data });
    } catch (error) {
        return Response.json({ error });
    }
}