import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import { 
	FaShieldAlt,
	FaLock,
	FaListAlt,
	FaClipboardCheck,
	FaRegQuestionCircle,
	FaArrowRight,
	FaBuilding,
	FaBalanceScale,
	FaClock,
	FaCheckCircle,
	FaIndustry,
	FaCloud,
	FaHeartbeat,
	FaCreditCard,
	FaServer,
	FaShoppingCart,
	FaUserTie
} from "react-icons/fa";

export const metadata: Metadata = {
	title: "What is SOC 2®? Overview, Audit Types, Controls, FAQs | 2026",
	description:
		"SOC 2® explained: Trust Services Criteria, Type I vs Type II audits, who needs SOC 2, and how to achieve compliance. Practical steps, FAQs, and enterprise context.",
	keywords: [
		"SOC 2",
		"SOC 2 compliance",
		"SOC 2 audit",
		"Type I vs Type II",
		"Trust Services Criteria",
		"SOC 2 controls",
		"AICPA",
		"security availability confidentiality privacy processing integrity",
	],
	openGraph: {
		type: "article",
		title: "SOC 2®: What It Is, How It Works, and Why It Matters",
		description:
			"Understand SOC 2, audit types, and controls aligned to Trust Services Criteria with practical guidance for service organizations.",
		images: [
			{
				url: "https://images.unsplash.com/photo-1623113421258-443f2de31954?w=1200&h=630&fit=crop&auto=format&q=80",
				width: 1200,
				height: 630,
				alt: "Compliance and audit documentation on desk",
			},
		],
		siteName: "EnterpriseRM.ai",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "SOC 2® Overview, Audit Types, Controls, FAQs",
		description:
			"Learn SOC 2 fundamentals, audit differences, and how to prepare controls for a successful report.",
		images: ["https://images.unsplash.com/photo-1623113421258-443f2de31954?w=1200&h=630&fit=crop&auto=format&q=80"],
		creator: "@EnterpriseRMAI",
	},
};

