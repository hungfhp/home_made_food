<?php
namespace App;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'email',
        'password',
        'avatar',
        'address',
        'phone',
        'ident',
        'certificate',
        'description',
        'latitude',
        'longitude'
    ];

    public function certificate()
    {
        return $this->hasOne('App\Certificate');
    }

    public function transactions()
    {
        return $this->hasMany('App\Transaction');
    }

    public function deals()
    {
        return $this->hasMany('App\Deal');
    }

    public function favorites()
    {
        return $this->hasMany('App\Favorite');
    }

    public function votes()
    {
        return $this->hasMany('App\Vote');
    }

    public function comments()
    {
        return $this->hasMany('App\Comment');
    }

    public function foods()
    {
        return $this->hasMany('App\Food');
    }
}
