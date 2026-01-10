import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SocialProof } from '@/components/social-proof';
import { Footer } from '@/components/footer';
import { WhyEnterAI } from '@/components/whyenterai';
import { FeaturesOverview } from '@/components/features-overview';
import { IntegrationsStrip } from '@/components/integrations-strip';
import { TestimonialsPreview } from '@/components/testimonials-preview';
import { ComplianceBadges } from '@/components/compliance-badges';
import { PrimaryCTA } from '@/components/primary-cta';
import { NewsletterBand } from '@/components/newsletter-band';
import { ContactFormCTA } from '@/components/contactformcta';
import { CoreCapabilities } from '@/components/corecapabilities';
import { WhyUsSection } from '@/components/why-us-section';
import { Button } from '@/components/ui/button';
import { Shield, TrendingUp, Clock, Users, CheckCircle, Star, ArrowRight, Globe, Zap, Brain, Lock } from 'lucide-react';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI-Powered Enterprise Risk Management & GRC Platform | 2026',
  description:
    'Transform enterprise risk management with AI automation. Support for 35+ compliance frameworks (HIPAA, SOC 2, NIST, ISO 27001). Real-time risk assessment, predictive analytics, and automated compliance monitoring.',
  keywords: [
    'Enterprise Risk Management 2026',
    'AI-powered GRC platform',
    'automated risk assessment',
    'predictive risk analytics',
    'HIPAA compliance automation',
    'SOC 2 compliance platform',
    'NIST cybersecurity framework',
    'ISO 27001 management',
    'real-time compliance monitoring',
    'enterprise security automation',
    'AI governance platform',
    'regulatory compliance software',
    'risk intelligence platform',
    'continuous compliance monitoring',
  ],
  openGraph: {
    type: 'website',
    title: 'AI-Powered Enterprise Risk Management & GRC Platform | 2026',
    description:
      'Transform risk management with AI automation. 35+ compliance frameworks, real-time monitoring, predictive analytics. Trusted by leading enterprises.',
    images: [
      {
        url: '/homebannersideimage.svg',
        width: 1200,
        height: 630,
        alt: 'AI-Powered Enterprise Risk Management Platform Dashboard',
      },
    ],
    siteName: 'EnterpriseRM.ai',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI-Powered Enterprise Risk Management & GRC Platform | 2026',
    description:
      'Transform risk management with AI automation. 35+ compliance frameworks, real-time monitoring, predictive analytics.',
    images: ['/homebannersideimage.svg'],
    creator: '@EnterpriseRMAI',
  },
};

