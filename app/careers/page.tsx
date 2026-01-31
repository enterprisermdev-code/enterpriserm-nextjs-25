'use client';

import { useState, useRef, FormEvent, ChangeEvent } from 'react';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Button } from '@/components/ui/button';
import {
  BriefcaseBusiness,
  Sparkles,
  Users,
  Rocket,
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

const cultureHighlights = [
  {
    title: 'Mission-Driven Innovation',
    description: 'Ship AI-powered governance features that help enterprises stay ahead of regulatory change and emerging risk.',
    icon: Rocket
  },
  {
    title: 'People-First Culture',
    description: 'Work with a collaborative, global team that celebrates curiosity, impact, and healthy work-life balance.',
    icon: Users
  },
  {
    title: 'Growth Mindset',
    description: 'Access mentorship, learning stipends, and leadership programs tailored to your long-term goals.',
    icon: Sparkles
  }
];

const jobOpenings = [
  {
    title: 'Senior AI Risk Analyst',
    location: 'Remote · North America',
    type: 'Full-time',
    summary: 'Model new risk scenarios, guide customers on mitigation strategies, and collaborate with product to shape the roadmap.'
  },
  {
    title: 'GRC Solutions Consultant',
    location: 'Hybrid · London, UK',
    type: 'Full-time',
    summary: 'Lead enterprise discovery calls, translate compliance needs into technical solutions, and accelerate customer onboarding.'
  },
  {
    title: 'Senior Frontend Engineer',
    location: 'Remote · Americas',
    type: 'Full-time',
    summary: 'Craft delightful dashboards, performance-tune complex data visualizations, and elevate component accessibility.'
  }
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
      const payload = new FormData();
      payload.append('name', formData.name);
      payload.append('email', formData.email);
      payload.append('phone', formData.phone);
      if (formData.resume) {
        payload.append('resume', formData.resume);
      }

      // TODO: Swap simulated delay with actual POST to careers API endpoint when available.
      await new Promise(resolve => setTimeout(resolve, 1500));

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
                  <span className="text-sm font-semibold uppercase tracking-widest">Careers at EnterpriseRM.ai</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
                  Build the Future of AI-Governed Risk Intelligence
                </h1>
                <p className="text-lg md:text-xl text-blue-100 mb-8">
                  Join a product-led team helping the world&apos;s most regulated industries move fast, stay compliant, and manage risk with confidence.
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
                    <a href="#life">Life at EnterpriseRM</a>
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
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 text-[#120174] rounded-full mb-6">
                <Sparkles className="h-4 w-4" />
                <span className="text-sm font-semibold">Life at EnterpriseRM.ai</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where Purpose Meets Opportunity</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We empower specialists across engineering, design, data science, and risk disciplines to do their most meaningful work—while staying grounded in measurable outcomes for our customers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {cultureHighlights.map(({ title, description, icon: Icon }) => (
                <div
                  key={title}
                  className="group rounded-2xl border border-gray-100 bg-linear-to-br from-white via-white to-gray-50 p-8 shadow-sm hover:-translate-y-2 hover:shadow-lg transition-all"
                >
                  <div className="w-14 h-14 rounded-xl bg-linear-to-br from-[#0ea5ff] to-[#4ade80] flex items-center justify-center text-white mb-6">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
                  <p className="text-gray-600 leading-relaxed">{description}</p>
                </div>
              ))}
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
                    <span className="text-sm font-semibold">Our Hiring Journey</span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Your Next Chapter Starts Here</h2>
                  <p className="text-lg text-gray-600">
                    We keep hiring intentional, transparent, and human. Expect prompt updates, thoughtful conversations, and a team invested in your success from hello to onboarding.
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
                  Share your details and resume. Our talent team reviews every application and responds within five business days.
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
                      Work Email <span className="text-red-500">*</span>
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
                        pattern="[0-9+\-\s()]*"
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
                        required
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
                    Need accommodations during the hiring process? Email careers@enterpriserm.ai and we&apos;ll support you.
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
