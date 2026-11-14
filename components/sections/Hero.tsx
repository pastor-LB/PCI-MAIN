"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-28 pb-12 overflow-hidden flex items-center">
      {/* Subtle background gradient instead of image — TrumpRx style */}
      <div className="absolute inset-0 bg-gradient-to-br from-brand-cream via-white to-white pointer-events-none" />

      {/* Optional: Very subtle background image at low opacity */}
      <Image
        src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?w=1600&q=80"
        alt=""
        fill
        priority
        className="object-cover opacity-5"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Mission statement first — answer WHY before asking */}
          <h1 className="text-xs sm:text-sm font-semibold whitespace-nowrap text-brand-purple mb-6">
            Food Pantry & Community Programs in Bridgeport, CT
          </h1>
          <div className="mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="h-px w-10 sm:w-16 bg-brand-gold" aria-hidden="true" />
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-brand-gold-dark">
                Park City Initiative
              </span>
              <span className="h-px w-10 sm:w-16 bg-brand-gold" aria-hidden="true" />
            </div>
            <p className="font-heading text-3xl sm:text-5xl font-bold leading-tight text-brand-purple max-w-3xl mx-auto">
              Providing pathways of hope that lead to real solutions
            </p>
            <p className="mt-4 font-heading text-lg sm:text-2xl italic text-brand-gold-dark">
              One Meal, One Child, and One Block at a time
            </p>
          </div>
          <Badge variant="gold" className="mb-6">Why We Exist</Badge>
          <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            It began with one mother seeking help to feed her family. When she turned to Bishop Jean Williams, a simple act of compassion sparked a movement. Today, that legacy lives on through the One-Stop Shop Food Pantry and Community Resource Market, helping thousands of neighbors facing hunger, economic hardship, and barriers to opportunity.
          </p>
        </motion.div>

        {/* Data as hero — HUGE visual anchor inspired by TrumpRx */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-16"
        >
          <div className="inline-block">
            <p className="text-sm font-bold uppercase tracking-widest text-brand-gold mb-4">
              27 Years of Service
            </p>
            <div className="font-heading text-7xl sm:text-8xl font-bold text-brand-purple leading-none mb-4">
              1,000,000<span className="text-5xl sm:text-6xl align-super">+</span>
            </div>
            <p className="text-2xl sm:text-3xl text-brand-charcoal font-semibold">Meals Distributed in 2025</p>
            <p className="text-lg text-brand-gray mt-2">And counting, every single day</p>
            {/* Photo gallery: snapshot-style PCI photos */}
            <div className="mx-auto mt-10 grid w-[calc(100vw-3rem)] max-w-4xl grid-cols-2 gap-5 sm:gap-7 lg:grid-cols-4">
              {[
                { src: "/images/community-market.png", alt: "Volunteers in yellow vests helping neighbors shop at the Community Market", caption: "Community Market", tilt: "-rotate-2", fit: "object-cover" },
                { src: "/images/financial-literacy.png", alt: "A neighbor receiving a Financial Literacy Course certificate of completion", caption: "Financial Literacy", tilt: "rotate-2", fit: "object-cover" },
                { src: "/images/health-screening.jpg", alt: "Parish nurses providing health screenings for the community", caption: "Health Screenings", tilt: "-rotate-1", fit: "object-cover scale-110" },
                { src: "/images/kids-bus.png", alt: "Three young girls smiling in front of the colorful Park City Initiative bus", caption: "Youth Programs", tilt: "rotate-1", fit: "object-cover" },
              ].map((photo) => (
                <figure
                  key={photo.src}
                  className={`${photo.tilt} rounded-md bg-white p-2 pb-3 shadow-xl ring-1 ring-brand-purple/10 transition duration-300 hover:z-10 hover:rotate-0 hover:scale-105`}
                >
                  <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                    <Image src={photo.src} alt={photo.alt} fill sizes="(min-width: 1024px) 220px, 45vw" className={photo.fit} />
                  </div>
                  <figcaption className="mt-2 font-heading text-sm italic text-brand-purple">{photo.caption}</figcaption>
                </figure>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Proof points with radical whitespace */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-3 gap-4 sm:gap-8 mb-12 max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-heading text-3xl sm:text-4xl font-bold text-brand-gold">900+</p>
            <p className="text-sm text-brand-gray mt-2">Families<br />Weekly</p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-heading text-3xl sm:text-4xl font-bold text-brand-gold">220+</p>
            <p className="text-sm text-brand-gray mt-2">Youth in<br />Programs</p>
          </div>
          <div className="bg-white rounded-lg p-4 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
            <p className="font-heading text-3xl sm:text-4xl font-bold text-brand-gold">27</p>
            <p className="text-sm text-brand-gray mt-2">Years<br />Strong</p>
          </div>
        </motion.div>

        {/* Primary CTA — emphasizing monthly giving */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Button href="/donate?frequency=monthly" variant="gold" size="lg" className="font-bold">
            Give Monthly — Change Lives
          </Button>
          <Button href="/get-help" variant="outline-purple" size="lg">
            Need Help?
          </Button>
        </motion.div>

        {/* Trust signals */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 text-sm text-brand-gray"
        >
          ✓ 501(c)(3) Verified &nbsp;|&nbsp; ✓ $25/month feeds a child for a year &nbsp;|&nbsp;
          ✓ 100% tax-deductible
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-brand-purple"
        aria-hidden="true"
      >
        <ChevronDown className="h-8 w-8" />
      </motion.div>
    </section>
  );
}