export default function Home() {
  const industryStats = [
    { value: '35+', label: 'Compliance Frameworks', icon: Shield },
    { value: '89%', label: 'Faster Risk Assessment', icon: TrendingUp },
    { value: '24/7', label: 'Continuous Monitoring', icon: Clock },
    { value: '25K+', label: 'Teams Trust Us', icon: Users }
  ];

  const complianceFrameworks = [
    { name: 'SOC 2', category: 'Trust Services' },
    { name: 'ISO 27001', category: 'Information Security' },
    { name: 'HIPAA', category: 'Healthcare' },
    { name: 'NIST AI RMF', category: 'AI Governance' },
    { name: 'ISO 42001', category: 'AI Management' },
    { name: 'HITRUST CSF', category: 'Healthcare Security' },
    { name: 'GDPR', category: 'Data Privacy' },
    { name: 'PCI DSS', category: 'Payment Security' }
  ];

  const aiFeatures = [
    {
      title: 'Predictive Risk Intelligence',
      description: 'AI-powered algorithms analyze patterns to predict emerging risks before they impact your business.',
      icon: Brain,
      benefit: 'Early threat detection'
    },
    {
      title: 'Automated Compliance Monitoring',
      description: 'Continuous monitoring across all frameworks with real-time alerts and automated evidence collection.',
      icon: Zap,
      benefit: '75% time reduction'
    },
    {
      title: 'Intelligent Risk Scoring',
      description: 'Dynamic risk scoring based on real-time data, industry benchmarks, and AI-driven threat analysis.',
      icon: TrendingUp,
      benefit: '95% accuracy rate'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        
        {/* Enhanced Stats Section */}
        <section className="py-16 bg-white border-b border-gray-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Trusted by Enterprise Leaders Worldwide
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Join thousands of organizations transforming their risk management with AI-powered automation
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
              {industryStats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center group hover:scale-105 transition-transform duration-300">
                    <div className="w-16 h-16 mx-auto mb-4 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-xl flex items-center justify-center group-hover:shadow-lg transition-shadow">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <div className="text-3xl md:text-4xl font-bold text-[#120174] mb-2">{stat.value}</div>
                    <div className="text-sm md:text-base text-gray-600 font-medium">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <SocialProof />

        {/* Compliance Frameworks Showcase */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full mb-6">
                <Shield className="h-4 w-4 text-[#120174]" />
                <span className="text-sm font-semibold text-[#120174]">COMPREHENSIVE COMPLIANCE</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Support for 35+ Leading Compliance
                <span className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] bg-clip-text text-transparent"> Frameworks</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                Across information security, data privacy, AI governance, and industry-specific regulations
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-12">
              {complianceFrameworks.map((framework, index) => (
                <div key={index} className="bg-white rounded-xl p-4 text-center shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="text-lg font-bold text-[#120174] mb-1">{framework.name}</div>
                  <div className="text-xs text-gray-500">{framework.category}</div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Link href="/contact">
                <Button className="bg-[#120174] hover:bg-[#1a0a8a] text-white px-8 py-6 rounded-full text-lg font-semibold group">
                  See All Frameworks
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <WhyEnterAI />

        {/* AI-Powered Features Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-linear-to-r from-[#0ea5ff]/10 to-[#4ade80]/10 rounded-full mb-6">
                <Brain className="h-4 w-4 text-[#0ea5ff]" />
                <span className="text-sm font-semibold bg-linear-to-r from-[#0ea5ff] to-[#4ade80] bg-clip-text text-transparent">AI-POWERED INNOVATION</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Next-Generation Risk Intelligence
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Leverage cutting-edge AI to transform how you identify, assess, and mitigate enterprise risks
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {aiFeatures.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="group relative overflow-hidden">
                    <div className="bg-white border border-gray-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                      <div className="w-14 h-14 bg-linear-to-br from-[#0ea5ff] to-[#4ade80] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <IconComponent className="h-7 w-7 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-[#0ea5ff]">
                        <CheckCircle className="h-4 w-4" />
                        {feature.benefit}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="bg-linear-to-r from-[#120174] to-[#2b1fa0] rounded-3xl p-8 md:p-12 text-white text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Experience AI-Powered Risk Management?</h3>
              <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
                See how leading enterprises are using our platform to reduce risk assessment time by 89% 
                while improving accuracy and compliance coverage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact">
                  <Button className="bg-white text-[#120174] hover:bg-gray-100 px-8 py-4 rounded-full font-semibold">
                    Schedule Demo
                  </Button>
                </Link>
               <a href="#">
                <Button variant="outline" className="bg-[#0ea5ff] border-none text-white hover:bg-white hover:text-[#120174] px-8 py-4 rounded-full font-semibold">
                  View Case Studies
                </Button>
                </a>
              </div>
            </div>
          </div>
        </section>

        <CoreCapabilities />
        <WhyUsSection />
        <FeaturesOverview />
        
        {/* Industry Recognition Section */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#0ea5ff]/10 rounded-full mb-6">
                <Star className="h-4 w-4 text-[#0ea5ff]" />
                <span className="text-sm font-semibold text-[#0ea5ff]">INDUSTRY AWARDS & CERTIFICATIONS</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Award-Winning GRC Platform
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
                Recognized by leading industry analysts and certified by global security organizations. 
                Trusted by Fortune 500 companies and government agencies worldwide.
              </p>
            </div>

            {/* Awards and Recognition Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-[#0ea5ff] to-[#4ade80] rounded-lg flex items-center justify-center">
                  <Star className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">Gartner</div>
                <div className="text-sm text-gray-600">Cool Vendor 2026</div>
                <div className="text-xs text-gray-500 mt-1">GRC Platforms</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-lg flex items-center justify-center">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">SOC 2 Type II</div>
                <div className="text-sm text-gray-600">Certified</div>
                <div className="text-xs text-gray-500 mt-1">Security & Availability</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-[#4ade80] to-[#0ea5ff] rounded-lg flex items-center justify-center">
                  <Lock className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">ISO 27001</div>
                <div className="text-sm text-gray-600">Certified</div>
                <div className="text-xs text-gray-500 mt-1">Information Security</div>
              </div>
              
              <div className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 mx-auto mb-4 bg-linear-to-br from-[#8b5cf6] to-[#0ea5ff] rounded-lg flex items-center justify-center">
                  <Globe className="h-6 w-6 text-white" />
                </div>
                <div className="text-lg font-bold text-gray-900 mb-1">GDPR</div>
                <div className="text-sm text-gray-600">Compliant</div>
                <div className="text-xs text-gray-500 mt-1">Data Privacy</div>
              </div>
            </div>

            {/* Performance Stats */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Platform Performance</h3>
                <p className="text-gray-600">Delivering exceptional results across all metrics</p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-6 gap-6">
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">4.8/5</div>
                  <div className="text-xs lg:text-sm text-gray-600">G2 Rating</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">99.98%</div>
                  <div className="text-xs lg:text-sm text-gray-600">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">&lt;2s</div>
                  <div className="text-xs lg:text-sm text-gray-600">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">95%</div>
                  <div className="text-xs lg:text-sm text-gray-600">NPS Score</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">24/7</div>
                  <div className="text-xs lg:text-sm text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-[#0ea5ff] mb-1">Zero</div>
                  <div className="text-xs lg:text-sm text-gray-600">Data Breaches</div>
                </div>
              </div>
            </div>

            {/* Trust Indicators */}
            <div className="mt-12 text-center">
              <p className="text-sm text-gray-600 mb-4">Trusted by leading organizations worldwide</p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                <span className="text-sm font-semibold text-gray-700">Fortune 500</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">Federal Agencies</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">Healthcare Systems</span>
                <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                <span className="text-sm font-semibold text-gray-700">Financial Institutions</span>
              </div>
            </div>
          </div>
        </section>

        <PrimaryCTA />
        <ContactFormCTA />
      </main>
      <Footer />
    </div>
  );
}
