import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function MissionClarity() {
  return (
    <Section background="white" className="!pb-0 sm:!pb-0">
      <div className="mx-auto max-w-3xl text-center">
        <div>
          <h2 className="font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            We don&apos;t just feed people. We build futures.
          </h2>
          <span className="mt-6 block text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Mission
          </span>
          <p className="mt-4 text-brand-gray">
            Our mission is to help transform Bridgeport and neighboring communities by decreasing food insecurity, aiding families in crisis, and breaking generational cycles of poverty.
          </p>
          <span className="mt-8 block text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Vision
          </span>
          <p className="mt-4 text-brand-gray">
            We envision a community where the heart of God is woven into the very fabric of our city, breaking the cycle of need and fostering resilience and positive change for generations to come.
          </p>
          <div className="mt-6">
            <Button href="/our-story" variant="ghost" className="!px-0">
              Read Our Full Story →
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
}
