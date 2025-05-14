<?php

namespace App\Domain\Repositories;

use App\Domain\Entities\Video;
use App\Domain\Exceptions\VideoNotFoundException;

interface VideoRepository
{

    /**
     * @param string|null $titleContains
     * @param int $page
     * @param int $perPage
     */
    public function search(?string $titleContains, ?string $categoryId, int $page = 1, int $perPage = 10);

    /**
     * @param string $id
     * @throws VideoNotFoundException
     */
    public function findById(string $id): Video;

    /**
     * @param string $id
     * @return void
     */
    public function incrementViews(string $id): void;


    /**
     * @param string $id
     * @return void
     */
    public function incrementLikes(string $id): void;
}
