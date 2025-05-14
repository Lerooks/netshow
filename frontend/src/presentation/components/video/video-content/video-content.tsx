"use client";

import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { useVideoStore } from "@/presentation/contexts/video.context";
import { Meta } from "@/presentation/components/video/meta/meta";
import { PlayerSection } from "@/presentation/components/video/player/section";
import { RelatedSection } from "@/presentation/components/video/related-section/related-section";
import { Summary } from "@/presentation/components/video/summary/summary";

export const VideoContent = observer(() => {
  const { currentVideo, loadRelatedVideos } = useVideoStore();

  useEffect(() => {
    if (currentVideo) {
      loadRelatedVideos(currentVideo.category.id);
    }
  }, [currentVideo, currentVideo?.id, loadRelatedVideos]);

  return (
    <>
      <PlayerSection />
      <Meta />
      <Summary />
      <RelatedSection />
    </>
  );
});
