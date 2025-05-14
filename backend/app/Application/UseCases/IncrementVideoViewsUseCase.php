<?php

namespace App\Application\UseCases;


use App\Domain\Repositories\VideoRepository;

class IncrementVideoViewsUseCase
{
    /**
     * @var VideoRepository
     */
    private VideoRepository $videoRepository;

    /**
     * @param VideoRepository $videoRepository
     */
    public function __construct(VideoRepository $videoRepository)
    {
        $this->videoRepository = $videoRepository;
    }

    /**
     * @param int $id
     * @return void
     */
    public function execute(int $id): void
    {
        $this->videoRepository->incrementViews($id);
    }
}
