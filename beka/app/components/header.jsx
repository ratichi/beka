'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import ServicesMenu from './servicemenu';

export default function Header({ locale, messages }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hoveredService, setHoveredService] = useState(null); // <- NEW
  const pathname = usePathname();

  const navItems = [
    { key: 'about', href: `/${locale}/about` },
    { key: 'contacts', href: `/${locale}/contacts` },
    { key: 'products', href: `/${locale}/products` }
  ];

  const services = [
    { key: 'webdev', label: locale === 'ka' ? 'ვებ-დეველოპმენტი' : 'Web Development' },
    { key: 'design', label: locale === 'ka' ? 'დიზაინი' : 'UI/UX Design' },
    { key: 'seo', label: locale === 'ka' ? 'SEO ოპტიმიზაცია' : 'SEO Optimization' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut', delay: 0.3 }}
      className="bg-white shadow-md sticky top-0 z-50"
    >
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-3">
          {/* Animated, Tailwind-sized logo box */}
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.35, duration: 0.5, ease: 'easeOut' }}
            whileHover={{ scale: 1.03 }}
            className="relative w-40 h-12 md:w-48 md:h-14 lg:w-56 lg:h-16"  /* <-- control size here */
          >
            <Image
              src="/logo.png"
              alt="Company Logo"
              fill                 /* uses the parent box size */
              priority
              className="object-contain"  /* keeps aspect ratio */
            />
          </motion.div>

          {/* Optional brand text */}
          <motion.span
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.45, ease: 'easeOut' }}
            className="hidden sm:inline text-xl md:text-2xl font-extrabold tracking-wide text-blue-600"
          >
          
          </motion.span>
        </Link> 

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 relative">
          {navItems.map(({ key, href }) => (
            <Link
              key={key}
              href={href}
              className="relative text-gray-700 font-medium group"
            >
              {messages[key]}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}

          {/* Services dropdown (opens on hover) */}
          <ServicesMenu locale={locale} />

          {/* Social icons */}
          <div className="flex gap-4 ml-4">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook className="w-5 h-5 text-gray-600 hover:text-blue-600 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram className="w-5 h-5 text-gray-600 hover:text-pink-500 transition" />
            </a>
          </div>

          {/* Language switcher (keeps current path) */}
          <div className="ml-6 flex gap-2">
            <Link
              href={pathname.replace(/^\/(en|ka)/, '/en')}
              className={`px-2 py-1 rounded ${locale === 'en' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 text-gray-600'}`}
            >
              EN
            </Link>
            <Link
              href={pathname.replace(/^\/(en|ka)/, '/ka')}
              className={`px-2 py-1 rounded ${locale === 'ka' ? 'bg-blue-600 text-white' : 'hover:bg-gray-200 text-gray-600'}`}
            >
              KA
            </Link>
          </div>
        </nav>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      <AnimatePresence>
  {menuOpen && (
    <motion.div
      initial={{ height: 0, opacity: 0 }}
      animate={{ height: 'auto', opacity: 1 }}
      exit={{ height: 0, opacity: 0 }}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className="md:hidden overflow-hidden bg-white border-t"
    >
      <div className="px-4 py-4 space-y-3">
        {/* nav links */}
        {navItems.map(({ key, href }) => (
          <Link
            key={key}
            href={href}
            onClick={() => setMenuOpen(false)}
            className="block px-3 py-2 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition"
          >
            {messages[key]}
          </Link>
        ))}

        {/* services accordion */}
        <MobileServicesMenu
          locale={locale}
          onNavigate={() => setMenuOpen(false)}
        />

        {/* socials */}
        <div className="flex gap-4 px-2 pt-2">
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition">
            <Facebook className="w-5 h-5 text-gray-700" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-gray-100 transition">
            <Instagram className="w-5 h-5 text-gray-700" />
          </a>
        </div>

        {/* language switcher */}
        <div className="flex gap-2 pt-2">
          <Link
            href={pathname.replace(/^\/(en|ka)/, '/en')}
            onClick={() => setMenuOpen(false)}
            className={`flex-1 text-center px-3 py-2 rounded-lg font-semibold ${
              locale === 'en' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            EN
          </Link>
          <Link
            href={pathname.replace(/^\/(en|ka)/, '/ka')}
            onClick={() => setMenuOpen(false)}
            className={`flex-1 text-center px-3 py-2 rounded-lg font-semibold ${
              locale === 'ka' ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-700'
            }`}
          >
            KA
          </Link>
        </div>
      </div>
    </motion.div>
  )}
</AnimatePresence>
    </motion.header>
  );
}
