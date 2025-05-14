<?php

namespace App\Infrastructure\Persistence\Eloquent\Seeders;


use App\Infrastructure\Persistence\Eloquent\Models\CategoryModel;
use Illuminate\Database\Seeder;

class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        CategoryModel::factory()
            ->count(100)
            ->create();
    }
}
