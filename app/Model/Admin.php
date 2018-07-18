<?php
namespace App\Model;;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    protected $table = 'my_admins';

    public function certificate()
    {
        $this->hasMany('App\Model\Certificate');
    }
}
