<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $table = 'my_deals';

    public function user()
    {
        $this->belongsTo('App\Model\User');
    }

    public function transaction()
    {
        $this->belongsTo('App\Model\Transaction');
    }
}
