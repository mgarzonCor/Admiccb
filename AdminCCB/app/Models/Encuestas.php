<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Encuestas extends Model
{
    protected $table = 'TB_EncuestaCCB';
    protected $fillable = ['IdInscritos', 'Utilidad','Hogar'];    
}
