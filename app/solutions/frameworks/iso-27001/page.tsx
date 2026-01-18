import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import {
  FaShieldAlt,
  FaCheckCircle,
  FaListUl,
  FaClipboardCheck,
  FaProjectDiagram,
  FaFileSignature,
  FaUserShield,
  FaLock,
  FaCogs,
  FaArrowRight,
  FaIndustry,
  FaCloud,
  FaCreditCard,
  FaHeartbeat,
  FaShoppingCart,
  FaNetworkWired,
  FaBuilding
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "ISO/IEC 27001: ISMS, Annex A Controls, Certification Steps, Industries, FAQs | 2026",
  description:
    "Learn ISO/IEC 27001: what it is, ISMS requirements, Annex A controls, certification timeline (Stage 1/2, surveillance), who needs it, and practical adoption steps.",
  keywords: [
    "ISO 27001",
    "ISMS",
    "Annex A controls",
    "ISO 27001 certification",
    "information security management",
    "risk assessment and treatment",
    "Statement of Applicability",
    "internal audit",
    "management review",
  ],
  openGraph: {
    type: "article",
    title: "ISO/IEC 27001: What It Is and How To Get Certified",
    description:
      "Understand the ISO 27001 ISMS, Annex A controls, and a pragmatic roadmap to certification with ongoing surveillance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1551281044-8d8f1d0d7a62?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Information security and compliance documentation",
      },
    ],
    siteName: "EnterpriseRM.ai",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISO/IEC 27001: ISMS, Annex A, Certification, FAQs",
    description:
      "A practical guide to ISO 27001: ISMS requirements, Annex A, certification stages, and who needs it.",
    images: [
      "https://images.unsplash.com/photo-1551281044-8d8f1d0d7a62?w=1200&h=630&fit=crop&auto=format&q=80",
    ],
    creator: "@EnterpriseRMAI",
  },
};

