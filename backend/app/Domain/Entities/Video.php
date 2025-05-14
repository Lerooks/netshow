<?php

namespace App\Domain\Entities;


class Video
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
    private ?string $description;

    /**
     * @var string
     */
    private string $hlsPath;

    /**
     * @var string
     */
    private string $thumbnailPath;

    /**
     * @var int
     */
    private int $views;

    /**
     * @var int
     */
    private int $likes;

    /**
     * @var string
     */
    private string $categoryId;

    /**
     * @var string
     */
    private string $siteId;

    /**
     * @var string|null
     */
    private ?string $publishedAt;

    /**
     * @var string|null
     */
    private ?string $createdAt;

    /**
     * @var string|null
     */
    private ?string $updatedAt;

    /**
     * @var Category
     */
    private Category $category;

    /**
     * @var File[]
     */
    private array $files;

    /**
     * @param string $id
     * @param string $title
     * @param string|null $description
     * @param string $hlsPath
     * @param string $thumbnailPath
     * @param int $views
     * @param int $likes
     * @param string $categoryId
     * @param string $siteId
     * @param string|null $publishedAt
     * @param string|null $createdAt
     * @param string|null $updatedAt
     * @param Category $category
     * @param File[] $files
     */
    public function __construct(string $id, string $title, ?string $description, string $hlsPath, string $thumbnailPath, int $views, int $likes, string $categoryId, string $siteId, ?string $publishedAt, ?string $createdAt, ?string $updatedAt, Category $category, array $files)
    {
        $this->id = $id;
        $this->title = $title;
        $this->description = $description;
        $this->hlsPath = $hlsPath;
        $this->thumbnailPath = $thumbnailPath;
        $this->views = $views;
        $this->likes = $likes;
        $this->categoryId = $categoryId;
        $this->siteId = $siteId;
        $this->publishedAt = $publishedAt;
        $this->createdAt = $createdAt;
        $this->updatedAt = $updatedAt;
        $this->category = $category;
        $this->files = $files;
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
    public function getDescription(): ?string
    {
        return $this->description;
    }

    /**
     * @return string
     */
    public function getHlsPath(): string
    {
        return $this->hlsPath;
    }

    /**
     * @return string
     */
    public function getThumbnailPath(): string
    {
        return $this->thumbnailPath;
    }

    /**
     * @return int
     */
    public function getViews(): int
    {
        return $this->views;
    }

    /**
     * @return int
     */
    public function getLikes(): int
    {
        return $this->likes;
    }

    /**
     * @return string
     */
    public function getCategoryId(): string
    {
        return $this->categoryId;
    }

    /**
     * @return string
     */
    public function getSiteId(): string
    {
        return $this->siteId;
    }

    /**
     * @return string|null
     */
    public function getPublishedAt(): ?string
    {
        return $this->publishedAt;
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

    /**
     * @return Category
     */
    public function getCategory(): Category
    {
        return $this->category;
    }

    /**
     * @return File[]
     */
    public function getFiles(): array
    {
        return $this->files;
    }
}
