"use client";
import { Button } from '@/components/ui/button';
import { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import '../app/contact/phone-input.css';

export function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    phone: '',
    message: '',
    interest: 'demo'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add your form submission logic here
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">One step ahead to connect with us</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    required
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                    placeholder="Doe"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Work Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                  placeholder="john.doe@company.com"
                />
              </div>

              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  required
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                  placeholder="Your Company"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <PhoneInput
                  international
                  defaultCountry="US"
                  value={formData.phone}
                  onChange={(value) => setFormData({ ...formData, phone: value || '' })}
                  className="phone-input-custom"
                  numberInputProps={{
                    className: "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                  }}
                />
                <p className="text-xs text-gray-500 mt-1">Select your country and enter your phone number</p>
              </div>

              <div>
                <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                  I'm interested in *
                </label>
                <select
                  id="interest"
                  name="interest"
                  required
                  value={formData.interest}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all"
                >
                  <option value="demo">Requesting a Demo</option>
                  <option value="pricing">Pricing Information</option>
                  <option value="partnership">Partnership Opportunities</option>
                  <option value="support">Technical Support</option>
                  <option value="other">Other Inquiry</option>
                  <option value="consultation">Consultation Services</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-[#120174] focus:ring-2 focus:ring-[#120174]/20 outline-none transition-all resize-none"
                  placeholder="Tell us about your risk management challenges..."
                />
              </div>

              <Button 
                type="submit"
                className="w-full bg-[#120174] hover:bg-[#2b1fa0] text-white font-semibold px-8 py-6 rounded-lg text-lg"
              >
                Let's Talk
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <div className="sticky top-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Have questions? We're here to help. Reach out to our team and we'll get back to you within 24 hours.
              </p>

              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start gap-4 p-6 bg-[#f5f6fa] rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#120174] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email Us</h3>
                    <p className="text-gray-600">contact@EnterpriseRM.ai</p>
                    <p className="text-gray-600">support@EnterpriseRM.ai</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-6 bg-[#f5f6fa] rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#120174] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Call Us</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9am-6pm EST</p>
                  </div>
                </div>

                {/* Office */}
                <div className="flex items-start gap-4 p-6 bg-[#f5f6fa] rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#120174] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Visit Us</h3>
                    <p className="text-gray-600">123 Enterprise Way</p>
                    <p className="text-gray-600">San Francisco, CA 94105</p>
                  </div>
                </div>

                {/* Social */}
                <div className="flex items-start gap-4 p-6 bg-[#f5f6fa] rounded-2xl hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-[#120174] rounded-xl flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Follow Us</h3>
                    <div className="flex gap-3 mt-2">
                      <a href="https://www.linkedin.com/company/enterpriserm-ai/" className="text-gray-600 hover:text-[#120174] transition-colors">LinkedIn</a>
                      
                    </div>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="mt-8 p-6 bg-linear-to-br from-[#120174] to-[#0ea5ff] rounded-2xl text-white">
                <h3 className="font-bold text-xl mb-2">Enterprise Support</h3>
                <p className="text-sm opacity-90 mb-4">
                  Need dedicated support? Our enterprise plans include 24/7 assistance, dedicated account management, and priority response times.
                </p>
                <Button className="bg-white text-[#120174] hover:bg-gray-100 font-semibold">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
