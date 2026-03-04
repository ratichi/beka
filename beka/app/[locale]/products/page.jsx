'use client';

import { motion } from 'framer-motion';
import { Construction } from 'lucide-react';

export default function ProductsPage({ params }) {
  const { locale } = params;

  const t = {
    en: {
      title: "Products",
      subtitle: "This section is currently in progress.",
      soon: "Coming Soon"
    },
    ka: {
      title: "პროდუქტები",
      subtitle: "ეს სექცია ამჟამად მუშავდება.",
      soon: "მალე დაემატება"
    }
  }[locale];

  return (
    <section className="max-w-5xl mx-auto px-6 py-24 flex justify-center">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="
          bg-black/40
          backdrop-blur-xl
          border border-white/10
          rounded-2xl
          p-12
          text-center
          shadow-xl
          max-w-xl
        "
      >
        <div className="flex justify-center mb-6">
          <Construction className="w-12 h-12 text-blue-400" />
        </div>

        <h1 className="text-3xl font-bold text-white mb-3">
          {t.title}
        </h1>

        <p className="text-gray-300 mb-6">
          {t.subtitle}
        </p>

        <span className="
          inline-block
          px-4 py-1.5
          text-sm
          rounded-full
          bg-blue-500/20
          text-blue-400
          border border-blue-500/30
        ">
          {t.soon}
        </span>

      </motion.div>

    </section>
  );
}