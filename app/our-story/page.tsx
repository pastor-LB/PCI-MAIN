import type { Metadata } from "next";
import { HeartHandshake, Truck, HandCoins, ShieldCheck, Award, Coins, Sun, Trophy, Store } from "lucide-react";
import { generatePageMetadata } from "@/lib/metadata";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import StoryTimeline from "@/components/sections/StoryTimeline";
import CTABanner from "@/components/sections/CTABanner";
import FramedPhoto from "@/components/ui/FramedPhoto";

export const metadata: Metadata = generatePageMetadata({
  title: "Our Story — From One Request to 1 Million Meals",
  description:
    "The story of Park City Initiative: from Bishop Jean Williams's request in 1999 to distributing over 1 million meals a year in Bridgeport, CT.",
  path: "/our-story",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Our Story", href: "/our-story" },
];

const milestones = [
  { year: "1999", title: "A Partnership is Born", description: "Bishop Jean Williams asks her daughter, Mary Green, for help feeding hungry families in Bridgeport.", icon: HeartHandshake },
  { year: "2003", title: "Metro Kidz Mobile Outreach Launches", description: "Mobile outreach begins serving 500+ children weekly across the city.", icon: Truck },
  { year: "2004", title: "Access to Recovery Provider", description: "PCI becomes an Access to Recovery provider, and United Way funding begins.", icon: HandCoins },
  { year: "2007", title: "Capacity-Building Grant", description: "PCI receives a $10,000 capacity-building grant from the City of Bridgeport.", icon: Coins },
  { year: "2007", title: "Adopt-A-Block Program Launches", description: "The Adopt-A-Block neighborhood cleanup program launches.", icon: ShieldCheck },
  { year: "2014", title: "First Refrigerated Truck", description: "A $15,000 Walmart Spark Change grant funds PCI's first refrigerated delivery truck.", icon: Truck },
  { year: "2018", title: "686,000 lbs of Food Distributed", description: "PCI distributes 686,000 lbs of food and 340,000+ meals in a single year.", icon: Award },
  { year: "2018", title: "Living Legacy Award", description: "Pastor Mary, President/CEO, receives the Living Legacy Award from the City of Bridgeport.", icon: Award },
  { year: "2020", title: "COVID-19 Volunteer Recognition", description: "PCI's pandemic-response volunteers are recognized by Senator Blumenthal.", icon: ShieldCheck },
  { year: "2021", title: "Major Funding Awards", description: "Hartford Healthcare awards $50,000 and First County Bank awards $5,000.", icon: Coins },
  { year: "2021", title: "Elizabeth M. Pfriem Foundation Support", description: "Major funding from the Elizabeth M. Pfriem Foundation begins.", icon: Coins },
  { year: "2022", title: "S.C.A.M.P. Summer Camp Launches", description: "The first year of S.C.A.M.P. summer camp runs free for all participating families.", icon: Sun },
  { year: "2022", title: "One Stop Shop Grand Opening", description: "The One Stop Shop celebrates its grand opening at 3160 Park Ave.", icon: Store },
  { year: "2023", title: "One Million Meals & 20th Anniversary", description: "PCI hits the one-million-meal milestone, launches Park City Youth ACTS, opens Kidz Academy, celebrates 20 years, and moves to 3160 Park Ave.", icon: Trophy },
  { year: "2023", title: "Overnight Inspire Sports Camp", description: "We began sending bus loads of children and youth to the overnight Inspire Sports Camp.", icon: Sun },
  { year: "2023", title: "PT Barnum Leadership Award", description: "Pastor Mary, President/CEO, receives the PT Barnum Leadership Award.", icon: Trophy },
  { year: "2024", title: "One Stop Shop Community Market Expands", description: "A 7,500 sq ft Community Market opens with a Hartford Health Care Neighborhood Clinic, financial literacy programs, career resources, access to recovery services, and other wraparound services.", icon: Store },
];

export default function OurStoryPage() {
  return (
    <>
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"
         
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero title="From Roots to Wings" tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <h2 className="text-3xl font-bold text-brand-purple mb-10 text-center">
          One Request. 27 Years. One Million Meals.
        </h2>
        <div className="grid items-center gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
          <div className="space-y-4 text-lg text-brand-gray">
            <p>
              In 1999, Bishop Jean Williams made a simple request to her daughter, Mary Green:
              <span className="font-semibold text-brand-charcoal"> "Help me get more food to feed the families that are coming to me for help."</span>
              {" "}That conversation sparked a movement that has transformed Bridgeport.
            </p>
            <p>
              What began as one woman's compassion for her neighbors has grown into a comprehensive,
              multi-program organization serving thousands of families annually. From the Bishop Jean Williams
              Food Pantry and Park City Kidz Mobile to youth development programs, community transformation
              through Adopt-A-Block initiatives, and expanded access to resources through our One-Stop Shop
              Community Market, Park City Initiative Corp has become a
              <span className="font-semibold text-brand-charcoal"> trusted cornerstone of Bridgeport's social fabric.</span>
            </p>
            <p>
              Today, we serve more than 750 families every week and distribute over one million meals
              annually. Yet, our mission remains unchanged:
              <span className="font-semibold text-brand-purple"> to meet basic needs today, restore hope for tomorrow,
              and equip families with tools to improve their quality of life.</span>
            </p>
          </div>
          </div>
          <FramedPhoto
            src="/images/our-story/food-pantry-team.jpg"
            alt="Park City Initiative volunteers in orange shirts in front of the Bishop Jean Williams Food Pantry truck"
            aspect="aspect-[4/3]"
            caption="No One Should Go Hungry"
            className="lg:col-span-2"
          >
            <div className="absolute -left-3 -top-4 rounded-lg bg-brand-purple px-4 py-2 text-white shadow-lg sm:-left-5">
              <p className="text-[10px] font-semibold uppercase tracking-widest text-brand-gold-light">Serving Bridgeport</p>
              <p className="font-heading text-lg font-bold leading-tight">Since 1999</p>
            </div>
          </FramedPhoto>
        </div>
      </Section>

      <Section background="gray-light">
        <h2 className="text-2xl font-bold text-brand-purple mb-10 text-center">
          Our 27-Year Journey
        </h2>
        <StoryTimeline milestones={milestones} />
      </Section>

      <CTABanner
        heading="Be Part of the Next Chapter"
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
      />
    </>
  );
}
