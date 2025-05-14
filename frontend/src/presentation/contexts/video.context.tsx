"use client";

import { createContext, useContext } from "react";
import { videoStore } from "@/infrastructure/stores/video.store";
import { Video } from "@/domain/entities/video.entity";

const VideoContext = createContext(videoStore);

export function VideoProvider({
  children,
  initialVideo,
}: {
  children: React.ReactNode;
  initialVideo?: Video;
}) {
  if (initialVideo) {
    videoStore.setCurrentVideo(initialVideo);
  }

  return (
    <VideoContext.Provider value={videoStore}>{children}</VideoContext.Provider>
  );
}

export function useVideoStore() {
  return useContext(VideoContext);
}
