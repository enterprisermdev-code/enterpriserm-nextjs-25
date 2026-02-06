'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  BriefcaseBusiness,
  Sparkles,
  ShieldCheck,
  CalendarCheck,
  User,
  Mail,
  Phone,
  FileUp,
  Loader2,
  CheckCircle,
  AlertCircle
} from 'lucide-react';

// Content updated per request: roles, skills, opportunities, and why-join
const roles = [
  'GRC Implementation Consultants',
  'Enterprise Risk Management (ERM) Professionals',
  'Third-Party Risk Management (TPRM) Specialists',
  'Vendor Risk & Due Diligence Analysts',
  'Information Security & Compliance Auditors',
  'Internal / External IT Auditors',
  'Risk & Compliance Analysts',
  'Security Assurance & Control Testing Professionals'
];

const skills = [
  'GRC program design and implementation',
  'Risk assessments and risk treatment planning',
  'Third-party/vendor risk assessments',
  'Regulatory and framework alignment (ISO 27001, SOC 1/2, NIST, PCI DSS, GDPR, etc.)',
  'Control design, testing, and evidence management',
  'Audit planning, execution, and reporting',
  'Stakeholder and client engagement'
];

const whyJoin = [
  'Work on real-world GRC and risk challenges',
  'Exposure to multiple industries and clients',
  'Opportunity to grow with a product-based GRC company',
  'Flexible engagement models (internal & client-facing roles)',
  'Collaborative, risk-focused, and growth-driven culture'
];

const hiringSteps = [
  {
    title: 'Share Your Story',
    description: 'Submit your application so we can learn about your experience and aspirations.',
    icon: User
  },
  {
    title: 'Deep-Dive Conversations',
    description: 'Meet the team, explore role expectations, and tackle a role-relevant challenge.',
    icon: ShieldCheck
  },
  {
    title: 'Join the Mission',
    description: 'Receive a tailored offer, connect with your onboarding buddy, and start building with us.',
    icon: CalendarCheck
  }
];

