<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'admins';
    protected $fillable = [
        'name', 'password', 'email', 'phone', 'remember_token',
    ];

    public function certificate()
    {
        $this->hasMany('App\Model\Certificate');
    }
}
