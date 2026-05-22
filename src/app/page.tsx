import HeroSection from "@/components/sections/HeroSection";
import SocialProof from "@/components/sections/SocialProof";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import LeadForm from "@/components/sections/LeadForm";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import FooterSection from "@/components/sections/FooterSection";
import { FloatingButtons } from "@/components/floating/FloatingButtons";

export default function Home() {
  return (
    <>
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <LeadForm />
      <FAQSection />
      <CTASection />
      <FooterSection />
      <FloatingButtons />
    </>
  );
}