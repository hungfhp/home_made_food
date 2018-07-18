<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'my_comments';

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function food()
    {
        $this->belongsTo('App\Food');
    }
}