export default function CareersPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    resume: null as File | null
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [fileError, setFileError] = useState('');
  const formRef = useRef<HTMLFormElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData(previous => ({
      ...previous,
      [name]: value
    }));
  };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] ?? null;

    if (!file) {
      setFormData(previous => ({
        ...previous,
        resume: null
      }));
      setFileError('');
      return;
    }

    const maxSizeBytes = 2 * 1024 * 1024;
    const isPdf = file.type === 'application/pdf' || file.name.toLowerCase().endsWith('.pdf');

    if (!isPdf) {
      setFileError('Please upload a PDF file.');
      setFormData(previous => ({
        ...previous,
        resume: null
      }));
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    if (file.size > maxSizeBytes) {
      setFileError('PDF must be smaller than 2 MB.');
      setFormData(previous => ({
        ...previous,
        resume: null
      }));
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
      return;
    }

    setFileError('');
    setFormData(previous => ({
      ...previous,
      resume: file
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!formData.resume) {
      setFileError('Please upload a PDF file smaller than 2 MB.');
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to your original API for MongoDB/Cloudflare storage
      const originalPayload = new FormData();
      originalPayload.append('name', formData.name);
      originalPayload.append('email', formData.email);
      originalPayload.append('phone', formData.phone);
      if (formData.resume) {
        originalPayload.append('resume', formData.resume);
      }

      const originalResponse = await fetch('/api/careers', {
        method: 'POST',
        body: originalPayload
      });

      // Submit to Web3Forms for email notifications
      const emailPayload = new FormData();
      emailPayload.append('access_key', '5f0057f5-db73-46a0-8491-e1411b54d751');
      emailPayload.append('name', formData.name);
      emailPayload.append('email', formData.email);
      emailPayload.append('phone', formData.phone);
      emailPayload.append('subject', 'New Career Application - EnterpriseRM');
      emailPayload.append('message', `New career application received:
      
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Resume: ${formData.resume?.name || 'No file uploaded'}`);

      const emailResponse = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: emailPayload
      });

      const originalData = await originalResponse.json().catch(() => undefined);
      const emailData = await emailResponse.json().catch(() => undefined);

      // Consider it successful if the original API (database) submission succeeds
      if (originalResponse.ok && originalData?.success) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          resume: null
        });
        setFileError('');
        formRef.current?.reset();
        if (fileInputRef.current) {
          fileInputRef.current.value = '';
        }
      } else {
        setSubmitStatus('error');
        if (originalData?.message) {
          setFileError(originalData.message);
        }
      }
    } catch (error) {
      console.error('Careers form submission failed', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white py-24">
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="absolute inset-0 bg-cover bg-center opacity-20"
            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1920&h=1080&fit=crop)' }}
          />

          <div className="container mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full mb-6 backdrop-blur">
                  <BriefcaseBusiness className="h-4 w-4" />
                  <span className="text-sm font-semibold uppercase tracking-widest">Careers at EnterpriseRM</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Build the Future of GRC & Risk Management
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8">
                  At EnterpriseRM, we are a product-based company and staffing augmentation partner focused on solving real-world challenges in Governance, Risk, and Compliance (GRC). We help enterprises design, implement, and scale effective risk and compliance programs—supported by strong technology and experienced professionals.
                </p>
                <p className="text-lg md:text-xl text-blue-100 mb-8">
                  We are continuously expanding our internal teams and our client delivery capabilities. If you are an experienced GRC professional looking to work on meaningful, high-impact engagements, we’d love to hear from you.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    asChild
                    className="rounded-full bg-[#0ea5ff] hover:bg-[#0c94e6] text-white text-base font-semibold px-8 py-6"
                  >
                    <a href="#apply">View Openings</a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-white/30 text-white hover:bg-white/10 text-base font-semibold px-8 py-6"
                  >
                    <a href="#life">Who We Are Looking For</a>
                  </Button>
                </div>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-3xl p-8 backdrop-blur shadow-2xl">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <div className="text-4xl font-bold">35+</div>
                    <p className="text-sm text-blue-100">Compliance frameworks automated</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">24/7</div>
                    <p className="text-sm text-blue-100">Always-on monitoring coverage</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">89%</div>
                    <p className="text-sm text-blue-100">Faster risk assessments</p>
                  </div>
                  <div>
                    <div className="text-4xl font-bold">25K+</div>
                    <p className="text-sm text-blue-100">Risk leaders on the platform</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="life" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 text-[#120174] rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Who We Are Looking For</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Experienced GRC & Risk Professionals</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto mt-4">
                We welcome experienced professionals across the GRC and Risk Management spectrum, including but not limited to:
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">GRC & Risk Roles</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {roles.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <hr className="my-12 border-gray-200" />

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Key Skills & Experience</h3>
              <p className="text-gray-600 mb-4">We’re interested in professionals with experience in areas such as:</p>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {skills.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <hr className="my-12 border-gray-200" />

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Internal & Client Opportunities</h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-700">
                <li>
                  <span className="font-medium">Internal Roles:</span> Be part of our core team building and scaling GRC solutions and products
                </li>
                <li>
                  <span className="font-medium">Client Engagements:</span> Work on short-term or long-term assignments with leading enterprises through our staffing augmentation model
                </li>
              </ul>
              <p className="text-gray-600 mt-4">If your skills match our current or upcoming requirements, our team will connect with you to discuss suitable opportunities.</p>

              <hr className="my-12 border-gray-200" />

              <h3 className="text-xl font-semibold text-gray-900 mb-3">Why Join EnterpriseRM?</h3>
              <ul className="list-disc pl-6 space-y-2 text-gray-700">
                {whyJoin.map(item => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

       
        <section id="apply" className="py-24 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-16">
              <div className="space-y-10">
                <div>
                  <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 text-[#120174] rounded-full mb-6">
                    <ShieldCheck className="h-4 w-4" />
                    <span className="text-sm font-semibold">Apply Now</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Next Chapter Starts Here</h2>
                  <p className="text-lg text-gray-600">
                    If you are an experienced GRC professional and passionate about risk, compliance, and security, feel free to apply. Our hiring team will review your profile, and if there’s a match, we’ll connect with you.
                  </p>
                </div>

                <div className="space-y-6">
                  {hiringSteps.map(({ title, description, icon: Icon }) => (
                    <div key={title} className="flex gap-4">
                      <div className="shrink-0 w-12 h-12 rounded-xl bg-linear-to-br from-[#0ea5ff] to-[#4ade80] flex items-center justify-center text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
                        <p className="text-gray-600">{description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-gray-200 shadow-2xl rounded-3xl p-8 md:p-10">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">Apply in Minutes</h3>
                <p className="text-gray-600 mb-8">
                  Share your details and resume. Our team reviews every application and responds promptly.
                </p>

                {submitStatus === 'success' && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-emerald-300 bg-emerald-50 px-4 py-3 text-emerald-700">
                    <CheckCircle className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">Application received.</p>
                      <p className="text-sm">Thanks for reaching out—our hiring team will be in touch shortly.</p>
                    </div>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 flex items-start gap-3 rounded-xl border border-red-300 bg-red-50 px-4 py-3 text-red-700">
                    <AlertCircle className="h-5 w-5 shrink-0" />
                    <div>
                      <p className="font-semibold">We couldn&apos;t submit the form.</p>
                      <p className="text-sm">Please try again or email careers@enterpriserm.ai.</p>
                    </div>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-semibold text-gray-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <User className="h-5 w-5" />
                      </div>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Jamie Rivera"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-gray-900 shadow-inner focus:border-[#0ea5ff] focus:outline-none focus:ring-2 focus:ring-[#0ea5ff]/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-semibold text-gray-700">
                       Email <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jamie.rivera@company.com"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-gray-900 shadow-inner focus:border-[#0ea5ff] focus:outline-none focus:ring-2 focus:ring-[#0ea5ff]/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-gray-700">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-gray-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+1 (555) 867-5309"
                        pattern="^[0-9 ()+-]*$"
                        className="w-full rounded-xl border border-gray-200 bg-gray-50 pl-12 pr-4 py-3 text-gray-900 shadow-inner focus:border-[#0ea5ff] focus:outline-none focus:ring-2 focus:ring-[#0ea5ff]/40 transition"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="resume" className="mb-2 block text-sm font-semibold text-gray-700">
                      Resume / CV <span className="text-red-500">*</span>
                    </label>
                    <div>
                      <input
                        id="resume"
                        name="resume"
                        type="file"
                        accept=".pdf,application/pdf"
                        onChange={handleFileChange}
                        ref={fileInputRef}
                        className="hidden"
                      />
                      <label
                        htmlFor="resume"
                        className="flex items-center gap-3 rounded-xl border-2 border-dashed border-[#0ea5ff]/40 bg-[#0ea5ff]/5 px-5 py-4 text-[#0ea5ff] font-medium cursor-pointer hover:border-[#0ea5ff]/70 hover:bg-[#0ea5ff]/10 transition"
                      >
                        <FileUp className="h-5 w-5" />
                        <span>{formData.resume ? formData.resume.name : 'Upload only PDF file'}</span>
                        <span>{formData.resume ? formData.resume.name : '- Max 2 MB File Size'}</span>
                      </label>
                      {fileError && (
                        <p className="mt-2 flex items-center gap-2 text-sm text-red-600">
                          <AlertCircle className="h-4 w-4" />
                          {fileError}
                        </p>
                      )}
                      {formData.resume && !fileError && (
                        <p className="mt-2 flex items-center gap-2 text-sm text-emerald-600">
                          <CheckCircle className="h-4 w-4" />
                          File selected: {formData.resume.name}
                        </p>
                      )}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full rounded-full bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#0ea5ff] px-8 py-5 text-base font-semibold text-white shadow-lg hover:shadow-xl transition focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#0ea5ff]/40 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <Loader2 className="h-5 w-5 animate-spin" />
                        Sending Application
                      </span>
                    ) : (
                      'Submit Application'
                    )}
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Need accommodations during the hiring process? Email connect@enterpriserm.ai and we&apos;ll support you.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
