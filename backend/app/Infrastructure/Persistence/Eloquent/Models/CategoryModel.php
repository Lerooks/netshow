<?php

namespace App\Infrastructure\Persistence\Eloquent\Models;

use App\Infrastructure\Persistence\Eloquent\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class CategoryModel extends Model
{
    use HasFactory;

    /**
     * @var bool
     */
    public $incrementing = true;

    /**
     * @var string
     */
    protected $table = 'categories';

    /**
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var string[]
     */
    protected $fillable = ['title', 'site_id'];

    /**
     * @return CategoryFactory|Factory
     */
    protected static function newFactory(): CategoryFactory|Factory
    {
        return CategoryFactory::new();
    }
}
