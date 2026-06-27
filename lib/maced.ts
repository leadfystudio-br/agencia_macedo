import { getWhatsAppUrl } from "@/lib/wa";

export const macedConfig = {
  name: "Agência Macedo",
  tagline: "Infoprodutos para quem vive o digital",
  instagram: "https://www.instagram.com/agencia_macedomkt/",
  instagramHandle: "@agencia_macedomkt",
  heroHeadline: "Conteúdo prático para quem quer crescer no digital",
  heroSubheadline:
    "A Agência Macedo produz infoprodutos em diversas áreas do conhecimento — com a visão de quem atua no mercado digital e aplica o que ensina.",
  productsTeaserLabel: "Nossos infoprodutos",
  productsTeaser:
    "Temos infoprodutos em geral — cursos, e-books e materiais digitais de diferentes temas. Chame no WhatsApp ou siga no Instagram para ver o que está disponível agora.",
} as const;

export const macedMessages = {
  whatsapp: "Olá! Vim pelo site da Agência Macedo e gostaria de conhecer os infoprodutos.",
  default: "Olá! Vim pelo site da Agência Macedo e quero conversar.",
} as const;

export function getMacedWhatsAppUrl(message?: string): string {
  return getWhatsAppUrl(message ?? macedMessages.default);
}
