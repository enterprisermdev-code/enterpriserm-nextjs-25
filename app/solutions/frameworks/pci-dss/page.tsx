import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import {
  FaCreditCard,
  FaLock,
  FaShieldAlt,
  FaServer,
  FaNetworkWired,
  FaKey,
  FaUserShield,
  FaClipboardCheck,
  FaFire,
  FaDatabase,
  FaCogs,
  FaFileSignature,
  FaCheckCircle,
  FaBuilding,
  FaArrowRight,
  FaIndustry,
  FaShoppingCart,
  FaCloud,
  FaCashRegister
} from "react-icons/fa";

export const metadata: Metadata = {
  title: "PCI DSS: Requirements, SAQs vs ROC, Scope, Industries, FAQs | 2026",
  description:
    "PCI DSS explained: 12 requirements, scoping and segmentation, SAQs vs ROC/AOC, ASV scans, and practical steps for merchants and service providers.",
  keywords: [
    "PCI DSS",
    "cardholder data",
    "SAQ",
    "ROC",
    "AOC",
    "ASV scans",
    "QSA",
    "tokenization",
    "network segmentation",
    "payment security",
  ],
  openGraph: {
    type: "article",
    title: "PCI DSS: What It Is and How To Comply",
    description:
      "Understand PCI DSS scope, the 12 requirements, validation paths (SAQs vs ROC), and continuous controls for payment security.",
    images: [
      {
        url: "https://images.unsplash.com/photo-1556742043-0cfeb4d0baff?w=1200&h=630&fit=crop&auto=format&q=80",
        width: 1200,
        height: 630,
        alt: "Payment terminal and card security",
      },
    ],
    siteName: "EnterpriseRM.ai",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "PCI DSS Overview, Requirements, SAQs, ROC, FAQs",
    description:
      "A practical guide to PCI DSS: scoping, 12 requirements, SAQs vs ROC/AOC, and ASV scans.",
    images: [
      "https://images.unsplash.com/photo-1556742043-0cfeb4d0baff?w=1200&h=630&fit=crop&auto=format&q=80",
    ],
    creator: "@EnterpriseRMAI",
  },
};

