import { Video } from "@/domain/entities/video.entity";

export interface IVideoRepository {
  findById(id: string): Promise<Video>;
  findAll(params?: {
    page?: number;
    per_page?: number;
    title_contains?: string;
    category_id?: string;
  }): Promise<Video[]>;
  incrementLikes(id: string): Promise<void>;
}
