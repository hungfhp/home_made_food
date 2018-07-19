<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';
    protected $fillable = [
        'name', 'description',
    ];

    public function foods()
    {
        return $this->hasMany('App\Model\Food');
    }

    public function category_images()
    {
        return $this->hasMany('App\Model\Category_image');
    }
}