export default function PciDssPage() {
  const requirements = [
    { label: "Network Security Controls", desc: "Install and maintain firewalls and segmentation.", icon: FaFire },
    { label: "Secure Configurations", desc: "Harden systems; avoid defaults and insecure services.", icon: FaCogs },
    { label: "Protect Stored Data", desc: "Limit, hash, or encrypt cardholder data at rest.", icon: FaDatabase },
    { label: "Encrypt Transmission", desc: "Use strong crypto for data in transit.", icon: FaLock },
    { label: "Malware Protection", desc: "Detect and prevent malicious software.", icon: FaShieldAlt },
    { label: "Secure Development", desc: "Maintain secure systems and software lifecycle.", icon: FaCogs },
    { label: "Access by Need-to-Know", desc: "Restrict data access to business need.", icon: FaUserShield },
    { label: "Identity & Authentication", desc: "Identify users and enforce strong auth.", icon: FaKey },
    { label: "Physical Access", desc: "Restrict physical access to systems and media.", icon: FaBuilding },
    { label: "Logging & Monitoring", desc: "Log and monitor access to systems and data.", icon: FaClipboardCheck },
    { label: "Testing & Scans", desc: "Regular testing incl. ASV scans and penetration tests.", icon: FaCheckCircle },
    { label: "Security Policies & Program", desc: "Formalize policies and governance for PCI.", icon: FaFileSignature },
  ];

  const steps = [
    "Determine PCI scope: cardholder data environment (CDE) and flows.",
    "Segment networks to reduce scope; inventory system components.",
    "Choose validation path: SAQ type vs QSA-led ROC/AOC.",
    "Implement the 12 requirements and document controls.",
    "Run vulnerability management, logging, and change control.",
    "Perform quarterly ASV scans and annual penetration tests.",
    "Train staff; manage service providers with written agreements.",
    "Maintain evidence; review controls and remediate promptly.",
  ];

  const industries = [
    { name: "eCommerce Merchants", desc: "Web checkout, gateways, and payment APIs.", icon: FaShoppingCart },
    { name: "Retail / POS", desc: "Point-of-sale terminals and store networks.", icon: FaCashRegister },
    { name: "Payment Processors & Gateways", desc: "Transaction routing and card data handling.", icon: FaCreditCard },
    { name: "SaaS Handling Payments", desc: "Subscription billing and embedded payments.", icon: FaCloud },
    { name: "Hospitality", desc: "Hotel systems, reservations, and POS.", icon: FaBuilding },
    { name: "Healthcare Billing", desc: "Patient payments and revenue cycle systems.", icon: FaIndustry },
  ];

  const faqs = [
    { q: "What is PCI DSS?", a: "A global payment security standard defining controls to protect cardholder data for merchants and service providers." },
    { q: "Who needs PCI compliance?", a: "Any entity that stores, processes, or transmits cardholder data or can impact its security must comply." },
    { q: "What are SAQs vs ROC/AOC?", a: "SAQs are self-assessment questionnaires for certain merchant profiles; ROC/AOC are formal reports issued after a QSA assessment for broader or higher-risk environments." },
    { q: "Do ASV scans apply to all?", a: "External vulnerability scans by an Approved Scanning Vendor (ASV) are required for internet-facing systems within PCI scope." },
    { q: "Can tokenization reduce scope?", a: "Yes. Using tokenization service providers and redirect flows can significantly reduce the CDE and validation burden." },
    { q: "How does PCI relate to SOC 2 / ISO 27001?", a: "PCI is payment-specific. SOC 2 and ISO 27001 address broader security programs. Controls often overlap and can be mapped." },
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
                PCI DSS FRAMEWORK
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">PCI DSS Compliance for Payments</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl">
                Scope your CDE, implement the 12 requirements, and choose the right validation path to secure cardholder data and satisfy partners.
              </p>
              <div className="flex gap-4">
                <a href="/contact">
                  <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
                    Talk to an expert <FaArrowRight className="inline-block" />
                  </Button>
                </a>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-2 opacity-95">
                <span className="text-xs font-semibold uppercase tracking-wide">Core Areas:</span>
                {["Scoping","Segmentation","SAQ/ROC","ASV Scans","Pen Tests"].map((chip) => (
                  <span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm">
                    <FaClipboardCheck className="text-emerald-300" /> {chip}
                  </span>
                ))}
              </div>
            </div>
            
          </div>
        </section>

        {/* Overview: 12 Requirements */}
        <section className="py-20 bg-white border-b border-gray-100">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">PCI DSS: The 12 Requirements</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                PCI DSS establishes a comprehensive set of controls to protect cardholder data across networks, systems, access, and operations.
              </p>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {requirements.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.label} className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
                    <div className="w-12 h-12 mb-3 rounded-xl bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white flex items-center justify-center">
                      <Icon className="text-xl" />
                    </div>
                    <div className="font-semibold text-gray-900 mb-1">{r.label}</div>
                    <div className="text-sm text-gray-600">{r.desc}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* How applied */}
        <section className="py-20 bg-linear-to-br from-gray-50 to-white">
          <div className="container mx-auto px-6">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-sm p-8 md:p-10">
              <div className="md:flex md:items-start md:justify-between md:gap-8">
                <div className="md:w-2/3">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How PCI DSS is Applied</h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Follow a guided lifecycle: scope, segment, implement, validate, then continuously monitor and test.
                  </p>
                </div>
                <div className="md:w-1/3 mt-4 md:mt-0">
                  <div className="inline-flex items-center gap-2 px-3 py-2 rounded-full bg-[#120174]/10 text-[#120174] text-sm font-semibold">
                    <FaClipboardCheck /> Validation & Evidence
                  </div>
                </div>
              </div>

              <div className="grid lg:grid-cols-3 gap-6 mt-8">
                <div className="lg:col-span-2 space-y-4">
                  {steps.map((s, idx) => (
                    <div key={s} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-[#f9fafc] p-5">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white font-semibold">
                        {idx + 1}
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">Step {idx + 1}</div>
                        <div className="text-gray-700">{s}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="space-y-5">
                  <div className="rounded-2xl bg-[#f9fafc] border border-gray-200 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#120174]"></div>
                      <h4 className="font-semibold text-gray-900">SAQs</h4>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2"><FaCreditCard className="mt-0.5 text-[#120174]" /> Self-assessment for eligible merchant profiles</li>
                      <li className="flex items-start gap-2"><FaNetworkWired className="mt-0.5 text-[#120174]" /> Based on payment channels and data flows</li>
                      <li className="flex items-start gap-2"><FaFileSignature className="mt-0.5 text-[#120174]" /> Attestation of Compliance (AOC) after completion</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-[#f9fafc] border border-gray-200 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-[#0ea5ff]"></div>
                      <h4 className="font-semibold text-gray-900">ROC (QSA)</h4>
                    </div>
                    <ul className="text-sm text-gray-700 space-y-2">
                      <li className="flex items-start gap-2"><FaUserShield className="mt-0.5 text-[#0ea5ff]" /> QSA-led Report on Compliance for providers</li>
                      <li className="flex items-start gap-2"><FaServer className="mt-0.5 text-[#0ea5ff]" /> Suited for broader or higher-risk environments</li>
                      <li className="flex items-start gap-2"><FaClipboardCheck className="mt-0.5 text-[#0ea5ff]" /> Produces ROC and AOC for partners</li>
                    </ul>
                  </div>

                  <div className="rounded-2xl bg-[#120174] text-white p-5 space-y-3">
                    <div className="inline-flex items-center gap-2 text-sm font-semibold">
                      <FaCheckCircle /> Evidence checklist
                    </div>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-start gap-2"><FaCogs className="mt-0.5" /> Policies, procedures, change control</li>
                      <li className="flex items-start gap-2"><FaDatabase className="mt-0.5" /> Data flows, CDE inventory</li>
                      <li className="flex items-start gap-2"><FaNetworkWired className="mt-0.5" /> Segmentation configs, firewall rules</li>
                      <li className="flex items-start gap-2"><FaClipboardCheck className="mt-0.5" /> Logs, monitoring, ASV scans, pen tests</li>
                    </ul>
                    <div className="pt-1">
                      <a href="/contact">
                        <Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] w-full justify-center gap-2">
                          Get scoped and validated <FaArrowRight />
                        </Button>
                      </a>
                    </div>
                  </div>
                </div>
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
                <span className="text-sm font-semibold text-[#120174]">Industries That Require PCI DSS</span>
              </div>
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who Needs PCI DSS Compliance</h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">Entities that store, process, or transmit cardholder data—or can affect its security—must comply with PCI DSS requirements.</p>
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
                  <FaCreditCard />
                  <span className="text-sm font-semibold">FAQs</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h3>
                <p className="text-lg text-gray-600">Quick answers to help plan your PCI journey.</p>
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
