<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $table = 'my_votes';

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function food()
    {
        $this->belongsTo('App\Food');
    }
}
