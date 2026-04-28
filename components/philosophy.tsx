"use client"

import { Shield, BookOpen, Sparkles } from "lucide-react"

export function Philosophy() {
  const values = [
    {
      icon: Shield,
      title: "Privacy First",
      description: "Your ledger stays yours. We do not sell your data.",
    },
    {
      icon: BookOpen,
      title: "Built for Students",
      description: "Designed around real student routines and constraints.",
    },
    {
      icon: Sparkles,
      title: "Friendly Guidance",
      description: "Clear nudges, no finance lecture mode.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-card/40 to-background" id="social-proof">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 p-8 rounded-lg border-2 border-foreground/35 bg-card">
          <h2 className="text-3xl sm:text-4xl text-foreground mb-4">FORGED WITH STUDENTS</h2>
          <p className="text-2xl text-muted-foreground font-body">
            Built with students at UCalgary. More realms joining soon.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6">
          {values.map((value, idx) => {
            const Icon = value.icon
            return (
              <div
                key={idx}
                className="p-6 rounded-lg border-2 border-foreground/35 text-center transition-all hover:border-accent bg-card/80"
              >
                <Icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <h3 className="text-foreground mb-2">{value.title}</h3>
                <p className="text-xl text-muted-foreground font-body">{value.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
