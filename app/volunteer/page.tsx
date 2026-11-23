import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import VolunteerForm from "@/components/forms/VolunteerForm";
import { Utensils, GraduationCap, ShieldCheck, Sprout } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Volunteer — Help Your Community",
  description:
    "Volunteer with Park City Initiative in Bridgeport, CT. Help at the food pantry, mentor youth, or lead an Adopt-A-Block cleanup in your neighborhood.",
  path: "/volunteer",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Get Involved", href: "/volunteer" },
  { name: "Volunteer", href: "/volunteer" },
];

const opportunities = [
  {
    title: "Food Pantry/Community Market Volunteer",
    schedule: "Flexible",
    description: "Help sort, pack, clean, greet, unload the truck, and distribute groceries at the Bishop Jean Williams Community Market.",
    icon: Utensils,
  },
  {
    title: "Youth Leader / Mentor",
    schedule: "After school + Summers",
    description: "Mentor children in Park City Kidz Afterschool Mobile Outreach.",
    icon: GraduationCap,
  },
  {
    title: "Adopt-A-Block Team Member",
    schedule: "Monthly",
    description: "Learn more about the One Block cross-generational mentorship and neighborhood transformation initiative.",
    icon: ShieldCheck,
  },
  {
    title: "Farm Care Team Member",
    schedule: "Seasonal",
    description: "Help plant, grow, and harvest fresh collard greens and vegetables to share with our neighbors.",
    icon: Sprout,
  },
];

export default function VolunteerPage() {
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
      <PageHero title="The Greatest Part of Us Is You." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {opportunities.map((opportunity) => {
            const Icon = opportunity.icon;
            return (
              <Card key={opportunity.title} borderColor="gold">
                <Icon className="h-9 w-9 text-brand-purple" aria-hidden="true" />
                <h3 className="mt-3 text-lg font-semibold text-brand-charcoal">
                  {opportunity.title}
                </h3>
                <p className="mt-1 text-xs font-bold uppercase tracking-wide text-brand-gold">
                  {opportunity.schedule}
                </p>
                <p className="mt-2 text-sm text-brand-gray">{opportunity.description}</p>
              </Card>
            );
          })}
        </div>
      </Section>

      <Section background="white" padding="md" className="!pt-0">
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-gold bg-brand-cream shadow-md lg:grid lg:grid-cols-5">
          <div className="flex flex-col lg:col-span-2">
            <img
              src="/images/volunteer/farm-care-true.jpg"
              alt="Volunteers tending rows of collard greens in the community garden"
              className="aspect-[4/3] w-full flex-1 object-cover object-[center_45%] lg:aspect-auto lg:min-h-[20rem]"
            />
            <div className="bg-brand-purple p-6 text-white sm:p-8">
              <Sprout className="h-9 w-9 text-brand-gold-light" aria-hidden="true" />
              <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-brand-gold-light">
                Farm Care Team &middot; Seasonal
              </p>
              <h2 className="mt-2 font-heading text-2xl font-semibold sm:text-3xl">
                Fresh Food. Nourishing Our Neighbors.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center p-6 sm:p-8 lg:col-span-3">
            <p className="text-brand-gray">
              Through our valued partnership with Green Village Initiative, the Bishop Jean Williams Community
              Market is bringing fresh, locally grown collard greens and other nutritious vegetables directly to
              the tables of our neighbors.{" "}
              <strong className="font-semibold text-brand-charcoal">
                From the farm to our Market and into the homes of the families we serve,
              </strong>{" "}
              these fresh harvests have been warmly welcomed and greatly appreciated by our community.
              This partnership is another meaningful way we are working together to nourish families, promote
              healthy eating, and strengthen our community.
            </p>
            <div className="mt-6 grid items-center gap-6 sm:grid-cols-5">
              <figure className="sm:col-span-2">
                <div className="overflow-hidden rounded-xl shadow-md ring-1 ring-black/5">
                  <img
                    src="/images/volunteer/market-produce.jpg"
                    alt="Fresh collard greens, peppers, bananas, and other produce displayed at the Community Market"
                    className="aspect-[4/5] w-full object-cover"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-gold-dark">
                  At the Market
                </figcaption>
              </figure>
              <div className="sm:col-span-3">
                <p className="font-semibold text-brand-purple">
                  Help us plant seeds of hope and grow a healthier community! Complete the form below to join
                  us in planting, growing, and harvesting fresh produce for families in need.
                </p>
                <a
                  href="#volunteer-form"
                  className="mt-6 inline-block rounded-lg bg-brand-gold px-5 py-2.5 text-sm font-bold uppercase tracking-wide text-brand-purple-dark transition hover:bg-brand-gold-light"
                >
                  Join the Farm Care Team &darr;
                </a>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section background="cream" id="volunteer-form" className="scroll-mt-24">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Volunteer Intake Form
        </h2>
        <div className="mx-auto mt-8 max-w-3xl">
          <VolunteerForm />
        </div>
        <p className="mt-6 text-center text-sm text-brand-gray">
          Already a volunteer?{" "}
          <Link href="/contact" className="font-semibold text-brand-purple underline">
            Share your story →
          </Link>
        </p>
      </Section>
    </>
  );
}
