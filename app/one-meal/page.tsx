import type { Metadata } from "next";
import type { ReactNode } from "react";
import { generatePageMetadata } from "@/lib/metadata";
import { localBusinessSchema, breadcrumbSchema } from "@/lib/schema";
import { SITE } from "@/lib/constants";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PageHero from "@/components/sections/PageHero";
import Section from "@/components/ui/Section";
import Card from "@/components/ui/Card";
import GetHelpForm from "@/components/forms/GetHelpForm";
import {
  Store,
  HeartHandshake,
  Truck,
  Clock,
  CreditCard,
  ShoppingBasket,
  CalendarClock,
  Megaphone,
  Phone,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = generatePageMetadata({
  title: "Bishop Jean Williams Food Pantry | Free Food Bridgeport CT",
  description:
    "Free food pantry, senior care boxes, and mobile pantry services from the Bishop Jean Williams Food Pantry at Park City Initiative in Bridgeport, CT.",
  path: "/one-meal",
});

const breadcrumbItems = [
  { name: "Home", href: "/" },
  { name: "Programs", href: "/programs" },
  { name: "One Meal", href: "/one-meal" },
];

const marketSchedule = [
  { day: "Tuesdays", hours: "10:00 am – 2:00 pm" },
  { day: "Wednesdays", hours: "12:00 pm – 4:00 pm" },
  { day: "Thursdays", hours: "1:00 pm – 6:00 pm" },
];

const tips = [
  {
    title: "Always Bring Your Pantry Card",
    icon: CreditCard,
    points: [
      "Please have your pantry card with you at every visit to ensure a smooth check-in process.",
      "Only registered cardholders are permitted to shop. Please do not send someone else to shop on your behalf.",
    ],
  },
  {
    title: "Enjoy Our In-Pantry Shopping Experience",
    icon: ShoppingBasket,
    intro:
      "Our pantry offers a walk-in, choice-shopping experience, allowing you to select from available items.",
    points: [
      "Please note that some items, such as canned vegetables, may be pre-packed, and product availability may vary.",
    ],
  },
  {
    title: "Follow Your Scheduled Appointment Time",
    icon: CalendarClock,
    points: [
      "Please arrive no earlier than 15 minutes before your scheduled appointment.",
      "To maintain an orderly and comfortable environment, we do not permit lines to form outside the building.",
      "You may enter the building 15 minutes before your appointment to check in and receive a beeper. You may then return to your vehicle and wait until your beeper vibrates, signaling that it is your turn to shop.",
      "If you miss your scheduled shopping time, please call the number listed on your pantry card to reschedule.",
    ],
    outro: "Your cooperation helps us provide a smooth and timely shopping experience for everyone.",
  },
  {
    title: "Stay Informed",
    icon: Megaphone,
    intro:
      "Please pay attention to our communications for updates regarding our shopping model, available services, and any changes to our operations. We are committed to providing the best possible service while adapting to the needs of our community.",
    points: [],
  },
];

function ScheduleBox({ children }: { children: ReactNode }) {
  return (
    <div className="mt-5 rounded-xl bg-brand-cream p-4">
      <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-dark">
        <Clock className="h-4 w-4" aria-hidden="true" />
        Schedule
      </p>
      <div className="mt-2 text-sm text-brand-charcoal">{children}</div>
    </div>
  );
}

export default function OneMealPage() {
  return (
    <>
      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }}
      />
      <script
        type="application/ld+json"

        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema(breadcrumbItems.map((i) => ({ name: i.name, url: `${SITE.url}${i.href}` })))
          ),
        }}
      />
      <PageHero title="“We started by giving a few bags of groceries. Today, we open our doors to our city.”" tall />
      <Breadcrumbs items={breadcrumbItems} />

      {/* Programs */}
      <Section background="white">
        {/* Featured: Community Market */}
        <div className="overflow-hidden rounded-2xl border-t-4 border-brand-gold bg-white shadow-lg lg:grid lg:grid-cols-5">
          <div className="p-6 sm:p-8 lg:col-span-3">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/15">
                <Store className="h-6 w-6 text-brand-purple" aria-hidden="true" />
              </span>
              <h2 className="font-heading text-2xl font-semibold text-brand-purple sm:text-3xl">
                Community Market
              </h2>
            </div>
            <p className="mt-4 text-brand-gray">
              Our market aims to provide a personalized shopping experience, offering a variety of fresh
              produce and essential items to our neighbors in need. Our Community Market will provide a
              one-stop experience that will include a variety of other community resources.
            </p>
            <p className="mt-4 font-semibold text-brand-charcoal">
              We believe that everyone deserves access to nutritious food, and our market is a step towards
              ensuring that our community thrives with health and dignity.
            </p>
          </div>
          <div className="bg-brand-purple p-6 text-white sm:p-8 lg:col-span-2">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-gold-light">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Market Schedule
            </p>
            <ul className="mt-4 divide-y divide-white/15">
              {marketSchedule.map((s) => (
                <li key={s.day} className="flex flex-wrap items-baseline justify-between gap-2 py-3">
                  <span className="font-semibold">{s.day}</span>
                  <span className="text-white/85">{s.hours}</span>
                </li>
              ))}
            </ul>
            <p className="mt-4 rounded-lg bg-white/10 p-3 text-sm text-white/90">
              All shoppers have scheduled appointments. New shoppers are welcome to sign up on{" "}
              <span className="font-semibold text-brand-gold-light">Mondays between 10:00 am – 2:00 pm</span>.
            </p>
          </div>
        </div>

        {/* Senior Care + Mobile Pantry */}
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <Card borderColor="purple">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-purple/10">
                <HeartHandshake className="h-6 w-6 text-brand-purple" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-brand-purple">Senior Care Boxes</h3>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              Our Senior Care Box delivery program provides essential pantry items to seniors in need. We
              hand-deliver these boxes, making it convenient for our seniors to access nutritious food and
              household essentials. This program is our way of ensuring that our seniors are taken care of
              and can live comfortably.
            </p>
            <ScheduleBox>Available to seniors and homebound individuals as space becomes available</ScheduleBox>
          </Card>
          <Card borderColor="charcoal">
            <div className="flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-purple/10">
                <Truck className="h-6 w-6 text-brand-purple" aria-hidden="true" />
              </span>
              <h3 className="font-heading text-xl font-semibold text-brand-purple">Mobile Pantry</h3>
            </div>
            <p className="mt-4 text-sm text-brand-gray">
              Park City Initiative, in partnership with the Klein Memorial, serves as one of the site
              coordinators for the CT Foodshare Mobile Pantry to provide fresh, nutritious food directly to
              families in need.
            </p>
            <ScheduleBox>
              <span className="font-semibold">Tuesdays, Bi-weekly</span>
              <br />
              9:00 am – 10:00 am
              <br />
              910 Fairfield Ave., Bridgeport
            </ScheduleBox>
          </Card>
        </div>
      </Section>

      {/* Tips */}
      <Section background="cream">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-3xl font-semibold text-brand-purple sm:text-4xl">
            Tips for an Enjoyable Shopping Experience
          </h2>
          <p className="mt-4 text-brand-gray">
            We want every visit to the Bishop Jean Williams Community Market to be a pleasant, welcoming, and
            convenient experience. Here are a few helpful reminders to make your visit go smoothly.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {tips.map((tip, index) => {
            const Icon = tip.icon;
            return (
              <div key={tip.title} className="relative rounded-2xl bg-white p-6 pt-8 shadow-md sm:p-8">
                <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold font-heading text-lg font-bold text-white shadow">
                  {index + 1}
                </span>
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 shrink-0 text-brand-purple" aria-hidden="true" />
                  <h3 className="text-lg font-semibold text-brand-charcoal">{tip.title}</h3>
                </div>
                {tip.intro ? <p className="mt-3 text-sm text-brand-gray">{tip.intro}</p> : null}
                {tip.points.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {tip.points.map((point) => (
                      <li key={point} className="flex gap-2 text-sm text-brand-gray">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-gold" aria-hidden="true" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                ) : null}
                {tip.outro ? (
                  <p className="mt-3 text-sm font-semibold text-brand-purple">{tip.outro}</p>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Tip 5: Need Additional Help */}
        <div className="relative mt-10 rounded-2xl bg-brand-purple p-6 pt-10 text-white shadow-lg sm:p-10">
          <span className="absolute -top-4 left-6 flex h-10 w-10 items-center justify-center rounded-full bg-brand-gold font-heading text-lg font-bold text-white shadow">
            5
          </span>
          <h3 className="font-heading text-2xl font-semibold sm:text-3xl">
            Need Additional Help? We&apos;re Here for You!
          </h3>
          <p className="mt-4 text-white/90">
            We understand that reaching out for assistance can sometimes be a BIG step. Please know that you
            are not alone. We are here to help connect you and your family with the resources you need.
          </p>
          <p className="mt-4 text-white/90">
            If you or your family need food assistance or other community resources, our Resource
            Specialists are ready to assist you. To help us better understand your needs and connect you with
            the appropriate services, we ask that you complete a brief intake process before accessing these
            additional resources.
          </p>
          <p className="mt-6 text-sm font-bold uppercase tracking-widest text-brand-gold-light">
            Getting Started Is Simple
          </p>
          <div className="mt-4 grid gap-4 sm:grid-cols-2">
            <a
              href="tel:+12038730260"
              className="flex items-start gap-3 rounded-xl bg-white/10 p-4 transition hover:bg-white/20"
            >
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-brand-gold-light" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Call Us</span>
                <span className="text-sm text-white/85">
                  Contact us at (203) 873-0260 for direct assistance.
                </span>
              </span>
            </a>
            <a
              href="#request-help"
              className="flex items-start gap-3 rounded-xl bg-brand-gold p-4 text-brand-purple-dark transition hover:bg-brand-gold-light"
            >
              <ArrowRight className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
              <span>
                <span className="block font-semibold">Request Help Online</span>
                <span className="text-sm">
                  Complete our online request form. A member of our team will follow up with you.
                </span>
              </span>
            </a>
          </div>
        </div>
      </Section>

      {/* Location + request form */}
      <Section background="white" id="request-help">
        <div className="grid gap-10 lg:grid-cols-2">
          <Card borderColor="gold">
            <h3 className="text-lg font-semibold text-brand-charcoal">Visit the Community Market</h3>
            <ul className="mt-4 space-y-2 text-sm text-brand-gray">
              <li>New shopper sign-up: Mondays, 10:00 am – 2:00 pm</li>
              <li>{SITE.address.full}</li>
              <li>{SITE.phoneDisplay}</li>
            </ul>
            <div className="mt-6 aspect-video overflow-hidden rounded-lg">
              <iframe
                title="Map to Bishop Jean Williams Food Pantry"
                src="https://www.google.com/maps?q=857+Howard+Ave+Bridgeport+CT+06605&output=embed"
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
          <div>
            <h3 className="text-lg font-semibold text-brand-charcoal">Request Help Online</h3>
            <p className="mt-2 text-sm text-brand-gray">
              Fill out the form below and a member of our team will follow up with you.
            </p>
            <div className="mt-4">
              <GetHelpForm />
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
