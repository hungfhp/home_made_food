<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'my_foods';

    public function transaction()
    {
        return $this->hasOne('App\Transaction');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function favorites()
    {
        return $this->hasMany('App\Favorite');
    }

    public function votes()
    {
        return $this->hasMany('App\Vote');
    }

    public function food_imgs()
    {
        return $this->hasMany('App\Food_img');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }

    public function category()
    {
        return $this->belongsTo('App\Category');
    }
}
