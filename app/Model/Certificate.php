<?php
namespace App;

use Illuminate\Database\Eloquent\Model;

class Certificate extends Model
{
    protected $table = 'my_certificates';

    public function user()
    {
        $this->belongsTo('App\User');
    }

    public function admin()
    {
        $this->belongsTo('App\Admin');
    }
}
