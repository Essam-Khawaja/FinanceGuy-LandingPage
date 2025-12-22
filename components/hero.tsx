"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Grid } from "lucide-react";
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
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-[#52D858]/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#52D858]/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto max-w-7xl px-6 py-24 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            {/* Left: Content */}
            <div className="space-y-8">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] text-balance">
                Your money assistant.
              </h1>

              <p className="text-xl md:text-2xl text-gray-400 leading-relaxed max-w-xl text-pretty">
                FinanceGuy tracks your spending, keeps you on budget, and helps
                you build better habits.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  size="lg"
                  className="bg-[#52D858] hover:bg-[#45C04C] text-black font-semibold text-lg h-14 px-8 shadow-[0_0_20px_rgba(82,216,88,0.3)]"
                  asChild
                >
                  <a href="#waitlist">
                    Join the pre-launch waitlist
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="text-gray-300 hover:text-white hover:bg-white/5 text-lg h-14 px-8 border border-gray-800"
                  asChild
                >
                  <a href="#works">See how it works</a>
                </Button>
              </div>

              <p className="text-sm text-gray-500 pt-2">
                No spam. Leave anytime. We'll notify you when beta is live.
              </p>
            </div>

            <div className="relative h-[700px] hidden lg:block">
              {/* Dashboard Phone - Left side */}
              <div
                className="absolute top-12 -right-20 w-[280px] z-20 float-animation"
                style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
              >
                <div className="relative bg-[#0a0a0a] rounded-[3rem] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0a0a0a] rounded-b-3xl z-30" />

                  {/* Screen with proper aspect ratio */}
                  <div
                    className="relative bg-black rounded-[2.5rem] overflow-hidden"
                    style={{ aspectRatio: "9/19.5" }}
                  >
                    <img
                      src="/images/firstss.png"
                      alt="FinanceGuy Dashboard"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              {/* Expenses Phone - Right side, slightly lower */}
              <div
                className="absolute bottom-12 right-12 w-[280px] z-10 float-animation-delayed"
                style={{ transform: `translateY(${parallaxOffset * 0.3}px)` }}
              >
                <div className="relative bg-[#0a0a0a] rounded-[3rem] p-3 shadow-[0_20px_80px_rgba(0,0,0,0.8)] border border-gray-800">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-[#0a0a0a] rounded-b-3xl z-30" />

                  {/* Screen with proper aspect ratio */}
                  <div
                    className="relative bg-black rounded-[2.5rem] overflow-hidden"
                    style={{ aspectRatio: "9/19.5" }}
                  >
                    <img
                      src="/images/image.png"
                      alt="FinanceGuy Expenses"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </GridBackground>
  );
}
