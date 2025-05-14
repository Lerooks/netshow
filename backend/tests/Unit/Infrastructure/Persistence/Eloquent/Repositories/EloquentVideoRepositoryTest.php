<?php

/** @noinspection PhpUnhandledExceptionInspection */

namespace Tests\Unit\Infrastructure\Persistence\Eloquent\Repositories;


use App\Domain\Exceptions\VideoNotFoundException;
use App\Infrastructure\Persistence\Eloquent\Models\CategoryModel;
use App\Infrastructure\Persistence\Eloquent\Models\SiteModel;
use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use App\Infrastructure\Persistence\Eloquent\Repositories\EloquentVideoRepository;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class EloquentVideoRepositoryTest extends TestCase
{
    use RefreshDatabase;

    /**
     * @var EloquentVideoRepository
     */
    private EloquentVideoRepository $repository;

    #[Test] public function it_can_find_video_by_id()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create(['category_id' => $categoryModel->id, 'site_id' => $siteModel->id]);

        $video = $this->repository->findById($videoModel->id);
        $this->assertEquals($videoModel->id, $video->getId());
    }

    #[Test] public function it_throws_exception_when_video_not_found()
    {
        $this->expectException(VideoNotFoundException::class);
        $this->repository->findById('1234567890');
    }

    #[Test] public function it_can_increment_views()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'category_id' => $categoryModel->id,
            'site_id' => $siteModel->id,
            'views' => 10
        ]);

        $this->repository->incrementViews($videoModel->id);

        $this->assertEquals(11, $videoModel->fresh()->views);
    }

    #[Test] public function increment_views_throws_exception_when_video_not_found()
    {
        $this->expectException(VideoNotFoundException::class);

        $this->repository->incrementViews('12345678890');
    }

    #[Test] public function it_can_increment_likes()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'category_id' => $categoryModel->id,
            'site_id' => $siteModel->id,
            'likes' => 5
        ]);

        $this->repository->incrementLikes($videoModel->id);

        $this->assertEquals(6, $videoModel->fresh()->likes);
    }

    #[Test] public function increment_likes_throws_exception_when_video_not_found()
    {
        $this->expectException(VideoNotFoundException::class);

        $this->repository->incrementLikes('1234567890');
    }

    #[Test] public function it_can_search_videos_without_filters()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);

        VideoModel::factory()->count(15)->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id,
        ]);

        $result = $this->repository->search(null, 1, 20);

        $this->assertCount(15, $result);
    }

    #[Test] public function it_can_search_videos_with_title_filter()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);

        VideoModel::factory()->create([
            'category_id' => $categoryModel->id,
            'site_id' => $siteModel->id,
            'title' => 'Special Video'
        ]);


        VideoModel::factory()->create([
            'category_id' => $categoryModel->id,
            'site_id' => $siteModel->id,
            'likes' => 0,
        ]);

        $result = $this->repository->search('Special', 1, 10);

        $this->assertCount(1, $result);
        $this->assertEquals('Special Video', $result[0]->getTitle());
    }

    #[Test] public function it_returns_empty_collection_when_no_matches()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);

        VideoModel::factory()
            ->count(5)
            ->create([
                'category_id' => $categoryModel->id,
                'site_id' => $siteModel->id,
            ]);

        $result = $this->repository->search('Non-existent title');

        $this->assertCount(0, $result);
    }

    #[Test] public function it_returns_paginated_results()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);

        VideoModel::factory()
            ->count(25)
            ->create([
                'category_id' => $categoryModel->id,
                'site_id' => $siteModel->id,
            ]);

        $page1 = $this->repository->search(null, 1, 10);
        $page2 = $this->repository->search(null, 2, 10);
        $page3 = $this->repository->search(null, 3, 10);

        $this->assertCount(10, $page1);
        $this->assertCount(10, $page2);
        $this->assertCount(5, $page3);
    }

    protected function setUp(): void
    {
        parent::setUp();

        $this->repository = new EloquentVideoRepository();
    }
}
