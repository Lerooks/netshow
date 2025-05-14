<?php

namespace App\Infrastructure\Persistence\Eloquent\Factories;


use App\Infrastructure\Persistence\Eloquent\Models\VideoModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<VideoModel>
 */
class VideoFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = VideoModel::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(3),
            'description' => $this->faker->paragraph(4),
            'hls_path' => 'videos/' . $this->faker->uuid . '/playlist.m3u8',
            'thumbnail' => 'thumbnails/' . $this->faker->uuid . '.jpg',
            'views' => $this->faker->numberBetween(0, 10000),
            'likes' => $this->faker->numberBetween(0, 5000),
            'category_id' => $this->faker->numberBetween(1, 10),
            'site_id' => $this->faker->numberBetween(1, 5),
            'published_at' => $this->faker->optional(0.8)->dateTimeBetween('-1 year'),
            'created_at' => $this->faker->dateTimeBetween('-1 year'),
            'updated_at' => $this->faker->dateTimeBetween('-1 year'),
        ];
    }
}
