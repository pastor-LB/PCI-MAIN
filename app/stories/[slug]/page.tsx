import type { Metadata } from "next";
import Link from "next/link";
import { generatePageMetadata } from "@/lib/metadata";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

// Story data structure
const stories: Record<
  string,
  {
    name: string;
    role: string;
    image: string;
    content: string;
  }
> = {
  "maria-santiesteban-food-security": {
    name: "Maria Santiesteban",
    role: "Food Pantry Recipient",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
    content: `<p>When I lost my job in 2023, I thought we were in serious trouble. I have three kids — ages 7, 10, and 13 — and I was terrified of not being able to feed them. I was applying for jobs everywhere, but nothing was coming through, and my savings were running out fast.</p>

<p>A neighbor told me about the Bishop Jean Williams Food Pantry. I was nervous at first — I'd never needed help like that before. But when I walked through the doors, I was met with such kindness and respect. There was no judgment, just genuine care.</p>

<h3>Real Help at a Critical Time</h3>

<p>The food pantry gave me breathing room. With one major expense taken care of, I could focus on finding stable work and taking care of my family. The staff didn't just hand me food — they connected me with job training resources and helped me understand my options.</p>

<p>It took six months, but I found a steady job. Now I volunteer at the pantry too. I know what it feels like to be on the other side of that counter, and I want to help others the way I was helped.</p>

<h3>A Moment That Changed Everything</h3>

<p>There was one moment that really stuck with me. I was packing a bag of fresh vegetables and I started crying. My youngest asked me, "Mommy, why are you sad?" and I realized I was crying from relief, not sadness. We weren't just going to survive — we were going to be okay.</p>

<p>That's what Park City Initiative does. They don't just distribute food. They restore dignity and hope.</p>

<h3>Looking Forward</h3>

<p>Today, we're stable. My kids are doing well in school, and I'm in a better place than I was. But I'll never forget what it felt like to not know where our next meal would come from. And I'm grateful to everyone — the staff, the volunteers, the donors — who made sure families like mine never have to face that alone.</p>`,
  },
  "darnell-washington-volunteer": {
    name: "Darnell Washington",
    role: "Volunteer & Youth Mentor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
    content: `<p>I grew up in Bridgeport, not too far from where Park City Initiative operates. My childhood wasn't easy — we didn't have much, and there weren't a lot of adults around who believed in me or my friends. I made some mistakes when I was younger, but eventually, I found my way.</p>

<p>About five years ago, I decided I wanted to give back to my community. I'd made it out, and I wanted to be for other kids what I wish someone had been for me — someone who believed in their potential.</p>

<h3>Finding My Purpose</h3>

<p>I started volunteering with Park City Initiative at the food pantry, but what drew me in was the youth mentorship program. I now mentor three young men, ages 14, 16, and 17. We meet regularly, talk about school, relationships, future plans, and just life in general.</p>

<p>One of them, DeShawn, came to the program with real anger issues. He was getting in trouble at school, having conflicts at home. Over the past two years, I've watched him completely transform. He's going to graduate next year, and we're looking at colleges that offer sports scholarships for basketball.</p>

<h3>The Unexpected Gift</h3>

<p>People think volunteering is about what you give to others. They don't tell you how much you get in return. Being a mentor to these young men has given my life more meaning than I thought possible. When DeShawn got his college acceptance letter, I cried harder than I would have if it was my own.</p>

<p>This community, this organization, saved me in a different way than it saved others. It gave me purpose and connection and a sense that my life matters.</p>

<h3>An Invitation</h3>

<p>If you're thinking about volunteering, I want you to know: you don't need experience. You just need to care. And when you do this work, you'll discover something about yourself that you didn't know before.</p>`,
  },
  "patricia-lopez-scamp-graduate": {
    name: "Patricia Lopez",
    role: "S.C.A.M.P. Graduate, College Student",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80",
    content: `<p>I'll be honest — when I was twelve years old, I didn't think I would make it to college. My neighborhood was rough, my family struggled with poverty, and I didn't see examples of people like me in college classrooms. I was smart, but I didn't believe that smart was enough.</p>

<p>That's when I went to S.C.A.M.P. — Summer Community and Arts Mentorship Program — and everything changed.</p>

<h3>More Than a Summer Camp</h3>

<p>S.C.A.M.P. was supposed to be a fun summer program, which it was. But it was also so much more. We weren't just playing games and making art. We were learning about ourselves and what we were capable of.</p>

<p>My mentor, Ms. Jackson, saw something in me that I didn't see in myself. She pushed me to dream bigger, to take harder classes, to compete in academic competitions. When I got my first participation trophy in the state science fair, she hugged me like I'd won the Nobel Prize.</p>

<h3>The Mentorship That Matters</h3>

<p>I stayed connected with S.C.A.M.P. through high school. I attended college prep workshops, got help with essays, and had people in my corner who genuinely believed I would make it. When you're a first-generation college student from a low-income neighborhood, that belief is everything.</p>

<p>My grades were good, but my confidence was what got me through. And that confidence came from people at Park City Initiative who invested in me.</p>

<h3>From Participant to Peer Mentor</h3>

<p>This year, I'm in my second year at the University of Connecticut, studying engineering. And guess what? I volunteered to be a peer mentor for S.C.A.M.P. participants. I want to be for other girls what Ms. Jackson was for me.</p>

<p>When I tell young people in the program that I'm studying engineering, I see their eyes light up. They see themselves differently. That's the power of seeing yourself represented in possibility.</p>

<h3>Gratitude</h3>

<p>Park City Initiative didn't save my life in the way it does for families facing food insecurity, though it did that too — the free camp meant my parents weren't spending money on childcare they couldn't afford. But more than that, it saved my dreams. It showed me that people in my community cared enough to invest in my future, and that made all the difference.</p>`,
  },
};

