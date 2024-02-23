<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Afiliados extends Model
{
    protected $table = 'TB_AfiliadosCCB';
    protected $primaryKey = 'Id_Afiliado';
    protected $fillable = ['Matricula', 'CodigoCCB','RazonSocial','FechaRenovacion','Afiliado','CantidadPasaportes','FechaCreacion','FechaDescarga','FechaRedencion'];    
}
