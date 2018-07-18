<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $table = 'my_votes';

    public function user()
    {
        $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        $this->belongsTo('App\Model\Food');
    }
}
