<?php

namespace App\Interfaces\Http\Resources;

use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\ResourceCollection;
use Illuminate\Pagination\LengthAwarePaginator;

class VideoCollection extends ResourceCollection
{
    /**
     * @var string
     */
    public $collects = VideoResource::class;

    /**
     *
     * @param Request $request
     * @return array
     */
    public function toArray(Request $request): array
    {
        return [
            'data' => $this->collection,
            'meta' => $this->when($this->resource instanceof LengthAwarePaginator, function () {
                return [
                    'current_page' => $this->resource->currentPage(),
                    'per_page' => $this->resource->perPage(),
                    'total' => $this->resource->total(),
                    'last_page' => $this->resource->lastPage(),
                    'path' => $this->resource->path(),
                ];
            }),
        ];
    }

    /**
     *
     * @param Request $request
     * @param JsonResponse $response
     * @return void
     */
    public function withResponse(Request $request, JsonResponse $response): void
    {
        if ($this->resource instanceof LengthAwarePaginator) {
            $response->header('X-Total-Count', $this->resource->total());
            $response->header('X-Per-Page', $this->resource->perPage());
            $response->header('X-Current-Page', $this->resource->currentPage());
        }
    }

    /**
     *
     * @return array
     */
    protected function paginationLinks(): array
    {
        return [
            'first' => $this->resource->url(1),
            'last' => $this->resource->url($this->resource->lastPage()),
            'prev' => $this->resource->previousPageUrl(),
            'next' => $this->resource->nextPageUrl(),
        ];
    }
}
