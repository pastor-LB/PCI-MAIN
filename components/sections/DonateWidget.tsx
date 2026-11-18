"use client";

import { useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

const tiersByFrequency: Record<"once" | "monthly", { amount: number; description: string }[]> = {
  once: [
    { amount: 50, description: "Sponsors 2 children at Park City Kidz Mobile for an entire year." },
    { amount: 75, description: "Provides 750 meals for families in need." },
    { amount: 250, description: "Sponsors a senior care box delivery for a month." },
    { amount: 500, description: "Sponsors 5,000 meals for families in need." },
  ],
  monthly: [
    { amount: 25, description: "Sponsors a child at Park City Kidz Mobile for an entire year." },
    { amount: 50, description: "Helps provide 500 meals per month for families." },
    { amount: 150, description: "Sponsors 10 senior care box deliveries per month." },
    { amount: 250, description: "Helps provide 2,500 meals per month for families." },
  ],
};

export default function DonateWidget() {
  const [frequency, setFrequency] = useState<"once" | "monthly">("monthly");

  return (
    <Section background="purple">
      <h2 className="text-center font-heading text-3xl font-semibold text-white sm:text-4xl">
        Your Gift Feeds a Family Tonight.
      </h2>
      <div className="mt-6 flex justify-center">
        <div className="inline-flex rounded-full bg-white/10 p-1">
          <button
            onClick={() => setFrequency("monthly")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${
              frequency === "monthly" ? "bg-brand-gold text-brand-purple-dark" : "text-white"
            }`}
          >
            Give Monthly ⭐
          </button>
          <button
            onClick={() => setFrequency("once")}
            className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide ${
              frequency === "once" ? "bg-brand-gold text-brand-purple-dark" : "text-white"
            }`}
          >
            Give Once
          </button>
        </div>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {tiersByFrequency[frequency].map((tier) => (
          <div key={tier.amount} className="rounded-2xl bg-white p-6 text-center shadow-lg">
            <p className="font-heading text-3xl font-bold text-brand-purple">${tier.amount}</p>
            <p className="text-xs font-semibold text-brand-gold">{frequency === "monthly" ? "PER MONTH" : "ONE-TIME"}</p>
            <p className="mt-2 text-sm text-brand-gray">{tier.description}</p>
            <div className="mt-4">
              <Button href={`/donate?amount=${tier.amount}&frequency=${frequency}`} variant="gold">
                Give ${tier.amount}
              </Button>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
