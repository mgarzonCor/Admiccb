<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Parametros extends Model
{
    protected $table = 'TB_PARAMETROS';
    protected $fillable = ['NOMBRE','VALOR','CREADO','FECCREADO','MODIFICADO','FECMODIFCD'];    
}
