import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Vision } from "@/components/vision"
import { WhoItFor } from "@/components/who-its-for"
import { Capabilities } from "@/components/capabilities"
import { HowItWorks } from "@/components/how-it-works"
import { Philosophy } from "@/components/philosophy"
import { Waitlist } from "@/components/waitlist"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Vision />
      <WhoItFor />
      <Capabilities />
      <HowItWorks />
      <Philosophy />
      <Waitlist />
      <Footer />
    </main>
  )
}
