<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Inscritos extends Model
{
    protected $table = 'TB_InscritosCCB';
    protected $primaryKey = 'IdInscritos';
    protected $fillable = ['Id_Afiliados','CantidadFamiliar','CantidadInfantil','Nombre','Documento','Matricula','Celular','Email','CodigoRedencion','FechaCreacion'];
}
