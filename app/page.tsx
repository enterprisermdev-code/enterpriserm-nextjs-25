import type { Metadata } from 'next';
import { Header } from '@/components/header';
import { HeroSection } from '@/components/hero-section';
import { SocialProof } from '@/components/social-proof';
import { Footer } from '@/components/footer';
import { WhyEnterAI } from '@/components/whyenterai';
import { FeaturesOverview } from '@/components/features-overview';
import { IntegrationsStrip } from '@/components/integrations-strip';
import { TestimonialsPreview } from '@/components/testimonials-preview';
import { ComplianceBadges } from '@/components/compliance-badges';
import { PrimaryCTA } from '@/components/primary-cta';
import { NewsletterBand } from '@/components/newsletter-band';
import { ContactFormCTA } from '@/components/contactformcta';
import { CoreCapabilities } from '@/components/corecapabilities';
import { WhyUsSection } from '@/components/why-us-section';

export const metadata: Metadata = {
  title: 'Enterprise Risk Management | AI-Powered GRC Platform',
  description:
    'Move beyond spreadsheets with a unified, AI-powered platform that identifies, assesses, and mitigates risks in real time. Empower teams with actionable insights, seamless collaboration, and complete regulatory compliance.',
  keywords: [
    'Enterprise Risk Management',
    'ERM platform',
    'risk management software',
    'AI risk platform',
    'governance risk compliance',
    'GRC',
    'risk assessment',
    'regulatory compliance',
    'mitigation',
  ],
  openGraph: {
    type: 'website',
    title: 'Enterprise Risk Management | AI-Powered GRC Platform',
    description:
      'AI-driven risk management platform. Predict threats and automate compliance..',
    images: [
      {
        url: '/homebannersideimage.svg',
        width: 1200,
        height: 630,
        alt: 'Enterprise Risk Management Platform',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Enterprise Risk Management | AI-Powered GRC Platform',
    description:
      'AI-driven risk management platform. Predict threats and automate compliance.',
    images: ['/homebannersideimage.svg'],
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <WhyEnterAI />
        <CoreCapabilities />
        <WhyUsSection />
        <FeaturesOverview />
        <PrimaryCTA />     
        <ContactFormCTA />
      </main>
      <Footer />
    </div>
  );
}
