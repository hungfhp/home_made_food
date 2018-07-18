<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'my_comments';

    public function user()
    {
        $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        $this->belongsTo('App\Model\Food');
    }
}
