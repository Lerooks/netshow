<?php

namespace App\Infrastructure\Persistence\Eloquent\Repositories;

use App\Domain\Entities\Category;
use App\Domain\Entities\File;
use App\Domain\Entities\Video;
use App\Domain\Exceptions\VideoNotFoundException;
use App\Domain\Repositories\VideoRepository;
use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use App\Interfaces\Http\Resources\VideoCollection;
use Illuminate\Database\Eloquent\ModelNotFoundException;


class EloquentVideoRepository implements VideoRepository
{

    /**
     * @param string $id
     * @return Video
     * @throws VideoNotFoundException
     */
    public function findById(string $id): Video
    {
        try {
            $model = VideoModel::query()
                ->with(['category', 'files'])
                ->findOrFail($id);
            return $model->toEntity();
        } catch (ModelNotFoundException) {
            throw new VideoNotFoundException($id);
        }
    }

    /**
     * @param string $id
     * @return void
     * @throws VideoNotFoundException
     */
    public function incrementViews(string $id): void
    {
        $affected = VideoModel::query()
            ->where('id', $id)
            ->increment('views');

        if ($affected === 0) {
            throw new VideoNotFoundException($id);
        }

    }

    /**
     * @param string $id
     * @return void
     * @throws VideoNotFoundException
     */
    public function incrementLikes(string $id): void
    {
        $affected = VideoModel::query()
            ->where('id', $id)
            ->increment('likes');

        if ($affected === 0) {
            throw new VideoNotFoundException($id);
        }

    }

    /**
     * @param string|null $titleContains
     * @param string|null $categoryId
     * @param int $page
     * @param int $perPage
     * @return VideoCollection
     */
    public function search(?string $titleContains, ?string $categoryId, int $page = 1, int $perPage = 10): VideoCollection
    {
        $query = VideoModel::query()
            ->with(['category', 'files']);

        if ($titleContains !== null) {
            $query->where('title', 'LIKE', "%$titleContains%");
        }

        if ($categoryId !== null) {
            $query->where('category_id', $categoryId);
        }

        $paginator = $query->paginate(
            $perPage ?? 15,
            ['*'],
            'page',
            $page ?? 1
        );

        $videos = $paginator->getCollection()->transform(function ($model) {
            return new Video(
                $model->id,
                $model->title,
                $model->description,
                $model->hls_path,
                $model->thumbnail,
                $model->views,
                $model->likes,
                $model->category_id,
                $model->site_id,
                $model->published_at,
                $model->created_at,
                $model->updated_at,
                new Category(
                    id: $model->category->id,
                    title: $model->category->title,
                    createdAt: $model->category->created_at,
                    updatedAt: $model->category->updated_at,
                ),
                $model->files->transform(function ($file) {
                    return new File(
                        id: $file->id,
                        name: $file->name,
                        path: $file->path,
                    );
                })->toArray()
            );
        });

        return new VideoCollection($videos);
    }
}
