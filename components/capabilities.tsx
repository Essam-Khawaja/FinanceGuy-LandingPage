"use client";

import { Trophy, Coins, Sword } from "lucide-react";
import { GridBackground } from "./grid-background";

export function Capabilities() {
  const capabilities = [
    {
      icon: Coins,
      title: "Treasury",
      description:
        "Track your net inflow and watch your chest fill up with every wise choice.",
    },
    {
      icon: Trophy,
      title: "Rations",
      description:
        "Set spending limits that protect your weekly runs from surprise damage.",
    },
    {
      icon: Sword,
      title: "Quests",
      description:
        "Turn goals into missions so consistency feels rewarding, not restrictive.",
    },
  ];

  return (
    <GridBackground>
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-background to-card/50"
        id="pillars"
      >
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
              CHOOSE YOUR BUILD
            </h2>
            <p className="text-2xl text-muted-foreground font-body">
              Three core systems to keep your gold moving in the right
              direction.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {capabilities.map((capability, idx) => {
              const Icon = capability.icon;
              return (
                <div
                  key={idx}
                  className="p-8 rounded-lg border-2 border-foreground/40 bg-card hover:border-accent transition-all group"
                >
                  <Icon className="w-8 h-8 mb-4 text-primary group-hover:text-accent transition-colors" />
                  <h3 className="text-lg text-foreground mb-3">
                    {capability.title}
                  </h3>
                  <p className="text-xl text-muted-foreground leading-relaxed font-body">
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
