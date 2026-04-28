"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { GridBackground } from "./grid-background";

export function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxOffset = scrollY * 0.3;

  return (
    <GridBackground>
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden grid-background">
        <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] bg-accent/15 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[360px] h-[360px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-8">
              <p className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-foreground/35 bg-card text-sm text-foreground">
                <Sparkles className="h-4 w-4 text-accent" />
                BUILT FOR STUDENT ADVENTURERS
              </p>

              <h1 className="text-4xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] text-balance">
                FINANCEGUY
              </h1>

              <p className="text-2xl md:text-3xl text-foreground/85 leading-relaxed max-w-xl text-pretty font-body">
                Track. Quest. Hoard your gold.
              </p>

              <p className="text-xl text-muted-foreground leading-relaxed max-w-xl text-pretty font-body">
                Build your treasury, protect your rations, and complete quests
                that level up your money habits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="text-lg h-14 px-8"
                  asChild
                >
                  <a href="#waitlist">
                    JOIN THE WAITLIST
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-lg h-14 px-8 border-2 border-foreground/45 text-foreground hover:bg-secondary/40"
                  asChild
                >
                  <a href="#pillars">SEE THE REALM</a>
                </Button>
              </div>

              <p className="text-lg text-muted-foreground pt-2 font-body">
                No spam. Leave anytime. We'll notify you when beta is live.
              </p>
            </div>

            <div className="relative h-[700px] hidden lg:block">
              <div
                className="absolute top-8 -right-16 w-[290px] z-20 float-animation"
                style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
              >
                <div className="relative rounded-lg border-2 border-foreground bg-primary p-2 shadow-[0_22px_58px_rgba(59,30,15,0.28)]">
                  <div className="absolute -top-3 left-6 right-6 h-2 rounded-sm border-2 border-foreground bg-accent" />
                  <div
                    className="relative bg-black border-2 border-foreground rounded-sm overflow-hidden"
                    style={{ aspectRatio: "9/19.5" }}
                  >
                    <img
                      src="/images/firstss.png"
                      alt="FinanceGuy Dashboard"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="h-2 flex-1 border border-foreground bg-accent/80" />
                    <span className="h-2 flex-1 border border-foreground bg-accent/80" />
                    <span className="h-2 flex-1 border border-foreground bg-secondary" />
                  </div>
                </div>
              </div>

              <div
                className="absolute bottom-12 right-12 w-[280px] z-10 float-animation-delayed"
                style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
              >
                <div className="relative rounded-lg border-2 border-foreground bg-card p-2 shadow-[0_18px_46px_rgba(59,30,15,0.24)]">
                  <div className="absolute -top-3 left-6 right-6 h-2 rounded-sm border-2 border-foreground bg-accent/80" />
                  <div
                    className="relative bg-black border-2 border-foreground rounded-sm overflow-hidden"
                    style={{ aspectRatio: "9/19.5" }}
                  >
                    <img
                      src="/images/image.png"
                      alt="FinanceGuy Expenses"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="mt-2 flex gap-1.5">
                    <span className="h-2 flex-1 border border-foreground bg-accent/80" />
                    <span className="h-2 flex-1 border border-foreground bg-accent/80" />
                    <span className="h-2 flex-1 border border-foreground bg-secondary" />
                  </div>
                </div>
              </div>
            </div>

            <div className="relative mt-6 lg:hidden max-w-[280px] mx-auto">
              <div className="rounded-lg border-2 border-foreground bg-card p-2 shadow-[0_14px_30px_rgba(59,30,15,0.2)]">
                <div className="absolute -top-3 left-6 right-6 h-2 rounded-sm border-2 border-foreground bg-accent/80" />
                <div
                  className="relative bg-black border-2 border-foreground rounded-sm overflow-hidden"
                  style={{ aspectRatio: "9/19.5" }}
                >
                  <img
                    src="/images/firstss.png"
                    alt="FinanceGuy Treasury preview"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
}
