import Link from "next/link";
import { UtensilsCrossed, GraduationCap, Building2 } from "lucide-react";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";

const programs = [
  {
    title: "One Meal",
    description:
      "As one of the largest food pantries in the region, we are dedicated to ensuring that no one in our community goes to bed hungry.",
    icon: UtensilsCrossed,
    href: "/one-meal",
    border: "gold" as const,
  },
  {
    title: "One Child",
    description:
      "Park City Kidz Mobile, and S.C.A.M.P. give children life-skills training, mentorship, and a safe place to grow.",
    icon: GraduationCap,
    href: "/one-child",
    border: "purple" as const,
  },
  {
    title: "One Block",
    description:
      "Bridging Generations. Building Leaders. Transforming Neighborhoods.",
    icon: Building2,
    href: "/one-block",
    border: "charcoal" as const,
  },
];

export default function ProgramCards() {
  return (
    <Section background="white" className="!pt-10 sm:!pt-12">
      <div className="text-center">
        <h2 className="font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
          Three Programs. One Mission.
        </h2>
      </div>
      <div className="mt-10 grid gap-8 sm:grid-cols-3">
        {programs.map((program) => {
          const Icon = program.icon;
          return (
            <Card key={program.title} borderColor={program.border}>
              <Icon className="h-10 w-10 text-brand-purple" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-semibold text-brand-charcoal">{program.title}</h3>
              <p className="mt-2 text-sm text-brand-gray">{program.description}</p>
              <div className="mt-4">
                <Link
                  href={program.href}
                  className="font-semibold text-brand-purple hover:text-brand-gold"
                >
                  Learn More →
                </Link>
              </div>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
