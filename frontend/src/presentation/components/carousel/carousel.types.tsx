import { Video } from "@/domain/entities/video.entity";

export interface CarouselProps {
  videos: Video[];
}

export interface CarouselItemProps {
  video?: Video;
}
