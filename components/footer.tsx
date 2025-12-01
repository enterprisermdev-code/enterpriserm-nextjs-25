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
              <img src="/whitelogo.svg" alt="EnterpriseRM.ai" className="h-8" />
            </Link>
            <p className="text-gray-400 mb-6">Sign up to get the latest updates </p>

            <div className="flex items-center gap-2 max-w-md">
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
          </div>

          {/* Center: Links columns */}
          <div className="md:col-span-5 grid grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm text-gray-300 font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Help centre</Link></li>
                <li><Link href="#" className="hover:text-white">Account information</Link></li>
                <li><Link href="#" className="hover:text-white">About</Link></li>
                <li><Link href="#" className="hover:text-white">Contact us</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-300 font-semibold mb-3">Help and Solution</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Talk to support</Link></li>
                <li><Link href="#" className="hover:text-white">Support docs</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm text-gray-300 font-semibold mb-3">Product</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><Link href="#" className="hover:text-white">Update</Link></li>
                <li><Link href="#" className="hover:text-white">Security</Link></li>
                <li><Link href="#" className="hover:text-white">Beta test</Link></li>
                <li><Link href="#" className="hover:text-white">Pricing product</Link></li>
              </ul>
            </div>
          </div>

          {/* Right spacer */}
          <div className="md:col-span-3" />
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
