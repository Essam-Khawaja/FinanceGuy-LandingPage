"use client";

import { Brain, TrendingUp, Zap, BarChart3 } from "lucide-react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export function Predictor() {
  // Sample data for spending patterns
  const spendingData = [
    { day: "Mon", spending: 45, average: 50 },
    { day: "Tue", spending: 52, average: 50 },
    { day: "Wed", spending: 48, average: 50 },
    { day: "Thu", spending: 65, average: 50 },
    { day: "Fri", spending: 89, average: 50 },
    { day: "Sat", spending: 76, average: 50 },
    { day: "Sun", spending: 42, average: 50 },
  ];

  const categoryData = [
    { category: "Food", current: 120, budget: 150 },
    { category: "Entertainment", current: 45, budget: 100 },
    { category: "Transport", current: 30, budget: 50 },
  ];

  return (
    <section className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Know your money habits — before they cost you.
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            FinanceGuy's Blue Eyes Predictor learns how you spend and warns you
            before you slip into bad habits.
          </p>
        </div>

        {/* Split layout */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Copy */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Brain className="w-6 h-6 text-accent" />
                How it learns
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                FinanceGuy quietly tracks your spending patterns in the
                background. Over time, it notices recurring patterns, identifies
                your high-risk days and categories, and learns what "normal"
                looks like for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <Zap className="w-6 h-6 text-accent" />
                How it helps
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Before risky behavior happens, FinanceGuy sends timely, friendly
                nudges. Think of it as a supportive friend who knows your
                spending better than you do.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-accent" />
                Built for students
              </h3>
              <p className="text-base text-foreground/80 leading-relaxed">
                Perfect for irregular income, impulse spending, and student
                life. No need to understand complex financial jargon; just spend
                naturally and let FinanceGuy do the thinking.
              </p>
            </div>
          </div>

          {/* Right side - Dashboard */}
          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              {/* Dashboard container */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-2xl shadow-2xl border border-white/10 p-6 space-y-6">
                {/* Dashboard header */}
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-accent" />
                    <h3 className="text-sm font-semibold text-muted-foreground">
                      Spending Insights
                    </h3>
                  </div>
                  <p className="text-lg font-bold text-foreground">
                    Your spending this week
                  </p>
                </div>

                {/* Spending trend chart */}
                <div className="bg-black/40 rounded-lg p-4 backdrop-blur-sm">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={spendingData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(255,255,255,0.1)"
                      />
                      <XAxis
                        dataKey="day"
                        stroke="rgba(255,255,255,0.5)"
                        style={{ fontSize: "12px" }}
                      />
                      <YAxis
                        stroke="rgba(255,255,255,0.5)"
                        style={{ fontSize: "12px" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "rgba(0,0,0,0.8)",
                          border: "1px solid rgba(255,255,255,0.1)",
                        }}
                        labelStyle={{ color: "#fff" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="spending"
                        stroke="#2dd4bf"
                        strokeWidth={2}
                        dot={{ fill: "#2dd4bf", r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="rgba(255,255,255,0.3)"
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                {/* Prediction alert */}
                <div className="bg-gradient-to-br from-accent/20 to-accent/5 border border-accent/40 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-accent" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-white text-xs font-medium">
                        Pattern detected
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        Fridays are 78% higher than your average. Spending limit
                        nudge incoming.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Category breakdown */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold text-muted-foreground">
                    Budget by category
                  </p>
                  {categoryData.map((cat) => (
                    <div key={cat.category} className="space-y-1">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-foreground font-medium">
                          {cat.category}
                        </span>
                        <span className="text-muted-foreground">
                          ${cat.current} / ${cat.budget}
                        </span>
                      </div>
                      <div className="w-full h-1.5 bg-black/40 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full"
                          style={{
                            width: `${(cat.current / cat.budget) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bottom insight */}
                <div className="pt-3 border-t border-white/10">
                  <p className="text-xs text-muted-foreground text-center">
                    Smart predictions powered by your habits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center border-t border-white/10 pt-12">
          <p className="text-xl text-foreground font-semibold mb-6">
            FinanceGuy doesn't just track your money — it helps you make better
            decisions before they happen.
          </p>
        </div>

        {/* Predictor flow */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-foreground text-center mb-12">
            How the Predictor works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="relative">
              <div className="bg-card border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">1</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  You spend as usual
                </h4>
                <p className="text-sm text-muted-foreground">
                  Just live your life normally. FinanceGuy quietly tracks
                  patterns in the background.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2"></div>
            </div>

            {/* Step 2 */}
            <div className="relative">
              <div className="bg-card border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">2</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  It learns your habits
                </h4>
                <p className="text-sm text-muted-foreground">
                  Repeats, timing, and categories emerge. The predictor gets
                  smarter with every transaction.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-accent/30 transform -translate-y-1/2"></div>
            </div>

            {/* Step 3 */}
            <div>
              <div className="bg-card border border-white/10 rounded-2xl p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-lg">3</span>
                </div>
                <h4 className="text-lg font-semibold text-foreground">
                  It steps in at the right time
                </h4>
                <p className="text-sm text-muted-foreground">
                  Friendly reminders before overspending happens. Prevention
                  over punishment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
