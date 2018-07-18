<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';
    protected $fillable = [
        'food_name', 'food_id', 'required_id', 'cooked_id', 'shipper_id', 'status', 'description', 'price'
    ];

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
