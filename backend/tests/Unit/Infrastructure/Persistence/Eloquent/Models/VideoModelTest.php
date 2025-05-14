<?php

namespace Tests\Unit\Infrastructure\Persistence\Eloquent\Models;

use App\Infrastructure\Persistence\Eloquent\Factories\VideoFactory;
use App\Infrastructure\Persistence\Eloquent\Models\CategoryModel;
use App\Infrastructure\Persistence\Eloquent\Models\FileModel;
use App\Infrastructure\Persistence\Eloquent\Models\SiteModel;
use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class VideoModelTest extends TestCase
{
    use RefreshDatabase;

    #[Test] public function it_has_correct_table_name_and_fillable_fields()
    {
        $video = new VideoModel();

        $this->assertEquals('videos', $video->getTable());
        $this->assertEquals([
            'title',
            'description',
            'hls_path',
            'thumbnail',
            'views',
            'likes',
            'category_id',
            'site_id',
            'published_at'
        ], $video->getFillable());
    }

    #[Test] public function it_has_incrementing_id_and_integer_key_type()
    {
        $video = new VideoModel();

        $this->assertTrue($video->incrementing);
        $this->assertEquals('integer', $video->getKeyType());
    }

    #[Test] public function it_has_category_relation()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id
        ]);

        $this->assertInstanceOf(CategoryModel::class, $videoModel->category);
        $this->assertEquals($videoModel->category_id, $videoModel->category->id);
        $this->assertInstanceOf(BelongsTo::class, $videoModel->category());
    }

    #[Test] public function it_has_files_relation()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id
        ]);

        FileModel::factory()->create(['video_id' => $videoModel->id]);

        $this->assertInstanceOf(Collection::class, $videoModel->files);
        $this->assertEquals($videoModel->id, $videoModel->files->first()->video_id);
        $this->assertInstanceOf(HasMany::class, $videoModel->files());
    }

    #[Test] public function it_can_convert_to_entity()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);


        /**
         * @var VideoModel $videoModel
         */
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id,
            'title' => 'Test Video',
            'description' => 'Test Description',
            'hls_path' => '/path/to/hls',
            'thumbnail' => '/path/to/thumbnail.jpg',
            'views' => 100,
            'likes' => 50,
            'published_at' => now(),
        ]);

        $entity = $videoModel->toEntity();

        $this->assertEquals($videoModel->id, $entity->getId());
        $this->assertEquals($videoModel->title, $entity->getTitle());
        $this->assertEquals($videoModel->description, $entity->getDescription());
        $this->assertEquals($videoModel->hls_path, $entity->getHlsPath());
        $this->assertEquals($videoModel->thumbnail, $entity->getThumbnailPath());
        $this->assertEquals($videoModel->views, $entity->getViews());
        $this->assertEquals($videoModel->likes, $entity->getLikes());
        $this->assertEquals($videoModel->category_id, $entity->getCategoryId());
        $this->assertEquals($videoModel->site_id, $entity->getSiteId());
        $this->assertEquals($videoModel->published_at, $entity->getPublishedAt());
        $this->assertEquals($videoModel->created_at, $entity->getCreatedAt());
        $this->assertEquals($videoModel->updated_at, $entity->getUpdatedAt());
    }

    #[Test] public function it_uses_video_factory()
    {
        $factory = VideoModel::newFactory();

        $this->assertInstanceOf(VideoFactory::class, $factory);
    }
}
