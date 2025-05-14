import { Category } from "@/domain/entities/category.entity";
import { IFile } from "@/domain/entities/file.entity";

export interface Video {
  id: string;
  title: string;
  description: string;
  hls_path: string;
  thumbnail: string;
  views: number;
  likes: number;
  category_id: string;
  site_id: string;
  published_at: string;
  created_at: string;
  updated_at: string;
  category: Category;
  files: IFile[];
}
