import { Video } from "@/domain/entities/video.entity";
import { IVideoRepository } from "@/domain/repositories/video.repository";

export type ListVideosParams = {
  page?: number;
  per_page?: number;
  title_contains?: string;
  category_id?: string;
};

export class ListVideosUseCase {
  constructor(private readonly videoRepository: IVideoRepository) {}

  async execute(params?: ListVideosParams): Promise<Video[]> {
    return this.videoRepository.findAll(params);
  }
}
