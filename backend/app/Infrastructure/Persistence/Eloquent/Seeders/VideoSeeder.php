<?php

namespace App\Infrastructure\Persistence\Eloquent\Seeders;


use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use Illuminate\Database\Seeder;

class VideoSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        VideoModel::factory()
            ->count(100)
            ->sequence(function ($sequence) {
                return [
                    'category_id' => ($sequence->index % 10) + 1,
                ];
            })
            ->create();
    }
}
