<?php

namespace App\Domain\Exceptions;

use Exception;


class VideoNotFoundException extends Exception
{

    /**
     * @param int $videoId
     */
    public function __construct(int $videoId)
    {
        parent::__construct("Video not found with ID: $videoId");
    }
}
