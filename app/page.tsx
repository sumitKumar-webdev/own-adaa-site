import { AtelierSection } from "./components/home/AtelierSection";
import { CollectionSection } from "./components/home/CollectionSection";
import { CommunityCarouselSection } from "./components/home/CommunityCarouselSection";
import { HeroSection } from "./components/home/HeroSection";
import { PressSection } from "./components/home/PressSection";
import { ProcessSection } from "./components/home/ProcessSection";
import { SignatureSection } from "./components/home/SignatureSection";
import { StorySection } from "./components/home/StorySection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <StorySection />
      <SignatureSection />
      <ProcessSection />
      <CollectionSection />
      <AtelierSection />
      <PressSection />
      <CommunityCarouselSection />
    </>
  );
}
