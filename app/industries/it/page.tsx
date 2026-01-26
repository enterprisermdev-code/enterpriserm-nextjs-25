import type { Metadata } from 'next';
import Script from 'next/script';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PrimaryCTA } from '@/components/primary-cta';
import { ContactFormCTA } from '@/components/contactformcta';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, FileText, Users, Lock, Award, Server, Globe, Database } from 'lucide-react';

export const metadata: Metadata = {
  title: 'IT Security & Risk Management | NIST, ISO 27001, SOC 2 Compliance',
  description:
    'Comprehensive IT security frameworks including NIST Cybersecurity Framework, ISO 27001/27002, SOC 2, PCI DSS, and COBIT for robust cybersecurity governance and compliance.',
  keywords: [
    'IT Security Frameworks',
    'NIST Cybersecurity Framework',
    'ISO 27001',
    'ISO 27002',
    'SOC 2 Compliance',
    'PCI DSS',
    'COBIT Framework',
    'IT Risk Management',
    'Cybersecurity Governance',
    'Information Security Management',
  ],
  alternates: {
    canonical: '/industries/it',
  },
  openGraph: {
    type: 'website',
    title: 'IT Security & Risk Management | NIST, ISO 27001, SOC 2 Compliance',
    description:
      'Streamline IT security compliance with comprehensive frameworks. NIST, ISO 27001, SOC 2, PCI DSS, and COBIT implementation.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'IT Security and Technology Infrastructure',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Security & Risk Management | NIST, ISO 27001, SOC 2 Compliance',
    description:
      'Streamline IT security compliance with comprehensive frameworks. NIST, ISO 27001, SOC 2, PCI DSS, and COBIT implementation.',
    images: ['https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1200&h=630&fit=crop'],
  },
};

const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://www.enterpriserm.ai').replace(/\/+$/, '');
const ogImages = metadata.openGraph?.images;
let ogImageUrl: string | undefined = undefined;
if (Array.isArray(ogImages)) {
  const first: any = ogImages[0];
  ogImageUrl = typeof first === 'string' ? first : first?.url;
} else if (ogImages) {
  const single: any = ogImages as any;
  ogImageUrl = typeof single === 'string' ? single : single?.url;
}
const itJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: metadata.title,
  description: metadata.description,
  url: `${siteUrl}/industries/it`,
  image: ogImageUrl,
  breadcrumb: {
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: `${siteUrl}/` },
      { '@type': 'ListItem', position: 2, name: 'Industries', item: `${siteUrl}/industries` },
      { '@type': 'ListItem', position: 3, name: 'IT', item: `${siteUrl}/industries/it` },
    ],
  },
};

const securityFrameworks = [
  {
    name: 'NIST',
    title: 'NIST Cybersecurity Framework',
    description: 'A flexible framework that helps organizations manage and reduce cybersecurity risks through five core functions: Identify, Protect, Detect, Respond, and Recover.',
    icon: Shield,
    keyBenefits: ['Risk identification', 'Threat protection', 'Incident detection', 'Response planning'],
    color: 'bg-blue-50 border-blue-200 text-blue-700',
    coreFunctions: ['Identify', 'Protect', 'Detect', 'Respond', 'Recover']
  },
  {
    name: 'ISO 27001/27002',
    title: 'ISO/IEC 27001 and 27002',
    description: 'International standards for building an information security management system (ISMS) that outlines requirements for protecting data, managing risk and complying with evolving regulations.',
    icon: Globe,
    keyBenefits: ['Global standard', 'Risk management', 'Data protection', 'Regulatory compliance'],
    color: 'bg-green-50 border-green-200 text-green-700',
    coreFunctions: ['ISMS Implementation', 'Risk Assessment', 'Control Selection', 'Continuous Improvement']
  },
  {
    name: 'SOC 2',
    title: 'Service Organization Control 2',
    description: 'A voluntary compliance standard for service organizations that focuses on Trust Services Criteria: Security, Availability, Processing Integrity, Confidentiality and Privacy.',
    icon: Award,
    keyBenefits: ['Trust building', 'Service assurance', 'Vendor confidence', 'Compliance validation'],
    color: 'bg-purple-50 border-purple-200 text-purple-700',
    coreFunctions: ['Security', 'Availability', 'Processing Integrity', 'Confidentiality', 'Privacy']
  },
  {
    name: 'PCI DSS',
    title: 'Payment Card Industry Data Security Standard',
    description: 'A framework for payment processing that includes 12 requirements to protect customer data, covering access control, network security and data storage.',
    icon: Lock,
    keyBenefits: ['Payment security', 'Data protection', 'Fraud prevention', 'Compliance assurance'],
    color: 'bg-red-50 border-red-200 text-red-700',
    coreFunctions: ['Network Security', 'Data Protection', 'Access Control', 'Monitoring']
  },
  {
    name: 'COBIT',
    title: 'Control Objectives for Information and Related Technologies',
    description: 'A comprehensive framework designed to help organizations manage their IT resources more effectively, offering best practices for governance, risk management and cybersecurity.',
    icon: Database,
    keyBenefits: ['IT governance', 'Resource management', 'Best practices', 'Strategic alignment'],
    color: 'bg-orange-50 border-orange-200 text-orange-700',
    coreFunctions: ['Governance', 'Management', 'Evaluation', 'Optimization']
  }
];

