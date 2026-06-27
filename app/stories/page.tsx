import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "Stories — Park City Initiative",
  description:
    "Real stories from community members, volunteers, and families whose lives have been transformed by Park City Initiative.",
  path: "/stories",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Stories", href: "/stories" },
];

const stories = [
  {
    slug: "maria-santiesteban-food-security",
    name: "Maria Santiesteban",
    role: "Food Pantry Recipient",
    excerpt: "When I lost my job, the food pantry made sure my kids never went without dinner.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80",
  },
  {
    slug: "darnell-washington-volunteer",
    name: "Darnell Washington",
    role: "Volunteer & Youth Mentor",
    excerpt: "Giving back to PCI has given my life more meaning than I ever expected to find.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
  },
  {
    slug: "patricia-lopez-scamp-graduate",
    name: "Patricia Lopez",
    role: "S.C.A.M.P. Graduate, Now College Student",
    excerpt: "PCI believed in me before I believed in myself. Now I'm studying engineering.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80",
  },
];

export default function StoriesPage() {
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
      <PageHero title="Stories of Impact" subtitle="Real people, real change, real hope." />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="mx-auto max-w-3xl mb-12 text-center">
          <p className="text-lg text-brand-gray">
            These are the stories of people whose lives have been transformed through Park City Initiative's
            work. Each one represents a family fed, a child empowered, and a neighborhood strengthened.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <Link
              key={story.slug}
              href={`/stories/${story.slug}`}
              className="group overflow-hidden rounded-xl shadow-md transition-all hover:shadow-xl"
            >
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={story.image}
                  alt={story.name}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-brand-purple group-hover:text-brand-gold">
                  {story.name}
                </h3>
                <p className="mt-1 text-sm font-medium uppercase tracking-wide text-brand-gold">
                  {story.role}
                </p>
                <p className="mt-4 text-brand-gray italic">"{story.excerpt}"</p>
                <div className="mt-4 text-sm font-semibold text-brand-gold">Read Full Story →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="cream" padding="lg">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 font-heading text-3xl font-bold text-brand-purple">
            Your story matters.
          </h2>
          <p className="mb-8 text-lg text-brand-gray">
            Have you been impacted by Park City Initiative? We'd love to share your story with our community.
          </p>
          <Link href="/contact">
            <span className="rounded-lg bg-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-purple-dark hover:bg-brand-gold-light transition-colors inline-block">
              Share Your Story
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
