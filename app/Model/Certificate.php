<?php
<<<<<<< HEAD
namespace App\Model;
=======
namespace App\Model;;
>>>>>>> 8c9cc2c076dc5fe5a51e7fa90e57da5ab1c069a2

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
