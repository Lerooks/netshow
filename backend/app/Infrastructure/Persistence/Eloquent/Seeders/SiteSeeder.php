<?php

namespace App\Infrastructure\Persistence\Eloquent\Seeders;


use App\Infrastructure\Persistence\Eloquent\Models\SiteModel;
use Illuminate\Database\Seeder;

class SiteSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        SiteModel::factory()
            ->count(100)
            ->create();
    }
}
