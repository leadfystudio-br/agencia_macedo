const FALLBACK_NUMBER = "5511975371836";

const DEFAULT_MESSAGE =
  "Olá! Vim pelo site da Agência Macedo e quero conversar.";

function digitsOnly(value: string): string {
  return value.replace(/\D/g, "");
}

export function getWhatsAppNumber(): string {
  const fromEnv = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  const parsed = fromEnv ? digitsOnly(fromEnv) : "";
  if (parsed.length >= 10) return parsed;
  return FALLBACK_NUMBER;
}

export function getWhatsAppUrl(message?: string): string {
  const num = getWhatsAppNumber();
  const text = (message ?? DEFAULT_MESSAGE).trim();
  return `https://wa.me/${num}?text=${encodeURIComponent(text)}`;
}
