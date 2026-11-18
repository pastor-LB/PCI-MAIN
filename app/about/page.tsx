import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import PartnerLogos from "@/components/sections/PartnerLogos";
import CTABanner from "@/components/sections/CTABanner";

export const metadata: Metadata = generatePageMetadata({
  title: "About Us — Our Mission & Leadership",
  description:
    "Learn about Park City Initiative, a 27-year-old Bridgeport, CT nonprofit fighting food insecurity and building community through youth programs and outreach.",
  path: "/about",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
];

const staffPlaceholders = [
  { name: "Bishop Jean Williams", role: "Founder" },
  { name: "Mary Green", role: "Chief Executive Officer" },
  // TODO: Add Program Director and Operations Manager when staff photos are available
];

export default function AboutPage() {
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
      <PageHero title="We Are Park City Initiative" tall={false} />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <p className="mx-auto max-w-3xl text-center text-brand-gray mb-12">
          For 27 years, Park City Initiative has been a steady presence in Bridgeport — meeting immediate needs while building a vision of thriving families and resilient neighborhoods. From our roots as a single food pantry to today's integrated programs serving youth, seniors, and entire blocks, we remain committed to the founding principle: that one person's request for help can spark a movement.
        </p>

        <div className="grid gap-8 sm:grid-cols-2">
          <Card borderColor="gold">
            <h2 className="font-heading text-2xl font-semibold text-brand-purple">Our Mission</h2>
            <p className="mt-3 text-brand-gray">
              Our mission is to help transform Bridgeport and neighboring communities by decreasing
              food insecurity, aiding families in crisis, and breaking generational cycles of poverty.
            </p>
          </Card>
          <Card borderColor="purple">
            <h2 className="font-heading text-2xl font-semibold text-brand-purple">Our Vision</h2>
            <p className="mt-3 text-brand-gray">
              We envision a community where the heart of God is woven into the very fabric of our
              city, breaking the cycle of need and fostering resilience and positive change for
              generations to come.
            </p>
          </Card>
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Meet the Leadership
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          {staffPlaceholders.map((person) => (
            <div key={person.name + person.role} className="text-center">
              <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-brand-gray-light">
                {/* TODO: Replace with actual PCI photography */}
              </div>
              <h3 className="mt-4 font-semibold text-brand-charcoal">{person.name}</h3>
              <p className="text-sm text-brand-gray">{person.role}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          27 Years Strong
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/about/history-1.jpg", alt: "A Park City Initiative founder standing at the doorway of a home", pos: "center 25%" },
            { src: "/images/about/history-2.jpg", alt: "Volunteer with a clipboard leading an outdoor food distribution", pos: "center 30%" },
            { src: "/images/about/history-3.jpg", alt: "Volunteers in safety vests distributing fresh produce and canned goods", pos: "center 35%" },
            { src: "/images/about/history-4.jpg", alt: "Park City Initiative celebrating 20 years of serving our community", pos: "center" },
            { src: "/images/about/history-5.jpg", alt: "Park City Initiative team cutting a red ribbon at a grand opening", pos: "center 40%" },
            { src: "/images/about/history-6.jpg", alt: "Volunteer beside stacks of Box of Love Thanksgiving boxes", pos: "center 40%" },
          ].map((img, index) => (
            <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-md">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                className="object-cover transition-transform duration-500 hover:scale-105"
                style={{ objectPosition: img.pos }}
              />
            </div>
          ))}
        </div>
      </Section>

      <div id="partners">
        <PartnerLogos />
      </div>

      <CTABanner
        heading="Join the Family. Volunteer or Donate Today."
        primaryHref="/donate"
        primaryLabel="Donate"
        secondaryHref="/volunteer"
        secondaryLabel="Volunteer"
      />
    </>
  );
}
