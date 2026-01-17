import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { PrimaryCTA } from '@/components/primary-cta';
import { ContactFormCTA } from '@/components/contactformcta';
import { Button } from '@/components/ui/button';
import { Award, Lock, FileText, Search, CreditCard, CheckCircle, Shield } from 'lucide-react';

export const metadata: Metadata = {
	title: 'Fintech Security & Compliance | SOC 2, GDPR, ISO 27001, AMLA, PCI DSS',
	description:
		'Fintech-grade security frameworks: SOC 2, GDPR, ISO 27001, AMLA, PCI DSS. Protect payment data, ensure privacy, and prevent fraud with structured, auditable controls.',
	keywords: [
		'Fintech Security',
		'SOC 2',
		'GDPR',
		'ISO 27001',
		'AMLA',
		'PCI DSS',
		'Payment Security',
		'Fraud Monitoring',
		'Financial Compliance',
	],
	openGraph: {
		type: 'website',
		title: 'Fintech Security & Compliance | SOC 2, GDPR, ISO 27001, AMLA, PCI DSS',
		description:
			'Structured, repeatable fintech compliance covering SOC 2, GDPR, ISO 27001, AMLA, and PCI DSS to protect sensitive financial data.',
		images: [
			{
				url: 'https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&h=630&fit=crop',
				width: 1200,
				height: 630,
				alt: 'Fintech payments and security',
			},
		],
	},
	twitter: {
		card: 'summary_large_image',
		title: 'Fintech Security & Compliance | SOC 2, GDPR, ISO 27001, AMLA, PCI DSS',
		description:
			'Protect payment card data, ensure privacy, and monitor fraud with fintech-ready frameworks and automation.',
		images: ['https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=1200&h=630&fit=crop'],
	},
};

const securityFrameworks = [
	{
		name: 'SOC 2',
		title: 'Trust Services Criteria (Security, Availability, Processing Integrity, Confidentiality, Privacy)',
		description:
			'Independent assurance over controls securing financial systems and data. Demonstrates trust and operational maturity to partners and regulators.',
		icon: Award,
		keyBenefits: ['Vendor trust', 'Operational integrity', 'Assurance reports', 'Risk mitigation'],
		color: 'bg-blue-50 border-blue-200 text-blue-700',
	},
	{
		name: 'GDPR',
		title: 'General Data Protection Regulation',
		description:
			'Strict data privacy regulation requiring clear lawful bases, data subject rights, DPIAs, and strong technical/organizational measures.',
		icon: Lock,
		keyBenefits: ['Privacy-by-design', 'DPIA readiness', 'Data minimization', 'International compliance'],
		color: 'bg-green-50 border-green-200 text-green-700',
	},
	{
		name: 'ISO 27001',
		title: 'Information Security Management System (ISMS)',
		description:
			'Establishes a certifiable management system with policies, risk treatment, controls, and continuous improvement for fintech operations.',
		icon: FileText,
		keyBenefits: ['ISMS governance', 'Risk treatment', 'Continuous improvement', 'Audit-ready'],
		color: 'bg-purple-50 border-purple-200 text-purple-700',
	},
	{
		name: 'AMLA',
		title: 'Anti-Money Laundering Act',
		description:
			'Requires rigorous monitoring, KYC/CTF controls, and analytics/AI to flag suspicious activity and reduce financial crime risk.',
		icon: Search,
		keyBenefits: ['Real-time monitoring', 'Suspicious activity detection', 'KYC/CTF controls', 'Regulatory reporting'],
		color: 'bg-orange-50 border-orange-200 text-orange-700',
	},
	{
		name: 'PCI DSS',
		title: 'Payment Card Industry Data Security Standard',
		description:
			'Mandates encryption, access controls, network segmentation, logging, and secure handling of cardholder data across payment flows.',
		icon: CreditCard,
		keyBenefits: ['Encrypted card data', 'Access control', 'Network security', 'Audit trails'],
		color: 'bg-red-50 border-red-200 text-red-700',
	},
];

