<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category_image extends Model
{
    protected $table = 'images';
    protected $fillable = [
        'category_id', 'link',
    ];

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }
}
