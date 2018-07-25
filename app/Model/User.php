<?php
namespace App\Model;

use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;

class User extends Authenticatable
{
    use HasApiTokens, Notifiable;
    protected $table = 'users';
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

    protected $hidden = ['password', 'remember_token'];

    public function certificate()
    {
        return $this->hasOne('App\Model\Certificate');
    }

    public function transactions()
    {
        return $this->hasMany('App\Model\Transaction');
    }

    public function deals()
    {
        return $this->hasMany('App\Model\Deal');
    }

    public function favorites()
    {
        return $this->hasMany('App\Model\Favorite');
    }

    public function votes()
    {
        return $this->hasMany('App\Model\Vote');
    }

    public function comments()
    {
        return $this->hasMany('App\Model\Comment');
    }

    public function foods()
    {
        return $this->hasMany('App\Model\Food');
    }
}
