"use client";

import Image from "next/image";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b-2 border-foreground/35 bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/images/Logo.png"
            alt="FinanceGuy logo"
            width={32}
            height={32}
            className="h-8 w-8 rounded-md object-cover"
            priority
          />
          <span className="text-foreground sm:inline font-display text-sm">
            FINANCEGUY
          </span>
        </div>

        <div className="flex items-center gap-3">
          <a href="#waitlist">
            <button className="px-4 py-2 rounded-lg border-2 border-foreground bg-primary text-primary-foreground text-xs hover:bg-[hsl(26_48%_32%)] transition-all cursor-pointer">
              JOIN WAITLIST
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
