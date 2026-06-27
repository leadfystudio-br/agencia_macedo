import { macedConfig } from "@/lib/maced";

export function MacedFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-[#050505] py-10">
      <p className="text-center text-xs text-neutral-600">
        © {new Date().getFullYear()} {macedConfig.name}. Todos os direitos reservados.
      </p>
    </footer>
  );
}
