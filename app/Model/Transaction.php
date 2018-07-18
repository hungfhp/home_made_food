<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'my_transactions';

    public function Food()
    {
        return $this->hasOne('App\Model\Food');
    }

    public function deals()
    {
        return $this->hasMany('App\Model\Deal');
    }

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }
}
