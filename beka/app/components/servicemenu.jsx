'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

function servicesData(locale) {
  const ka = locale === 'ka';

  return [
    {
      key: 'it',
      label: ka ? 'IT აუთსორსინგი' : 'IT Outsourcing',
      items: [
        { key: 'network-solutions', label: ka ? 'ქსელური გადაწყვეტილებები' : 'Network Solutions' },
        { key: 'network-design', label: ka ? 'ქსელის დიზაინი და დაგეგმვა' : 'Network Design and Planning' },
        { key: 'network-install', label: ka ? 'ქსელის მონტაჟი და კონფიგურაცია' : 'Network Installation and Configuration' },
        { key: 'vpn', label: ka ? 'VPN სერვისები' : 'VPN Services' },
        { key: 'firewall-security', label: ka ? 'Firewall და უსაფრთხოების სერვისები' : 'Firewall and Security Services' },
        { key: 'wifi-mgmt', label: ka ? 'Wi-Fi ინფრასტრუქტურის მართვა' : 'Wi-Fi Infrastructure Management' },
        { key: 'network-monitoring', label: ka ? 'ქსელის მონიტორინგი და მხარდაჭერა' : 'Network Monitoring and Support' },
        { key: 'network-audit', label: ka ? 'ქსელის აუდიტი და ტესტირება' : 'Network Audit and Testing' }
      ]
    },
    {
      key: 'server',
      label: ka ? 'სერვერული გადაწყვეტილებები' : 'Server Solutions',
      items: [
        { key: 'server-architecture', label: ka ? 'სერვერის დიზაინი და არქიტექტურა' : 'Server Design and Architecture' },
        { key: 'server-install', label: ka ? 'სერვერის ინსტალაცია და კონფიგურაცია' : 'Server Installation and Configuration' },
        { key: 'virtualization', label: ka ? 'ვირტუალიზაცია' : 'Virtualization' },
        { key: 'active-directory', label: ka ? 'Active Directory და მომხმარებელთა მართვა' : 'Active Directory and User Management' },
        { key: 'file-print', label: ka ? 'ფაილური და პრინტის სერვერები' : 'File and Print Servers' },
        { key: 'backup-dr', label: ka ? 'ბექაპი და Disaster Recovery' : 'Backup & Disaster Recovery' },
        { key: 'email-collab', label: ka ? 'Email და Collaboration სერვერები' : 'Email & Collaboration Servers' },
        { key: 'server-security', label: ka ? 'სერვერის უსაფრთხოება' : 'Server Security' },
        { key: 'server-audit', label: ka ? 'სერვერის აუდიტი და ტესტირება' : 'Server Audit and Testing' }
      ]
    },
    {
      key: 'voip',
      label: 'VOIP',
      items: [
        { key: 'ip-pbx', label: ka ? 'IP-PBX სისტემის აწყობა' : 'IP-PBX Deployment' },
        { key: 'ivr', label: ka ? 'IVR – ავტომატური მენიუ' : 'IVR – Auto-Attendant Menus' },
        { key: 'mobile-ext', label: 'Mobile Extension' },
        { key: 'crm-integration', label: ka ? 'CRM ინტეგრაცია' : 'CRM Integration' },
        { key: 'billing-reports', label: ka ? 'ბილინგი და სტატისტიკა' : 'Billing & Call Reports' }
      ]
    }
  ];
}

export default function ServicesMenu({ locale }) {
  const data = servicesData(locale);

  // Desktop hover state
  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState('it');

  // Mobile state
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState('it');

  const activePanel = data.find(d => d.key === activeKey) || data[0];

  return (
    <>
      {/* Trigger (shared) */}
      <div
        className="relative hidden md:block group"
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
      >
        <button
          className="flex items-center gap-1 text-gray-700 font-medium hover:text-blue-600 transition"
          aria-expanded={open}
        >
          {locale === 'ka' ? 'სერვისები' : 'Services'}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>

        {/* Desktop mega dropdown */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.18 }}
              className="absolute top-8 left-0 bg-white shadow-xl rounded-xl p-4 w-[760px] max-w-[90vw] grid grid-cols-2 gap-4 z-50"
              role="menu"
            >
              {/* Left column: categories */}
              <ul className="border-r pr-3">
                {data.map(cat => {
                  const active = activeKey === cat.key;
                  return (
                    <li key={cat.key}>
                      <button
                        onMouseEnter={() => setActiveKey(cat.key)}
                        className={`relative w-full text-left px-3 py-2 rounded-md transition font-medium ${
                          active ? 'text-blue-700' : 'text-gray-700 hover:text-blue-600'
                        }`}
                        role="menuitem"
                      >
                        {/* subtle underline grow for active */}
                        <span
                          className="absolute left-3 bottom-1 h-0.5 bg-blue-500 origin-left transition-transform duration-300"
                          style={{ transform: `scaleX(${active ? 1 : 0})`, width: 'calc(100% - 1.5rem)' }}
                        />
                        {cat.label}
                      </button>
                    </li>
                  );
                })}
              </ul>

              {/* Right column: sub-items for active category */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {activePanel.items.map(item => (
                  <Link
                    key={item.key}
                    href={`/${locale}/services/${activePanel.key}/${item.key}`}
                    className="relative block px-3 py-2 rounded-md text-gray-700 overflow-hidden"
                    role="menuitem"
                  >
                    {/* liquid fill left->right on hover (per-item) */}
                    <span className="absolute inset-0 bg-blue-500/15 scale-x-0 origin-left transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:scale-x-100" />
                    <span className="relative z-10">{item.label}</span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile trigger (appears in mobile nav area) */}
      <div className="md:hidden">
        <button
          onClick={() => setMobileOpen(o => !o)}
          className="flex items-center justify-between w-full px-2 py-2 text-gray-800 font-medium"
          aria-expanded={mobileOpen}
          aria-controls="services-mobile-panel"
        >
          <span>{locale === 'ka' ? 'სერვისები' : 'Services'}</span>
          <ChevronDown className={`w-4 h-4 transition-transform ${mobileOpen ? 'rotate-180' : ''}`} />
        </button>

        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.div
              id="services-mobile-panel"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.22 }}
              className="pl-3"
            >
              {/* Mobile accordions for categories */}
              <ul className="divide-y divide-gray-200">
                {data.map(cat => {
                  const expanded = mobileExpanded === cat.key;
                  return (
                    <li key={cat.key} className="py-1">
                      <button
                        onClick={() =>
                          setMobileExpanded(expanded ? null : cat.key)
                        }
                        className="flex items-center justify-between w-full text-left py-2 pr-2 text-gray-800 font-medium"
                        aria-expanded={expanded}
                      >
                        {cat.label}
                        <ChevronDown className={`w-4 h-4 transition-transform ${expanded ? 'rotate-180' : ''}`} />
                      </button>

                      <AnimatePresence initial={false}>
                        {expanded && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="pl-3"
                          >
                            <ul className="py-1">
                              {cat.items.map(item => (
                                <li key={item.key}>
                                  <Link
                                    href={`/${locale}/services/${cat.key}/${item.key}`}
                                    className="relative block py-2 text-gray-700"
                                  >
                                    {/* subtle per-item hover background */}
                                    <span className="absolute inset-0 bg-blue-500/10 scale-x-0 origin-left transition-transform duration-300 ease-out hover:scale-x-100" />
                                    <span className="relative z-10">{item.label}</span>
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}
