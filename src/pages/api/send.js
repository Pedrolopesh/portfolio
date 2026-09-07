import { Resend } from "resend";

// Rate limit simples em memória: máximo N requisições por IP a cada
// janela de tempo. Não sobrevive a cold starts/múltiplas instâncias
// (não é uma proteção robusta), mas já corta a maior parte do abuso
// automatizado sem precisar de infraestrutura extra. Se o endpoint
// começar a receber tráfego real, migrar para um rate limit
// compartilhado (ex: Redis/Upstash).
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX_REQUESTS = 5;
const requestsByIp = new Map();

const isRateLimited = (ip) => {
  const now = Date.now();
  const timestamps = (requestsByIp.get(ip) || []).filter(
    (timestamp) => now - timestamp < RATE_LIMIT_WINDOW_MS
  );

  timestamps.push(now);
  requestsByIp.set(ip, timestamps);

  return timestamps.length > RATE_LIMIT_MAX_REQUESTS;
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function SendEmail(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).send({ error: "Method not allowed" });
  }

  const ip =
    (req.headers["x-forwarded-for"] || "").split(",")[0].trim() ||
    req.socket?.remoteAddress ||
    "unknown";

  if (isRateLimited(ip)) {
    return res.status(429).send({ error: "Too many requests, try again later" });
  }

  const { email, website } = req.body || {};

  // Honeypot: campo invisível para usuários reais, preenchido só por
  // bots que preenchem todos os inputs do form.
  if (website) {
    return res.status(200).send({ message: "Email sent" });
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email)) {
    return res.status(400).send({ error: "Invalid email address" });
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY is not configured");
    return res.status(500).send({ error: "Email service not configured" });
  }

  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "pedrolopeshls99@gmail.com",
      subject: "Have an Awesome Project Idea",
      html: `${email} has an awesome project idea! email to learn more. <br /> <br /> obs: this email was sent from your portfolio`,
    });

    return res.status(200).send({ message: "Email sent" });
  } catch (error) {
    console.error("Failed to send email", error);
    return res.status(502).send({ error: "Failed to send email" });
  }
}