const industryStats = [
	{ stat: '99.99%', label: 'Payment security uptime' },
	{ stat: '88%', label: 'Fraud detection improvement' },
	{ stat: '70%', label: 'Faster audit preparation' },
	{ stat: '95%', label: 'Compliance achievement rate' },
];

const fintechBenefits = [
	{
		title: 'Transaction Security',
		description:
			'Protect end-to-end payment flows with encryption, access controls, and continuous monitoring across gateways and processors.',
		icon: Shield,
		color: 'from-blue-500 to-cyan-500',
	},
	{
		title: 'Regulatory Confidence',
		description:
			'Unified framework coverage builds trust with auditors, partners, and customers while reducing compliance overhead.',
		icon: CheckCircle,
		color: 'from-green-500 to-emerald-500',
	},
	{
		title: 'Fraud Monitoring',
		description:
			'AI-assisted anomaly detection, rules tuning, and alert workflows to surface suspicious activity and accelerate investigations.',
		icon: Search,
		color: 'from-purple-500 to-violet-500',
	},
];

export default function FintechPage() {
	return (
		<div className="min-h-screen bg-white">
			<Header />

			<main>
				{/* Hero Section */}
				<section className="relative bg-linear-to-r from-[#120174] via-[#2b1fa0] to-[#120174] text-white py-24 overflow-hidden">
					<div className="absolute inset-0 bg-black/20"></div>
					<div
						className="absolute inset-0 bg-cover bg-center opacity-10"
						style={{
							backgroundImage:
								'url("https://images.unsplash.com/photo-1625220194771-27b1e4e1f1ae?w=1920&h=1080&fit=crop")',
						}}
					></div>

					<div className="container mx-auto px-6 relative z-10">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<h1 className="text-5xl font-bold mb-6">
									Fintech Security &
									<span className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] bg-clip-text text-transparent"> Compliance Frameworks</span>
								</h1>
								<p className="text-xl mb-8 text-gray-200">
									Implement SOC 2, GDPR, ISO 27001, AMLA, and PCI DSS to protect sensitive financial data,
									prevent fraud, and maintain customer trust across payment and banking systems.
								</p>
								<div className="flex flex-col sm:flex-row gap-4">
									<a href="/contact">
										<Button className="bg-[#0ea5ff] hover:bg-[#0c94e6] text-white px-8 py-6 rounded-full text-lg font-semibold">
											Request a Demo
										</Button>
									</a>
								</div>
							</div>

							<div className="relative">
								<img
									src="https://images.pexels.com/photos/4968395/pexels-photo-4968395.jpeg"
									alt="Digital payments and fintech security"
									className="rounded-2xl shadow-2xl"
								/>
								<div className="absolute -bottom-6 -left-6 bg-white text-gray-900 p-6 rounded-xl shadow-xl">
									<div className="flex items-center gap-3">
										<CreditCard className="h-8 w-8 text-[#0ea5ff]" />
										<div>
											<div className="font-bold text-2xl">PCI DSS</div>
											<div className="text-sm text-gray-600">Payments Hardened</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Stats Section */}
				<section className="py-16 bg-gray-50">
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
							{industryStats.map((item, index) => (
								<div key={index} className="text-center">
									<div className="text-4xl font-bold text-[#120174] mb-2">{item.stat}</div>
									<div className="text-gray-600">{item.label}</div>
								</div>
							))}
						</div>
					</div>
				</section>

				{/* Security Frameworks Section */}
				<section className="py-24 bg-white">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-gray-900 mb-6">Essential Security Frameworks for Fintech</h2>
							<p className="text-xl text-gray-600 max-w-4xl mx-auto">
								Protect sensitive financial data and ensure operational integrity with structured, auditable controls across
								SOC 2, GDPR, ISO 27001, AMLA, and PCI DSS.
							</p>
						</div>

						<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
							{securityFrameworks.map((framework, index) => {
								const IconComponent = framework.icon;
								return (
									<div
										key={index}
										className={`p-8 rounded-2xl border-2 ${framework.color} hover:shadow-lg transition-shadow`}
									>
										<div className="flex items-start gap-6">
											<div className="shrink-0">
												<div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
													<IconComponent className="h-8 w-8" />
												</div>
											</div>
											<div className="flex-1">
												<div className="flex items-center gap-3 mb-3">
													<h3 className="text-2xl font-bold">{framework.name}</h3>
												</div>
												<h4 className="text-lg font-semibold mb-3">{framework.title}</h4>
												<p className="mb-4 text-gray-700">{framework.description}</p>
												<div className="grid grid-cols-2 gap-2">
													{framework.keyBenefits.map((benefit, benefitIndex) => (
														<div key={benefitIndex} className="flex items-center gap-2 text-sm">
															<CheckCircle className="h-4 w-4 text-green-600" />
															<span>{benefit}</span>
														</div>
													))}
												</div>
											</div>
										</div>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* Spotlight: PCI DSS */}
				<section className="py-24 bg-linear-to-br from-gray-50 to-blue-50">
					<div className="container mx-auto px-6">
						<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
							<div>
								<div className="bg-linear-to-r from-[#0ea5ff] to-[#4ade80] text-white p-2 rounded-lg inline-block mb-6">
									<span className="text-sm font-semibold px-3">FEATURED FRAMEWORK</span>
								</div>
								<h2 className="text-4xl font-bold text-gray-900 mb-6">PCI DSS: Hardened Payments for Trust</h2>
								<p className="text-lg text-gray-600 mb-8">
									Implement the 12 PCI DSS requirements across network, access, data storage, and monitoring to reduce
									cardholder data risk and maintain payment ecosystem integrity.
								</p>

								<div className="space-y-4 mb-8">
									{[
										'Encrypt cardholder data at rest and in transit',
										'Restrict access by business need-to-know',
										'Segment networks and maintain firewalls',
										'Monitor, log, and regularly test controls',
									].map((feature, index) => (
										<div key={index} className="flex items-start gap-3">
											<CheckCircle className="h-6 w-6 text-green-600 shrink-0 mt-0.5" />
											<span className="text-gray-700">{feature}</span>
										</div>
									))}
								</div>

								<Button className="bg-[#120174] hover:bg-[#1a0a8a] text-white px-8 py-6 rounded-full text-lg font-semibold">
									Learn About PCI Implementation
								</Button>
							</div>

							<div className="relative">
								<img
									src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
									alt="PCI DSS Payment Security"
									className="rounded-2xl shadow-2xl"
								/>
								<div className="absolute -top-6 -right-6 bg-white p-6 rounded-xl shadow-xl">
									<div className="text-center">
										<div className="text-3xl font-bold text-[#0ea5ff] mb-2">12</div>
										<div className="text-sm text-gray-600">Core Requirements</div>
										<div className="text-xs text-gray-500">Network • Access • Logging</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* Benefits Section */}
				<section className="py-24 bg-white">
					<div className="container mx-auto px-6">
						<div className="text-center mb-16">
							<h2 className="text-4xl font-bold text-gray-900 mb-6">Why Fintech Teams Choose Our Platform</h2>
							<p className="text-xl text-gray-600 max-w-3xl mx-auto">
								Reduce fraud, protect payment data, and streamline audits with a unified approach to security frameworks and
								continuous monitoring.
							</p>
						</div>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
							{fintechBenefits.map((benefit, index) => {
								const IconComponent = benefit.icon;
								return (
									<div
										key={index}
										className="bg-linear-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-100 shadow-lg"
									>
										<div
											className={`w-16 h-16 bg-linear-to-br ${benefit.color} rounded-xl flex items-center justify-center mb-6`}
										>
											<IconComponent className="h-8 w-8 text-white" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 mb-4">{benefit.title}</h3>
										<p className="text-gray-600">{benefit.description}</p>
									</div>
								);
							})}
						</div>
					</div>
				</section>

				{/* CTA Sections */}
				<PrimaryCTA />
				<ContactFormCTA />
			</main>

			<Footer />
		</div>
	);
}

