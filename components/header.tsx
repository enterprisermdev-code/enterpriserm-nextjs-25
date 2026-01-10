"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useRef, FocusEvent } from 'react';
import { MegaMenu, menuSections } from './mega-menu';
import { IndustriesMenu, industries } from './industries-menu';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeout = useRef<NodeJS.Timeout | null>(null);
  const resourcesTimeout = useRef<NodeJS.Timeout | null>(null);

  function handleMenuEnter() {
    if (menuTimeout.current) clearTimeout(menuTimeout.current);
    setMenuOpen(true);
  }
  function handleMenuLeave() {
    menuTimeout.current = setTimeout(() => setMenuOpen(false), 150);
  }
  function handleMenuBlur(event: FocusEvent<HTMLDivElement>) {
    // Close menu only when focus moves outside of the features trigger area.
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleMenuLeave();
    }
  }
  function handleIndustriesEnter() {
    if (industriesTimeout.current) clearTimeout(industriesTimeout.current);
    setIndustriesOpen(true);
  }
  function handleIndustriesLeave() {
    industriesTimeout.current = setTimeout(() => setIndustriesOpen(false), 150);
  }
  function handleIndustriesBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleIndustriesLeave();
    }
  }
  function handleResourcesEnter() {
    if (resourcesTimeout.current) clearTimeout(resourcesTimeout.current);
    setResourcesOpen(true);
  }
  function handleResourcesLeave() {
    resourcesTimeout.current = setTimeout(() => setResourcesOpen(false), 150);
  }
  function handleResourcesBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget)) {
      handleResourcesLeave();
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white/80 backdrop-blur-lg rounded-full border border-gray-200/60 shadow-lg shadow-gray-200/50 px-6 py-3">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="inline-flex items-center shrink-0">
              <img src="/bluelogo.svg" alt="EnterpriseRM.ai" className="h-7 w-auto" />
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <Link href="/" className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-[#120174] transition-all duration-200 group">
                <span className="relative z-10">Home</span>
                <span className="absolute inset-0 rounded-full bg-gray-100/0 group-hover:bg-gray-100/80 transition-all duration-200"></span>
              </Link>
              <div
                className="relative group"
                onMouseEnter={handleMenuEnter}
                onMouseLeave={handleMenuLeave}
                onFocusCapture={handleMenuEnter}
                onBlur={handleMenuBlur}
              >
                <button
                  className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-[#120174] transition-all duration-200 flex items-center gap-1.5 group/btn"
                  aria-haspopup="menu"
                  aria-expanded={menuOpen}
                >
                  <span className="absolute inset-0 rounded-full bg-gray-100/0 group-hover/btn:bg-gray-100/80 transition-all duration-200"></span>
                  <span className="relative z-10">Solutions</span>
                  <svg className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <MegaMenu open={menuOpen} />
              </div>
              
              <div
                className="relative group"
                onMouseEnter={handleIndustriesEnter}
                onMouseLeave={handleIndustriesLeave}
                onFocusCapture={handleIndustriesEnter}
                onBlur={handleIndustriesBlur}
              >
                <button
                  className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-[#120174] transition-all duration-200 flex items-center gap-1.5 group/btn"
                  aria-haspopup="menu"
                  aria-expanded={industriesOpen}
                >
                  <span className="absolute inset-0 rounded-full bg-gray-100/0 group-hover/btn:bg-gray-100/80 transition-all duration-200"></span>
                  <span className="relative z-10">Industries</span>
                  <svg className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${industriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <IndustriesMenu open={industriesOpen} />
              </div>
              
              <div
                className="relative group"
                onMouseEnter={handleResourcesEnter}
                onMouseLeave={handleResourcesLeave}
                onFocusCapture={handleResourcesEnter}
                onBlur={handleResourcesBlur}
              >
                <button
                  className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-[#120174] transition-all duration-200 flex items-center gap-1.5 group/btn"
                  aria-haspopup="menu"
                  aria-expanded={resourcesOpen}
                >
                  <span className="absolute inset-0 rounded-full bg-gray-100/0 group-hover/btn:bg-gray-100/80 transition-all duration-200"></span>
                  <span className="relative z-10">Resources</span>
                  <svg className={`relative z-10 w-3.5 h-3.5 transition-transform duration-300 ${resourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`absolute left-0 top-full mt-3 w-64 rounded-2xl border border-gray-200/50 bg-white/98 backdrop-blur-xl shadow-xl transition-all duration-300 origin-top ${
                    resourcesOpen
                      ? 'pointer-events-auto scale-100 opacity-100 translate-y-0'
                      : 'pointer-events-none scale-95 opacity-0 -translate-y-4'
                  }`}
                  role="menu"
                  aria-hidden={!resourcesOpen}
                >
                  <div className="p-2">
                    <Link
                      href="/blog"
                      className="block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-linear-to-r hover:from-[#f8f7fa] hover:to-white hover:text-[#120174] transition-all rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                        </svg>
                        <span>Blog</span>
                      </div>
                    </Link>
                    <Link
                      href="/templates"
                      className="mt-1 block px-4 py-3 text-sm font-medium text-gray-700 hover:bg-linear-to-r hover:from-[#f8f7fa] hover:to-white hover:text-[#120174] transition-all rounded-xl"
                    >
                      <div className="flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M8 6h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zm0 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                        </svg>
                        <span>Templates</span>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
              
              <Link href="/contact" className="relative px-4 py-2 rounded-full text-sm font-semibold text-gray-700 hover:text-[#120174] transition-all duration-200 group">
                <span className="relative z-10">Contact Us</span>
                <span className="absolute inset-0 rounded-full bg-gray-100/0 group-hover:bg-gray-100/80 transition-all duration-200"></span>
              </Link>
            </nav>
            
            {/* Desktop Action Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              <Button variant="ghost" className="text-gray-700 hover:text-[#120174] hover:bg-gray-100/80 rounded-full px-5">
                Login
              </Button>
              <Button className="bg-[#120174] hover:bg-[#0d0050] text-white px-6 rounded-full transition-all duration-200 shadow-md hover:shadow-lg">
                Sign Up
              </Button>
            </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:bg-gray-100/80 transition-colors"
            onClick={() => {
              const next = !mobileMenuOpen;
              setMobileMenuOpen(next);
              if (!next) {
                setMobileFeaturesOpen(false);
                setMobileIndustriesOpen(false);
                setMobileResourcesOpen(false);
              }
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 animate-in slide-in-from-top-4 duration-300">
            <div className="bg-white/95 backdrop-blur-xl rounded-3xl border border-gray-200/50 shadow-2xl overflow-hidden">
              <div className="max-h-[75vh] overflow-y-auto">
                <div className="p-5 space-y-2">
                  <Link href="/" className="block px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200">
                    Home
                  </Link>
                  <div>
                    <button 
                      onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200"
                    >
                      Solutions
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileFeaturesOpen && (
                      <div className="mt-3 space-y-4 bg-linear-to-br from-gray-50/50 to-white rounded-2xl p-4 border border-gray-100">
                        {menuSections.map((section) => (
                          <div key={section.title}>
                            <div className="flex items-center gap-2 mb-3">
                              <div className="h-0.5 w-6 rounded-full bg-linear-to-r from-[#120174] to-[#3d2cb5]"></div>
                              <h4 className="text-xs font-bold text-[#120174] uppercase tracking-wider">
                                {section.title}
                              </h4>
                            </div>
                            <div className="space-y-1">
                              {section.items.map((item) => (
                                <Link
                                  href={item.href}
                                  key={item.href}
                                  className="flex items-start gap-3 rounded-xl px-3 py-2.5 text-sm text-gray-700 hover:text-[#120174] hover:bg-white hover:shadow-sm transition-all duration-200"
                                  onClick={() => setMobileMenuOpen(false)}
                                >
                                  {item.icon && (
                                    <div className="mt-0.5 text-[#120174] opacity-60">
                                      {item.icon}
                                    </div>
                                  )}
                                  <div className="flex-1">
                                    <div className="font-medium">{item.title}</div>
                                    {item.description && (
                                      <div className="text-xs text-gray-500 mt-0.5">{item.description}</div>
                                    )}
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200"
                    >
                      Industries
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileIndustriesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileIndustriesOpen && (
                      <div className="mt-3 bg-linear-to-br from-gray-50/50 to-white rounded-2xl p-3 border border-gray-100">
                        <div className="grid grid-cols-2 gap-1">
                          {industries.map((item) => (
                            <Link
                              href={item.href}
                              key={item.href}
                              className="flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#120174] hover:shadow-sm transition-all duration-200"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.icon && (
                                <div className="text-[#120174] opacity-60 shrink-0">
                                  {item.icon}
                                </div>
                              )}
                              <span className="text-xs">{item.title}</span>
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                  <div>
                    <button
                      onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                      className="w-full flex items-center justify-between px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200"
                    >
                      Resources
                      <svg className={`w-4 h-4 transition-transform duration-300 ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {mobileResourcesOpen && (
                      <div className="mt-3 bg-linear-to-br from-gray-50/50 to-white rounded-2xl p-3 border border-gray-100">
                        <Link
                          href="/blog"
                          className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#120174] hover:shadow-sm transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                          </svg>
                          Blog
                        </Link>
                        <Link
                          href="/templates"
                          className="mt-1 flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-700 hover:bg-white hover:text-[#120174] hover:shadow-sm transition-all duration-200"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6M8 6h8a2 2 0 012 2v10a2 2 0 01-2 2H8a2 2 0 01-2-2V8a2 2 0 012-2zm0 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
                          </svg>
                          Templates
                        </Link>
                      </div>
                    )}
                  </div>
                  <Link href="/about" className="block px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200">
                    About Us
                  </Link>
                  <Link href="/contact" className="block px-5 py-3 rounded-2xl text-sm font-semibold text-gray-700 hover:text-[#120174] hover:bg-linear-to-r hover:from-gray-50 hover:to-white transition-all duration-200">
                    Contact Us
                  </Link>
                </div>
                <div className="p-5 pt-3 bg-linear-to-br from-gray-50/30 to-white border-t border-gray-100">
                  <div className="flex flex-col gap-2.5">
                    <Button variant="ghost" className="w-full justify-center text-gray-700 hover:text-[#120174] hover:bg-white rounded-2xl font-semibold h-11">
                      Login
                    </Button>
                    <Button className="w-full bg-[#120174] hover:bg-[#0d0050] text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-200 font-semibold h-11">
                      Sign Up
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
