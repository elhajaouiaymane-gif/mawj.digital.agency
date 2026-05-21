import { Loader } from "@/components/sections/Loader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { FeaturedWork } from "@/components/sections/FeaturedWork";
import { Statement } from "@/components/sections/Statement";
import { Team } from "@/components/sections/Team";
import { Clients } from "@/components/sections/Clients";
import { Awards } from "@/components/sections/Awards";
import { CTA } from "@/components/sections/CTA";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { MarqueeStrip } from "@/components/sections/MarqueeStrip";

export default function Home() {
  return (
    <>
      <Loader />
      <Hero />
      <MarqueeStrip />
      <About />
      <MarqueeStrip />
      <Services />
      <MarqueeStrip />
      <FeaturedWork />
      <Statement />
      <Team />
      <MarqueeStrip />
      <Clients />
      <Awards />
      <CTA />
      <ContactFooter />
    </>
  );
}
