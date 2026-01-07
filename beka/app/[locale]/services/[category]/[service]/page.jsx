'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { services as servicesData } from '@/app/data/services';

export default function ServiceDetailPage({ params }) {
  const { locale, category, service } = React.use(params);

  const data = servicesData[category];
  const item = useMemo(() => data?.items?.find((x) => x.key === service) ?? null, [data, service]);

  if (!data || !item) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">
            {locale === 'ka' ? 'ვერ მოიძებნა' : 'Not found'}
          </h1>
          <Link href={`/${locale}/services/${category}`} className="text-blue-400 hover:underline">
            {locale === 'ka' ? 'უკან დაბრუნება' : 'Go back'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <section className="relative z-10 min-h-screen px-4 sm:px-6 py-14 sm:py-20 text-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: 'easeOut' }}
          className="rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              {item.title[locale]}
            </h1>

            <Link
              href={`/${locale}/services/${category}`}
              className="shrink-0 text-sm px-4 py-2 rounded-xl border border-white/20 hover:border-white/35 hover:bg-white/5 transition"
            >
              ← {locale === 'ka' ? 'უკან' : 'Back'}
            </Link>
          </div>

          <p className="mt-5 text-white/85 leading-relaxed whitespace-pre-line text-sm sm:text-base">
            {item.description[locale]}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
