<?php

namespace App\Domain\Entities;


class File
{
    /**
     * @var string
     */
    private string $id;

    /**
     * @var string
     */
    private string $name;

    /**
     * @var string
     */
    private string $path;

    /**
     * @param string $id
     * @param string $name
     * @param string $path
     */
    public function __construct(string $id, string $name, string $path)
    {
        $this->id = $id;
        $this->name = $name;
        $this->path = $path;
    }

    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @return string
     */
    public function getName(): string
    {
        return $this->name;
    }

    /**
     * @return string
     */
    public function getPath(): string
    {
        return $this->path;
    }
}
