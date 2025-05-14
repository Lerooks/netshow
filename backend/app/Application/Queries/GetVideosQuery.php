<?php

namespace App\Application\Queries;

use Webmozart\Assert\Assert;

class GetVideosQuery
{
    /**
     * @var int|null
     */
    private ?int $page;
    /**
     * @var int|null
     */
    private ?int $perPage;
    /**
     * @var string|null
     */
    private ?string $titleContains;

    /**
     * @var string|null
     */
    private ?string $categoryId;

    /**
     * @param int|null $page
     * @param int|null $perPage
     * @param string|null $titleContains
     * @param string|null $categoryId
     */
    public function __construct(?int $page, ?int $perPage, ?string $titleContains, ?string $categoryId)
    {
        $this->page = $page;
        $this->perPage = $perPage;
        $this->titleContains = $titleContains;
        $this->categoryId = $categoryId;
    }

    /**
     * @param array $data
     * @return GetVideosQuery
     */
    public static function fromArray(array $data): GetVideosQuery
    {
        if (key_exists('page', $data)) {
            Assert::integerish($data['page'], 'Page number should be a numeric value');
            Assert::greaterThan($data['page'], 0, 'Page should be greater than 0');
        }

        if (key_exists('per_page', $data)) {
            Assert::integerish($data['per_page'], 'Per page should be a numeric value');
            Assert::greaterThan($data['per_page'], 0, 'Per page should be greater than 0');
            Assert::lessThanEq($data['per_page'], 100, 'Per page should be less than or equal to 100');
        }

        if (key_exists('title_contains', $data)) {
            Assert::stringNotEmpty($data['title_contains']);
        }

        if (key_exists('category_id', $data)) {
            Assert::integerish($data['category_id'], 'Category ID should be a numeric value');
            Assert::greaterThan($data['category_id'], 0, 'Category ID should be greater than 0');
        }

        return new self(
            $data['page'] ?? 1,
            $data['per_page'] ?? 10,
            $data['title_contains'] ?? null,
            $data['category_id'] ?? null
        );
    }

    /**
     * @return array
     */
    public function toArray(): array
    {
        return [
            'page' => $this->getPage(),
            'perPage' => $this->getPerPage(),
            'titleContains' => $this->getTitleContains(),
            'categoryId' => $this->getCategoryId(),
        ];
    }

    /**
     * @return int|null
     */
    public function getPage(): ?int
    {
        return $this->page;
    }

    /**
     * @return int|null
     */
    public function getPerPage(): ?int
    {
        return $this->perPage;
    }

    /**
     * @return string|null
     */
    public function getTitleContains(): ?string
    {
        return $this->titleContains;
    }

    /**
     * @return string|null
     */
    public function getCategoryId(): ?string
    {
        return $this->categoryId;
    }
}
