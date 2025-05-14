import { GetVideoDetailsUseCase } from "@/application/use-cases/video/get-video-details.usecase";
import { LikeVideoUseCase } from "@/application/use-cases/video/like-video.usecase";
import { ListVideosUseCase } from "@/application/use-cases/video/list-videos.usecase";
import { IVideoRepository } from "@/domain/repositories/video.repository";
import { RepositoryFactory } from "@/infrastructure/factories/repository.factory";

export class UseCaseFactory {
  private static getVideoRepository(): IVideoRepository {
    return RepositoryFactory.getVideoRepository();
  }

  static getVideoDetailsUseCase(): GetVideoDetailsUseCase {
    return new GetVideoDetailsUseCase(this.getVideoRepository());
  }

  static getListVideosUseCase(): ListVideosUseCase {
    return new ListVideosUseCase(this.getVideoRepository());
  }

  static getLikeVideoUseCase(): LikeVideoUseCase {
    return new LikeVideoUseCase(this.getVideoRepository());
  }
}
