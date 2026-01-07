'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { services as servicesData } from '@/app/data/services';

export default function ServicesMenu({ locale }) {
  const [open, setOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState('network');

  const categories = useMemo(
    () => [
      { key: 'network', label: locale === 'ka' ? 'ქსელი' : 'Network' },
      { key: 'servers', label: locale === 'ka' ? 'სერვერები' : 'Servers' },
      { key: 'voip', label: 'VOIP' }
    ],
    [locale]
  );

  const active = servicesData[activeCategory];

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Trigger */}
      <button
        type="button"
        className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition"
      >
        {locale === 'ka' ? 'სერვისები' : 'Services'}
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="absolute left-0 top-10 w-[720px] rounded-2xl bg-white shadow-xl border border-gray-100 overflow-hidden z-50"
          >
            <div className="grid grid-cols-12">
              {/* Left: categories */}
              <div className="col-span-4 border-r border-gray-100 p-2">
                {categories.map((cat) => {
                  const isActive = cat.key === activeCategory;
                  return (
                    <Link
                    key={cat.key}
                    href={`/${locale}/services/${cat.key}`}
                    onMouseEnter={() => setActiveCategory(cat.key)}
                    className={[
                      'w-full text-left px-3 py-2 rounded-xl transition flex items-center justify-between',
                      cat.key === activeCategory
                        ? 'bg-blue-50 text-blue-700'
                        : 'text-gray-700 hover:bg-gray-50'
                    ].join(' ')}
                  >
                    <span className="font-medium">{cat.label}</span>
                    <span className="text-xs text-gray-400">
                      {servicesData[cat.key]?.items?.length || 0}
                    </span>
                  </Link>
                  );
                })}

                {/* Category page links */}
                <div className="px-3 pb-2 pt-1">
                  <Link
                    href={`/${locale}/services/${activeCategory}`}
                    className="text-sm text-blue-600 hover:text-blue-500 transition"
                  >
                    {locale === 'ka' ? 'ყველა სერვისი →' : 'All services →'}
                  </Link>
                </div>
              </div>

              {/* Right: items */}
              <div className="col-span-8 p-4">
                <div className="flex items-center justify-between gap-4 mb-3">
                  <div>
                    <div className="text-xs text-gray-500">
                      {locale === 'ka' ? 'კატეგორია' : 'Category'}
                    </div>
                    <div className="text-lg font-semibold text-gray-900">
                      {active?.title?.[locale] ?? ''}
                    </div>
                  </div>

                  <Link
                    href={`/${locale}/services/${activeCategory}`}
                    className="text-sm px-3 py-1.5 rounded-lg bg-gray-50 hover:bg-gray-100 text-gray-700 transition"
                  >
                    {locale === 'ka' ? 'ნახე კატეგორია' : 'View category'}
                  </Link>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  {active?.items?.map((item) => (
                    <Link
                      key={item.key}
                      href={`/${locale}/services/${activeCategory}/${item.key}`}
                      className="group relative rounded-xl border border-gray-100 bg-white p-3 hover:bg-blue-50 hover:border-blue-200 transition overflow-hidden"
                    >
                      {/* Title */}
                      <div className="font-medium text-gray-900 text-sm leading-snug">
                        {item.title[locale]}
                      </div>

                      {/* tiny hint */}
                      <div className="mt-1 text-xs text-gray-500 group-hover:text-gray-600 transition line-clamp-2">
                        {item.description[locale]}
                      </div>

                      {/* animated underline */}
                      <span className="absolute left-3 bottom-2 h-[2px] w-0 bg-blue-500 group-hover:w-[calc(100%-24px)] transition-all duration-300" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
