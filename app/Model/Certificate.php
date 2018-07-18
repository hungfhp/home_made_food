<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $table = 'certificates';

    public function user()
    {
        return $this->belongsTo('App\Model\User');
    }

    public function admin()
    {
        return $this->belongsTo('App\Model\Admin');
    }
}
