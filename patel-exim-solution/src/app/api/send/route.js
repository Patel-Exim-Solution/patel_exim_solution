import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// Helper for consistent JSON responses
const jsonResponse = (data, status = 200) =>
    new Response(JSON.stringify(data), {
        status,
        headers: { "Content-Type": "application/json" },
    });

export async function POST(req) {
    console.log('home')
    try {
        const body = await req.json();
        const { name, email, message } = body;

        if (!name || !email) {
            return jsonResponse({ success: false, error: "Name And Email fields are required" }, 400);
        }

        const data = await resend.emails.send({
            from: process.env.RESEND_FROM_EMAIL || "Acme <onboarding@resend.dev>",
            to: process.env.RESEND_TO_EMAIL || "ptlexims1@gmail.com", // your inbox where you want to receive
            subject: "📩 New Contact Form Message",
            html: `
              <h2>New Contact Message</h2>
              <p><b>Name:</b> ${name}</p>
              <p><b>Email:</b> ${email}</p>
              <p><b>Message:</b> ${message}</p>
            `,
        });
        if (data?.error)
            return jsonResponse({ success: false, error: data?.error?.error || 'Something went wrong from API' }, data?.error?.statusCode || 500);
        return jsonResponse({ success: true, data }, 200);
    } catch (error) {
        console.log("Email Error:", error);
        return jsonResponse({ success: false, error: error.message }, 500);
    }
}