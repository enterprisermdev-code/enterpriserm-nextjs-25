import type { Metadata } from "next";
import Image from "next/image";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PrimaryCTA } from "@/components/primary-cta";
import { Button } from "@/components/ui/button";
import { FaShieldAlt, FaCogs, FaClipboardCheck, FaIndustry, FaRegQuestionCircle, FaArrowRight, FaLock, FaChartLine, FaUsers } from "react-icons/fa";

export const metadata: Metadata = {
	title: "NIST Cybersecurity Framework (CSF): What It Is, How To Apply, Industries, FAQs | 2026",
	description:
		"Understand the NIST Cybersecurity Framework (CSF): core functions, implementation steps, and industry use cases. Learn how enterprises apply NIST for continuous risk management and compliance.",
	keywords: [
		"NIST Cybersecurity Framework",
		"NIST CSF",
		"NIST Risk Management",
		"Enterprise GRC",
		"Continuous Compliance",
		"Risk Assessment",
		"Identify Protect Detect Respond Recover",
		"Compliance Frameworks",
		"Security Governance",
	],
	openGraph: {
		type: "article",
		title: "NIST Cybersecurity Framework (CSF): What It Is and How To Apply",
		description:
			"Learn the NIST CSF functions and practical steps to adopt it across enterprises for measurable cyber risk reduction.",
		images: [
			{
				url: "https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1170&auto=format&fit=crop",
				width: 1200,
				height: 630,
				alt: "Cybersecurity dashboard and controls",
			},
		],
		siteName: "EnterpriseRM.ai",
		locale: "en_US",
	},
	twitter: {
		card: "summary_large_image",
		title: "NIST Cybersecurity Framework (CSF): Overview, Adoption, Industries",
		description:
			"Clear, actionable guidance on NIST CSF: core functions, implementation roadmap, and industry applicability.",
		images: ["https://images.unsplash.com/photo-1556157382-97eda2d62296?w=1200&h=630&fit=crop"],
		creator: "@EnterpriseRMAI",
	},
};

