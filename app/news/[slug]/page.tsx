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
    title: "Park City Kidz Afterschool and Summer Camp Programs: Where Learning Meets Growth",
    category: "Program Updates",
    date: "June 15, 2026",
    image: "https://images.unsplash.com/photo-1427504494785-cdcd6c6dbdea?w=1200&q=80",
    content: `<p class="text-xl leading-relaxed text-brand-charcoal">As the year begins, our Park City Kidz Afterschool and Summer Camp programs welcome <strong class="text-brand-purple">200+ children</strong> into life-skills training and mentorship programs.</p>

<section class="mt-12 overflow-hidden rounded-2xl border border-brand-gold/30 bg-brand-cream shadow-sm">
<div class="bg-brand-gold px-6 py-5 sm:px-8">
<p class="!mt-0 text-xs font-bold uppercase tracking-[0.25em] text-brand-purple-dark">Park City Kidz Mobile</p>
<h2 class="mt-1 font-heading text-3xl font-bold text-white sm:text-4xl">Spring &amp; Fall</h2>
<p class="!mt-1 font-heading text-lg italic text-brand-purple-dark">Taking Hope and Opportunity into the Neighborhood</p>
</div>
<div class="px-6 py-6 sm:px-8">
<div class="flex flex-wrap gap-2">
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">May · June · September</span>
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">Ages 5–12</span>
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">Home visits every 2 weeks</span>
</div>
<p>During the spring and fall seasons, Park City Kidz Mobile brings encouragement, opportunity, and life-skills development directly into some of Bridgeport's most underserved neighborhoods. Throughout May, June, and September, our mobile outreach team connects with children ages 5–12 through engaging, interactive lessons, games, drama, and creative activities designed to build confidence, strengthen character, encourage positive decision-making, and help children recognize their God-given potential.</p>
<p>But our commitment doesn't end with the children's activities. Every two weeks, our trained and compassionate team members make home visits to connect with participating families, build meaningful relationships, identify needs, and provide essential resources and support. By reaching beyond the mobile site experience and into the home, we are able to encourage not only the child, but the entire family.</p>
<p>Your support helps us bring more than a program into these neighborhoods. It helps us bring caring relationships, practical resources, encouragement, and opportunities for children and families to thrive. Whether through giving, volunteering, or sharing your talents, you can help us make a difference; <strong class="text-brand-purple">one child, one family, and one neighborhood at a time.</strong></p>
</div>
</section>

<section class="mt-12 overflow-hidden rounded-2xl border border-brand-purple/20 bg-brand-cream shadow-sm">
<div class="bg-brand-purple px-6 py-5 sm:px-8">
<p class="!mt-0 text-xs font-bold uppercase tracking-[0.25em] text-brand-gold-light">Overnight Summer Camp</p>
<h2 class="mt-1 font-heading text-3xl font-bold text-white sm:text-4xl">Summer</h2>
<p class="!mt-1 font-heading text-lg italic text-white/85">A Week of Adventure. A Lifetime of Memories.</p>
</div>
<div class="px-6 py-6 sm:px-8">
<div class="flex flex-wrap gap-2">
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">One full week</span>
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">Overnight camp</span>
<span class="rounded-full bg-white px-3 py-1 text-sm font-semibold text-brand-purple shadow-sm">Bus trip to Pennsylvania</span>
</div>
<p>For many children, the opportunity to experience life beyond their everyday surroundings can open the door to a world of possibilities. Each summer, Park City Initiative Corp gives children the chance to step outside the familiar, leave the city behind, board a bus to Pennsylvania, and embark on an unforgettable week of overnight summer camp.</p>
<p>For some, it may be their first time traveling away from home, exploring new surroundings, or discovering just how much they are capable of. Beyond the excitement and adventure, camp provides opportunities to build lasting friendships, develop confidence and independence, explore new interests, and create memories they will carry for years to come.</p>
<p>In a safe, nurturing, and enriching environment, children are free to laugh, learn, explore, take on new challenges, and simply enjoy being children. They return home with more than stories of a great summer experience; they return with new friendships, a greater sense of confidence, and a broader view of what is possible.</p>
<p>Your generosity helps make these experiences possible.</p>
</div>
</section>

<blockquote class="mt-12 border-l-4 border-brand-gold pl-6 font-heading text-2xl italic leading-snug text-brand-purple">Because sometimes, giving a child the opportunity to experience something beyond what they know today can change what they believe is possible tomorrow.</blockquote>`,
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
      <div className="bg-gradient-to-br from-brand-purple to-brand-purple-dark px-4 pt-32 pb-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center gap-3 text-sm">
            <span className="font-bold uppercase tracking-wider text-brand-gold-light">{article.category}</span>
            <span className="text-white/50" aria-hidden="true">•</span>
            <span className="text-white/80">{article.date}</span>
          </div>
          <h1 className="mt-3 font-heading text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>
        </div>
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white" padding="lg">
        <article className="mx-auto max-w-3xl">
          <div
            className="text-lg leading-relaxed text-brand-gray [&_a]:text-brand-gold [&_h3]:mt-10 [&_h3]:font-heading [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:text-brand-purple [&_li]:mt-1 [&_p]:mt-4 [&_strong]:font-semibold [&_ul]:mt-4 [&_ul]:list-disc [&_ul]:pl-6"
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
