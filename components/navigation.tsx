"use client";

import { Flame } from "lucide-react";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border/20 bg-background/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flame className="h-6 w-6 text-accent" />
          <span className="font-semibold text-foreground sm:inline">
            FinanceGuy
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex items-center gap-3">
          <a href="#waitlist">
            <button className="px-4 py-2 rounded-lg bg-accent text-accent-foreground text-sm font-medium hover:bg-accent/90 transition-all hover:shadow-lg cursor-pointer">
              Try it free
            </button>
          </a>
        </div>
      </div>
    </nav>
  );
}
