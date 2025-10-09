'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Facebook, Instagram, ChevronDown } from 'lucide-react';
import { usePathname } from 'next/navigation';
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
        <Link href={`/${locale}`} className="text-2xl font-extrabold text-blue-600 tracking-wide">
        logo
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
          <div className="relative group">
            {/* <button className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition">
              {locale === 'ka' ? 'სერვისები' : 'Services'}
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button> */}
             <ServicesMenu locale={locale} />

            <AnimatePresence>
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-8 left-0 bg-white shadow-lg rounded-lg py-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all"
              >
                
              </motion.div>
            </AnimatePresence>
          </div>

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
    </motion.header>
  );
}
