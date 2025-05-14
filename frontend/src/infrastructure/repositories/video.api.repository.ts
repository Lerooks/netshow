import { Video } from "@/domain/entities/video.entity";
import { IVideoRepository } from "@/domain/repositories/video.repository";
import { httpClient } from "@/infrastructure/http/axios-client";

export class VideoApiRepository implements IVideoRepository {
  async findById(id: string): Promise<Video> {
    const response = await httpClient.get<{ data: Video }>(`/videos/${id}`);

    return response.data;
  }

  async findAll(params?: {
    page?: number;
    per_page?: number;
    title_contains?: string;
    category_id?: string;
  }): Promise<Video[]> {
    const response = await httpClient.get<{ data: Video[] }>("/videos", {
      params,
    });

    return response.data;
  }

  async incrementLikes(id: string): Promise<void> {
    await httpClient.patch(`/videos/${id}/like`);
  }
}
