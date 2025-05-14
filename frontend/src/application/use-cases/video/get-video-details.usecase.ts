import { Video } from "@/domain/entities/video.entity";
import { IVideoRepository } from "@/domain/repositories/video.repository";

export class GetVideoDetailsUseCase {
  constructor(private readonly videoRepository: IVideoRepository) {}

  async execute(videoId: string): Promise<Video> {
    const video = await this.videoRepository.findById(videoId);

    return video;
  }
}
