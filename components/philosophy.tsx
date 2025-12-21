"use client"

import { Lock, BookOpen, Sparkles, Handshake } from "lucide-react"

export function Philosophy() {
  const values = [
    {
      icon: Lock,
      title: "Privacy First",
      description: "Your data is yours. We don't sell it.",
    },
    {
      icon: BookOpen,
      title: "Built for Students",
      description: "Made with your challenges in mind.",
    },
    {
      icon: Sparkles,
      title: "Simple by Design",
      description: "No clutter. Just clarity.",
    },
    {
      icon: Handshake,
      title: "Your Success",
      description: "We win when you win.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-secondary/10 to-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">Built With Trust</h2>
        </div>

        <div className="grid sm:grid-cols-4 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className={`p-6 rounded-xl border border-border/50 text-center transition-all hover:border-accent/50 ${
                  idx % 2 === 0 ? "bg-card/30" : "bg-muted/10"
                }`}
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="font-semibold text-foreground mb-2">{value.title}</h3>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
