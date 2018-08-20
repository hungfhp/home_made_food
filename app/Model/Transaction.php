<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    protected $table = 'transactions';
    protected $fillable = [
        'food_name',
        'food_id',
        'creator_id',
        'requirer_id',
        'cooker_id',
        'shipper_id',
        'status',
        'description',
        'price',
        'desired_at',
        'address_to',
        'address_from',
    ];

    public function food()
    {
        return $this->belongsTo('App\Model\Food');
    }

    public function deals()
    {
        return $this->hasMany('App\Model\Deal');
    }

    public function all_user() {
        $this->belongsTo('App\Model\User', 'creator_id')
            ->belongsTo('App\Model\User', 'requirer_id')
            ->belongsTo('App\Model\User', 'cooker_id')
            ->belongsTo('App\Model\User', 'shipper_id');
    }

    public function creator()
    {
        return $this->belongsTo('App\Model\User', 'creator_id');
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

    public static function required()
    {
        return Transaction::where('status', '=', 'dealing')->whereNotNull('requirer_id');
    }

    public static function cooked()
    {
        return Transaction::where('status', '=', 'dealing')->whereNotNull('cooker_id');
    }

    public static function dealing()
    {
        return Transaction::where('status', '=', 'dealing');
    }

    public static function dealed()
    {
        return Transaction::where('status', '=', 'dealed');
    }

    public static function dealing_dealed()
    {
        return Transaction::where('status', '=', 'dealing')
            ->orWhere('status', '=', 'dealed');
    }

    public static function shipping()
    {
        return Transaction::where('status', '=', 'shipping');
    }

    public static function done()
    {
        return Transaction::where('status', '=', 'done');
    }

    public static function cancel()
    {
        return Transaction::where('status', '=', 'cancel');
    }

    public static function recent()
    {
        return Transaction::where('status', '=', 'dealing')
            ->inRandomOrder()
            ->limit(10);
    }

    public static function history($userId)
    {
        return Transaction::where('creator_id', $userId);
    }

    public static function historyRequired($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'dealing')
                ->whereNotNull('requirer_id');
        });
    }

    public static function historyCooked($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'dealing')
                ->whereNotNull('cooker_id');
        });
    }

    public static function historyDealing($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'dealing');
        });
    }

    public static function historyDealed($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'dealed');
        });
    }

    public static function historyShipping($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'shipping');
        });
    }

    public static function historyDone($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'done');
        });
    }

    public static function historyCancel($userId)
    {
        return Transaction::where(function ($query) use ($userId) {
            $query->where('creator_id', $userId)
                ->where('status', '=', 'cancel');
        });
    }
}
