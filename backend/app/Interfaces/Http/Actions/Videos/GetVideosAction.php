<?php

namespace App\Interfaces\Http\Actions\Videos;

use App\Application\Queries\GetVideosQuery;
use App\Application\UseCases\GetVideosUseCase;
use DomainException;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use Webmozart\Assert\InvalidArgumentException;


class GetVideosAction
{
    /**
     * @var GetVideosUseCase
     */
    private GetVideosUseCase $getVideosUseCase;

    /**
     * @param GetVideosUseCase $getVideosUseCase
     */
    public function __construct(GetVideosUseCase $getVideosUseCase)
    {
        $this->getVideosUseCase = $getVideosUseCase;
    }

    /**
     * @param Request $request
     * @return JsonResponse
     */
    public function __invoke(Request $request): JsonResponse
    {
        try {
            $query = GetVideosQuery::fromArray($request->query());
            $videos = $this->getVideosUseCase->execute($query);
            return response()->json($videos);
        } catch (InvalidArgumentException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], ResponseAlias::HTTP_UNPROCESSABLE_ENTITY);
        } catch (DomainException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], ResponseAlias::HTTP_BAD_REQUEST);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'error' => config('app.debug') ? $exception->getMessage() : null,
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
