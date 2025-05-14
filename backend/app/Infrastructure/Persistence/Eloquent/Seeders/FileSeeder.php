<?php

namespace App\Infrastructure\Persistence\Eloquent\Seeders;


use App\Infrastructure\Persistence\Eloquent\Models\FileModel;
use Illuminate\Database\Seeder;

class FileSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        FileModel::factory()
            ->count(1000)
            ->create();
    }
}
