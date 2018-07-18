<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    protected $table = 'comments';
    protected $fillable = [
        'food_id', 'user_id', 'comment',
    ];

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function food()
    {
        return $this->belongsTo('App\Model\Food');
    }
}
