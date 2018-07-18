<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'categories';

    public function foods()
    {
        return $this->hasMany('App\Model\Food');
    }

    public function images()
    {
        return $this->hasMany('App\Model\Category_image');
    }
}
