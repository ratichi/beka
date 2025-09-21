'use client';

import { motion } from 'framer-motion';

export default function Hero({ locale }) {
  return (
    <section className="relative w-full h-[80vh] flex items-center justify-between px-12">
      {/* Left intro box */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: 'easeOut' }}
        className="max-w-lg bg-black/50 backdrop-blur-md rounded-xl p-8 text-white shadow-lg"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {locale === 'ka' ? 'მოგესალმებით!' : 'Welcome!'}
        </h1>
        <p className="text-lg md:text-xl leading-relaxed mb-6 text-gray-200">
          {locale === 'ka'
            ? 'ეს არის პატარა შესავალი ჩვენი ვებსაიტის შესახებ. აქ შეგიძლიათ იხილოთ ინფორმაცია ჩვენი სერვისებისა და პროდუქტების შესახებ.'
            : 'This is a short introduction about our website. Here you can explore our services and products in detail.'}
        </p>
        <motion.a
          href={`/${locale}/about`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-6 py-3 bg-blue-600 hover:bg-blue-700 transition rounded-lg text-white font-semibold shadow-lg"
        >
          {locale === 'ka' ? 'გაიგეთ მეტი' : 'Learn More'}
        </motion.a>
      </motion.div>

      {/* Right video box */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: 'easeOut' }}
        className="hidden md:block w-[500px] h-[300px] rounded-xl overflow-hidden shadow-lg border-2 border-blue-500"
      >
        <video
        controls
        autoPlay={false}
        loop
        playsInline
        className="w-full h-full object-cover"
        >
        <source src="/demo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
        </video>
      </motion.div>
    </section>
  );
}
