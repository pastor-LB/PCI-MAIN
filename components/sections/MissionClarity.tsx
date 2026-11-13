import Image from "next/image";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function MissionClarity() {
  return (
    <Section background="white">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div className="relative h-72 overflow-hidden rounded-2xl shadow-lg sm:h-96">
          <Image
            src="/images/pci-volunteers.jpg"
            alt="PCI volunteers at the food pantry, smiling while helping the community"
            fill
            className="object-cover"
          />
        </div>
        <div>
          <span className="text-sm font-bold uppercase tracking-wide text-brand-gold">
            Our Mission
          </span>
          <h2 className="mt-2 font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            We don&apos;t just feed people. We build futures.
          </h2>
          <p className="mt-4 text-brand-gray">
            Our mission is to help transform Bridgeport and neighboring communities by decreasing food insecurity, aiding families in crisis, and breaking generational cycles of poverty.
          </p>
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
