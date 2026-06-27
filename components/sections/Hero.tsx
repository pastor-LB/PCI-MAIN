"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-white pt-20 pb-12 overflow-hidden flex items-center">
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
          <Badge variant="gold" className="mb-6">Why We Exist</Badge>
          <p className="text-xl text-brand-gray mb-8 max-w-2xl mx-auto leading-relaxed">
            When one grandmother asked Bishop Jean Williams for help feeding her family,
            a movement began. Today, Park City Initiative answers that same call for thousands
            of neighbors facing food insecurity, limited opportunity, and disconnected neighborhoods.
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
            <p className="text-2xl sm:text-3xl text-brand-charcoal font-semibold">Meals Distributed</p>
            <p className="text-lg text-brand-gray mt-2">And counting, every single day</p>
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
