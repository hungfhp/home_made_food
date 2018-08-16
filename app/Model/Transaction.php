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
    
    public function requirer()
    {
        return $this->belongsTo('App\Model\User', 'requirer_id');
    }

    public function cooker()
    {
        return $this->belongsTo('App\Model\User', 'cooker_id');
    }

    public function shipper()
    {
        return $this->belongsTo('App\Model\User', 'shipper_id');
    }

    public static function required() {
        return Transaction::where('status', '=', 'required');
    }

    public static function cooked() {
        return Transaction::where('status', '=', 'cooked');
    }

    public static function dealed() {
        return Transaction::where('status', '=', 'dealed');
    }

    public static function shipping() {
        return Transaction::where('status', '=', 'shipping');
    }

    public static function done() {
        return Transaction::where('status', '=', 'done');
    }

    public static function cancel() {
        return Transaction::where('status', '=', 'cancel');
    }
}
