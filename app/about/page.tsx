import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-32 bg-linear-to-br from-[#120174] via-[#2b1fa0] to-[#0ea5ff] text-white overflow-hidden">
          {/* Animated background particles */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
                WHO WE ARE
              </div>
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                About EnterpriseRM.ai
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                We believe risk management should be <span className="font-bold text-[#0ea5ff]">simple</span>, <span className="font-bold text-[#0ea5ff]">intelligent</span>, and <span className="font-bold text-[#0ea5ff]">actionable</span>—empowering organizations to turn uncertainty into strategic advantage.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section with Image */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#e9ecff] text-[#120174] text-sm font-semibold">
                  OUR MISSION
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Bridging Tradition with Innovation
                </h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-6">
                  We combine the rigor of traditional Enterprise Risk Management frameworks with the agility and intelligence of modern AI technology.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Our platform transforms complex risk data into clear, actionable insights—giving your team the confidence to make strategic decisions faster and smarter.
                </p>
              </div>
              <div className="order-1 md:order-2 relative">
                <div className="absolute -inset-4 bg-linear-to-br from-[#120174]/10 to-[#0ea5ff]/10 rounded-3xl blur-2xl"></div>
                <div className="relative h-96 rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                  <Image 
                    src="/aboutusimage.avif" 
                    alt="Enterprise Risk Management" 
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Build & Who We Serve */}
        <section className="py-24 bg-linear-to-b from-[#f5f6fa] to-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">What Sets Us Apart</h2>
                <p className="text-xl text-gray-600">Built for the modern enterprise, designed for real-world impact</p>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0ea5ff]">
                  <div className="w-14 h-14 mb-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What we build</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    A unified platform featuring automated risk assessments, intelligent risk registers, comprehensive compliance libraries, and predictive analytics.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Real-time risk monitoring</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>AI-powered threat detection</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Automated compliance tracking</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#0ea5ff]">
                  <div className="w-14 h-14 mb-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Who we serve</h3>
                  <p className="text-lg text-gray-600 leading-relaxed mb-4">
                    Organizations that demand excellence in risk management—from Fortune 500 enterprises to innovative scale-ups.
                  </p>
                  <ul className="space-y-2 text-gray-600">
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Global enterprises & Fortune 500</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Financial institutions & banks</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Regulated industries (healthcare, energy)</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-5 h-5 text-[#0ea5ff] mr-2 mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span>Fast-growing startups & scale-ups</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#120174] mb-2">500+</div>
                  <div className="text-gray-600">Organizations Trust Us</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#120174] mb-2">42%</div>
                  <div className="text-gray-600">Time Saved on Average</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#120174] mb-2">99%</div>
                  <div className="text-gray-600">Audit Readiness Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-[#120174] mb-2">24/7</div>
                  <div className="text-gray-600">Real-Time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="py-24 bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
                OUR STORY
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-8">EnterpriseRM.ai in Brief</h2>
              <div className="space-y-6 text-lg md:text-xl leading-relaxed">
                <p className="opacity-95">
                  An AI-powered enterprise risk management platform built for <span className="font-bold">clarity</span>, <span className="font-bold">compliance</span>, and <span className="font-bold">predictive insights</span>.
                </p>
                <p className="opacity-95">
                  We replace outdated spreadsheets and disconnected tools with a proactive, real-time approach to risk and compliance—giving you a single source of truth.
                </p>
                <p className="text-2xl font-bold mt-8 text-[#0ea5ff]">
                  Making ERM smarter, scalable, and actionable—that's our mission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <div className="inline-block px-4 py-1 mb-4 rounded-full bg-[#e9ecff] text-[#120174] text-sm font-semibold">
                  OUR PRINCIPLES
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Core Values</h2>
                <p className="text-xl text-gray-600">The principles that guide everything we do</p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {/* Security-first */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-[#0ea5ff] h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Security-first</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Security isn't an afterthought—it's the foundation. Every feature we build is designed with enterprise-grade security, encryption, and compliance at its core.
                    </p>
                  </div>
                </div>

                {/* Transparency */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-[#0ea5ff] h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Transparency</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Complete auditability and clarity in every insight. We believe trust is built through transparency—from data lineage to AI decision-making.
                    </p>
                  </div>
                </div>

                {/* Customer-first */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity blur-xl"></div>
                  <div className="relative bg-white rounded-3xl p-10 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group-hover:border-[#0ea5ff] h-full">
                    <div className="w-16 h-16 mx-auto mb-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">Customer-first</h3>
                    <p className="text-gray-600 text-center leading-relaxed">
                      Real-world needs drive product innovation. We partner with our customers to solve actual challenges, not just build features.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership CTA */}
        <section className="py-24 bg-linear-to-br from-[#f5f6fa] via-white to-[#e9ecff]">
          <div className="container mx-auto px-6">
            <div className="max-w-5xl mx-auto">
              <div className="relative bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-3xl p-12 md:p-16 overflow-hidden shadow-2xl">
                {/* Background pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
                </div>
                
                <div className="relative z-10 text-center text-white">
                  <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
                    PARTNERSHIPS
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6">Want to partner with us?</h2>
                  <p className="text-xl md:text-2xl mb-10 leading-relaxed opacity-95 max-w-3xl mx-auto">
                    We're actively exploring strategic partnerships, integrations, and reseller opportunities. Let's build the future of risk management together.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact">
                      <Button className="bg-white hover:bg-gray-100 text-[#120174] font-semibold px-10 py-6 rounded-full text-lg shadow-xl">
                        Contact Sales
                      </Button>
                    </Link>
                    <Link href="/">
                      <Button className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-semibold px-10 py-6 rounded-full text-lg">
                        Learn More
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Tagline Footer */}
        <section className="py-16 bg-[#120174] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-full h-full" style={{backgroundImage: 'linear-gradient(45deg, transparent 48%, white 48%, white 52%, transparent 52%)', backgroundSize: '20px 20px'}}></div>
          </div>
          <div className="container mx-auto px-6 relative z-10">
            <div className="text-center">
              <p className="text-2xl md:text-3xl font-bold mb-2">
                EnterpriseRM.ai
              </p>
              <p className="text-lg md:text-xl text-[#0ea5ff] font-medium">
                Turning risk into opportunity, powered by intelligence.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
