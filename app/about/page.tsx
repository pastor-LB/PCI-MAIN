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

type Leader = { name: string; role: string; photo?: string };

// To add a photo: upload it to public/images/leadership/ and set `photo: "/images/leadership/filename.jpg"`.
const founder: Leader = { name: "Bishop Jean Williams", role: "Founder" };

const board: Leader[] = [
  { name: "Mary C. Green", role: "President/CEO" },
  { name: "Leonard R. Green", role: "Vice President" },
  { name: "Michele DePina", role: "Board Chair" },
  { name: "Peter Mitchell", role: "Board Secretary" },
  { name: "Pastor Luis Burgos", role: "Board Treasurer" },
  { name: "Esther Dixon", role: "Founding Board Member" },
  { name: "Matt Alcebo", role: "Director" },
];

const staff: Leader[] = [
  { name: "Sharon Nixon", role: "Pantry Director" },
  { name: "Anyoli Rivera", role: "Park City Kidz Coordinator/Resource Specialist" },
  { name: "Leonard R. Green", role: "Procurement" },
];

function initials(name: string) {
  return name
    .replace(/^(Bishop|Pastor)\s+/, "")
    .split(" ")
    .filter((w) => /^[A-Z]/.test(w) && !w.endsWith("."))
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

function LeaderCard({ person, size = "md" }: { person: Leader; size?: "md" | "lg" }) {
  const circle = size === "lg" ? "h-40 w-40 text-4xl" : "h-28 w-28 text-2xl";
  return (
    <div className="text-center">
      <div
        className={`mx-auto flex ${circle} items-center justify-center overflow-hidden rounded-full border-4 border-white bg-brand-purple/10 font-heading font-semibold text-brand-purple shadow-md ring-2 ring-brand-gold/40`}
      >
        {person.photo ? (
          <img src={person.photo} alt={person.name} className="h-full w-full object-cover" />
        ) : (
          <span aria-hidden="true">{initials(person.name)}</span>
        )}
      </div>
      <h4 className="mt-4 font-semibold text-brand-charcoal">{person.name}</h4>
      <p className="mt-1 text-sm text-brand-gray">{person.role}</p>
    </div>
  );
}

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
        <p className="text-center text-lg text-brand-gray mb-10">
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

      <Section background="cream" id="leadership" className="scroll-mt-24">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Meet the Leadership
        </h2>

        <div className="mt-10">
          <LeaderCard person={founder} size="lg" />
        </div>

        <div className="mt-12">
          <h3 className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
            <span className="h-px w-12 bg-brand-gold/50" aria-hidden="true" />
            Board of Directors
            <span className="h-px w-12 bg-brand-gold/50" aria-hidden="true" />
          </h3>
          <div className="mx-auto mt-8 flex max-w-[52rem] flex-wrap justify-center gap-x-8 gap-y-10">
            {board.map((person) => (
              <div key={person.name + person.role} className="w-40 sm:w-44">
                <LeaderCard person={person} />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12">
          <h3 className="flex items-center justify-center gap-4 text-sm font-bold uppercase tracking-[0.2em] text-brand-gold-dark">
            <span className="h-px w-12 bg-brand-gold/50" aria-hidden="true" />
            Staff
            <span className="h-px w-12 bg-brand-gold/50" aria-hidden="true" />
          </h3>
          <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-10">
            {staff.map((person) => (
              <div key={person.name + person.role} className="w-40 sm:w-48">
                <LeaderCard person={person} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          27 Years Strong
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/about/history-1-restored.jpg", alt: "A Park City Initiative founder standing at the doorway of a home", pos: "center 20%" },
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
