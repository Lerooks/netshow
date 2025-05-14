import { makeAutoObservable, action } from "mobx";
import { Video } from "@/domain/entities/video.entity";
import { UseCaseFactory } from "@/infrastructure/factories/use-cases.factory";

class VideoStore {
  currentVideo: Video | null = null;
  relatedVideos: Video[] = [];
  loading = {
    related: false,
  };

  constructor() {
    makeAutoObservable(this);
  }

  setCurrentVideo = action((video: Video) => {
    this.currentVideo = video;
  });

  loadRelatedVideos = action(async (categoryId: string) => {
    this.loading.related = true;

    try {
      const useCase = UseCaseFactory.getListVideosUseCase();
      this.relatedVideos = await useCase.execute({
        per_page: 6,
        category_id: categoryId,
      });
    } catch {
      //
    } finally {
      this.loading.related = false;
    }
  });

  incrementLike = action(async () => {
    if (!this.currentVideo) return;

    try {
      const useCase = UseCaseFactory.getLikeVideoUseCase();
      await useCase.execute(this.currentVideo.id);

      if (this.currentVideo) {
        this.currentVideo.likes += 1;
      }
    } catch {
      //
    }
  });
}

export const videoStore = new VideoStore();
