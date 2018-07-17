<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    protected $table = 'my_categories';

    public function foods()
    {
        $this->hasMany('App\Food');
    }

    public function images()
    {
        $this->hasMany('App\Image');
    }
}
