import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { PracticeAreasGrid } from "@/components/sections/PracticeAreasGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { CaseResultsStrip } from "@/components/sections/CaseResultsStrip";
import { AttorneyPreview } from "@/components/sections/AttorneyPreview";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { InsightsPreview } from "@/components/sections/InsightsPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <PracticeAreasGrid />
      <WhyUs />
      <CaseResultsStrip />
      <AttorneyPreview />
      <ProcessSection />
      <Testimonials />
      <InsightsPreview />
      <CTASection />
    </>
  );
}
