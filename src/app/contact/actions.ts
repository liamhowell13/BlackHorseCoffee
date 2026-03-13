"use server";

export async function submitContactForm(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  if (!name || !email || !subject || !message) {
    return { success: false, message: "All fields are required." };
  }

  // TODO: Integrate with an email service (e.g., Resend, SendGrid, Formspree)
  // Example with Resend:
  // await resend.emails.send({
  //   from: 'contact@yourdomain.com',
  //   to: 'hello@blackhorseespresso.com',
  //   subject: `Contact Form: ${subject}`,
  //   html: `<p>From: ${name} (${email})</p><p>${message}</p>`,
  // });

  return { success: true, message: "Thank you for reaching out. We'll get back to you as soon as possible." };
}
