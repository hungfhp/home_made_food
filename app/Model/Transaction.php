<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';
    protected $fillable = [
        'food_name',
        'food_id',
        'required_id',
        'cooked_id',
        'shipper_id',
        'status',
        'description',
        'price',
        'desired_time'
    ];

    public function Food()
    {
        return $this->belongsTo('App\Model\Food');
    }

    public function deals()
    {
        return $this->hasMany('App\Model\Deal');
    }

    // public function user()
    // {
    //     return $this->belongsTo('App\Model\User');
    // }

    public function required()
    {
        return $this->belongsTo('App\Model\User', 'required_id');
    }

    public function cooked()
    {
        return $this->belongsTo('App\Model\User', 'cooked_id');
    }

    public function shipped()
    {
        return $this->belongsTo('App\Model\User', 'shipped_id');
    }
}
