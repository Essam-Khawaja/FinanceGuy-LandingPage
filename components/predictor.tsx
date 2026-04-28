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
    <section
      className="relative py-20 px-4 md:px-8 lg:px-16 overflow-hidden bg-gradient-to-b from-background to-card/35"
      id="predictor"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl text-foreground mb-4 text-balance">
            BLUE EYES PREDICTOR
          </h2>
          <p className="text-2xl text-muted-foreground max-w-2xl mx-auto font-body">
            Read your spending patterns before they turn into over-budget runs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl text-foreground flex items-center gap-3">
                <Brain className="w-6 h-6 text-primary" />
                How it scouts your habits
              </h3>
              <p className="text-xl text-foreground/85 leading-relaxed font-body">
                FinanceGuy quietly tracks your spending patterns in the
                background. Over time, it notices recurring patterns, identifies
                your high-risk days and categories, and learns what "normal"
                looks like for you.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-foreground flex items-center gap-3">
                <Zap className="w-6 h-6 text-primary" />
                How it warns you
              </h3>
              <p className="text-xl text-foreground/85 leading-relaxed font-body">
                Before risky behavior happens, FinanceGuy sends timely, friendly
                nudges. Think of it as a supportive friend who knows your
                spending better than you do.
              </p>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl text-foreground flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary" />
                Built for students
              </h3>
              <p className="text-xl text-foreground/85 leading-relaxed font-body">
                Perfect for irregular income, impulse spending, and student
                life. No need to understand complex financial jargon; just spend
                naturally and let FinanceGuy do the thinking.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative w-full max-w-lg">
              <div className="bg-card rounded-lg shadow-[0_14px_34px_rgba(59,30,15,0.18)] border-2 border-foreground/40 p-6 space-y-6">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-primary" />
                    <h3 className="text-sm text-muted-foreground font-body">
                      Treasury Insights
                    </h3>
                  </div>
                  <p className="text-lg text-foreground">
                    Your spending this week
                  </p>
                </div>

                <div className="bg-background rounded-lg p-4 border-2 border-foreground/25">
                  <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={spendingData}>
                      <CartesianGrid
                        strokeDasharray="3 3"
                        stroke="rgba(59,30,15,0.2)"
                      />
                      <XAxis
                        dataKey="day"
                        stroke="rgba(59,30,15,0.75)"
                        style={{ fontSize: "12px", fontFamily: "JetBrains Mono" }}
                      />
                      <YAxis
                        stroke="rgba(59,30,15,0.75)"
                        style={{ fontSize: "12px", fontFamily: "JetBrains Mono" }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: "hsl(39 56% 89%)",
                          border: "2px solid hsl(24 60% 14%)",
                          fontFamily: "JetBrains Mono",
                        }}
                        labelStyle={{ color: "hsl(24 60% 14%)" }}
                      />
                      <Line
                        type="monotone"
                        dataKey="spending"
                        stroke="hsl(38 88% 56%)"
                        strokeWidth={2}
                        dot={{ fill: "hsl(38 88% 56%)", r: 4 }}
                        activeDot={{ r: 6 }}
                      />
                      <Line
                        type="monotone"
                        dataKey="average"
                        stroke="hsl(25 50% 25%)"
                        strokeWidth={1}
                        strokeDasharray="5 5"
                        dot={false}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>

                <div className="bg-accent/20 border-2 border-foreground/30 rounded-lg p-4 space-y-2">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-accent/40 border border-foreground/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Zap className="w-3 h-3 text-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-foreground text-sm font-body">
                        Pattern detected
                      </p>
                      <p className="text-sm text-muted-foreground mt-1 font-body">
                        Fridays are 78% higher than your average. Spending limit
                        nudge incoming.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-sm text-muted-foreground font-body">
                    Budget by category
                  </p>
                  {categoryData.map((cat) => (
                    <div key={cat.category} className="space-y-1">
                      <div className="flex justify-between items-center text-sm font-body">
                        <span className="text-foreground">
                          {cat.category}
                        </span>
                        <span className="text-muted-foreground">
                          ${cat.current} / ${cat.budget}
                        </span>
                      </div>
                      <div className="w-full h-2 bg-secondary rounded-full overflow-hidden border border-foreground/25">
                        <div
                          className="h-full bg-accent rounded-full"
                          style={{
                            width: `${(cat.current / cat.budget) * 100}%`,
                          }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pt-3 border-t-2 border-foreground/20">
                  <p className="text-sm text-muted-foreground text-center font-body">
                    Smart predictions powered by your habits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="mt-16">
          <h3 className="text-2xl text-foreground text-center mb-12">
            How the Predictor works
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative">
              <div className="bg-card border-2 border-foreground/30 rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-foreground/30 flex items-center justify-center">
                  <span className="text-foreground text-lg font-body">1</span>
                </div>
                <h4 className="text-lg text-foreground">
                  You spend as usual
                </h4>
                <p className="text-lg text-muted-foreground font-body">
                  Just live your life normally. FinanceGuy quietly tracks
                  patterns in the background.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-foreground/30 transform -translate-y-1/2"></div>
            </div>

            <div className="relative">
              <div className="bg-card border-2 border-foreground/30 rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-foreground/30 flex items-center justify-center">
                  <span className="text-foreground text-lg font-body">2</span>
                </div>
                <h4 className="text-lg text-foreground">
                  It learns your habits
                </h4>
                <p className="text-lg text-muted-foreground font-body">
                  Repeats, timing, and categories emerge. The predictor gets
                  smarter with every transaction.
                </p>
              </div>
              <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-foreground/30 transform -translate-y-1/2"></div>
            </div>

            <div>
              <div className="bg-card border-2 border-foreground/30 rounded-lg p-6 space-y-4">
                <div className="w-12 h-12 rounded-full bg-accent/20 border-2 border-foreground/30 flex items-center justify-center">
                  <span className="text-foreground text-lg font-body">3</span>
                </div>
                <h4 className="text-lg text-foreground">
                  It steps in at the right time
                </h4>
                <p className="text-lg text-muted-foreground font-body">
                  Friendly reminders before overspending happens. Prevention
                  over punishment.
                </p>
              </div>
            </div> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}
