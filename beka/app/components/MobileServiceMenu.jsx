'use client';

import Link from 'next/link';
import { useMemo, useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { services as servicesData } from '@/app/data/services';

export default function MobileServicesMenu({ locale, onNavigate }) {
  const [open, setOpen] = useState(false);
  const [openCategory, setOpenCategory] = useState('network');

  const categories = useMemo(
    () => [
      { key: 'network', label: locale === 'ka' ? 'ქსელი' : 'Network' },
      { key: 'servers', label: locale === 'ka' ? 'სერვერები' : 'Servers' },
      { key: 'voip', label: 'VOIP' }
    ],
    [locale]
  );

  return (
    <div className="rounded-xl border border-gray-200 overflow-hidden">
      {/* top trigger */}
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        className="w-full flex items-center justify-between px-3 py-3 bg-gray-50 text-gray-800 font-semibold"
      >
        {locale === 'ka' ? 'სერვისები' : 'Services'}
        <ChevronDown className={`w-5 h-5 transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <div className="p-3 space-y-2 bg-white">
          {/* category tabs */}
          <div className="flex gap-2 overflow-x-auto pb-1">
            {categories.map((c) => {
              const active = c.key === openCategory;
              return (
                <button
                  key={c.key}
                  type="button"
                  onClick={() => setOpenCategory(c.key)}
                  className={[
                    'shrink-0 px-3 py-1.5 rounded-full text-sm font-medium border transition',
                    active
                      ? 'bg-blue-600 text-white border-blue-600'
                      : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'
                  ].join(' ')}
                >
                  {c.label}
                </button>
              );
            })}
          </div>

          {/* category title + link */}
          <div className="flex items-center justify-between gap-3 px-1">
            <div className="text-sm font-semibold text-gray-900">
              {servicesData[openCategory]?.title?.[locale]}
            </div>

            <Link
              href={`/${locale}/services/${openCategory}`}
              onClick={onNavigate}
              className="text-sm text-blue-600 hover:text-blue-500 transition"
            >
              {locale === 'ka' ? 'ყველა' : 'All'}
            </Link>
          </div>

          {/* service links */}
          <div className="space-y-1">
            {servicesData[openCategory]?.items?.map((item) => (
              <Link
                key={item.key}
                href={`/${locale}/services/${openCategory}/${item.key}`}
                onClick={onNavigate}
                className="block rounded-lg px-3 py-2 text-gray-800 hover:bg-gray-100 transition"
              >
                <div className="font-medium text-sm">{item.title[locale]}</div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
