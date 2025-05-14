<?php

namespace App\Domain\Entities;

class Category
{
    /**
     * @var string
     */
    private string $id;

    /**
     * @var string
     */
    private string $title;

    /**
     * @var string|null
     */
    private ?string $createdAt;

    /**
     * @var string|null
     */
    private ?string $updatedAt;

    /**
     * @param string $id
     * @param string $title
     * @param string|null $createdAt
     * @param string|null $updatedAt
     */
    public function __construct(string $id, string $title, ?string $createdAt, ?string $updatedAt)
    {
        $this->id = $id;
        $this->title = $title;
        $this->createdAt = $createdAt;
        $this->updatedAt = $updatedAt;
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
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @return string|null
     */
    public function getCreatedAt(): ?string
    {
        return $this->createdAt;
    }

    /**
     * @return string|null
     */
    public function getUpdatedAt(): ?string
    {
        return $this->updatedAt;
    }
}
