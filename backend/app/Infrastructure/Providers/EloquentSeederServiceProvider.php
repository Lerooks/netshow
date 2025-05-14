<?php

namespace App\Infrastructure\Providers;

use Illuminate\Support\ServiceProvider;

class EloquentSeederServiceProvider extends ServiceProvider
{
    public function register(): void
    {
        $this->app->bind('path.seeds', function () {
            return app_path('Infrastructure/Persistence/Eloquent/Seeders');
        });
    }
}
