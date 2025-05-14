<?php

namespace App\Interfaces\Http\Resources;

use App\Domain\Entities\Video;
use Illuminate\Http\Resources\Json\JsonResource;


class VideoResource extends JsonResource
{
    /**
     * @param $request
     * @return array
     */
    public function toArray($request): array
    {
        if ($this->resource instanceof Video) {
            return [
                'id' => $this->resource->getId(),
                'title' => $this->resource->getTitle(),
                'description' => $this->resource->getDescription(),
                'hls_path' => $this->resource->getHlsPath(),
                'thumbnail' => $this->resource->getThumbnailPath(),
                'views' => $this->resource->getViews(),
                'likes' => $this->resource->getLikes(),
                'category_id' => $this->resource->getCategoryId(),
                'site_id' => $this->resource->getSiteId(),
                'published_at' => $this->resource->getPublishedAt(),
                'created_at' => $this->resource->getCreatedAt(),
                'updated_at' => $this->resource->getUpdatedAt(),
                'category' => [
                    'id' => $this->resource->getCategory()->getId(),
                    'title' => $this->resource->getCategory()->getTitle(),
                ],
                'files' => array_map(function ($file) {
                    return [
                        'id' => $file->getId(),
                        'path' => $file->getPath(),
                        'name' => $file->getName(),
                    ];
                }, $this->resource->getFiles())
            ];
        }

        return [];
    }
}
