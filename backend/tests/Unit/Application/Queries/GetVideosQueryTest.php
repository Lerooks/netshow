<?php

namespace Tests\Unit\Application\Queries;

use App\Application\Queries\GetVideosQuery;
use InvalidArgumentException;
use PHPUnit\Framework\Attributes\Test;
use PHPUnit\Framework\TestCase;

class GetVideosQueryTest extends TestCase
{
    #[Test] public function it_can_be_created_with_default_values()
    {
        $query = new GetVideosQuery(null, null, null);

        $this->assertNull($query->getPage());
        $this->assertNull($query->getPerPage());
        $this->assertNull($query->getTitleContains());
    }

    #[Test] public function it_can_be_created_with_custom_values()
    {
        $query = new GetVideosQuery(2, 15, 'test');

        $this->assertEquals(2, $query->getPage());
        $this->assertEquals(15, $query->getPerPage());
        $this->assertEquals('test', $query->getTitleContains());
    }


    #[Test] public function it_can_be_created_from_array_with_default_values()
    {
        $query = GetVideosQuery::fromArray([]);

        $this->assertEquals(1, $query->getPage());
        $this->assertEquals(10, $query->getPerPage());
        $this->assertNull($query->getTitleContains());
    }

    #[Test] public function it_can_be_created_from_array_with_custom_values()
    {
        $data = [
            'page' => 3,
            'per_page' => 20,
            'title_contains' => 'documentary'
        ];

        $query = GetVideosQuery::fromArray($data);

        $this->assertEquals(3, $query->getPage());
        $this->assertEquals(20, $query->getPerPage());
        $this->assertEquals('documentary', $query->getTitleContains());
    }

    #[Test] public function it_throws_exception_for_invalid_page_type()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Page number should be a numeric value');

        GetVideosQuery::fromArray(['page' => 'invalid']);
    }

    #[Test] public function it_throws_exception_for_page_less_than_1()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Page should be greater than 0');

        GetVideosQuery::fromArray(['page' => 0]);
    }

    #[Test] public function it_throws_exception_for_invalid_per_page_type()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Per page should be a numeric value');

        GetVideosQuery::fromArray(['per_page' => 'invalid']);
    }

    #[Test] public function it_throws_exception_for_per_page_less_than_1()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Per page should be greater than 0');

        GetVideosQuery::fromArray(['per_page' => 0]);
    }

    #[Test] public function it_throws_exception_for_per_page_greater_than_100()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Per page should be less than or equal to 100');

        GetVideosQuery::fromArray(['per_page' => 101]);
    }

    #[Test] public function it_throws_exception_for_empty_title_contains()
    {
        $this->expectException(InvalidArgumentException::class);
        $this->expectExceptionMessage('Expected a different value than "".');

        GetVideosQuery::fromArray(['title_contains' => '']);
    }

    #[Test] public function it_converts_to_array_correctly()
    {
        $query = new GetVideosQuery(2, 15, 'test');
        $expected = [
            'page' => 2,
            'perPage' => 15,
            'titleContains' => 'test'
        ];

        $this->assertEquals($expected, $query->toArray());
    }

    #[Test] public function it_converts_to_array_with_null_values()
    {
        $query = new GetVideosQuery(null, null, null);
        $expected = [
            'page' => null,
            'perPage' => null,
            'titleContains' => null
        ];

        $this->assertEquals($expected, $query->toArray());
    }
}
