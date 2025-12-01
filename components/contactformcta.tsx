"use client";
import { useState } from 'react';

export function ContactFormCTA() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  return (
    <section className="bg-[#161C28] py-20">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-center gap-12">
        {/* Left: Text */}
        <div className="flex-1 max-w-xl mb-10 lg:mb-0 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-white mb-6 text-center lg:text-left">Take Control of Risk Today</h2>
          <p className="text-gray-300 text-lg leading-relaxed text-center lg:text-left">
            With Enterprise.AI, risk management becomes a business enabler, not a burden. Streamline processes, stay compliant, and make smarter decisions across the enterprise. Start leveraging AI-driven insights to transform the way your organization manages risk.
          </p>
        </div>
        {/* Right: Form Card */}
        <div className="flex-1 max-w-md w-full flex flex-col justify-center items-center">
          <div className="bg-[#232736] rounded-2xl shadow-lg p-10 flex flex-col items-center w-full">
            <div className="mb-6 flex flex-col items-center">
              <div className="mx-auto mb-2 flex items-center justify-center h-14 w-14 rounded-full bg-[#181c24]">
                {/* Replace with logo/icon SVG if available */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#181c24"/><text x="16" y="22" textAnchor="middle" fontSize="20" fill="#fff">€</text></svg>
              </div>
              <div className="text-xl font-semibold text-white text-center">Get Started</div>
            </div>
            <form className="w-full flex flex-col gap-4 items-center" autoComplete="off">
              <div className="w-full">
                <label htmlFor="email" className="block text-sm text-gray-300 mb-1">Email</label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full rounded-md bg-[#181c24] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#120174]"
                />
              </div>
              <div className="w-full">
                <label htmlFor="message" className="block text-sm text-gray-300 mb-1">Message</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={e => setMessage(e.target.value)}
                  placeholder="What are you say ?"
                  className="w-full rounded-md bg-[#181c24] border border-gray-600 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#120174]"
                  rows={2}
                />
              </div>
              <button type="submit" className="w-full bg-[#120174] hover:bg-[#0d0050] text-white font-semibold rounded-md py-3 mt-2 transition">Request Demo</button>
            </form>
            <div className="text-xs text-gray-400 mt-4 text-center">or <a href="#" className="underline hover:text-white">Start Free Trial</a></div>
          </div>
        </div>
      </div>
    </section>
  );
}
