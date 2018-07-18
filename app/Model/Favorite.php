<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $table = 'my_favorites';

    public function user()
    {
        $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        $this->belongsTo('App\Model\Food');
    }
}
