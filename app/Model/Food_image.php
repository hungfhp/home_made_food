<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Food_image extends Model
{
    protected $table = 'my_food_images';

    public function food()
    {
        return $this->belongsTo('App\Food');
    }
}