const nistCoreFunctions = [
  {
    name: 'Identify',
    description: 'Develop organizational understanding to manage cybersecurity risk',
    icon: FileText,
    details: ['Asset Management', 'Business Environment', 'Governance', 'Risk Assessment']
  },
  {
    name: 'Protect',
    description: 'Develop and implement appropriate safeguards',
    icon: Shield,
    details: ['Identity Management', 'Access Control', 'Data Security', 'Maintenance']
  },
  {
    name: 'Detect',
    description: 'Develop and implement activities to identify cybersecurity events',
    icon: Users,
    details: ['Anomaly Detection', 'Security Monitoring', 'Detection Processes']
  },
  {
    name: 'Respond',
    description: 'Develop and implement appropriate activities for cybersecurity incidents',
    icon: Server,
    details: ['Response Planning', 'Communications', 'Analysis', 'Mitigation']
  },
  {
    name: 'Recover',
    description: 'Develop and implement activities for resilience and recovery',
    icon: CheckCircle,
    details: ['Recovery Planning', 'Improvements', 'Communications']
  }
];

const industryStats = [
  { stat: '85%', label: 'Threat detection improvement' },
  { stat: '70%', label: 'Faster incident response' },
  { stat: '92%', label: 'Compliance achievement rate' },
  { stat: '60%', label: 'Risk reduction average' }
];

const itBenefits = [
  {
    title: 'Structured Security Approach',
    description: 'Systematic framework implementation ensures comprehensive coverage of security domains and regulatory requirements.',
    icon: Shield,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    title: 'Integrated Compliance',
    description: 'Unified platform manages multiple compliance standards simultaneously, reducing overlap and administrative burden.',
    icon: CheckCircle,
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: 'DevSecOps Integration',
    description: 'Security embedded into software development lifecycle with automated vulnerability scanning and compliance checks.',
    icon: Server,
    color: 'from-purple-500 to-violet-500'
  }
];

