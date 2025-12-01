"use client";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { useState, useRef, FocusEvent } from 'react';
import { MegaMenu, menuSections } from './mega-menu';
import { Menu, X } from 'lucide-react';

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileFeaturesOpen, setMobileFeaturesOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);
  const menuTimeout = useRef<NodeJS.Timeout | null>(null);
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="inline-flex items-center shrink-0">
            <img src="/bluelogo.svg" alt="EnterpriseRM.ai" className="h-8 w-auto" />
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            <Link href="/" className="px-3 py-2 rounded-md text-sm font-medium uppercase text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-all duration-200">
              Home
            </Link>
            <div
              className="relative group"
              onMouseEnter={handleMenuEnter}
              onMouseLeave={handleMenuLeave}
              onFocusCapture={handleMenuEnter}
              onBlur={handleMenuBlur}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium uppercase text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-all duration-200 flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={menuOpen}
              >
                Solutions
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <MegaMenu open={menuOpen} />
            </div>
             
            
            <div
              className="relative group"
              onMouseEnter={handleResourcesEnter}
              onMouseLeave={handleResourcesLeave}
              onFocusCapture={handleResourcesEnter}
              onBlur={handleResourcesBlur}
            >
              <button
                className="px-3 py-2 rounded-md text-sm font-medium uppercase text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-all duration-200 flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={resourcesOpen}
              >
                Resources
                <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </button>
              <div
                className={`absolute left-0 top-full mt-2 w-52 rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 origin-top ${
                  resourcesOpen
                    ? 'pointer-events-auto scale-100 opacity-100'
                    : 'pointer-events-none scale-95 opacity-0'
                }`}
                role="menu"
                aria-hidden={!resourcesOpen}
              >
                <div className="py-2">
                  <Link
                    href="/blog"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f8f7fa] hover:text-[#120174] transition-colors"
                  >
                    Blog
                  </Link>
                </div>
              </div>
            </div>
            <Link href="/about" className="px-3 py-2 rounded-md text-sm font-medium uppercase text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-all duration-200">
              About Us
            </Link>
            <Link href="/contact" className="px-3 py-2 rounded-md text-sm font-medium uppercase text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-all duration-200">
              Contact Us
            </Link>
          </nav>
          
          {/* Desktop Action Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-gray-700 hover:text-[#120174] hover:bg-gray-100">
              Login
            </Button>
            <Button className="bg-[#120174] hover:bg-[#0d0050] text-white px-6 transition-all duration-200">
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            onClick={() => {
              const next = !mobileMenuOpen;
              setMobileMenuOpen(next);
              if (!next) {
                setMobileFeaturesOpen(false);
                setMobileResourcesOpen(false);
              }
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="lg:hidden mt-4 border-t border-gray-200 pt-4">
            <div className="max-h-[70vh] space-y-2 overflow-y-auto pb-4 pr-1">
              <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-colors uppercase">
                Home
              </Link>
              <div>
                <button 
                  onClick={() => setMobileFeaturesOpen(!mobileFeaturesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-colors uppercase"
                >
                  Solutions
                  <svg className={`w-4 h-4 transition-transform ${mobileFeaturesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {mobileFeaturesOpen && (
                  <div className="pl-2 mt-2 space-y-3 bg-gray-50 rounded-md p-3">
                    {menuSections.map((section) => (
                      <div key={section.title}>
                        <h4 className="text-xs font-bold text-[#120174] mb-2 px-3 uppercase tracking-wide">
                          {section.title}
                        </h4>
                        <div className="space-y-1">
                          {section.items.map((item) => (
                            <Link
                              href={item.href}
                              key={item.href}
                              className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:text-[#120174] hover:bg-white transition-colors"
                            >
                              {item.title}
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
                  onClick={() => setMobileResourcesOpen(!mobileResourcesOpen)}
                  className="w-full flex items-center justify-between px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-colors uppercase"
                >
                  Resources
                  <svg className={`w-4 h-4 transition-transform ${mobileResourcesOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </button>
                {mobileResourcesOpen && (
                  <div className="pl-2 mt-2 space-y-2 bg-gray-50 rounded-md p-3">
                    <Link
                      href="/blog"
                      className="block rounded-md px-3 py-1.5 text-sm text-gray-700 hover:bg-white hover:text-[#120174] transition-colors"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>
              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-colors uppercase">
                About Us
              </Link>
              <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-[#120174] hover:bg-gray-50 transition-colors uppercase">
                Contact Us
              </Link>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" className="w-full justify-center text-gray-700 hover:text-[#120174] hover:bg-gray-100">
                  Login
                </Button>
                <Button className="w-full bg-[#120174] hover:bg-[#0d0050] text-white">
                  Sign Up
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
