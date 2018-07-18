<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $table = 'deals';
    protected $fillable = [
        'user_id', 'transaction_id', 'comment', 'user_name',
    ];

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function transaction()
    {
        return $this->belongsTo('App\Model\Transaction');
    }
}
