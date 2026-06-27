# Agência Macedo — Infoprodutos

Landing page da **Agência Macedo** focada em infoprodutos digitais. Converte visitantes em contatos via **WhatsApp** e **Instagram**.

Projeto separado da landing institucional da agência ([`Agencia-macedo`](https://github.com/leadfystudio-br/Agencia-macedo)), para deploy independente na Vercel.

**Repositório:** https://github.com/leadfystudio-br/agencia_macedo

## Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Framer Motion

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em [http://localhost:3004](http://localhost:3004).

## Variáveis de ambiente

Copie `.env.example` para `.env.local`:

```bash
NEXT_PUBLIC_SITE_URL="http://localhost:3004"
NEXT_PUBLIC_WHATSAPP_NUMBER="5511975371836"
```

## Onde editar conteúdo

Textos e links centralizados em **`lib/maced.ts`**.

**Logo:** `public/macedo-logo-agencia.png`

## Deploy

**Este repositório = só a landing curta de infoprodutos.** Não aponte o projeto `agencia-macedo` da Vercel para cá.

| Vercel | Repositório | URL |
|---|---|---|
| `agenciamacedo` | `leadfystudio-br/agencia_macedo` | `https://agenciamacedo.vercel.app` |

Variáveis de ambiente:

```bash
NEXT_PUBLIC_SITE_URL="https://agenciamacedo.vercel.app"
NEXT_PUBLIC_WHATSAPP_NUMBER="5511975371836"
```

Na Vercel, remova `NEXT_PUBLIC_LANDING_MODE` se existir — não é mais necessário.
