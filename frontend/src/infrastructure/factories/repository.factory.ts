import { IVideoRepository } from "@/domain/repositories/video.repository";
import { VideoApiRepository } from "@/infrastructure/repositories/video.api.repository";

export class RepositoryFactory {
  private static videoRepository: IVideoRepository;

  static getVideoRepository(): IVideoRepository {
    if (!this.videoRepository) {
      this.videoRepository = new VideoApiRepository();
    }
    return this.videoRepository;
  }
}
