"use client";

import { Shield, TrendingUp, Target } from "lucide-react";

export function Vision() {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10"
      id="works"
    >
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {/* Headline */}
          <div>
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
              More than budgeting. It's guidance.
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Students don't need complex finance tools. They need awareness,
              consistency, and guidance. FinanceGuy acts like a coach that grows
              with them—helping you feel confident with money through better
              decisions over time, and building financial discipline without
              pressure.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 mt-12">
            <div className="p-6 rounded-xl border border-border/50 bg-gradient-to-br from-card/40 to-card/20 hover:border-accent/30 transition-colors">
              <Shield className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Confidence with Money
              </h3>
              <p className="text-sm text-muted-foreground">
                Understand where your money goes and take control of your
                finances.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-card/30 hover:border-accent/30 transition-colors">
              <TrendingUp className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Better Decisions Over Time
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn from patterns and make smarter choices about your
                spending.
              </p>
            </div>
            <div className="p-6 rounded-xl border border-border/50 bg-gradient-to-br from-accent/5 to-transparent hover:border-accent/30 transition-colors">
              <Target className="w-8 h-8 text-accent mb-3" />
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Discipline Without Pressure
              </h3>
              <p className="text-sm text-muted-foreground">
                Build sustainable habits at your own pace with gentle guidance.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
