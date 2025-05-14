import { UseCaseFactory } from "@/infrastructure/factories/use-cases.factory";
import { useMemo } from "react";

export function useVideoUseCases() {
  return useMemo(
    () => ({
      getVideoDetails: UseCaseFactory.getVideoDetailsUseCase(),
      listVideos: UseCaseFactory.getListVideosUseCase(),
      likeVideo: UseCaseFactory.getLikeVideoUseCase(),
    }),
    [],
  );
}
