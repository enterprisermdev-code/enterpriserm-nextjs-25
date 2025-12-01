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
