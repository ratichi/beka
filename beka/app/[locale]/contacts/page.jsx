'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook, Instagram, Music2 } from 'lucide-react';

export default  async function  ContactPage({ params }) {
  const { locale } = await params;

  const t = {
    en: {
      title: 'Get in Touch',
      subtitle: 'We’d love to hear from you. Reach out to us anytime.',
      phone: 'Phone',
      email: 'Email',
      address: 'Address',
      socials: 'Follow us',
    },
    ka: {
      title: 'დაგვიკავშირდით',
      subtitle: 'მოხარულები ვართ თქვენსგან მოსმენას. დაგვიკავშირდით ნებისმიერ დროს.',
      phone: 'ტელეფონი',
      email: 'ელ.ფოსტა',
      address: 'მისამართი',
      socials: 'გ ა მ ო გ ვ ყ ე ვ ი თ',
    }
  }[locale] || t.en;

  return (
    <section className="max-w-5xl mx-auto px-6 py-16">
      {/* Title */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-white">{t.title}</h1>
        <p className="text-white mt-4">{t.subtitle}</p>
      </motion.div>

      {/* Contact info grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Phone */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <Phone className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">{t.phone}</h3>
          <p className="text-gray-600">+995 555 123 456</p>
        </motion.div>

        {/* Email */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <Mail className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">{t.email}</h3>
          <p className="text-gray-600">info@example.com</p>
        </motion.div>

        {/* Address */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="bg-white/80 backdrop-blur-md shadow-lg rounded-xl p-6 flex flex-col items-center text-center hover:shadow-xl transition"
        >
          <MapPin className="w-8 h-8 text-blue-600 mb-3" />
          <h3 className="font-semibold">{t.address}</h3>
          <p className="text-gray-600">Tbilisi, Georgia</p>
        </motion.div>
      </div>

      {/* Socials */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="mt-16 text-center"
      >
        <h3 className="font-semibold text-white text-lg mb-4">{t.socials}</h3>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <Facebook className="w-7 h-7 text-white hover:text-blue-600" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <Instagram className="w-7 h-7 text-white hover:text-pink-500" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:scale-110 transition">
            <Music2 className="w-7 h-7 text-white hover:text-pink-900" />
          </a>
        </div>
      </motion.div>
    </section>
  );
}
