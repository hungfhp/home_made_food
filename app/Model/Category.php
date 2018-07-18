<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'my_categories';

    public function foods()
    {
        $this->hasMany('App\Model\Food');
    }

    public function images()
    {
        $this->hasMany('App\Model\Category_image');
    }
}
