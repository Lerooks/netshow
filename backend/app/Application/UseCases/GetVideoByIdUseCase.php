<?php

namespace App\Application\UseCases;


use App\Domain\Entities\Video;
use App\Domain\Exceptions\VideoNotFoundException;
use App\Domain\Repositories\VideoRepository;


class GetVideoByIdUseCase
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
     * @throws VideoNotFoundException
     */
    public function execute(int $id): Video
    {
        return $this->videoRepository->findById($id);
    }
}
