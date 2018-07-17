<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Favorite extends Model
{
    protected $table = 'my_favorites';

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function food()
    {
        $this->belongsTo('App\Food');
    }
}
