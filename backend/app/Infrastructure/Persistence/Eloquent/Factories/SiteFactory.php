<?php

namespace App\Infrastructure\Persistence\Eloquent\Factories;


use App\Infrastructure\Persistence\Eloquent\Models\SiteModel;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends Factory<SiteModel>
 */
class SiteFactory extends Factory
{
    /**
     * @var string
     */
    protected $model = SiteModel::class;

    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'title' => $this->faker->company,
            'domain' => $this->faker->unique()->domainName,
            'created_at' => $this->faker->dateTimeBetween('-2 years'),
            'updated_at' => $this->faker->dateTimeBetween('-2 years'),
        ];
    }
}
