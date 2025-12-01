"use client";
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export function NewsletterBand() {
  const [value, setValue] = useState('');
  return (
    <section className="py-20 bg-[#120174] text-white" id="newsletter">
      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 max-w-xl">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of Emerging Risk</h2>
          <p className="opacity-90 mb-6">Monthly brief with curated industry incidents, regulatory updates, and mitigation tactics.</p>
          <div className="flex items-center gap-3 max-w-md">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 bg-white/10 border border-white/30 rounded-full px-5 py-3 text-sm placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/60"
            />
            <Button className="bg-white text-[#120174] hover:bg-[#f0f0ff] rounded-full px-6">Subscribe</Button>
          </div>
          <p className="text-xs mt-3 opacity-70">No spam. Unsubscribe anytime.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
          {["Regulatory Alerts","Threat Trends","Control Tips","Success Stories"].map(item => (
            <div key={item} className="rounded-xl bg-white/10 border border-white/20 p-4 text-sm font-medium text-center">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
