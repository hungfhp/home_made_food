<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $table = 'deals';

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function transaction()
    {
        return $this->belongsTo('App\Model\Transaction');
    }
}
