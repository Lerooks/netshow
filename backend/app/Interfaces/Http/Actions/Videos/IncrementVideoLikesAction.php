<?php

namespace App\Interfaces\Http\Actions\Videos;

use App\Application\UseCases\IncrementVideoLikesUseCase;
use DomainException;
use Exception;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response as ResponseAlias;
use Webmozart\Assert\InvalidArgumentException;

class IncrementVideoLikesAction
{
    /**
     * @var IncrementVideoLikesUseCase
     */
    private IncrementVideoLikesUseCase $incrementVideoLikesUseCase;

    /**
     * @param IncrementVideoLikesUseCase $incrementVideoLikesUseCase
     */
    public function __construct(IncrementVideoLikesUseCase $incrementVideoLikesUseCase)
    {
        $this->incrementVideoLikesUseCase = $incrementVideoLikesUseCase;
    }

    /**
     * @param Request $request
     * @param int $id
     * @return JsonResponse
     */
    public function __invoke(Request $request, int $id): JsonResponse
    {
        try {
            $this->incrementVideoLikesUseCase->execute($id);
            return response()->json(null, ResponseAlias::HTTP_NO_CONTENT);
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
