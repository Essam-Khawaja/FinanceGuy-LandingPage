"use client";

import { Eye, Zap, Hammer, Rocket } from "lucide-react";
import { GridBackground } from "./grid-background";

export function Capabilities() {
  const capabilities = [
    {
      icon: Eye,
      title: "Understands Your Spending",
      description:
        "See where your money actually goes with crystal-clear insights.",
    },
    {
      icon: Zap,
      title: "Keeps You Consistent",
      description: "Streaks, reminders, and gentle nudges keep you on track.",
    },
    {
      icon: Hammer,
      title: "Helps You Build Habits",
      description:
        "Small actions that add up over time into real financial progress.",
    },
    {
      icon: Rocket,
      title: "Learns Over Time",
      description: "Coming soon: Predicts risky spending before it happens.",
    },
  ];

  return (
    <GridBackground className="text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-secondary/10">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Your Assistant, Your Way
            </h2>
            <p className="text-lg text-muted-foreground">
              FinanceGuy speaks your language. No jargon. No overwhelm. Just
              guidance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-xl border border-border/50 bg-card/30 hover:border-accent/50 transition-all group"
                >
                  <Icon className="w-8 h-8 mb-4 text-muted-foreground group-hover:text-accent transition-colors" />
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {capability.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </GridBackground>
  );
}
