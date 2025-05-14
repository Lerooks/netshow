<?php

namespace App\Infrastructure\Persistence\Eloquent\Models;

use App\Infrastructure\Persistence\Eloquent\Factories\FileFactory;
use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;


class FileModel extends Model
{
    use HasFactory;

    /**
     * @var bool
     */
    public $incrementing = true;
    /**
     * @var string
     */
    protected $table = 'files';
    /**
     * @var string
     */
    protected $keyType = 'integer';

    /**
     * @var string[]
     */
    protected $fillable = ['video_id', 'name', 'path'];

    /**
     * @return FileFactory|Factory
     */
    protected static function newFactory(): FileFactory|Factory
    {
        return FileFactory::new();
    }

    /**
     * @return BelongsTo
     */
    public function video(): BelongsTo
    {
        return $this->belongsTo(VideoModel::class);
    }
}
