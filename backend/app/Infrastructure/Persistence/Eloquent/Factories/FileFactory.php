<?php

namespace App\Infrastructure\Persistence\Eloquent\Factories;


use App\Infrastructure\Persistence\Eloquent\Models\FileModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<FileModel>
 */
class FileFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = FileModel::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'video_id' => $this->faker->numberBetween(1, 100),
            'name' => $this->faker->word() . 'factories' . $this->faker->fileExtension(),
            'path' => 'files/' . $this->faker->unique()->sha1() . '.' . $this->faker->fileExtension(),
            'created_at' => $this->faker->dateTimeBetween('-1 year'),
            'updated_at' => $this->faker->dateTimeBetween('-1 year'),
        ];
    }
}
