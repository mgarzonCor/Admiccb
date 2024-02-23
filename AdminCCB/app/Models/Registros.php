<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Registros extends Model
{
    protected $table = 'TB_RegistrosCCB';
    protected $fillable = ['IdRedimidos', 'Inscritos','Fecha','IdAfiliado'];
}
