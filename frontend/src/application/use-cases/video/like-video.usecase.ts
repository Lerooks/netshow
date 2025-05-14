import { IVideoRepository } from "@/domain/repositories/video.repository";

export class LikeVideoUseCase {
  constructor(private readonly videoRepository: IVideoRepository) {}

  async execute(videoId: string): Promise<void> {
    await this.videoRepository.incrementLikes(videoId);
  }
}
