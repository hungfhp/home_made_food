<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'my_foods';

    public function transaction()
    {
        return $this->hasOne('App\Model\Transaction');
    }

    public function comments()
    {
        return $this->hasMany('App\Model\Comment');
    }

    public function favorites()
    {
        return $this->hasMany('App\Model\Favorite');
    }

    public function votes()
    {
        return $this->hasMany('App\Model\Vote');
    }

    public function food_imgs()
    {
        return $this->hasMany('App\Model\Food_image');
    }

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }
}