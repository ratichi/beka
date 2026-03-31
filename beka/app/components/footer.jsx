'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Facebook, Instagram, Music2, Phone, Mail } from 'lucide-react';

export default function Footer({ locale }) {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.4 }}
      className="bg-gray-900 text-gray-300 py-14 mt-8 min-h-[250px]"
    >
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Contact Info */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-400" />
            <span>032 219 33 14 </span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <span>info@netcore.ge</span>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-5 justify-center">
          <Link href={`/${locale}/services`} className="hover:text-white transition">Services</Link>
          <Link href={`/${locale}/products`} className="hover:text-white transition">Products</Link>
        </div>

        {/* Social Media */}
        <div className="flex justify-center md:justify-end gap-6">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="hover:text-blue-500 transition">
            <Facebook className="w-6 h-6" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="hover:text-pink-500 transition">
            <Instagram className="w-6 h-6" />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer" className="hover:text-white transition">
            <Music2 className="w-6 h-6" />
          </a>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </div>
    </motion.footer>
  );
}