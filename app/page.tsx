import { Navigation } from "@/components/navigation";
import { Hero } from "@/components/hero";
import { Predictor } from "@/components/predictor";
import { Capabilities } from "@/components/capabilities";
import { Philosophy } from "@/components/philosophy";
import { Waitlist } from "@/components/waitlist";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Predictor />
      <Capabilities />
      <Philosophy />
      <Waitlist />
      <Footer />
    </main>
  );
}
