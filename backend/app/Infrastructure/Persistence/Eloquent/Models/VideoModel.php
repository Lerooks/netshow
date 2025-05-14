<?php

namespace App\Infrastructure\Persistence\Eloquent\Models;

use App\Domain\Entities\Category;
use App\Domain\Entities\File;
use App\Domain\Entities\Video;
use App\Infrastructure\Persistence\Eloquent\Factories\VideoFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;


class VideoModel extends Model
{
    use HasFactory;

    /**
     * @var bool
     */
    public $incrementing = true;
    /**
     * @var string
     */
    protected $table = 'videos';
    /**
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var string[]
     */
    protected $fillable = [
        'title',
        'description',
        'hls_path',
        'thumbnail',
        'views',
        'likes',
        'category_id',
        'site_id',
        'published_at'
    ];

    /**
     * @return VideoFactory|Factory
     */
    protected static function newFactory(): VideoFactory|Factory
    {
        return VideoFactory::new();
    }

    /**
     * @return BelongsTo
     */
    public function category(): BelongsTo
    {
        return $this->belongsTo(CategoryModel::class, 'category_id');
    }

    /**
     * @return HasMany
     */
    public function files(): HasMany
    {
        return $this->hasMany(FileModel::class, 'video_id');
    }

    /**
     * @return Video
     */
    public function toEntity(): Video
    {
        return new Video(
            id: $this['id'],
            title: $this['title'],
            description: $this['description'],
            hlsPath: $this['hls_path'],
            thumbnailPath: $this['thumbnail'],
            views: $this['views'],
            likes: $this['likes'],
            categoryId: $this['category_id'],
            siteId: $this['site_id'],
            publishedAt: $this['published_at'],
            createdAt: $this['created_at'],
            updatedAt: $this['updated_at'],
            category: new Category(
                id: $this['category']['id'],
                title: $this['category']['title'],
                createdAt: $this['category']['created_at'],
                updatedAt: $this['category']['updated_at'],
            ),
            files: array_map(function ($file) {
                return new File(
                    id: $file['id'],
                    name: $file['name'],
                    path: $file['path']
                );
            }, $this['files']->toArray())
        );
    }
}
