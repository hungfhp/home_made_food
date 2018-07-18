<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $table = 'favorites';

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        return $this->belongsTo('App\Model\Food');
    }
}
