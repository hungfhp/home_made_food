<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Vote extends Model
{
    protected $table = 'votes';

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        return $this->belongsTo('App\Model\Food');
    }
}