export default function Iso27001Page() {
  const pillars = [
    { label: "ISMS (Clauses 4–10)", desc: "Context, leadership, planning, support, operation, evaluation, improvement.", icon: FaProjectDiagram },
    { label: "Risk Assessment & Treatment", desc: "Identify risks, evaluate, select treatment options, and track plans.", icon: FaClipboardCheck },
    { label: "Annex A Controls", desc: "Control objectives across organizational, people, physical, and technological areas.", icon: FaListUl },
    { label: "Statement of Applicability (SoA)", desc: "Declare applicable controls with justification and implementation status.", icon: FaFileSignature },
    { label: "Internal Audit & Review", desc: "Measure ISMS effectiveness, run audits, and conduct management review.", icon: FaUserShield },
    { label: "Continuous Improvement (PDCA)", desc: "Plan-Do-Check-Act to sustain and mature the ISMS.", icon: FaCogs },
  ];

  const steps = [
    "Define scope and context; secure leadership commitment.",
    "Perform risk assessment and prepare risk treatment plan.",
    "Establish policies, procedures, and Annex A controls.",
    "Produce the Statement of Applicability (SoA).",
    "Roll out training and awareness; operate the ISMS.",
    "Conduct internal audit and management review.",
    "Stage 1: documentation readiness audit (certification body).",
    "Stage 2: implementation effectiveness audit (on-site/remote).",
    "Surveillance audits annually; recertification typically every 3 years.",
  ];

  const industries = [
    { name: "SaaS & Cloud Platforms", desc: "Customer data, multi-tenant services, and platform operations.", icon: FaCloud },
    { name: "FinTech & Payments", desc: "Transactional integrity, fraud prevention, and partner assurance.", icon: FaCreditCard },
    { name: "Healthcare & Life Sciences", desc: "Clinical systems, R&D, and sensitive health information.", icon: FaHeartbeat },
    { name: "eCommerce & Retail", desc: "Customer accounts, order processing, and integrations.", icon: FaShoppingCart },
    { name: "Telecom & Networking", desc: "Network services, subscriber data, and infrastructure.", icon: FaNetworkWired },
    { name: "Enterprise & Gov Contractors", desc: "Security assurance across complex vendor ecosystems.", icon: FaBuilding },
  ];

  const faqs = [
    { q: "What is ISO/IEC 27001?", a: "An international standard for establishing, implementing, maintaining, and improving an Information Security Management System (ISMS)." },
    { q: "Do we need certification to be compliant?", a: "You can implement ISO 27001 without certification, but certification by an accredited body provides market-recognized assurance to customers and partners." },
    { q: "What are Annex A controls?", a: "A catalog of control objectives and controls supporting the ISMS—spanning organizational, people, physical, and technological domains." },
    { q: "How long does certification take?", a: "Depends on scope and maturity; many organizations complete initial certification in 3–6 months with focused effort and leadership support." },
    { q: "How does ISO 27001 relate to SOC 2?", a: "ISO 27001 is a certifiable management system standard; SOC 2 is an attestation against Trust Services Criteria. Many control activities align and can be mapped." },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero */}
        <section className="relative py-28 pt-36 bg-linear-to-br from-[#120174] via-[#2b1fa0] to-[#0ea5ff] text-white overflow-hidden">
          <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
                ISO/IEC 27001
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">ISO 27001 Information Security Management</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Build an auditable ISMS with risk-based controls, a clear SoA, and continuous improvement to meet customer and regulatory expectations.
              </p>
              <div className="flex gap-4">
                <a href="/contact">
                  <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
                    Talk to an expert <FaArrowRight className="inline-block" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 opacity-95">
                <span className="text-xs font-semibold uppercase tracking-wide">Highlights:</span>
                {["ISMS","Annex A","Risk Treatment","SoA","Continuous Improvement"].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm">
                    <FaCheckCircle className="text-emerald-300" /> {chip}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* What is ISO 27001 */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is ISO/IEC 27001?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                ISO/IEC 27001 is the international standard for Information Security Management Systems (ISMS). It defines requirements to manage risks and implement controls to protect information assets, aligned to business objectives.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {pillars.map((p) => {
                const Icon = p.icon;
                return (
                  <div key={p.label} className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
                    <div className="w-12 h-12 mb-3 rounded-xl bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{p.label}</div>
                    <div className="text-sm text-gray-600">{p.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How ISO 27001 is applied */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How ISO 27001 is Applied</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Follow a structured program: define scope, assess risk, implement controls, and evidence effectiveness through audits and reviews.
                </p>
                <div className="space-y-4">
                  {steps.map((s, idx) => (
                    <div key={s} className="flex items-start gap-4">
                      <FaShieldAlt className="mt-1 text-[#120174]" />
                      <div>
                        <div className="font-semibold text-gray-900">Step {idx + 1}</div>
                        <div className="text-gray-600">{s}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <Image
                  src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?w=1200&h=900&fit=crop&auto=format&q=80"
                  alt="Team planning ISO 27001 implementation"
                  width={600}
                  height={500}
                  className="rounded-2xl shadow-lg border border-gray-200"
                  unoptimized
                />
              </div>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 bg-white border-t border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full mb-6">
                <FaIndustry className="text-[#120174]" />
                <span className="text-sm font-semibold text-[#120174]">Industries That Pursue ISO 27001</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs ISO 27001 Certification</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Organizations handling sensitive information or operating in regulated ecosystems adopt ISO 27001 to demonstrate robust, auditable security management.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {industries.map((ind) => {
                const Icon = ind.icon;
                return (
                  <div key={ind.name} className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 rounded-lg bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white flex items-center justify-center">
                        <Icon className="text-lg" />
                      </div>
                      <div className="text-lg font-semibold text-gray-900">{ind.name}</div>
                    </div>
                    <div className="text-sm text-gray-600">{ind.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-20 bg-[#f5f6fa]">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <FaUserShield />
                  <span className="text-sm font-semibold">FAQs</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h3>
                <p className="text-lg text-gray-600">Quick answers to help plan your certification journey.</p>
              </div>
              <div className="space-y-4">
                {faqs.map((f) => (
                  <details key={f.q} className="group bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <summary className="flex justify-between items-center cursor-pointer font-semibold text-lg text-gray-900">
                      {f.q}
                      <svg className="w-5 h-5 transform group-open:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </summary>
                    <p className="mt-3 text-gray-700">{f.a}</p>
                  </details>
                ))}
              </div>
            </div>
          </div>
        </section>

        <PrimaryCTA />
      </main>

      <Footer />
    </div>
  );
}