export default function NistFrameworkPage() {
	const functions = [
		{ label: "Identify", icon: FaChartLine, desc: "Asset, risk, and business context profiling to prioritize protections." },
		{ label: "Protect", icon: FaLock, desc: "Safeguards for identity, access, data, and endpoint hardening." },
		{ label: "Detect", icon: FaShieldAlt, desc: "Threat and anomaly detection with continuous monitoring and telemetry." },
		{ label: "Respond", icon: FaUsers, desc: "Incident response, coordination, and communication across stakeholders." },
		{ label: "Recover", icon: FaClipboardCheck, desc: "Resilience, restoration, and improvement plans post-incident." },
	];

	const industries = [
		{ name: "Healthcare", desc: "Protected health information (PHI), HIPAA alignment, clinical systems." },
		{ name: "Financial Services", desc: "Fraud prevention, PCI DSS alignment, transaction integrity." },
		{ name: "Government & Public Sector", desc: "Civic services, citizen data, critical infrastructure resilience." },
		{ name: "Manufacturing", desc: "OT/ICS security, supply chain continuity, quality controls." },
		{ name: "Energy & Utilities", desc: "Grid operations, SCADA systems, operational continuity." },
		{ name: "Technology & SaaS", desc: "Platform security, multi-tenant controls, data privacy." },
		{ name: "Retail & eCommerce", desc: "Payment data, identity protections, fraud monitoring." },
	];

	const faqs = [
		{
			q: "What is the NIST Cybersecurity Framework (CSF)?",
			a: "The NIST CSF is a voluntary risk-based framework providing standards, guidelines, and best practices to manage and reduce cybersecurity risk across Identify, Protect, Detect, Respond, and Recover functions.",
		},
		{
			q: "Is NIST CSF a certification?",
			a: "No. NIST CSF is not a certification. Organizations adopt it to structure their cybersecurity program and demonstrate maturity; auditors may assess alignment, but there is no single NIST CSF certification.",
		},
		{
			q: "How does NIST CSF relate to SOC 2, ISO 27001, or HIPAA?",
			a: "NIST CSF complements frameworks like SOC 2 and ISO 27001. It maps well to control areas for governance, risk, and technical safeguards, helping unify compliance across multiple standards including HIPAA.",
		},
		{
			q: "How long does adoption take?",
			a: "Timelines vary by size and complexity. Many teams achieve initial adoption in 8–12 weeks with supported assessments, policy rollout, and prioritized technical safeguards, then iterate for continuous improvement.",
		},
		{
			q: "Do small teams benefit, or is it only for enterprises?",
			a: "Both. The framework scales from SMBs to global enterprises, providing practical guidance for risk-based prioritization and measurable improvements at any maturity level.",
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main>
				<section className="relative py-28 pt-36 bg-linear-to-br from-[#120174] via-[#2b1fa0] to-[#0ea5ff] text-white overflow-hidden">
					<div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
						<div className="space-y-6">
							<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur text-white text-sm font-semibold border border-white/30">
								NIST CYBERSECURITY FRAMEWORK
							</div>
							<h1 className="text-5xl md:text-6xl font-bold leading-tight">NIST CSF for Enterprise Risk Management</h1>
							<p className="text-lg md:text-xl opacity-90 max-w-2xl">
								A practical, risk-based approach to build, measure, and improve cybersecurity programs. Align strategy, controls, and operations using the industry-standard framework.
							</p>
							<div className="flex gap-4">
								<a href="/contact">
									<Button className="bg-white text-[#120174] hover:bg-[#f3f3ff] font-semibold px-8 py-6 rounded-full inline-flex items-center gap-2">
										Talk to an expert <FaArrowRight className="inline-block" />
									</Button>
								</a>
							</div>
						</div>
						<div className="relative">
							<Image
								src="https://images.unsplash.com/photo-1629904853893-c2c8981a1dc5?q=80&w=1170&auto=format&fit=crop"
								alt="Cybersecurity architecture illustration"
								width={600}
								height={500}
								className="rounded-2xl shadow-2xl border border-white/20"
								unoptimized
								priority
							/>
						</div>
					</div>
				</section>

				<section className="py-20 bg-white border-b border-gray-100">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What is NIST CSF?</h2>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">
								The NIST Cybersecurity Framework provides a common language and structured lifecycle for managing cyber risk. It helps organizations align business objectives with security outcomes using categories and informative references.
							</p>
						</div>

						<div className="grid md:grid-cols-5 gap-6">
							{functions.map((fn) => {
								const Icon = fn.icon;
								return (
									<div key={fn.label} className="text-center p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
										<div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-linear-to-br from-[#120174] to-[#0ea5ff] text-white flex items-center justify-center">
											<Icon className="text-2xl" />
										</div>
										<div className="text-xl font-bold text-gray-900 mb-2">{fn.label}</div>
										<div className="text-sm text-gray-600">{fn.desc}</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				<section className="py-20 bg-linear-to-br from-gray-50 to-white">
					<div className="container mx-auto px-6">
						<div className="grid lg:grid-cols-2 gap-12 items-start">
							<div>
								<h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">How NIST CSF is Applied</h3>
								<p className="text-lg text-gray-600 mb-6">
									Adoption typically follows a repeatable cycle. Start with scoping and current-state assessment, then prioritize safeguards and track outcomes.
								</p>
								<div className="space-y-4">
									{["Define scope and business objectives","Profile current state against CSF categories","Perform risk assessment and gap analysis","Prioritize and implement safeguards","Establish continuous monitoring and metrics","Communicate outcomes to stakeholders","Iterate and improve maturity"].map((step, idx) => (
										<div key={step} className="flex items-start gap-4">
											<FaCogs className="mt-1 text-[#120174]" />
											<div>
												<div className="font-semibold text-gray-900">Step {idx + 1}</div>
												<div className="text-gray-600">{step}</div>
											</div>
										</div>
									))}
								</div>
							</div>
							<div>
								<Image
									src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&h=900&fit=crop&auto=format&q=80"
									alt="Team working through cybersecurity framework"
									width={600}
									height={500}
									className="rounded-2xl shadow-lg border border-gray-200"
									unoptimized
								/>
							</div>
						</div>
					</div>
				</section>

				<section className="py-20 bg-white border-t border-gray-100">
					<div className="container mx-auto px-6">
						<div className="text-center mb-12">
							<div className="inline-flex items-center gap-2 px-4 py-2 bg-[#120174]/10 rounded-full mb-6">
								<FaIndustry className="text-[#120174]" />
								<span className="text-sm font-semibold text-[#120174]">Industries That Benefit</span>
							</div>
							<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Where NIST CSF is Most Used</h3>
							<p className="text-lg text-gray-600 max-w-3xl mx-auto">From regulated sectors to fast-moving tech, NIST CSF gives teams a practical structure to manage cyber risk and align with broader compliance obligations.</p>
						</div>
						<div className="grid md:grid-cols-3 gap-6">
							{industries.map((ind) => (
								<div key={ind.name} className="p-6 rounded-2xl bg-[#f9fafc] border border-gray-200">
									<div className="text-xl font-bold text-gray-900 mb-2">{ind.name}</div>
									<div className="text-sm text-gray-600">{ind.desc}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				<section className="py-20 bg-[#f5f6fa]">
					<div className="container mx-auto px-6">
						<div className="max-w-4xl mx-auto">
							<div className="text-center mb-12">
								<div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
									<FaRegQuestionCircle />
									<span className="text-sm font-semibold">FAQs</span>
								</div>
								<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mt-6">Frequently Asked Questions</h3>
								<p className="text-lg text-gray-600">Quick answers to help your team get aligned.</p>
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

