import Link from 'next/link';
import Image from 'next/image';
import { Shield, ArrowRight, Sparkles, CheckCircle2, Zap } from 'lucide-react';

export function ContactFormCTA() {
  return (
    <section className="relative py-24 overflow-hidden bg-gradient-to-br from-[#0a0d1a] via-[#161C28] to-[#1a1f2e]">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-[#120174] rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#3d2cb5] rounded-full blur-[120px] opacity-20"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left: Text + Images */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#120174]/20 border border-[#120174]/30 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-[#0ea5ff]" />
              <span className="text-sm font-semibold text-white">AI-Powered GRC Platform</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Take Control of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0ea5ff] to-[#3d2cb5]">Risk Today</span>
            </h2>
            
            <p className="text-gray-300 text-lg leading-relaxed">
              Transform risk management into a business enabler with AI-driven insights. Streamline processes, stay compliant, and make smarter decisions across your enterprise.
            </p>

            {/* Feature highlights */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#120174]/30 flex items-center justify-center group-hover:bg-[#120174]/50 transition-colors">
                  <Shield className="w-5 h-5 text-[#0ea5ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Enterprise GRC</h3>
                  <p className="text-sm text-gray-400">Unified governance platform</p>
                </div>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#120174]/30 flex items-center justify-center group-hover:bg-[#120174]/50 transition-colors">
                  <Sparkles className="w-5 h-5 text-[#0ea5ff]" />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">AI-Driven</h3>
                  <p className="text-sm text-gray-400">Intelligent automation</p>
                </div>
              </div>
            </div>

            {/* Image grid */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80"
                  alt="Team collaboration"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120174]/60 to-transparent"></div>
              </div>
              <div className="relative h-48 rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80"
                  alt="Data analytics"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#120174]/60 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right: CTA Card */}
          <div className="relative">
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-[#120174] to-[#0ea5ff] rounded-3xl blur-xl opacity-30"></div>
            
            <div className="relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl p-8 md:p-10">
              <div className="mb-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-[#120174] to-[#3d2cb5] mb-4 shadow-lg">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Ready to Get Started?</h3>
                <p className="text-gray-400 text-sm">Join leading enterprises securing their future with AI-powered GRC</p>
              </div>

              {/* Benefits list */}
              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Quick Implementation</h4>
                    <p className="text-sm text-gray-400">Get started in days, not months</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Expert Support</h4>
                    <p className="text-sm text-gray-400">Dedicated team to guide your success</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#0ea5ff] flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Proven Results</h4>
                    <p className="text-sm text-gray-400">Trusted by global enterprises</p>
                  </div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="space-y-4">
                <Link 
                  href="/contact"
                  className="w-full bg-gradient-to-r from-[#120174] to-[#3d2cb5] hover:from-[#0d0050] hover:to-[#2d1f8f] text-white font-semibold rounded-xl py-4 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2 group"
                >
                  Request Demo
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link 
                  href="/contact"
                  className="w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white font-semibold rounded-xl py-4 transition-all duration-300 flex items-center justify-center gap-2 group"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
              </div>

              <div className="mt-6 text-center">
                <p className="text-xs text-gray-400">
                  No credit card required • 14-day free trial • Cancel anytime
                </p>
              </div>

              {/* Trust indicators */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center justify-center gap-6 text-xs text-gray-400">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>SOC 2 Certified</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>ISO 27001</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    <span>GDPR Ready</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
