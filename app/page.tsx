"use client";

import HeroSection from "@/components/home/hero-section";
import { BenefitsSection } from "@/components/home/benefits-section";
import { HowItWorksSection } from "@/components/home/how-it-works-section";
import { SupportedDevicesSection } from "@/components/home/supported-devices-section";
import { TrustSection } from "@/components/home/trust-section";
import { EnhancedCTASection } from "@/components/home/enhanced-cta-section";
import { PageTransition, ScrollProgressIndicator } from "@/components/page-transition";

export default function HomePage() {
  return (
    <PageTransition>
      <ScrollProgressIndicator />
      <div className="pt-16">
        <HeroSection />
        <HowItWorksSection />
        <BenefitsSection />
        <SupportedDevicesSection />
        <TrustSection />
        <EnhancedCTASection />
      </div>
    </PageTransition>
  );
}
