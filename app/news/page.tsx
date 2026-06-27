import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";

export const metadata: Metadata = generatePageMetadata({
  title: "News & Stories — Park City Initiative",
  description:
    "Latest news, volunteer spotlights, community stories, and impact updates from Park City Initiative in Bridgeport, CT.",
  path: "/news",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "News & Stories", href: "/news" },
];

const newsArticles = [
  {
    slug: "volunteer-spotlight-june-2026",
    title: "Volunteer Spotlight: Building Community One Shift at a Time",
    category: "Volunteer Spotlights",
    date: "June 23, 2026",
    excerpt:
      "Meet one of our dedicated volunteers and learn how they're making a difference in Bridgeport's food pantry.",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80",
  },
  {
    slug: "kidz-academy-summer-2026",
    title: "Kidz Academy Summer Program: Where Learning Meets Growth",
    category: "Program Updates",
    date: "June 15, 2026",
    excerpt:
      "As summer begins, our Kidz Academy welcomes 220+ children into life-skills training and mentorship programs.",
    image: "https://images.unsplash.com/photo-1427504494785-cdcd6c6dbdea?w=600&q=80",
  },
  {
    slug: "one-million-meals-milestone",
    title: "One Million Meals: Reflecting on 27 Years of Impact",
    category: "Impact Reports",
    date: "June 1, 2026",
    excerpt:
      "Park City Initiative has distributed over 1 million meals to families and seniors across Bridgeport. Here's how we got here.",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b1?w=600&q=80",
  },
];

export default function NewsPage() {
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
      <PageHero title="News & Stories" />
      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white">
        <div className="mx-auto max-w-3xl mb-12">
          <p className="text-lg text-brand-gray">
            Stay connected with the latest updates from Park City Initiative. Discover volunteer spotlights,
            community impact stories, program updates, and more.
          </p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/news/${article.slug}`}
              className="group overflow-hidden rounded-xl shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="relative h-48 overflow-hidden bg-gray-200">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-gold">
                    {article.category}
                  </span>
                  <span className="text-xs text-brand-gray">{article.date}</span>
                </div>
                <h3 className="mb-2 font-heading text-lg font-semibold text-brand-purple group-hover:text-brand-gold">
                  {article.title}
                </h3>
                <p className="text-sm text-brand-gray">{article.excerpt}</p>
                <div className="mt-4 text-sm font-semibold text-brand-gold">Read More →</div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Section background="purple" padding="md">
        <div className="flex flex-col items-center justify-center gap-6 text-center">
          <div>
            <h2 className="font-heading text-2xl font-semibold text-white">Have a Story to Share?</h2>
            <p className="mt-2 text-white/80">
              We'd love to hear from volunteers and community members about their experiences with PCI.
            </p>
          </div>
          <Link href="/contact">
            <span className="rounded-lg bg-brand-gold px-6 py-3 font-bold uppercase tracking-wide text-brand-purple-dark hover:bg-brand-gold-light transition-colors">
              Get in Touch
            </span>
          </Link>
        </div>
      </Section>
    </>
  );
}
