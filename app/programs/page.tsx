import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { Utensils, Sparkles, Users2 } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Programs — Food Pantry, Youth Development & Community",
  description:
    "Explore Park City Initiative's three core programs: One Meal (food pantry), One Child (youth development), and One Block (community leadership) in Bridgeport, CT.",
  path: "/programs",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
];

const programs = [
  {
    title: "One Meal",
    subtitle: "Community Market & Senior Care Boxes",
    description:
      "The Bishop Jean Williams Food Pantry, Senior Care Boxes, and Mobile Pantry provide free, nutritious food to families and seniors across Bridgeport.",
    details: [
      "1,000,000+ meals distributed annually",
      "750+ families served weekly",
      "5,650 senior care boxes delivered yearly",
      "3 distribution channels (walk-in, senior deliveries, mobile pantry)",
    ],
    href: "/one-meal",
    icon: Utensils,
  },
  {
    title: "One Child",
    subtitle: "Life Skills Training for Children/Youth",
    description:
      "Park City Kidz Mobile and Summer Camp Experience give children life-skills training, mentorship, and a safe place to learn and grow.",
    details: [
      "220+ children in life-skills training programs",
      "60 Kids attend Inspire Sports Camp",
    ],
    href: "/one-child",
    icon: Sparkles,
  },
  {
    title: "One Block",
    subtitle: "Bridging Generations, Building Leaders. Transforming Neighborhoods.",
    description:
      "Seniors mentoring youth, building leaders, and creating community change.",
    details: [
      "Neighborhood cleanup initiatives",
      "Youth leadership training programs",
      "Volunteer-powered block transformation",
    ],
    href: "/one-block",
    icon: Users2,
  },
];

export default function ProgramsPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero
        title="Meeting basic needs today. Restoring hope for tomorrow. Transforming lives forever."
        tall
      />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-brand-purple mb-4">
            Three Integrated Programs. One Transformative Mission.
          </h2>
          <p className="text-lg text-brand-gray">
            Park City Initiative operates three cornerstone programs that work together
            to address immediate needs while building long-term resilience and opportunity
            in Bridgeport families and neighborhoods. Each program is designed to complement
            the others, creating a holistic approach to community transformation.
          </p>
          <p className="mt-6 font-heading text-2xl font-semibold italic text-brand-gold">
            One Meal, One Child, One Block at a time!
          </p>
        </div>
      </Section>

      <Section background="cream">
        <div className="grid gap-8 lg:grid-cols-3">
          {programs.map((program, index) => {
            const Icon = program.icon;
            return (
              <article
                key={program.title}
                className="flex h-full flex-col rounded-2xl border-t-4 border-brand-gold bg-white p-7 shadow-md transition-shadow duration-300 hover:shadow-xl sm:p-8"
              >
                <div className="flex items-center justify-between">
                  <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-purple/10">
                    <Icon className="h-7 w-7 text-brand-purple" aria-hidden="true" />
                  </span>
                  <span className="font-heading text-4xl font-semibold text-brand-gold/40" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="mt-6 font-heading text-3xl font-semibold text-brand-purple">{program.title}</h2>
                <p className="mt-2 text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
                  {program.subtitle}
                </p>
                <p className="mt-4 text-brand-gray">{program.description}</p>
                <ul className="mt-6 space-y-3 border-t border-brand-gray/15 pt-6">
                  {program.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-gold" />
                      <span className="text-sm text-brand-charcoal">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-8">
                  <Button href={program.href} variant="primary">
                    Learn More About {program.title} →
                  </Button>
                </div>
              </article>
            );
          })}
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">Need Help Now?</h2>
            <p className="mt-1 text-white/80">We&apos;re here to connect you with the right support.</p>
          </div>
          <Link href="/get-help">
            <span className="rounded-lg bg-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-purple-dark">
              Get Help
            </span>
          </Link>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center gap-6 text-center sm:flex-row sm:justify-between sm:text-left">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">Support Our Programs</h2>
            <p className="mt-1 text-white/80">Your gift keeps these programs running.</p>
          </div>
          <Link href="/donate">
            <span className="rounded-lg bg-white px-6 py-3 font-bold uppercase tracking-wide text-brand-purple">
              Donate
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
