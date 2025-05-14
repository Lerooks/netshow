<?php

namespace Tests\Unit\Infrastructure\Persistence\Eloquent\Models;

use App\Infrastructure\Persistence\Eloquent\Factories\FileFactory;
use App\Infrastructure\Persistence\Eloquent\Models\CategoryModel;
use App\Infrastructure\Persistence\Eloquent\Models\FileModel;
use App\Infrastructure\Persistence\Eloquent\Models\SiteModel;
use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use Illuminate\Foundation\Testing\RefreshDatabase;
use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class FileModelTest extends TestCase
{
    use RefreshDatabase;

    #[Test] public function it_has_correct_table_name_and_fillable_fields()
    {
        $file = new FileModel();

        $this->assertEquals('files', $file->getTable());
        $this->assertEquals(['video_id', 'name', 'path'], $file->getFillable());
    }

    #[Test] public function it_has_incrementing_id_and_integer_key_type()
    {
        $file = new FileModel();

        $this->assertTrue($file->incrementing);
        $this->assertEquals('integer', $file->getKeyType());
    }

    #[Test] public function it_belongs_to_video()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id
        ]);

        $fileModel = FileFactory::new()->create(['video_id' => $videoModel->id]);

        $this->assertInstanceOf(VideoModel::class, $fileModel->video);
        $this->assertEquals($videoModel->id, $fileModel->video->id);
    }

    #[Test] public function it_uses_file_factory()
    {
        $factory = Filemodel::newFactory();

        $this->assertInstanceOf(FileFactory::class, $factory);
    }

    #[Test] public function it_can_be_created_using_factory()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id
        ]);

        $fileModel = FileModel::factory()->create([
            'video_id' => $videoModel->id,
        ]);

        $this->assertDatabaseHas('files', [
            'id' => $fileModel->id,
            'name' => $fileModel->name,
            'path' => $fileModel->path
        ]);
    }

    #[Test] public function it_has_required_fields()
    {
        $siteModel = SiteModel::factory()->create();
        $categoryModel = CategoryModel::factory()->create(['site_id' => $siteModel->id]);
        $videoModel = VideoModel::factory()->create([
            'site_id' => $siteModel->id,
            'category_id' => $categoryModel->id
        ]);
        $file = FileModel::factory()->create([
            'video_id' => $videoModel->id,
        ]);

        $this->assertNotNull($file->video_id);
        $this->assertNotNull($file->name);
        $this->assertNotNull($file->path);
    }
}
