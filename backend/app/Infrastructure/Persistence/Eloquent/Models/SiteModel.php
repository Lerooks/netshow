<?php

namespace App\Infrastructure\Persistence\Eloquent\Models;

use App\Infrastructure\Persistence\Eloquent\Factories\SiteFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class SiteModel extends Model
{
    use HasFactory;

    /**
     * @var bool
     */
    public $incrementing = true;
    /**
     * @var string
     */
    protected $table = 'sites';
    /**
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var string[]
     */
    protected $fillable = ['title', 'domain'];

    /**
     * @return SiteFactory|Factory
     */
    protected static function newFactory(): SiteFactory|Factory
    {
        return SiteFactory::new();
    }
}
