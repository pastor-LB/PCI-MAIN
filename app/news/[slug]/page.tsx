import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// News article data structure
const newsArticles: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    image: string;
    content: string;
  }
> = {
  "volunteer-spotlight-june-2026": {
    title: "Volunteer Spotlight: Building Community One Shift at a Time",
    category: "Volunteer Spotlights",
    date: "June 23, 2026",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80",
    content: `<p>Meet one of our dedicated volunteers who has been serving at Park City Initiative's food pantry for the past two years. Their commitment to our mission demonstrates the heart of our community.</p>

<p>Every week, volunteers like this make a direct impact on the lives of families and seniors across Bridgeport. From sorting and packing nutritious food to connecting people with resources, volunteers are the backbone of everything we do.</p>

<h3>What motivates you to volunteer?</h3>

<p>"When I first came to the food pantry, I was looking for a way to give back. What I found was something bigger — a community of people who genuinely care about each other. It's not just about food; it's about dignity and connection."</p>

<h3>Your impact</h3>

<p>Last month alone, this volunteer contributed over 20 hours of service, helping to distribute more than 500 food packages. Multiplied across our 80+ active volunteers, that's nearly 4,000 hours of service and over 40,000 meals distributed monthly.</p>

<p>If you're interested in joining our volunteer community, we'd love to meet you. Visit our volunteer page to learn about current opportunities and the difference you can make.</p>`,
  },
  "kidz-academy-summer-2026": {
    title: "Kidz Academy Summer Program: Where Learning Meets Growth",
    category: "Program Updates",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1427504494785-cdcd6c6dbdea?w=1200&q=80",
    content: `<p>As summer officially begins, Park City Initiative's Kidz Academy is in full swing with over 220 children enrolled in our life-skills training, mentorship, and educational programs.</p>

<h3>Summer focuses on three core areas</h3>

<p><strong>Academic Support:</strong> Our tutoring program helps children who fall behind during the school year catch up and get ahead, all while making learning fun through interactive activities.</p>

<p><strong>Life Skills Training:</strong> From financial literacy to conflict resolution, we equip young people with practical skills they'll use for a lifetime.</p>

<p><strong>Mentorship & Connection:</strong> Our mentorship program pairs children with positive adult role models who provide guidance, support, and friendship.</p>

<h3>S.C.A.M.P. Summer Camp</h3>

<p>Our signature free summer camp program, S.C.A.M.P. (Summer Community and Arts Mentorship Program), welcomes all children in our community. Camp activities include sports, arts, field trips, and character development — all free of charge.</p>

<h3>Looking ahead</h3>

<p>As we move through summer, we're looking forward to hosting community events, college prep workshops, and career exploration days. Every experience is designed to expand possibilities and build confidence.</p>

<p>None of this would be possible without our dedicated staff and volunteers. If you're interested in supporting our youth programs, consider volunteering or making a donation today.</p>`,
  },
  "one-million-meals-milestone": {
    title: "One Million Meals: Reflecting on 27 Years of Impact",
    category: "Impact Reports",
    date: "June 1, 2026",
    image: "https://images.unsplash.com/photo-1593113646773-028c64a8f1b1?w=1200&q=80",
    content: `<p>Twenty-seven years ago, one woman — Mary Green — responded to a request from Bishop Jean Williams to help feed families in Bridgeport. What started as an act of compassion has grown into a movement that has now distributed over 1 million meals to our neighbors in need.</p>

<h3>The numbers behind the mission</h3>

<ul>
<li><strong>1,000,000+</strong> meals distributed annually</li>
<li><strong>900+</strong> families served weekly</li>
<li><strong>5,650</strong> senior care boxes delivered yearly</li>
<li><strong>220+</strong> children in life-skills training programs</li>
<li><strong>1,000+</strong> youth in S.C.A.M.P. summer programs</li>
<li><strong>80+</strong> active volunteers per month</li>
</ul>

<h3>But numbers tell only part of the story</h3>

<p>Behind every meal is a person. Behind every care box is a senior knowing someone cares. Behind every child in our programs is a young person discovering their potential.</p>

<p>We've watched families stabilize because they didn't have to choose between food and rent. We've celebrated college acceptances from young people who came through our mentorship programs. We've rebuilt entire blocks through community leadership.</p>

<h3>What comes next</h3>

<p>As we celebrate this milestone, we're recommitting to our mission for the next chapter. We're expanding our mobile pantry to reach more neighborhoods. We're building out our youth employment program to create pathways to jobs. We're deepening our community partnerships to strengthen our collective impact.</p>

<p>But we can't do this alone. Your support — through volunteering, donating, or simply sharing our mission — makes all the difference. Together, we're building Bridgeport: One Meal, One Child, One Block at a time.</p>`,
  },
};

interface NewsArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: NewsArticlePageProps
): Promise<Metadata> {
  const params = await props.params;
  const article = newsArticles[params.slug];

  if (!article) {
    return generatePageMetadata({
      title: "Article Not Found",
      description: "The article you are looking for could not be found.",
      path: `/news/${params.slug}`,
    });
  }

  return generatePageMetadata({
    title: article.title,
    description: article.title,
    path: `/news/${params.slug}`,
  });
}

export default async function NewsArticlePage(props: NewsArticlePageProps) {
  const params = await props.params;
  const article = newsArticles[params.slug];

  if (!article) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-purple">Article Not Found</h1>
          <Link href="/news">
            <Button className="mt-6">Back to News</Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "News", href: "/news" },
    { name: article.title, href: `/news/${params.slug}` },
  ];

  return (
    <>
      <div className="relative h-96 w-full overflow-hidden bg-gray-200 md:h-[500px]">
        <img
          src={article.image}
          alt={article.title}
          className="h-full w-full object-cover"
        />
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white" padding="lg">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <div className="mb-4 flex items-center justify-between">
              <span className="text-sm font-bold uppercase tracking-wider text-brand-gold">
                {article.category}
              </span>
              <span className="text-sm text-brand-gray">{article.date}</span>
            </div>
            <h1 className="font-heading text-4xl font-bold text-brand-purple">{article.title}</h1>
          </div>

          <div
            className="prose prose-lg max-w-none text-brand-gray prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-purple prose-h3:text-2xl prose-strong:text-brand-charcoal prose-a:text-brand-gold hover:prose-a:text-brand-gold-light"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-heading text-xl font-semibold text-brand-purple">
              Make a Difference Today
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/volunteer">
                <Button variant="primary" className="w-full">
                  Volunteer With Us
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline-purple" className="w-full">
                  Make a Donation
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-brand-purple">
            More From Our Community
          </h2>
          <Link href="/news">
            <Button variant="primary">View All News & Stories</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
