<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'my_transactions';

    public function Food()
    {
        return $this->hasOne('App\Food');
    }

    public function deals()
    {
        return $this->hasMany('App\Deal');
    }

    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
