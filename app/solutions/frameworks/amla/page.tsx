import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import {
  FaBalanceScale,
  FaUserCheck,
  FaClipboardCheck,
  FaBell,
  FaLock,
  FaFileSignature,
  FaChartLine,
  FaBuilding,
  FaIndustry,
  FaCreditCard,
  FaExchangeAlt,
  FaGlobeEurope,
  FaUserTie,
  FaArrowRight,
  FaShieldAlt
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "AMLA: Anti‑Money Laundering Act Overview, How to Comply, Industries, FAQs | 2026",
  description:
    "Understand the Anti‑Money Laundering Act (AMLA): risk‑based program requirements, KYC/CDD, beneficial ownership, transaction monitoring, SAR filing, sanctions screening, training, and independent testing.",
  keywords: [
    "AMLA",
    "Anti-Money Laundering",
    "BSA compliance",
    "KYC",
    "CDD",
    "SAR",
    "sanctions screening",
    "beneficial ownership",
    "transaction monitoring",
    "AML program",
    "risk-based approach",
  ],
  openGraph: {
    type: "article",
    title: "AMLA Compliance: What It Is and How To Apply",
    description:
      "A practical guide to AMLA: program pillars, KYC/CDD, beneficial ownership, monitoring, SARs, and ongoing governance.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1517242021971-3f6b1b1b1c89?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Financial compliance and AML program documentation",
      },
    ],
    siteName: "EnterpriseRM.ai",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AMLA Overview, Compliance Steps, Industries, FAQs",
    description:
      "Learn AMLA fundamentals and build a risk‑based AML program: KYC/CDD, ownership, monitoring, SARs, sanctions, training, and testing.",
    images: [
      "https://images.unsplash.com/photo-1517242021971-3f6b1b1b1c89?w=1200&h=630&fit=crop&auto=format&q=80",
    ],
    creator: "@EnterpriseRMAI",
  },
};

export default function AmlaPage() {
  const pillars = [
    { label: "Risk‑Based AML Program", desc: "Assess risks and tailor controls proportionate to exposure.", icon: FaBalanceScale },
    { label: "KYC / CDD", desc: "Know Your Customer and Customer Due Diligence processes.", icon: FaUserCheck },
    { label: "Beneficial Ownership", desc: "Identify and verify ultimate beneficial owners (UBOs).", icon: FaUserTie },
    { label: "Transaction Monitoring", desc: "Detect patterns and anomalies indicating suspicious activity.", icon: FaChartLine },
    { label: "SAR Filing", desc: "Escalate and file Suspicious Activity Reports in time.", icon: FaBell },
    { label: "Sanctions Screening", desc: "Screen customers/transactions against sanctions lists.", icon: FaGlobeEurope },
    { label: "Policy, Training, Testing", desc: "Document policies, train staff, and run independent audits.", icon: FaFileSignature },
  ];

  const steps = [
    "Perform AML risk assessment (products, geographies, customers, channels).",
    "Define program governance and Board oversight responsibilities.",
    "Implement KYC/CDD onboarding and ongoing monitoring.",
    "Collect and verify beneficial ownership information.",
    "Deploy transaction monitoring with calibrated scenarios and alerts.",
    "Investigate alerts; escalate and file SARs where warranted.",
    "Conduct sanctions screening on customers and payments.",
    "Train staff regularly; retain evidence; improve processes.",
    "Run independent testing/assurance and remediate findings.",
  ];

  const industries = [
    { name: "Banks & Credit Unions", desc: "Core banking services, wires, deposits, and lending.", icon: FaBuilding },
    { name: "FinTech & Payments", desc: "Card processing, wallets, remittances, and PSPs.", icon: FaCreditCard },
    { name: "Crypto Exchanges & VASPs", desc: "Digital assets, on/off‑ramps, and custodial services.", icon: FaExchangeAlt },
    { name: "Money Services Businesses (MSBs)", desc: "Money transmitters, check cashers, and currency dealers.", icon: FaIndustry },
    { name: "Lenders & Wealth Management", desc: "Underwriting, advisory, and high‑risk customer segments.", icon: FaBalanceScale },
    { name: "Insurance Providers", desc: "Premium flows, claims, and distribution networks.", icon: FaShieldAlt },
  ];

  const faqs = [
    { q: "What is AMLA?", a: "The Anti‑Money Laundering Act modernizes AML requirements under the Bank Secrecy Act (BSA), emphasizing risk‑based programs, beneficial ownership, technology adoption, and improved information sharing." },
    { q: "Who must comply with AMLA?", a: "Financial institutions and covered entities, including banks, MSBs, payment processors, crypto VASPs, lenders, insurers, and certain fintech platforms, must implement AML programs proportionate to risk." },
    { q: "What are AML program pillars?", a: "Common pillars include internal controls, designated compliance officer, training, independent testing, and customer due diligence (including beneficial ownership)." },
    { q: "How do SARs work?", a: "Institutions monitor and investigate activity; if suspicious, they file a SAR within required timeframes and retain records, avoiding tipping off involved parties." },
    { q: "How does AMLA relate to GDPR or SOC 2?", a: "AMLA focuses on financial crime controls; GDPR governs privacy rights; SOC 2 attests to security controls. Programs often intersect in data handling, monitoring, and governance." },
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
                AMLA FRAMEWORK
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">AMLA Compliance for Financial Services</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Build a risk‑based AML program with effective KYC/CDD, beneficial ownership verification, transaction monitoring, SAR processes, and sanctions screening.
              </p>
              <div className="flex gap-4">
                <a href="/contact">
                  <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
                    Talk to an expert <FaArrowRight className="inline-block" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 opacity-95">
                <span className="text-xs font-semibold uppercase tracking-wide">Program Focus:</span>
                {["Risk‑Based","KYC/CDD","Ownership","Monitoring","SARs","Sanctions"].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm">
                    <FaClipboardCheck className="text-emerald-300" /> {chip}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* What is AMLA */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is AMLA?</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                The Anti‑Money Laundering Act strengthens U.S. AML oversight under the BSA, promoting risk‑based programs, beneficial ownership transparency, technology‑enabled monitoring, and enhanced collaboration with regulators and law enforcement.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-7 gap-6">
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

        {/* How AMLA is applied */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How AMLA is Applied</h3>
                <p className="text-lg text-gray-600 mb-6">
                  Implement a risk‑based AML program lifecycle with governance, onboarding, monitoring, reporting, and continuous improvement.
                </p>
                <div className="space-y-4">
                  {steps.map((s, idx) => (
                    <div key={s} className="flex items-start gap-4">
                      <FaLock className="mt-1 text-[#120174]" />
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
                  src="https://images.unsplash.com/photo-1502945015378-0e284ca1a5be?w=1200&h=900&fit=crop&auto=format&q=80"
                  alt="Team operationalizing AML monitoring and reporting"
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
                <span className="text-sm font-semibold text-[#120174]">Industries Covered by AMLA</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs AMLA Compliance</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Financial institutions and covered entities adopt AMLA requirements to detect and report suspicious activity and prevent illicit finance.</p>
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
                <p className="text-lg text-gray-600">Quick answers to keep your AML program moving.</p>
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
