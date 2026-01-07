'use client';
import React from 'react';
import { services } from '@/app/data/services';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function ServiceCategoryPage({ params }) {
  const { locale, category } = React.use(params);
  const data = services[category];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Service not found</h1>
          <p className="text-white/70">Please check the URL.</p>
        </div>
      </div>
    );
  }

  const heroVariants = {
    hidden: { opacity: 0, y: -18 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  const listVariants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 26, scale: 0.98 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 py-16 sm:py-24 text-white">
      {/* Hero */}

      <motion.div
        variants={heroVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto mb-10 sm:mb-16"
      >
        <div className="inline-flex items-center gap-2 rounded-full bg-black/35 border border-white/10 px-3 py-1 text-xs sm:text-sm text-white/80 mb-4">
          <span className="h-2 w-2 rounded-full bg-blue-500" />
          {locale === 'ka' ? 'სერვისები' : 'Services'}
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
          {data.title[locale]}
        </h1>

        <p className="mt-3 sm:mt-4 text-white/75 max-w-2xl text-sm sm:text-base leading-relaxed">
          {locale === 'ka'
            ? 'აქ ნახავთ დეტალურ აღწერას სერვისების შესახებ — რა გავაკეთებთ, როგორ ვაკეთებთ და რას მიიღებთ შედეგად.'
            : 'Explore detailed descriptions of our services — what we do, how we do it, and what you get as a result.'}
        </p>

        <div className="mt-6 w-24 h-1 bg-blue-500 rounded-full" />
      </motion.div>

      {/* Cards */}
      
      <motion.div
        variants={listVariants}
        initial="hidden"
        animate="show"
        className="max-w-5xl mx-auto grid grid-cols-1 gap-4 sm:gap-6"
      >
        {data.items.map((item) => (
                <Link
                href={`/${locale}/services/${category}/${item.key}`}
                className="group inline-flex items-center gap-1 text-sm sm:text-base font-medium text-blue-400 hover:text-blue-300 transition"
                >
          <motion.div
            key={item.key}
            variants={cardVariants}
            viewport={{ once: true, amount: 0.2 }}
            whileInView="show"
            initial="hidden"
            className="group relative overflow-hidden rounded-2xl bg-black/35 backdrop-blur-md border border-white/10 hover:border-blue-500/60 transition"
          >
            {/* subtle glow */}
            <div className="pointer-events-none absolute -inset-24 opacity-0 group-hover:opacity-100 transition duration-500">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/15 via-cyan-500/10 to-transparent blur-2xl" />
            </div>

            <div className="p-5 sm:p-7 md:p-8">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-xl sm:text-2xl font-semibold leading-snug">
                  {item.title[locale]}
                </h2>

                <span className="shrink-0 text-xs sm:text-sm text-white/60 border border-white/15 rounded-full px-2 py-1">
                  {locale === 'ka' ? 'სერვისი' : 'Service'}
                </span>
              </div>

              <p className="mt-3 sm:mt-4 text-white/80 leading-relaxed whitespace-pre-line text-sm sm:text-base">
                {item.description[locale]}
              </p>
            </div>


            {/* bottom accent */}
            <div className="h-1 w-full bg-gradient-to-r from-blue-500/70 via-cyan-400/50 to-transparent opacity-40 group-hover:opacity-80 transition" />
          </motion.div>
          </Link>
        ))}
      </motion.div>

      {/* CTA (mobile friendly) */}
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-5xl mx-auto mt-10 sm:mt-16"
      >
        <div className="rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md p-5 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold">
              {locale === 'ka' ? 'გსურთ კონსულტაცია?' : 'Need a consultation?'}
            </h3>
            <p className="text-white/75 text-sm sm:text-base mt-1">
              {locale === 'ka'
                ? 'დაგვიკავშირდით და ერთად შევარჩიოთ საუკეთესო გადაწყვეტა.'
                : 'Contact us and we’ll help you choose the best solution.'}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <a
              href={`/${locale}/contacts`}
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
            >
              {locale === 'ka' ? 'კონტაქტი' : 'Contact'}
            </a>
            <a
              href="mailto:info@example.com"
              className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/35 hover:bg-white/5 transition font-semibold"
            >
              {locale === 'ka' ? 'მოგვწერეთ' : 'Email us'}
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
