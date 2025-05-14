<?php

use App\Interfaces\Http\Actions\Videos\GetVideosAction;
use App\Interfaces\Http\Actions\Videos\GetVideoByIdAction;
use App\Interfaces\Http\Actions\Videos\IncrementVideoLikesAction;
use Illuminate\Support\Facades\Route;


Route::prefix('v1')->group(function () {
    Route::prefix('videos')->group(function () {
        Route::get('/', GetVideosAction::class)->name('api.v1.videos.index');
        Route::get('/{id}', GetVideoByIdAction::class)->where('id', '[0-9]+')->name('api.v1.videos.show');
        Route::patch('/{id}/like', IncrementVideoLikesAction::class)->where('id', '[0-9]+')->name('api.v1.videos.likes.increment');
    });
});