interface StoryPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata(
  props: StoryPageProps
): Promise<Metadata> {
  const params = await props.params;
  const story = stories[params.slug];

  if (!story) {
    return generatePageMetadata({
      title: "Story Not Found",
      description: "The story you are looking for could not be found.",
      path: `/stories/${params.slug}`,
    });
  }

  return generatePageMetadata({
    title: `${story.name} — Park City Initiative Story`,
    description: story.name,
    path: `/stories/${params.slug}`,
  });
}

export default async function StoryPage(props: StoryPageProps) {
  const params = await props.params;
  const story = stories[params.slug];

  if (!story) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-purple">Story Not Found</h1>
          <Link href="/stories">
            <Button className="mt-6">Back to Stories</Button>
          </Link>
        </div>
      </div>
    );
  }

  const breadcrumbItems = [
    { name: "Home", href: "/" },
    { name: "Stories", href: "/stories" },
    { name: story.name, href: `/stories/${params.slug}` },
  ];

  return (
    <>
      <div className="relative h-96 w-full overflow-hidden bg-gray-200 md:h-[500px]">
        <img
          src={story.image}
          alt={story.name}
          className="h-full w-full object-cover"
        />
      </div>

      <Breadcrumbs items={breadcrumbItems} />

      <Section background="white" padding="lg">
        <article className="mx-auto max-w-3xl">
          <div className="mb-8">
            <h1 className="font-heading text-4xl font-bold text-brand-purple">{story.name}</h1>
            <p className="mt-2 text-lg font-medium text-brand-gold">{story.role}</p>
          </div>

          <div
            className="prose prose-lg max-w-none text-brand-gray prose-headings:font-heading prose-headings:font-bold prose-headings:text-brand-purple prose-h3:text-2xl prose-strong:text-brand-charcoal prose-a:text-brand-gold hover:prose-a:text-brand-gold-light"
            dangerouslySetInnerHTML={{ __html: story.content }}
          />

          <div className="mt-12 border-t border-gray-200 pt-8">
            <h3 className="mb-4 font-heading text-xl font-semibold text-brand-purple">
              Help Us Create More Stories Like This
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
              <Link href="/volunteer">
                <Button variant="primary" className="w-full">
                  Become a Mentor
                </Button>
              </Link>
              <Link href="/donate">
                <Button variant="outline-purple" className="w-full">
                  Support Our Programs
                </Button>
              </Link>
            </div>
          </div>
        </article>
      </Section>

      <Section background="cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 font-heading text-2xl font-semibold text-brand-purple">
            More Stories of Impact
          </h2>
          <Link href="/stories">
            <Button variant="primary">View All Stories</Button>
          </Link>
        </div>
      </Section>
    </>
  );
}
