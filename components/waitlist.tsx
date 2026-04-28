"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function Waitlist() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast({
        title: "Email required",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        toast({
          title: "Error",
          description: data.error || "Failed to join waitlist",
          variant: "destructive",
        });
        return;
      }

      toast({
        title: "Welcome to the waitlist!",
        description: "Check your email for a confirmation message.",
      });
      setEmail("");
    } catch (err) {
      toast({
        title: "Error",
        description:
          err instanceof Error ? err.message : "Something went wrong",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8" id="waitlist">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl text-foreground mb-4">
          JOIN THE GUILD EARLY
        </h2>
        <p className="text-2xl text-muted-foreground mb-12 font-body">
          Claim your spot for early access while we forge the first FinanceGuy
          realm.
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
            className="flex-1 px-4 py-3 rounded-lg bg-card border-2 border-foreground/45 placeholder-muted-foreground text-foreground text-xl font-body focus:outline-none focus:ring-2 focus:ring-accent transition-colors"
          />
          <Button
            type="submit"
            disabled={loading}
            className="h-[54px] px-8 rounded-lg disabled:opacity-50"
          >
            {loading ? "JOINING..." : "ENTER WAITLIST"}
          </Button>
        </form>

        <p className="text-lg text-muted-foreground font-body">
          No spam. Early access only. Leave anytime.
        </p>
      </div>
    </section>
  );
}
