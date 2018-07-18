<?php
namespace App\Model;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $table = 'my_certificates';

    public function user()
    {
        $this->belongsTo('App\Model\User');
    }

    public function admin()
    {
        $this->belongsTo('App\Model\Admin');
    }
}
