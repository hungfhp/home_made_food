<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Deal extends Model
{
    protected $table = 'my_deals';

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function transaction()
    {
        $this->belongsTo('App\Transaction');
    }
}
