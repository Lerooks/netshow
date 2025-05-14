<?php

namespace App\Interfaces\Http\Actions\Videos;

use App\Application\UseCases\GetVideoByIdUseCase;
use App\Application\UseCases\IncrementVideoViewsUseCase;
use App\Domain\Exceptions\VideoNotFoundException;
use App\Interfaces\Http\Resources\VideoResource;
use DomainException;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use Webmozart\Assert\InvalidArgumentException;


class GetVideoByIdAction
{
    /**
     * @var GetVideoByIdUseCase
     */
    private GetVideoByIdUseCase $getVideoByIdUseCase;

    /**
     * @var IncrementVideoViewsUseCase
     */
    private IncrementVideoViewsUseCase $incrementVideoViewsUseCase;

    /**
     * @param GetVideoByIdUseCase $getVideoByIdUseCase
     * @param IncrementVideoViewsUseCase $incrementVideoViewsUseCase
     */
    public function __construct(GetVideoByIdUseCase $getVideoByIdUseCase, IncrementVideoViewsUseCase $incrementVideoViewsUseCase)
    {
        $this->getVideoByIdUseCase = $getVideoByIdUseCase;
        $this->incrementVideoViewsUseCase = $incrementVideoViewsUseCase;
    }

    /**
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function __invoke(Request $request, int $id): JsonResponse
    {
        try {
            $video = $this->getVideoByIdUseCase->execute($id);
            $this->incrementVideoViewsUseCase->execute($id);

            return (new VideoResource($video))
                ->response()
                ->setStatusCode(ResponseAlias::HTTP_OK);

        } catch (InvalidArgumentException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], ResponseAlias::HTTP_UNPROCESSABLE_ENTITY);
        } catch (DomainException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
            ], ResponseAlias::HTTP_BAD_REQUEST);
        } catch (VideoNotFoundException $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'error' => config('app.debug') ? $exception->getMessage() : null,
            ], ResponseAlias::HTTP_NOT_FOUND);
        } catch (Exception $exception) {
            return response()->json([
                'message' => $exception->getMessage(),
                'error' => config('app.debug') ? $exception->getMessage() : null,
            ], ResponseAlias::HTTP_INTERNAL_SERVER_ERROR);
        }
    }
}
