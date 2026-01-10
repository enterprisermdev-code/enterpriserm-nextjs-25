import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PrimaryCTA } from '@/components/primary-cta';
import { ContactFormCTA } from '@/components/contactformcta';
import { Button } from '@/components/ui/button';
import { Shield, CheckCircle, FileText, Users, Lock, Award } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Healthcare Risk Management | HIPAA Compliance & Security Frameworks',
  description:
    'Comprehensive healthcare risk management solutions. Achieve HIPAA compliance with HITRUST, NIST, ISO 27001, and other critical security frameworks for healthcare organizations.',
  keywords: [
    'Healthcare Risk Management',
    'HIPAA Compliance',
    'HITRUST',
    'NIST Cybersecurity Framework',
    'Healthcare Security',
    'Medical Data Protection',
    'Healthcare GRC',
    'Patient Data Security',
    'Healthcare Compliance',
    'SOC 2 Healthcare',
  ],
  openGraph: {
    type: 'website',
    title: 'Healthcare Risk Management | HIPAA Compliance & Security Frameworks',
    description:
      'Streamline healthcare compliance with AI-powered risk management. HIPAA, HITRUST, NIST, and more.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Healthcare Technology and Security',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Healthcare Risk Management | HIPAA Compliance & Security Frameworks',
    description:
      'Streamline healthcare compliance with AI-powered risk management. HIPAA, HITRUST, NIST, and more.',
    images: ['https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1200&h=630&fit=crop'],
  },
};

const securityFrameworks = [
  {
    name: 'HIPAA',
    title: 'Health Insurance Portability and Accountability Act',
    description: 'Protects sensitive patient health information and outlines compliance requirements for healthcare organizations.',
    icon: Shield,
    keyBenefits: ['Patient data protection', 'Legal compliance', 'Privacy safeguards', 'Access controls'],
    color: 'bg-blue-50 border-blue-200 text-blue-700'
  },
  {
    name: 'NIST',
    title: 'NIST Cybersecurity Framework',
    description: 'A comprehensive set of guidelines aimed at mitigating cyber risks, specifically applicable to healthcare organizations.',
    icon: Lock,
    keyBenefits: ['Risk assessment', 'Threat detection', 'Incident response', 'Recovery planning'],
    color: 'bg-green-50 border-green-200 text-green-700'
  },
  {
    name: 'CIS',
    title: 'CIS Critical Security Controls',
    description: 'Focuses on minimizing cyber risks and is widely adopted in healthcare for essential security measures.',
    icon: CheckCircle,
    keyBenefits: ['Asset inventory', 'Vulnerability management', 'Security awareness', 'Access control'],
    color: 'bg-purple-50 border-purple-200 text-purple-700'
  },
  {
    name: 'COBIT',
    title: 'Control Objectives for Information and Related Technologies',
    description: 'Offers an IT governance framework for aligning business and IT goals in healthcare environments.',
    icon: Users,
    keyBenefits: ['IT governance', 'Process optimization', 'Risk management', 'Performance monitoring'],
    color: 'bg-orange-50 border-orange-200 text-orange-700'
  },
  {
    name: 'ISO 27001',
    title: 'Information Security Management System',
    description: 'Addresses broad information security needs, especially for sensitive healthcare data management.',
    icon: FileText,
    keyBenefits: ['Information security', 'Risk management', 'Continuous improvement', 'International standard'],
    color: 'bg-red-50 border-red-200 text-red-700'
  },
  {
    name: 'SOC 2',
    title: 'Service Organization Control 2',
    description: 'Enables healthcare organizations to be better positioned to meet the security requirements outlined in HIPAA.',
    icon: Award,
    keyBenefits: ['Vendor assurance', 'Trust building', 'Compliance validation', 'Risk mitigation'],
    color: 'bg-teal-50 border-teal-200 text-teal-700'
  }
];

