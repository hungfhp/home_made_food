<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';

    protected $fillable = [
        'cooker_id',
        'category_id',
        'name',
        'price',
        'description',
        'like',
        'dislike',
        'publish'
    ];

    public function transaction()
    {
        return $this->hasMany('App\Model\Transaction');
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

    public function food_images()
    {
        return $this->hasMany('App\Model\Food_image');
    }

    public function images()
    {
        return $this->hasMany('App\Model\Food_image');
    }

    public function feature_image()
    {
        return $this->hasOne('App\Model\Food_image')->oldest();
    }

    public function user()
    {
        return $this->belongsTo('App\Model\User', 'cooker_id');
    }

    public function cooker()
    {
        return $this->belongsTo('App\Model\User', 'cooker_id');
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }
}
