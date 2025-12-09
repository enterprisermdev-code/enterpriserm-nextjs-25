"use client";
import Link from 'next/link';
import { useState } from 'react';

export function Footer() {
  const [email, setEmail] = useState('');

  return (
    <footer className="bg-[#161C28] text-white pt-12 pb-6 border-t border-[#0b1220] relative">
      <div className="absolute left-0 right-0 bottom-0 h-1 bg-[#0ea5ff]" />

      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start py-8">
          {/* Left: Logo + CTA */}
          <div className="md:col-span-4">
            <Link href="/" className="inline-block mb-4">
              <img src="/whitelogopng.png" alt="EnterpriseRM.ai" className="h-8" />
            </Link>
            <p className="text-gray-400 mb-6">Sign up to get the latest updates </p>

            <div className="flex items-center gap-2 max-w-md mb-6">
              <input
                aria-label="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email here"
                className="flex-1 bg-transparent border border-gray-600 rounded-full px-4 py-3 text-sm text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0ea5ff]"
              />
              <button className="bg-transparent border border-gray-600 rounded-full p-3 hover:bg-[#0ea5ff] hover:border-[#0ea5ff] transition">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12h14" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 5l7 7-7 7" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              <a
                href="https://www.linkedin.com/company/enterpriserm-ai/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-transparent border border-gray-600 flex items-center justify-center hover:bg-[#0077B5] hover:border-[#0077B5] transition-colors"
                aria-label="Follow us on LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Center: Links columns */}
          <div className="md:col-span-8 grid grid-cols-3 gap-8">
            <div>
              <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Product Solutions</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Enterprise GRC</Link></li>
                <li><Link href="#" className="hover:text-white">Integrated Risk Management</Link></li>
                <li><Link href="#" className="hover:text-white">Cybersecurity Risk Management</Link></li>
                <li><Link href="#" className="hover:text-white">Corporate Compliance</Link></li>
                <li><Link href="#" className="hover:text-white">Supplier Risk and Performance</Link></li>
                <li><Link href="#" className="hover:text-white">DORA</Link></li>
                <li><Link href="#" className="hover:text-white">UK SOX Compliance</Link></li>
                <li><Link href="#" className="hover:text-white">Privacy Compliance</Link></li>
                <li><Link href="#" className="hover:text-white">IDW PS 340 n.F.</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Frameworks</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">CCPA</Link></li>
                <li><Link href="#" className="hover:text-white">CMMC</Link></li>
                <li><Link href="#" className="hover:text-white">COSO</Link></li>
                <li><Link href="#" className="hover:text-white">HIPAA</Link></li>
                <li><Link href="#" className="hover:text-white">ISO</Link></li>
                <li><Link href="#" className="hover:text-white">NIST</Link></li>
                <li><Link href="#" className="hover:text-white">PCI DSS</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-4">Industries</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Banking and Financial Services</Link></li>
                <li><Link href="#" className="hover:text-white">Energy</Link></li>
                <li><Link href="#" className="hover:text-white">Healthcare</Link></li>
                <li><Link href="#" className="hover:text-white">Insurance</Link></li>
                <li><Link href="#" className="hover:text-white">Life Sciences</Link></li>
                <li><Link href="#" className="hover:text-white">Technology</Link></li>
                <li><Link href="#" className="hover:text-white">Telecom</Link></li>
                <li><Link href="#" className="hover:text-white">Utilities</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm pt-6 pb-4">
          <div className="mb-4 md:mb-0">© 2025 EnterpriseRM.ai Inc. Copyright and rights reserved</div>
          <div className="flex items-center gap-4">
            <Link href="/contents/terms" className="hover:text-white">Terms and Conditions</Link>
            <span className="opacity-40">•</span>
            <Link href="/contents/privacy-policy" className="hover:text-white">Privacy Policy</Link>
            <span className="opacity-40">•</span>
            <Link href="/contents/cookie-notice" className="hover:text-white">Cookie Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