const hitrustFeatures = [
  'Integrates HIPAA, NIST, ISO 27001, and PCI DSS standards',
  'Eliminates overlaps between different compliance requirements',
  'Provides a single, comprehensive framework',
  'Independent assessment and certification process',
  'Continuous monitoring and improvement',
  'Streamlined compliance management'
];

const industryStats = [
  { stat: '89%', label: 'Reduction in compliance time' },
  { stat: '99.9%', label: 'Data security uptime' },
  { stat: '75%', label: 'Faster audit preparation' },
  { stat: '95%', label: 'Regulatory compliance rate' }
];

export default function HealthcarePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10"
            style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=1920&h=1080&fit=crop")'
            }}
          ></div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-5xl font-bold mb-6">
                  Healthcare Risk Management & 
                  <span className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] bg-clip-text text-transparent"> Compliance Solutions</span>
                </h1>
                <p className="text-xl mb-8 text-gray-200">
                  Streamline HIPAA compliance and implement comprehensive security frameworks 
                  including HITRUST, NIST, and ISO 27001 to protect sensitive patient data 
                  and ensure regulatory compliance.
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
                  src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=1170&auto=format&fit=crop" 
                  alt="Healthcare Technology and Security"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
                  <div className="flex items-center gap-3">
                    <Shield className="h-8 w-8 text-[#0ea5ff]" />
                    <div>
                      <div className="font-bold text-2xl">99.9%</div>
                      <div className="text-sm text-gray-600">Compliance Rate</div>
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

        {/* Security Frameworks Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Essential Security Frameworks for Healthcare
              </h2>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                Comprehensive compliance coverage with industry-leading security frameworks 
                designed to protect patient data and ensure regulatory adherence.
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

        {/* HITRUST Spotlight Section */}
        <section className="py-24 bg-linear-to-br from-gray-50 to-blue-50">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] text-white p-2 rounded-lg inline-block mb-6">
                  <span className="text-sm font-semibold px-3">SPOTLIGHT FRAMEWORK</span>
                </div>
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  HITRUST: The Gold Standard for Healthcare Security
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  HITRUST provides a comprehensive and certifiable approach that healthcare 
                  organizations can use to manage the security, privacy and compliance of health information. 
                  It integrates multiple standards and regulations into a single, streamlined framework.
                </p>
                
                <div className="space-y-4 mb-8">
                  {hitrustFeatures.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Button className="bg-[#120174] hover:bg-[#1a0a8a] text-white px-8 py-6 rounded-full text-lg font-semibold">
                  Learn About HITRUST Implementation
                </Button>
              </div>
              
              <div className="relative">
                <img 
                  src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&h=400&fit=crop" 
                  alt="HITRUST Healthcare Compliance"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-[#0ea5ff] mb-2">1</div>
                    <div className="text-sm text-gray-600">Unified Framework</div>
                    <div className="text-xs text-gray-500">Multiple Standards</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Healthcare Organizations Choose Our Platform
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Streamline compliance, reduce risks, and protect patient data with 
                AI-powered automation and comprehensive framework coverage.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-linear-to-br from-blue-50 to-white p-8 rounded-2xl border border-blue-100">
                <Shield className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Comprehensive Protection</h3>
                <p className="text-gray-600">
                  Multi-layered security approach covering all major healthcare compliance 
                  frameworks and regulations in one unified platform.
                </p>
              </div>

              <div className="bg-linear-to-br from-green-50 to-white p-8 rounded-2xl border border-green-100">
                <CheckCircle className="h-12 w-12 text-green-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Automated Compliance</h3>
                <p className="text-gray-600">
                  AI-driven automation reduces manual effort by 75% while ensuring 
                  continuous compliance monitoring and reporting.
                </p>
              </div>

              <div className="bg-linear-to-br from-purple-50 to-white p-8 rounded-2xl border border-purple-100">
                <Award className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-4">Audit Readiness</h3>
                <p className="text-gray-600">
                  Always audit-ready with real-time documentation, evidence collection, 
                  and comprehensive reporting capabilities.
                </p>
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
