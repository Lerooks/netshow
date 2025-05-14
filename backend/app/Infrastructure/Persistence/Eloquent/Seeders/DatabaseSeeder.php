<?php

namespace App\Infrastructure\Persistence\Eloquent\Seeders;


use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    use WithoutModelEvents;

    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $this->call([
            SiteSeeder::class,
            CategorySeeder::class,
            VideoSeeder::class,
            FileSeeder::class,
        ]);
    }
}
