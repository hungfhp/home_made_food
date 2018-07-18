<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Category_image extends Model
{
    protected $table = 'my_images';

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }
}