export default function Soc2Page() {
	const tsc = [
		{ label: "Security (Common Criteria)", desc: "Foundational safeguards across access, change, and incident controls.", icon: FaShieldAlt },
		{ label: "Availability", desc: "Uptime objectives, disaster recovery, and performance monitoring.", icon: FaClock },
		{ label: "Processing Integrity", desc: "Accuracy, completeness, and timeliness of system processing.", icon: FaClipboardCheck },
		{ label: "Confidentiality", desc: "Data classification, encryption, and restricted handling.", icon: FaLock },
		{ label: "Privacy", desc: "Collection, use, retention, and disposal of personal data.", icon: FaListAlt },
	];

	const faqs = [
		{
			q: "What does SOC 2 mean?",
			a: "SOC 2 is a security and compliance standard from the AICPA that guides service organizations on protecting sensitive customer data via controls aligned to Trust Services Criteria.",
		},
		{
			q: "What does a SOC 2 audit include?",
			a: "A CPA-led examination of control design and operating effectiveness, including testing, evidence reviews, and interviews—resulting in an attestation report (Type I or Type II).",
		},
		{
			q: "Is SOC 2 mandatory?",
			a: "Not legally required. However, customers and partners often require SOC 2 to ensure strong data protection and risk management practices.",
		},
		{
			q: "Who does SOC 2 apply to?",
			a: "Any service organization that stores, processes, or transmits customer data—especially cloud-based and SaaS providers.",
		},
	];

	const industries = [
		{ name: "SaaS & Cloud Platforms", desc: "Multi-tenant apps, customer data, and integrations at scale.", icon: FaCloud },
		{ name: "FinTech & Payment Processors", desc: "Card data flows, payment operations, and partner assurance.", icon: FaCreditCard },
		{ name: "Healthcare Tech", desc: "PHI-adjacent services, data handling with strong safeguards.", icon: FaHeartbeat },
		{ name: "Managed/Hosted Services", desc: "Infrastructure, backup, and security operations for clients.", icon: FaServer },
		{ name: "HR, Payroll, People Ops", desc: "Sensitive employee data and regulated workflows.", icon: FaUserTie },
		{ name: "eCommerce & Retail Tech", desc: "Customer data, order processing, and integrations.", icon: FaShoppingCart },
		{ name: "Industrial & IoT Platforms", desc: "Telemetry, device data, and partner trust in supply chains.", icon: FaIndustry },
		{ name: "LegalTech & RegTech", desc: "Compliance tooling and sensitive case or regulatory data.", icon: FaBalanceScale },
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
								SOC 2® FRAMEWORK
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">What is SOC 2®?</h1>
							<p className="text-lg md:text-xl opacity-90 max-w-2xl">
								SOC 2 is an AICPA-developed security framework that helps service organizations protect customer data and demonstrate trust via independent audit reports.
							</p>
							<div className="flex gap-4">
								<a href="/contact">
									<Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
										Request a demo <FaArrowRight className="inline-block" />
									</Button>
								</a>
							</div>
							<div className="flex flex-wrap items-center gap-3 pt-2 opacity-95">
								<span className="text-xs font-semibold uppercase tracking-wide">Trust Services:</span>
								{["Security","Availability","Processing Integrity","Confidentiality","Privacy"].map((chip) => (
									<span key={chip} className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/20 border border-white/30 text-sm">
										<FaCheckCircle className="text-emerald-300" /> {chip}
									</span>
								))}
							</div>
						</div>
						
					</div>
				</section>

				{/* Overview */}
				<section className="py-20 bg-white border-b border-gray-100">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">SOC 2 Overview</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								Developed by the AICPA, SOC 2 centers on five Trust Services Criteria (TSC): Security, Availability, Processing Integrity, Confidentiality, and Privacy.
							</p>
						</div>
						<div className="grid md:grid-cols-5 gap-6">
							{tsc.map((item) => {
								const Icon = item.icon;
								return (
									<div key={item.label} className="text-center p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
										<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white flex items-center justify-center">
											<Icon className="text-2xl" />
										</div>
										<div className="text-xl font-bold text-gray-900 mb-2">{item.label}</div>
										<div className="text-sm text-gray-600">{item.desc}</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Type I vs Type II */}
				<section className="py-20 bg-linear-to-br from-gray-50 to-white">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">SOC 2 Type I vs Type II</h3>
								<p className="text-lg text-gray-600 mb-6">Both are attestation reports issued by a CPA firm, but they differ in scope and assurance level.</p>
								<div className="space-y-4">
									<div className="flex items-start gap-4">
										<FaCheckCircle className="mt-1 text-[#120174]" />
										<div>
											<div className="font-semibold text-gray-900">Type I</div>
											<div className="text-gray-600">Evaluates design of controls at a point in time—answers "Are controls designed properly?"</div>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<FaCheckCircle className="mt-1 text-[#120174]" />
										<div>
											<div className="font-semibold text-gray-900">Type II</div>
											<div className="text-gray-600">Evaluates operating effectiveness over 3–12 months—answers "Do controls function as intended?"</div>
										</div>
									</div>
									<div className="flex items-start gap-4">
										<FaClock className="mt-1 text-[#120174]" />
										<div>
											<div className="font-semibold text-gray-900">Recommendation</div>
											<div className="text-gray-600">Go for Type II where possible; consider a shorter review period if timelines are tight.</div>
										</div>
									</div>
								</div>
							</div>
							<div>
								<div className="rounded-2xl bg-white border border-gray-200 shadow-sm p-6">
																	<div className="mb-4">
																		<span className="inline-flex items-center gap-2 text-sm font-semibold text-[#120174]">
																			<FaClipboardCheck /> At a glance
																		</span>
																	</div>
																	<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
																		<div className="rounded-xl bg-[#f9fafc] border border-gray-200 p-5">
																			<div className="flex items-center gap-2 mb-2">
																				<div className="w-2.5 h-2.5 rounded-full bg-[#120174]"></div>
																				<h4 className="font-semibold text-gray-900">Type I</h4>
																			</div>
																			<ul className="text-sm text-gray-700 space-y-2">
																				<li className="flex items-start gap-2"><FaListAlt className="mt-0.5 text-[#120174]" /> Point-in-time design review</li>
																				<li className="flex items-start gap-2"><FaClock className="mt-0.5 text-[#120174]" /> Faster to complete</li>
																				<li className="flex items-start gap-2"><FaClipboardCheck className="mt-0.5 text-[#120174]" /> Demonstrates control design</li>
																			</ul>
																		</div>
																		<div className="rounded-xl bg-[#f9fafc] border border-gray-200 p-5">
																			<div className="flex items-center gap-2 mb-2">
																				<div className="w-2.5 h-2.5 rounded-full bg-[#0ea5ff]"></div>
																				<h4 className="font-semibold text-gray-900">Type II</h4>
																			</div>
																			<ul className="text-sm text-gray-700 space-y-2">
																				<li className="flex items-start gap-2"><FaListAlt className="mt-0.5 text-[#0ea5ff]" /> Operating effectiveness over time</li>
																				<li className="flex items-start gap-2"><FaClock className="mt-0.5 text-[#0ea5ff]" /> 3–12 month review period</li>
																				<li className="flex items-start gap-2"><FaCheckCircle className="mt-0.5 text-[#0ea5ff]" /> Strongest customer assurance</li>
																			</ul>
																		</div>
																	</div>
																	<div className="mt-6 flex items-center justify-between">
																		<p className="text-sm text-gray-600">Unsure which to choose? We can help you scope the right report.</p>
																		
																	</div>
																</div>
							</div>
						</div>
					</div>
				</section>

				{/* Who needs SOC 2 */}
				<section className="py-20 bg-white border-t border-gray-100">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full mb-6">
								<FaBuilding className="text-[#120174]" />
								<span className="text-sm font-semibold text-[#120174]">Who Needs SOC 2</span>
							</div>
							<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Service Organizations Handling Customer Data</h3>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								Cloud, SaaS, and data processors benefit most—customers and partners increasingly request SOC 2 reports to verify strong controls and governance.
							</p>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							{[
								{ title: "SaaS Providers", desc: "Multi-tenant platforms, customer data, integrations." },
								{ title: "Managed Service Providers", desc: "Security, hosting, and IT operations." },
								{ title: "Data Processors", desc: "Analytics, storage, and processing services." },
							].map((b) => (
								<div key={b.title} className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
									<div className="text-xl font-bold text-gray-900 mb-2">{b.title}</div>
									<div className="text-sm text-gray-600">{b.desc}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Industries that require SOC 2 */}
				<section className="py-20 bg-linear-to-br from-gray-50 to-white">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full mb-6">
								<FaIndustry className="text-[#120174]" />
								<span className="text-sm font-semibold text-[#120174]">Industries That Commonly Require SOC 2</span>
							</div>
							<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where SOC 2 Is Most Expected</h3>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">Customers, partners, and procurement teams often request SOC 2 reports as proof of robust security controls and governance across these sectors.</p>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							{industries.map((ind) => {
								const Icon = ind.icon;
								return (
									<div key={ind.name} className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm">
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

				{/* SOC 1 vs SOC 2 vs SOC 3 */}
				<section className="py-20 bg-[#f5f6fa]">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">SOC 1 vs SOC 2 vs SOC 3.</h3>
								<p className="text-lg text-gray-600 mb-6">Different SOC reports address different assurance needs.</p>
								<div className="space-y-4">
									{[
										{ label: "SOC 1", desc: "Controls relevant to financial reporting (ICFR)." },
										{ label: "SOC 2", desc: "Controls relevant to Trust Services Criteria (security etc.)." },
										{ label: "SOC 3", desc: "General-use summary report based on SOC 2." },
									].map((x) => (
										<div key={x.label} className="flex items-start gap-4">
											<FaBalanceScale className="mt-1 text-[#120174]" />
											<div>
												<div className="font-semibold text-gray-900">{x.label}</div>
												<div className="text-gray-600">{x.desc}</div>
											</div>
										</div>
									))}
								</div>
							</div>
							<div>
								<Image
									src="https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?w=1200&h=900&fit=crop&auto=format&q=80"
									alt="Assurance and compliance comparison"
									width={600}
									height={500}
									className="rounded-2xl shadow-lg border border-gray-200"
									unoptimized
								/>
							</div>
						</div>
					</div>
				</section>

				{/* FAQs */}
				<section className="py-20 bg-white">
					<div className="container mx-auto px-6">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full">
									<FaRegQuestionCircle className="text-[#120174]" />
									<span className="text-sm font-semibold text-[#120174]">FAQs</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h3>
								<p className="text-lg text-gray-600">Quick answers to help your team get aligned.</p>
							</div>
							<div className="space-y-4">
								{faqs.map((f) => (
									<details key={f.q} className="group bg-[#f9fafc] rounded-2xl p-6 border border-gray-200">
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

