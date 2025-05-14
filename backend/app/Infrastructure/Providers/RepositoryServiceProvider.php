<?php

namespace App\Infrastructure\Providers;

use App\Domain\Repositories\VideoRepository;
use App\Infrastructure\Persistence\Eloquent\Repositories\EloquentVideoRepository;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind(VideoRepository::class, EloquentVideoRepository::class);
    }

    public function boot(): void
    {
        //
    }
}
