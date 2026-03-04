'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function AboutUsPage({ params }) {
  const { locale } = React.use(params);

  const text = {
    ka: {
      title: 'ჩვენ შესახებ',
      content: `ჩვენ ვართ პროფესიონალი IT სპეციალისტების გუნდი, რომელსაც 15 წლიანი გამოცდილება აქვს საინფორმაციო ტექნოლოგიების მიმართულებით. ჩვენი კომპეტენცია მოიცავს როგორც ქსელურ, ასევე სერვერულ ინფრასტრუქტურას, რაც გვაძლევს შესაძლებლობას შევიმუშაოთ მორგებული და საიმედო გადაწყვეტილებები.

ვამაყობთ იმით, რომ მზად ვართ ეფექტიანად და პასუხისმგებლობით შევასრულოთ ნებისმიერი სირთულის ამოცანა, რათა დავეხმაროთ ჩვენს კლიენტებს ტექნოლოგიური მიზნების მიღწევაში.`
    },
    en: {
      title: 'About Us',
      content: `We are a team of professional IT specialists with 15 years of experience in the field of information technology. Our expertise covers both networking and server infrastructure, enabling us to design tailored and reliable solutions.

We take pride in being ready to effectively and responsibly tackle challenges of any complexity, helping our clients achieve their technological goals.`
    }
  };

  const t = text[locale] ?? text.en; // fallback safety

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-16 sm:py-20">
      <motion.h1
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="text-4xl sm:text-5xl font-bold text-white mb-10 text-center"
      >
        {t.title}
      </motion.h1>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        transition={{ delay: 0.2 }}
        className="relative rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 p-8 sm:p-12"
      >
        <p className="text-white/90 leading-relaxed whitespace-pre-line text-lg">
          {t.content}
        </p>

        <div className="pointer-events-none absolute -inset-20 opacity-40">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-cyan-400/10 to-transparent blur-3xl" />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        className="grid sm:grid-cols-3 gap-6 mt-14"
      >
        <div className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">15+</div>
          <div className="text-white/70 mt-1">{locale === 'ka' ? 'წლის გამოცდილება' : 'Years Experience'}</div>
        </div>

        <div className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">100+</div>
          <div className="text-white/70 mt-1">{locale === 'ka' ? 'დასრულებული პროექტი' : 'Completed Projects'}</div>
        </div>

        <div className="bg-black/40 border border-white/10 backdrop-blur-md rounded-2xl p-6 text-center">
          <div className="text-3xl font-bold text-blue-400">24/7</div>
          <div className="text-white/70 mt-1">{locale === 'ka' ? 'ტექნიკური მხარდაჭერა' : 'Technical Support'}</div>
        </div>
      </motion.div>
    </div>
  );
}