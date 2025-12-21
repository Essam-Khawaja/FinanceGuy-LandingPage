export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Track Spending Effortlessly",
      description: "Log transactions in seconds. No categories to overthink.",
    },
    {
      number: "2",
      title: "Build Habits Through Consistency",
      description: "Daily tracking builds streaks and momentum over time.",
    },
    {
      number: "3",
      title: "Improve Financial Awareness",
      description: "Watch patterns emerge and understand your money better.",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
          <p className="text-lg text-muted-foreground">Three simple steps to better money habits</p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 relative">
          {/* Connecting line (desktop only) */}
          <div className="hidden sm:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-accent/0 via-accent/30 to-accent/0" />

          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-accent/20 border-2 border-accent flex items-center justify-center mb-6 relative z-10">
                  <span className="text-2xl font-bold text-accent">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 text-center">{step.title}</h3>
                <p className="text-muted-foreground text-center leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
