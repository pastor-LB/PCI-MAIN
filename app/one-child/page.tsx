import type { Metadata } from "next";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import CTABanner from "@/components/sections/CTABanner";
import Button from "@/components/ui/Button";
import { Truck, Sun } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Youth Programs Bridgeport CT | Kidz Academy & Summer Camp",
  description:
    "Kidz Academy, Kidz Mobile, and S.C.A.M.P. summer camp build tomorrow's leaders through life-skills training and mentorship in Bridgeport, CT.",
  path: "/one-child",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Child", href: "/one-child" },
];

export default function OneChildPage() {
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
      <PageHero title="Building Tomorrow's Leaders. Starting Today." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15">
              <Truck className="h-6 w-6 text-brand-purple" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark">
              Park City Kidz Mobile
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            Planting Seeds for a Brighter Future
          </h2>
          <div className="mt-6 space-y-4 text-lg text-brand-gray">
            <p>
              Every child deserves the opportunity to discover their potential, develop confidence, and build
              a strong foundation for life. Park City Kidz Mobile brings those opportunities directly into the
              community through a dynamic, interactive after-school experience that makes learning meaningful,
              memorable, and fun.
            </p>
            <p>
              Through drama, comedy, music, games, and engaging life lessons, children develop important
              values, strengthen their decision-making skills, build positive relationships, and discover the
              power of making good choices. Along the way, we plant seeds of faith, character, personal growth,
              and community responsibility.
            </p>
            <p>
              But we&apos;re doing more than teaching life skills&mdash;we&apos;re helping shape lives.
              We&apos;re creating opportunities for children to believe in themselves, recognize their worth,
              make positive choices, and envision a future filled with possibilities.
            </p>
          </div>
          <p className="mt-8 border-l-4 border-brand-gold pl-5 font-heading text-xl italic text-brand-purple sm:text-2xl">
            Because when we invest in children today, we help build stronger individuals, families, and
            communities tomorrow.
          </p>
        </div>
      </Section>

      <Section background="cream">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10">
              <Sun className="h-6 w-6 text-brand-purple" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark">
              Overnight Summer Camp
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            A Week of Adventure. A Lifetime of Memories.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-brand-gray">
            <p>
              For many children, the opportunity to experience life beyond their everyday surroundings can
              open a world of possibilities. Each summer, we give children the chance to leave the city behind,
              board a bus to Pennsylvania, and embark on an unforgettable week of overnight summer camp.
            </p>
            <p>
              Away from familiar routines, children experience new adventures, build lasting friendships,
              explore new interests, and discover things about themselves they may never have known. In a
              safe, nurturing, and enriching environment, they have the freedom to laugh, learn, grow, and
              simply enjoy being children.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Photo Gallery
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { src: "/images/one-child/kidz-1.jpg", alt: "Park City Kidz Mobile gathering children for an outdoor lesson in the neighborhood", pos: "center" },
            { src: "/images/one-child/kidz-2.jpg", alt: "Youth laughing as they stretch homemade slime during a hands-on activity", pos: "center 30%" },
            { src: "/images/one-child/kidz-3.jpg", alt: "Volunteers handing out gift bags to a Park City Kidz participant", pos: "center" },
            { src: "/images/one-child/kidz-4.jpg", alt: "Children gathered in front of the colorful Dream bus at a park", pos: "center 45%" },
            { src: "/images/one-child/kidz-5.jpg", alt: "Two girls using straws to move candy in a game during summer camp", pos: "center" },
            { src: "/images/one-child/kidz-6.jpg", alt: "Three smiling boys in Park City Kidz shirts at a community event", pos: "center 35%" },
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

      <Section background="purple" padding="md">
        <div className="text-center">
          <h2 className="font-heading text-2xl font-semibold text-white">Sponsor a Camper</h2>
          <p className="mt-2 text-white/80">
            $25 sends a child to S.C.A.M.P. summer camp for a full week.
          </p>
          <div className="mt-6">
            <Button href="/donate?amount=25" variant="gold" size="lg">
              Sponsor a Camper — $25
            </Button>
          </div>
        </div>
      </Section>

      <CTABanner
        heading="Mentor a Child. Change a Future."
        primaryHref="/volunteer"
        primaryLabel="Volunteer"
      />
    </>
  );
}
