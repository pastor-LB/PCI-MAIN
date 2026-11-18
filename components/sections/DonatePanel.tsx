"use client";

import { Suspense, useState } from "react";
import { useSearchParams } from "next/navigation";

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

function DonatePanelInner() {
  const searchParams = useSearchParams();
  const initialAmount = searchParams.get("amount");
  // Default to MONTHLY, only switch to once if explicitly requested
  const initialFrequency = searchParams.get("frequency") !== "once" ? "monthly" : "once";

  const [selected, setSelected] = useState<number | "custom" | null>(
    initialAmount ? Number(initialAmount) : null
  );
  const [customAmount, setCustomAmount] = useState("");
  const [frequency, setFrequency] = useState<"once" | "monthly">(initialFrequency);

  return (
    <div>
      <div className="flex flex-col items-center gap-3">
        <div className="inline-flex rounded-full bg-brand-gray-light p-1">
          <button
            onClick={() => {
              setFrequency("monthly");
              if (selected !== "custom") setSelected(null);
            }}
            className={`rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
              frequency === "monthly"
                ? "bg-brand-purple text-white shadow-lg"
                : "bg-transparent text-brand-charcoal hover:bg-white"
            }`}
          >
            Give Monthly ⭐
          </button>
          <button
            onClick={() => {
              setFrequency("once");
              if (selected !== "custom") setSelected(null);
            }}
            className={`rounded-full px-8 py-3 text-sm font-bold uppercase tracking-wide transition-all ${
              frequency === "once"
                ? "bg-brand-purple text-white shadow-lg"
                : "bg-transparent text-brand-charcoal hover:bg-white"
            }`}
          >
            Give Once
          </button>
        </div>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-4">
        {tiersByFrequency[frequency].map((tier) => (
          <button
            key={tier.amount}
            onClick={() => setSelected(tier.amount)}
            className={`rounded-2xl border-2 p-6 text-center shadow-md transition-colors ${
              selected === tier.amount
                ? "border-brand-gold bg-brand-gold/10"
                : "border-transparent bg-white"
            }`}
          >
            <p className="font-heading text-3xl font-bold text-brand-purple">${tier.amount}</p>
            <p className="text-xs text-brand-gold font-semibold mb-1">
              {frequency === "monthly" ? "PER MONTH" : "ONE-TIME"}
            </p>
            <p className="mt-2 text-sm text-brand-gray">{tier.description}</p>
          </button>
        ))}
      </div>

      <div className="mx-auto mt-8 max-w-md">
        <label htmlFor="customAmount" className="text-sm font-semibold text-brand-charcoal">
          Or enter a custom amount
        </label>
        <div className="mt-1 flex items-center gap-2">
          <span className="text-lg font-bold text-brand-gray">$</span>
          <input
            id="customAmount"
            type="number"
            min={1}
            value={customAmount}
            onChange={(e) => {
              setCustomAmount(e.target.value);
              setSelected("custom");
            }}
            className="w-full rounded-lg border border-brand-gray/30 px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold"
            placeholder="Custom amount"
          />
        </div>
      </div>

      <p className="mt-6 text-center text-sm text-brand-gray">
        Selected: {selected === "custom" ? `$${customAmount || "0"}` : selected ? `$${selected}` : "—"}{" "}
        {frequency === "monthly" ? "per month" : "one-time"}. Complete your gift securely below.
      </p>
    </div>
  );
}

export default function DonatePanel() {
  return (
    <Suspense fallback={<div className="h-64" />}>
      <DonatePanelInner />
    </Suspense>
  );
}
