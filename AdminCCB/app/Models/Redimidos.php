<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Redimidos extends Model
{
    protected $table = 'TB_RedimidosCCB';
    protected $fillable = ['IdInscritos', 'CantidadPasaportes','CantidadFamiliar','CantidadInfantil','Zafiro','Ruby','Diamante','Fecha'];
}
