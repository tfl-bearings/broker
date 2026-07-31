import AnnounceBar from "@/components/layout/AnnounceBar";
import FloatingContact from "@/components/layout/FloatingContact";
import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/Nav";
import Commitments from "@/components/sections/Commitments";
import Comparison from "@/components/sections/Comparison";
import Contact from "@/components/sections/Contact";
import CrmShowcase from "@/components/sections/CrmShowcase";
import CtaBanner from "@/components/sections/CtaBanner";
import Faq from "@/components/sections/Faq";
import Hero from "@/components/sections/Hero";
import HowItWorks from "@/components/sections/HowItWorks";
import IncludedStrip from "@/components/sections/IncludedStrip";
import Infrastructure from "@/components/sections/Infrastructure";
import Jurisdictions from "@/components/sections/Jurisdictions";
import Plugins from "@/components/sections/Plugins";
import Pricing from "@/components/sections/Pricing";
import ServiceExplorer from "@/components/sections/ServiceExplorer";
import Ticker from "@/components/sections/Ticker";
import TrustStrip from "@/components/sections/TrustStrip";
import Workflow from "@/components/sections/Workflow";

export default function Home() {
  return (
    <>
      <AnnounceBar />
      <Nav />

      <main>
        <Hero />
        <Ticker />
        <TrustStrip />
        <Pricing />
        <IncludedStrip />
        <ServiceExplorer />
        <CrmShowcase />
        <Workflow />
        <Comparison />
        <HowItWorks />
        <Plugins />
        <Infrastructure />
        <Jurisdictions />
        {/* Swap to <Testimonials /> once real, approved client quotes exist. */}
        <Commitments />
        <Faq />
        <Contact />
        <CtaBanner />
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}
