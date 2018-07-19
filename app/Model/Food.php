<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $table = 'foods';

    protected $fillable = [
        'cooked_id',
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
        return $this->hasOne('App\Model\Transaction');
    }

    public function food()
    {
        return $this->hasOne('App\Model\Food');
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

    public function user()
    {
        return $this->belongsTo('App\Model\User', 'cooked_id');
    }

    public function category()
    {
        return $this->belongsTo('App\Model\Category');
    }
}
