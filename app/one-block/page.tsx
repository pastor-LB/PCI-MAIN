import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import StatCard from "@/components/ui/StatCard";
import { Users2, Sprout, Eye } from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Youth Community Leadership & Workforce Development | PCY ACTS",
  description:
    "Park City Youth ACTS trains young leaders in career readiness, leads Adopt-A-Block cleanups, and develops community leadership in Bridgeport, CT.",
  path: "/one-block",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Block", href: "/one-block" },
];

const stats = [
  { value: "241+", label: "Youth Served", variant: "purple-on-light" as const },
  { value: "18+", label: "Blocks Adopted", variant: "purple-on-light" as const },
  { value: "50+", label: "Sessions Run Annually", variant: "purple-on-light" as const },
];

export default function OneBlockPage() {
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
      <PageHero title="Bridging Generations. Building Leaders. Transforming Neighborhoods." tall />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15">
              <Users2 className="h-6 w-6 text-brand-purple" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark">
              One Block
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            Where Wisdom Meets Youthful Energy to Create Lasting Community Change.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-brand-gray">
            <p>
              What happens when the wisdom and life experience of older adults meet the energy, creativity,
              and fresh ideas of young people? Communities grow stronger, relationships are built, and
              meaningful change happens.
            </p>
            <p>
              One Block is a cross-generational mentorship and neighborhood transformation initiative that
              brings together adults ages 60 and older with teens to work side by side on projects that
              improve the places they call home.
            </p>
            <p>
              Through this unique partnership, older adults serve as mentors, sharing their knowledge, life
              experiences, skills, and guidance while helping teens develop leadership abilities, confidence,
              teamwork, and a deeper sense of civic responsibility.
            </p>
            <p>
              Together, each year, these generations will identify, develop, and implement a neighborhood
              improvement project focused on environmental stewardship, anti-blight efforts, and neighborhood
              beautification. Whether revitalizing a neglected city block, organizing a neighborhood cleanup,
              or creating a more welcoming community space, participants work together to turn ideas into
              visible, lasting improvements.
            </p>
          </div>
        </div>
      </Section>

      <Section background="cream">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-purple/10">
              <Sprout className="h-6 w-6 text-brand-purple" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark">
              More Than a Project
            </span>
          </div>
          <h2 className="mt-4 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            A Legacy in the Making.
          </h2>
          <div className="mt-6 space-y-4 text-lg text-brand-gray">
            <p>
              One Block is about more than improving physical spaces. It is about strengthening relationships,
              bridging generational gaps, preserving valuable wisdom, and empowering young people to become
              engaged, responsible community leaders.
            </p>
            <p>
              Each year&apos;s accomplishments will culminate in a special recognition presentation at our
              Annual Banquet, where participants will showcase their projects, celebrate their achievements,
              and share the impact of their collaboration.
            </p>
          </div>
        </div>
      </Section>

      <Section background="white">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15">
              <Eye className="h-6 w-6 text-brand-purple" aria-hidden="true" />
            </span>
            <span className="text-sm font-bold uppercase tracking-widest text-brand-gold-dark">
              Our Vision
            </span>
          </div>
          <p className="mt-6 border-l-4 border-brand-gold pl-5 font-heading text-xl italic text-brand-purple sm:text-2xl">
            We believe every generation has something valuable to contribute. When generations come together
            with a shared purpose, neighborhoods become stronger, young people become empowered, and
            communities are transformed&mdash;one relationship, one project, and One Block at a time.
          </p>
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="grid grid-cols-3 gap-8">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} variant="gold-on-dark" />
          ))}
        </div>
      </Section>

      <Section background="cream">
        <h2 className="text-center font-heading text-3xl font-semibold text-brand-purple">
          Get Involved
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-3">
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Join Our Team</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Apply to join Park City Youth ACTS as a participant or youth leader.
            </p>
            <a href="/volunteer" className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold">
              Apply Now →
            </a>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Lead a Cleanup</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Organize an Adopt-A-Block cleanup in your neighborhood.
            </p>
            <a
              href="mailto:info@parkcityinitiative.org?subject=Lead%20a%20Block%20Cleanup"
              className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold"
            >
              Email Us →
            </a>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold text-brand-charcoal">Train Our Leaders</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Share your professional expertise with our youth leadership trainees.
            </p>
            <a
              href="mailto:info@parkcityinitiative.org?subject=Volunteer%20to%20Train%20Youth%20Leaders"
              className="mt-4 inline-block font-semibold text-brand-purple hover:text-brand-gold"
            >
              Email Us →
            </a>
          </Card>
        </div>
      </Section>
    </>
  );
}
