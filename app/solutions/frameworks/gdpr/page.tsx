import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import {
  FaShieldAlt,
  FaUserShield,
  FaGlobeEurope,
  FaBalanceScale,
  FaDatabase,
  FaUserCheck,
  FaFileSignature,
  FaClipboardCheck,
  FaLock,
  FaExchangeAlt,
  FaBell,
  FaArrowRight,
  FaIndustry,
  FaCloud,
  FaShoppingCart,
  FaHeartbeat,
  FaCreditCard,
  FaUserTie,
  FaCheckCircle
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "GDPR Compliance: Principles, Data Subject Rights, How to Comply, Industries, FAQs | 2026",
  description:
    "Understand GDPR: key principles, lawful bases, data subject rights, DPIAs, breach notification, cross-border transfers, and how enterprises can operationalize compliance.",
  keywords: [
    "GDPR",
    "GDPR compliance",
    "data protection",
    "EU privacy",
    "data subject rights",
    "lawful basis",
    "DPIA",
    "DPO",
    "SCCs",
    "cross-border transfers",
  ],
  openGraph: {
    type: "article",
    title: "GDPR Compliance: What It Is and How to Apply",
    description:
      "Learn GDPR principles, rights, and practical steps to implement privacy by design at scale, with guidance on DPIAs and cross-border transfers.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1555421689-43cad7100755?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Privacy and data protection concept",
      },
    ],
    siteName: "EnterpriseRM.ai",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "GDPR Compliance: Principles, Rights, How to Comply",
    description:
      "A practical GDPR guide: principles, lawful bases, rights handling, DPIAs, breach notification, and transfers.",
    images: [
      "https://images.unsplash.com/photo-1555421689-43cad7100755?w=1200&h=630&fit=crop&auto=format&q=80",
    ],
    creator: "@EnterpriseRMAI",
  },
};

export default function GdprPage() {
  const principles = [
    { label: "Lawfulness, Fairness, Transparency", icon: FaBalanceScale, desc: "Process data on a valid basis, explain clearly, and act fairly." },
    { label: "Purpose Limitation", icon: FaFileSignature, desc: "Collect for specified purposes and avoid incompatible reuse." },
    { label: "Data Minimization", icon: FaDatabase, desc: "Limit personal data to what is necessary for the purpose." },
    { label: "Accuracy", icon: FaClipboardCheck, desc: "Keep data accurate and up-to-date; correct inaccuracies." },
    { label: "Storage Limitation", icon: FaLock, desc: "Retain data only as long as needed; define retention." },
    { label: "Integrity & Confidentiality", icon: FaShieldAlt, desc: "Protect data with security appropriate to risk." },
    { label: "Accountability", icon: FaUserShield, desc: "Be able to demonstrate compliance across your program." },
  ];

  const steps = [
    "Map personal data and processing activities (records of processing).",
    "Establish lawful bases and consent management where applicable.",
    "Design processes for data subject rights (access, erase, port).",
    "Conduct DPIAs for high-risk processing and appoint a DPO if required.",
    "Implement technical and organizational security measures.",
    "Define retention schedules and deletion/archival workflows.",
    "Notify supervisory authority and subjects on eligible breaches (72h).",
    "Manage cross-border transfers with SCCs or other mechanisms.",
    "Train staff and audit vendors with DPAs and due diligence.",
  ];

  const industries = [
    { name: "SaaS & Cloud Platforms", desc: "EU customer onboarding, telemetry, and support data.", icon: FaCloud },
    { name: "eCommerce & Retail", desc: "Checkout, analytics, personalization, and marketing consent.", icon: FaShoppingCart },
    { name: "FinTech & Payments", desc: "KYC, AML, transaction, and fraud prevention data.", icon: FaCreditCard },
    { name: "Healthcare & HealthTech", desc: "Special category data with strict protection.", icon: FaHeartbeat },
    { name: "HR, Payroll, People Ops", desc: "Employee data, candidates, and internal systems.", icon: FaUserTie },
    { name: "AdTech & MarTech", desc: "Consent, profiling, and cross-site identifiers.", icon: FaExchangeAlt },
  ];

  const faqs = [
    { q: "Does GDPR apply outside the EU?", a: "Yes. GDPR applies extraterritorially when you offer goods/services to EU residents or monitor their behavior." },
    { q: "What is personal data under GDPR?", a: "Any information relating to an identified or identifiable natural person, including online identifiers and device IDs." },
    { q: "Do we need a Data Protection Officer (DPO)?", a: "A DPO is required for certain public bodies and organizations engaged in large-scale systematic monitoring or large-scale processing of special categories of data." },
    { q: "When is a DPIA required?", a: "When processing is likely to result in a high risk to individuals' rights and freedoms, such as profiling, large-scale monitoring, or special category data." },
    { q: "How fast do we notify a breach?", a: "Notify the supervisory authority within 72 hours when feasible; notify data subjects when there's high risk to their rights and freedoms." },
    { q: "How does GDPR relate to SOC 2 or ISO 27001?", a: "SOC 2/ISO 27001 focus on security controls. GDPR adds privacy obligations like lawful basis, rights handling, and transparency. Together they strengthen assurance." },
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
                GDPR FRAMEWORK
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">GDPR Compliance for Modern Enterprises</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Operationalize privacy by design: implement lawful bases, enable data subject rights, and govern cross-border transfers with confidence.
              </p>
              <div className="flex gap-4">
                <a href="/contact">
                  <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
                    Talk to an expert <FaArrowRight className="inline-block" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 opacity-95">
                <span className="text-xs font-semibold uppercase tracking-wide">Key Principles:</span>
                {["Lawfulness","Transparency","Data Minimization","Security","Accountability"].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm">
                    <FaCheckCircle className="text-emerald-300" /> {chip}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* What is GDPR */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is GDPR?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The General Data Protection Regulation (GDPR) is the EU's privacy law governing how organizations collect, use, share, and protect personal data. It mandates principles, lawful bases, rights handling, and security measures with accountability.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {principles.map((p) => {
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

        {/* How GDPR is applied */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How GDPR is Applied</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Adoption follows a continuous privacy program lifecycle. Start with data mapping and governance, then embed privacy by design into processes and systems.
                </p>
                <div className="space-y-4">
                  {steps.map((s, idx) => (
                    <div key={s} className="flex items-start gap-4">
                      <FaGlobeEurope className="mt-1 text-[#120174]" />
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
                  src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&h=900&fit=crop&auto=format&q=80"
                  alt="Team operationalizing GDPR processes"
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
                <span className="text-sm font-semibold text-[#120174]">Industries Impacted by GDPR</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs GDPR Compliance</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Any organization processing EU personal data—regardless of location—must align to GDPR obligations and demonstrate accountability.</p>
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
                  <FaUserCheck />
                  <span className="text-sm font-semibold">FAQs</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h3>
                <p className="text-lg text-gray-600">Quick answers to keep your program moving.</p>
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
