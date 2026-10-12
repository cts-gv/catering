import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const {
      name,
      email,
      phone,
      event_type,
      event_date,
      guests,
      message,
      quote_estimate,
    } = await req.json();

    if (!name || !email || !phone || !event_type) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, serviceRoleKey);

    const { error: dbError } = await supabase.from("inquiries").insert({
      name,
      email,
      phone,
      event_type,
      event_date: event_date || null,
      guests: guests || null,
      message: message || null,
      quote_estimate: quote_estimate || null,
    });

    if (dbError) {
      console.error("Database insert error:", dbError.message);
    }

    const resendApiKey = Deno.env.get("RESEND_API_KEY");

    const eventTypeLabels: Record<string, string> = {
      wedding: "Wedding",
      corporate: "Corporate Event",
      quinceanera: "Quinceañera",
      private_party: "Private Party",
      private_chef: "Private Chef Experience",
      other: "Event",
    };

    const eventLabel = eventTypeLabels[event_type] || "Event";

    const emailHtml = `
      <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background: #FFFCF7; padding: 40px 30px; border-top: 4px solid #B8742C;">
        <h1 style="color: #1A1A1A; font-size: 28px; margin: 0 0 20px;">Gabe the Taco Guy</h1>
        <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6;">Hi ${name},</p>
        <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6;">
          Thank you for reaching out! I've received your inquiry for your <strong>${eventLabel}</strong> and I'm excited to learn more about your vision.
        </p>
        <div style="background: #F5EDE0; border-radius: 8px; padding: 24px; margin: 24px 0;">
          <h2 style="color: #B8742C; font-size: 18px; margin: 0 0 16px;">Your Inquiry Details</h2>
          <table style="width: 100%; font-size: 15px; color: #4A4A4A; line-height: 1.8;">
            <tr><td style="font-weight: bold; width: 140px;">Name:</td><td>${name}</td></tr>
            <tr><td style="font-weight: bold;">Event Type:</td><td>${eventLabel}</td></tr>
            ${event_date ? `<tr><td style="font-weight: bold;">Event Date:</td><td>${event_date}</td></tr>` : ""}
            ${guests ? `<tr><td style="font-weight: bold;">Guests:</td><td>${guests}</td></tr>` : ""}
            ${quote_estimate ? `<tr><td style="font-weight: bold;">Estimated Quote:</td><td>$${Number(quote_estimate).toLocaleString()}</td></tr>` : ""}
            <tr><td style="font-weight: bold;">Phone:</td><td>${phone}</td></tr>
            <tr><td style="font-weight: bold;">Email:</td><td>${email}</td></tr>
          </table>
          ${message ? `<p style="margin-top: 16px; font-size: 15px; color: #4A4A4A;"><em>Your message:</em><br/>${message}</p>` : ""}
        </div>
        <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6;">
          I'll review your details and get back to you within 24 hours with a personalized proposal. If you have any questions in the meantime, feel free to reply to this email.
        </p>
        <p style="color: #4A4A4A; font-size: 16px; line-height: 1.6;">Looking forward to making your event unforgettable!</p>
        <p style="color: #1A1A1A; font-size: 16px; margin-top: 32px;">Best regards,<br/><strong>Gabe</strong><br/>Gabe the Taco Guy</p>
        <hr style="border: none; border-top: 1px solid #E0D5C3; margin: 32px 0;" />
        <p style="color: #999; font-size: 13px;">This is an automated confirmation email. Please do not reply directly to this message.</p>
      </div>
    `;

    if (resendApiKey) {
      const resendResponse = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${resendApiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Gabe the Taco Guy <onboarding@resend.dev>",
          to: email,
          subject: `We received your inquiry — ${eventLabel} | Gabe the Taco Guy`,
          html: emailHtml,
        }),
      });

      if (!resendResponse.ok) {
        const resendError = await resendResponse.text();
        console.error("Resend API error:", resendError);
      }
    } else {
      console.warn("RESEND_API_KEY not configured — email was not sent, but inquiry was saved to database");
    }

    return new Response(
      JSON.stringify({ success: true, message: "Inquiry submitted successfully" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error("Function error:", err);
    return new Response(
      JSON.stringify({ error: "Something went wrong. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
