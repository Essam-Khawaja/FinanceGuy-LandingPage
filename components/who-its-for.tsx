"use client"

import { BookOpen, Briefcase, Clock, AlertCircle, Lightbulb, Target } from "lucide-react"

export function WhoItFor() {
  const personas = [
    {
      icon: BookOpen,
      title: "University Students",
      description: "Managing tuition, housing, and daily expenses on a budget.",
    },
    {
      icon: Briefcase,
      title: "First-Time Earners",
      description: "Starting your first job and learning to manage your paycheck.",
    },
    {
      icon: Clock,
      title: "Interns & Part-Time Workers",
      description: "Navigating irregular income and temporary work situations.",
    },
  ]

  const challenges = [
    {
      icon: AlertCircle,
      text: "Irregular income from gigs and part-time work",
    },
    {
      icon: Lightbulb,
      text: "Impulse spending and regret",
    },
    {
      icon: Target,
      text: "No prior finance knowledge",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Who It's For</h2>
          <p className="text-lg text-muted-foreground">
            Built for students who want to build better money habits without the complexity.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          {personas.map((persona, idx) => {
            const Icon = persona.icon
            return (
              <div
                key={idx}
                className="p-8 rounded-xl border border-border/50 bg-gradient-to-br from-card/40 to-card/20 hover:border-accent/50 transition-all hover:shadow-lg hover:shadow-accent/10"
              >
                <Icon className="w-8 h-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold text-foreground mb-3">{persona.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{persona.description}</p>
              </div>
            )
          })}
        </div>

        {/* Relatable challenges - different layout */}
        <div className="mt-16 p-8 rounded-xl border border-border/50 bg-card/20">
          <h3 className="text-xl font-semibold text-foreground mb-6">We understand your challenges:</h3>
          <div className="grid sm:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => {
              const Icon = challenge.icon
              return (
                <div key={idx} className="flex items-start gap-3">
                  <Icon className="w-5 h-5 text-accent mt-1 flex-shrink-0" />
                  <span className="text-muted-foreground">{challenge.text}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
