import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <main className="relative min-h-screen bg-background">
      <section className="grid min-h-screen place-items-center px-6 py-24">
        <div className="w-full max-w-3xl rounded-[2rem] border border-foreground/10 bg-card/95 p-10 shadow-[0_40px_120px_rgba(0,0,0,0.12)] backdrop-blur-xl">
          <div className="flex flex-col items-center text-center gap-5">
            <div className="rounded-full border border-foreground/10 bg-background/80 p-4 shadow-sm">
              <Image
                src="/images/Logo.png"
                alt="FinanceGuy logo"
                width={72}
                height={72}
                className="object-contain"
              />
            </div>
            <p className="text-sm uppercase tracking-[0.35em] text-muted-foreground">
              Account confirmation complete
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
              Welcome to FinanceGuy
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-8 text-muted-foreground">
              Your email has been verified and your account is ready. Use this page as the confirmation destination for your mobile signup flow.
            </p>
          </div>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="min-w-[12rem]">
              <Link href="/">Return home</Link>
            </Button>
            <Link
              href="/"
              className="text-sm font-semibold text-primary underline-offset-4 hover:underline"
            >
              Explore FinanceGuy
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
