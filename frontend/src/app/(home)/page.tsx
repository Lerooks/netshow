import { TalksSection } from "@/presentation/components/home/talks-section/talks-section";
import { FlowSection } from "@/presentation/components/home/flow-section/flow-section";
import { HeroBanner } from "@/presentation/components/home/hero-banner";
import { LiveSection } from "@/presentation/components/home/live-section";
import { OverTheCastSection } from "@/presentation/components/home/over-the-cast";
import { PlaylistSection } from "@/presentation/components/home/playlist-section";
import { HomeProvider } from "@/presentation/contexts/home.context";

export default async function Home() {
  return (
    <HomeProvider>
      <HeroBanner></HeroBanner>
      <TalksSection></TalksSection>
      <LiveSection></LiveSection>
      <OverTheCastSection></OverTheCastSection>
      <FlowSection></FlowSection>
      <PlaylistSection></PlaylistSection>
    </HomeProvider>
  );
}
