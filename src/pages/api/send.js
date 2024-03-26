import { Resend } from "resend";

export default async function SendEmail(req, res) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { data } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pedrolopeshls99@gmail.com",
      subject: "Have an Awesome Project Idea",
      html: `${req.body.email} has an awesome project idea! email to learn more. <br /> <br /> obs: this email was sent from your portfolio`,
    });
    console.log({ data });
    res.send({ data });
  } catch (error) {
    console.error(error);
  }
}
