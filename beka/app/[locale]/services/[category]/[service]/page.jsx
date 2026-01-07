'use client';

import Link from 'next/link';
import { useMemo } from 'react';
import { motion } from 'framer-motion';
import { services as servicesData } from '@/app/data/services';

export default function ServiceDetailPage({ params }) {
  const { locale, category, service } = params;

  const data = servicesData[category];
  const item = useMemo(() => {
    if (!data) return null;
    return data.items.find((x) => x.key === service) || null;
  }, [category, service, data]);

  if (!data || !item) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6 text-white">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-2">Not found</h1>
          <Link href={`/${locale}/services`} className="text-blue-400 hover:underline">
            Go back
          </Link>
        </div>
      </div>
    );
  }

  const t = {
    back: locale === 'ka' ? 'უკან დაბრუნება' : 'Back',
    category: locale === 'ka' ? 'კატეგორია' : 'Category',
    services: locale === 'ka' ? 'სერვისები' : 'Services',
    contact: locale === 'ka' ? 'დაგვიკავშირდით' : 'Contact us',
    email: locale === 'ka' ? 'მოგვწერეთ' : 'Email us'
  };

  return (
    <section className="min-h-screen px-4 sm:px-6 py-14 sm:py-20 text-white">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="text-sm text-white/70 flex flex-wrap gap-2 items-center"
        >
          <Link href={`/${locale}/services/${category}`} className="hover:text-white transition">
            {data.title[locale]}
          </Link>
          <span className="text-white/40">/</span>
          <span className="text-white">{item.title[locale]}</span>
        </motion.div>

        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
          className="mt-6 rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md p-6 sm:p-8"
        >
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-black/35 border border-white/10 px-3 py-1 text-xs sm:text-sm text-white/80 mb-4">
                <span className="h-2 w-2 rounded-full bg-blue-500" />
                {t.services}
              </div>

              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                {item.title[locale]}
              </h1>

              <div className="mt-4 w-24 h-1 bg-blue-500 rounded-full" />
            </div>

            <Link
              href={`/${locale}/services/${category}`}
              className="shrink-0 text-sm px-4 py-2 rounded-xl border border-white/20 hover:border-white/35 hover:bg-white/5 transition"
            >
              ← {t.back}
            </Link>
          </div>

          <p className="mt-5 text-white/85 leading-relaxed whitespace-pre-line text-sm sm:text-base">
            {item.description[locale]}
          </p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mt-8"
        >
          <div className="rounded-2xl bg-black/35 border border-white/10 backdrop-blur-md p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold">
                {locale === 'ka' ? 'გსურთ ამ სერვისზე კონსულტაცია?' : 'Want a consultation about this service?'}
              </h3>
              <p className="text-white/75 text-sm sm:text-base mt-1">
                {locale === 'ka'
                  ? 'დაგვიკავშირდით და შევარჩიოთ საუკეთესო გადაწყვეტა.'
                  : 'Contact us and we’ll help you choose the best solution.'}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
              <Link
                href={`/${locale}/contacts`}
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
              >
                {t.contact}
              </Link>
              <a
                href="mailto:info@example.com"
                className="w-full sm:w-auto text-center px-5 py-2.5 rounded-xl border border-white/20 hover:border-white/35 hover:bg-white/5 transition font-semibold"
              >
                {t.email}
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
