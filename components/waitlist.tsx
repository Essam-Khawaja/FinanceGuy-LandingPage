"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setError("Please enter a valid email");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Failed to join waitlist");
      }

      setSubmitted(true);
      setEmail("");
      setTimeout(() => setSubmitted(false), 3000);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setTimeout(() => setError(""), 3000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="waitlist">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
          Start building better money habits — early.
        </h2>
        <p className="text-lg text-muted-foreground mb-12">
          Join our waitlist for early access as we build the future of student
          financial guidance.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mb-6"
        >
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            disabled={loading}
            required
            className="flex-1 px-4 py-3 rounded-lg bg-card border border-border placeholder-muted-foreground text-foreground focus:outline-none focus:border-accent/50 transition-colors"
          />
          <Button
            type="submit"
            disabled={loading}
            className="px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:shadow-lg disabled:opacity-50"
          >
            {loading ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>

        {submitted && (
          <p className="text-accent text-sm font-medium mb-4">
            Thanks for joining! Check your email.
          </p>
        )}

        {error && (
          <p className="text-red-500 text-sm font-medium mb-4">{error}</p>
        )}

        <p className="text-xs text-muted-foreground">
          No spam. Early access only. We respect your privacy.
        </p>
      </div>
    </section>
  );
}
