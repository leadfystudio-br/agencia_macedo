import { MacedHeader } from "@/components/maced/Header";
import { MacedHeroSection } from "@/components/maced/HeroSection";
import { MacedFooter } from "@/components/maced/Footer";

export function MacedLanding() {
  return (
    <>
      <MacedHeader />
      <main id="main-content">
        <MacedHeroSection />
        <MacedFooter />
      </main>
    </>
  );
}
