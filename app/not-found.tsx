import Link from "next/link";
import { MacedHeader } from "@/components/maced/Header";
import { MacedFooter } from "@/components/maced/Footer";

export default function NotFound() {
  return (
    <>
      <MacedHeader />
      <main
        id="main-content"
        className="flex min-h-[60vh] flex-col items-center justify-center px-4 pt-28 text-center"
      >
        <p className="font-mono text-xs tracking-[0.2em] text-neutral-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Página não encontrada
        </h1>
        <p className="mt-3 max-w-md text-neutral-500">
          O endereço pode ter mudado ou não existe mais.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex h-11 items-center rounded-xl bg-[#D00010] px-5 text-sm font-semibold text-white transition-colors hover:bg-[#e80012]"
        >
          Voltar ao início
        </Link>
      </main>
      <MacedFooter />
    </>
  );
}