export default function ITPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        <Script id="it-jsonld" type="application/ld+json" strategy="afterInteractive">
          {JSON.stringify(itJsonLd)}
        </Script>
        {/* Hero Section */}
        <section className="relative bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=1920&h=1080&fit=crop")'
            }}
          ></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  IT Security & Risk Management
                  <span className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] bg-clip-text text-transparent"> Frameworks</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Implement comprehensive security frameworks including NIST, ISO 27001/27002, 
                  SOC 2, PCI DSS, and COBIT to create a structured, repeatable approach to 
                  cybersecurity and regulatory compliance.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="/contact">
                  <Button className="bg-[#0ea5ff] hover:bg-[#0c94e6] text-white px-8 py-6 rounded-full text-lg font-semibold">
                    Request a Demo
                  </Button>
                    </a>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg" 
                  alt="IT Security Infrastructure"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Lock className="h-8 w-8 text-[#0ea5ff]" />
                    <div>
                      <div className="font-bold text-2xl">5</div>
                      <div className="text-sm text-gray-600">Core Frameworks</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {industryStats.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-[#120174] mb-2">{item.stat}</div>
                  <div className="text-gray-600">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NIST Framework Spotlight */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <div className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] text-white p-2 rounded-lg inline-block mb-6">
                <span className="text-sm font-semibold px-3">FEATURED FRAMEWORK</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                NIST Cybersecurity Framework: 5 Core Functions
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
                A flexible, risk-based approach to managing cybersecurity that helps organizations 
                of all sizes better understand, manage, and reduce their cybersecurity risk.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {nistCoreFunctions.map((func, index) => {
                const IconComponent = func.icon;
                return (
                  <div key={index} className="bg-white border-2 border-gray-100 rounded-xl p-6 text-center hover:shadow-lg transition-shadow group">
                    <div className="w-16 h-16 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{func.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{func.description}</p>
                    <div className="space-y-1">
                      {func.details.map((detail, detailIndex) => (
                        <div key={detailIndex} className="text-xs text-gray-500 bg-gray-50 rounded px-2 py-1">
                          {detail}
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Security Frameworks Section */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive IT Security Framework Coverage
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Implement industry-leading security frameworks that provide structured approaches 
                to managing cybersecurity risks and maintaining regulatory compliance.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {securityFrameworks.map((framework, index) => {
                const IconComponent = framework.icon;
                return (
                  <div key={index} className={`p-8 rounded-2xl border-2 ${framework.color} hover:shadow-lg transition-shadow`}>
                    <div className="flex items-start gap-6">
                      <div className="shrink-0">
                        <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                          <IconComponent className="h-8 w-8" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <h3 className="text-2xl font-bold">{framework.name}</h3>
                        </div>
                        <h4 className="text-lg font-semibold mb-3">{framework.title}</h4>
                        <p className="mb-4 text-gray-700">{framework.description}</p>
                        
                        {framework.coreFunctions && (
                          <div className="mb-4">
                            <h5 className="font-semibold mb-2">Core Functions:</h5>
                            <div className="flex flex-wrap gap-2">
                              {framework.coreFunctions.map((func, funcIndex) => (
                                <span key={funcIndex} className="text-xs bg-white rounded-full px-3 py-1 border">
                                  {func}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        <div className="grid grid-cols-2 gap-2">
                          {framework.keyBenefits.map((benefit, benefitIndex) => (
                            <div key={benefitIndex} className="flex items-center gap-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-green-600" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why IT Teams Choose Our Security Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Reduce cyber risks, ensure compliance, and integrate security into your 
                software development lifecycle with our comprehensive framework implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {itBenefits.map((benefit, index) => {
                const IconComponent = benefit.icon;
                return (
                  <div key={index} className="bg-linear-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg">
                    <div className={`w-16 h-16 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}>
                      <IconComponent className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </div>
                );
              })}
            </div>

            {/* DevSecOps Integration Highlight */}
            <div className="bg-linear-to-r from-[#120174] to-[#2b1fa0] text-white rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold mb-4">DevSecOps Integration</h3>
              <p className="text-xl mb-8 text-gray-200">
                Security embedded into your software development lifecycle with automated 
                vulnerability scanning, compliance checks, and continuous monitoring.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">Automated</div>
                  <div className="text-sm opacity-80">Security Scanning</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">Continuous</div>
                  <div className="text-sm opacity-80">Compliance Monitoring</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur">
                  <div className="text-2xl font-bold mb-2">Integrated</div>
                  <div className="text-sm opacity-80">Development Pipeline</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Key Value Proposition */}
        <section className="py-24 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Structured, Repeatable Cybersecurity
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  By adopting the right compliance frameworks, organizations can create a 
                  structured, repeatable approach to cybersecurity, reducing the risk of 
                  breaches and ensuring that security is integrated into the software development lifecycle.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#0ea5ff] rounded-lg flex items-center justify-center shrink-0">
                      <Shield className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Systematic Threat Management</h3>
                      <p className="text-gray-600">Address threats and vulnerabilities systematically with proven framework methodologies.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#4ade80] rounded-lg flex items-center justify-center shrink-0">
                      <CheckCircle className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Regulatory Compliance</h3>
                      <p className="text-gray-600">Maintain compliance with industry and government regulations through structured processes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#8b5cf6] rounded-lg flex items-center justify-center shrink-0">
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold mb-2">Breach Risk Reduction</h3>
                      <p className="text-gray-600">Significantly reduce the risk of security breaches through proactive framework implementation.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop" 
                  alt="IT Security Architecture"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0ea5ff] mb-2">85%</div>
                    <div className="text-sm text-gray-600">Risk Reduction</div>
                    <div className="text-xs text-gray-500">Average Improvement</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Sections */}
        <PrimaryCTA />
        <ContactFormCTA />
      </main>
      
      <Footer />
    </div>
  );
}
