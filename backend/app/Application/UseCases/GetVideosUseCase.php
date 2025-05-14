<?php

namespace App\Application\UseCases;

use App\Application\Queries\GetVideosQuery;
use App\Domain\Repositories\VideoRepository;
use App\Interfaces\Http\Resources\VideoCollection;


class GetVideosUseCase
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
     * @param GetVideosQuery $query
     * @return mixed
     */
    public function execute(GetVideosQuery $query): VideoCollection
    {
        return $this->videoRepository->search(
            titleContains: $query->getTitleContains(),
            categoryId: $query->getCategoryId(),
            page: $query->getPage(),
            perPage: $query->getPerPage()
        );
    }
}
