"use client";
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import ContactForm from '@/components/contact-form';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 bg-linear-to-br from-[#120174] via-[#2b1fa0] to-[#0ea5ff] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse delay-700"></div>
          </div>
          
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block px-4 py-2 mb-6 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
                GET IN TOUCH
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Let's Talk About Your Risk Management Needs
              </h1>
              <p className="text-xl md:text-2xl leading-relaxed opacity-95">
                Ready to transform how your organization manages risk? Our team is here to help you get started.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Form Component */}
        <ContactForm />

        {/* FAQ Section */}
        <section className="py-20 bg-[#f5f6fa]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                <p className="text-xl text-gray-600">Quick answers to common questions</p>
              </div>

              <div className="space-y-4">
                <details className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                    How quickly can we get started?
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Most organizations are up and running within 2-4 weeks. Our onboarding team works closely with you to ensure a smooth implementation tailored to your needs.
                  </p>
                </details>

                <details className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                    What integrations do you support?
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    We integrate with major GRC tools, SIEM platforms, ticketing systems, and cloud providers. Our API allows for custom integrations as well.
                  </p>
                </details>

                <details className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                    Is my data secure?
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Absolutely. We use enterprise-grade encryption, SOC 2 Type II certified infrastructure, and follow industry best practices for data security and privacy.
                  </p>
                </details>

                <details className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                    Do you offer training?
                    <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <p className="mt-4 text-gray-600 leading-relaxed">
                    Yes! We provide comprehensive onboarding training, ongoing education resources, and dedicated customer success support to ensure your team gets maximum value.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
