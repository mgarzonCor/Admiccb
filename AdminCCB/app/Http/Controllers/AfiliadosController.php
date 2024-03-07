<?php
namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Afiliados;
use App\Models\Inscritos;
use App\Models\Parametros;
use App\Models\Encuestas;
use App\Models\Redimidos;
use App\Models\Registros;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;
use Carbon\Carbon;
use Datatables;

class AfiliadosController extends Controller
{
    public function index(){
        $afiliado = Afiliados::all();
        return response()->json(['status' => true, 'afiliados' => $afiliado]);
    }    
    public function buscarPorMatriculaCodigo($Matricula,$CodigoCCB){        
        try {            
            $afiliado = Afiliados::where('Matricula',$Matricula)->where('CodigoCCB',$CodigoCCB)->first();
            $familairTipo2 = Parametros::where('NOMBRE','like','%Familiar Tipo 2%')->first();
            $infantilTipo1 = Parametros::where('NOMBRE','like','%Infantil Tipo 1%')->first(); 
            
            if($afiliado == null){
                return response()->json(['status' => false, 'afiliados' => 'No se encontró ningún registro con esos parámetros']);
            }
           
            return response()->json(['status' => true, 'afiliados' => $afiliado, 'familairTipo2' => $familairTipo2, 'infantilTipo1' => $infantilTipo1]);

        } catch (\Throwable $th) {            
            return response()->json(['status' => false, 'error' => 'Error al cosultar con la base de datos']);
        }
    }

    public function store(Request $request){

        // return $request->Nombre;
        try {
            if ($request != null){

                $inscritos = Inscritos::where('Documento','=',$request->Documento)->first();               
                
                if ($inscritos == null){
                    //Guardar inscruitos
                    $inscritos = new Inscritos();     
                    $inscritos->FechaCreacion = date("Y-m-d H:i:s");               

                }

                $inscritos->Id_Afiliados = $request->Id_Afiliados;
                $inscritos->CantidadFamiliar = $request->CantidadFamiliar;
                $inscritos->CantidadInfantil = $request->CantidadInfantil;
                $inscritos->Nombre = $request->test;
                $inscritos->Documento = $request->Documento;
                $inscritos->Matricula = $request->Matricula;
                $inscritos->Celular = $request->Celular;
                $inscritos->Email = $request->Email;
                $inscritos->CodigoRedencion = $request->CodigoRedencion;                
                $inscritos->save();

                
                //Guardar encuestas
                $encuestas = new Encuestas();
                $encuestas->IdInscritos = $inscritos->IdInscritos;
                $encuestas->Utilidad = $request->Utilidad;
                $encuestas->Hogar = $request->Hogar;
                $encuestas->save();


                //Guardar registros
                $registros = new Registros();
                // $registros->IdRedimidos = 0;
                $registros->Inscritos = $inscritos->IdInscritos;
                $registros->Fecha = date("Y-m-d H:i:s");
                $registros->IdAfiliado = $request->Id_Afiliados;
                $registros->save();

                return response()->json(['message' => 'Registro creado correctamente'], 201);               
           }       
        } catch (\Throwable $th) {
            return response()->json(['message' => 'Erro en el registro'], 500);
        }
       
        
        // return response()->json(['status' => true, 'inscritos' => $inscritos, 'encuestas' => $encuestas]);
    }

    public function construirPdf($Matricula,$CodigoCCB,$Documento)
    {        
        $afiliado = Afiliados::where('Matricula',$Matricula)->where('CodigoCCB',$CodigoCCB)->first();
        $inscritos = Inscritos::where('Documento',$Documento)->first();  
        $familairTipo2 = Parametros::where('NOMBRE','like','%Familiar Tipo 2%')->first();
        $infantilTipo1 = Parametros::where('NOMBRE','like','%Infantil Tipo 1%')->first();                                       
        $sql1 = "select p.Nombre as Pasaporte,CASE p.Nombre WHEN 'PASAPORTE KIDS' THEN 21 WHEN 'PASAPORTE SILVER' THEN 28 WHEN 'PASAPORTE GOLD' THEN 33 ELSE 0 END as Atracciones, CONCAT(c.Porcentaje,'%') as Descuento, c.Valor from TB_Convenio conv inner join TB_ConvenioDetalle c on conv.IdConvenio = c.IdConvenio inner join TB_Producto p on c.CodSapProducto=p.CodigoSap where conv.Nombre like '%Descuentos CCB%' and p.Nombre like '%pasaporte%'";
        $sql2 = "select p.Nombre as Pasaporte,CASE p.Nombre WHEN 'PASAPORTE KIDS' THEN 21 WHEN 'PASAPORTE SILVER' THEN 28 WHEN 'PASAPORTE GOLD' THEN 33 ELSE 0 END as Atracciones, CONCAT(c.Porcentaje,'%') as Descuento, c.Valor from TB_Convenio conv inner join TB_ConvenioDetalle c on conv.IdConvenio = c.IdConvenio inner join TB_Producto p on c.CodSapProducto=p.CodigoSap where conv.Nombre like '%Descuentos CCB%' and p.Nombre like '%combo%'";        
        $pasaportes = DB::select($sql1);
        $combos = DB::select($sql2);

        return response()->json(['status' => true, 'afiliados' => $afiliado, 'inscritos' => $inscritos,'familairTipo2' => $familairTipo2, 'infantilTipo1' => $infantilTipo1, 'pasaportes' => $pasaportes, 'combos' => $combos ]);        
    }    

    public function update(Request $request){   
        try {
            if ($request != null){                

                $date = Carbon::now()->format('Y') . Carbon::now()->format('m') . Carbon::now()->format('d');
                $hour = Carbon::now()->format('H') . Carbon::now()->format('i') . Carbon::now()->format('m');

                $file = $request->file('datos');
                $extension = $file->getClientOriginalExtension();
                $fileName = $date.$hour.'.'.$extension;
                             
                $import = new Afiliados();                
                $array = Excel::toArray($import, $request->file('datos'));                
                $hiloString = [];                                
                $i=6;
                $cont = 0;                
                foreach ($array[0] as $row) {                        
                    foreach ($row as $clave => $valor) {
                        array_push($hiloString, $valor);                            
                    }                        
                }                    
                for ($i = 28; $i < count($hiloString); $i = $i + 7) {
                    if ($hiloString[$i] <> null){                                
                        $afiliado = Afiliados::where('Matricula',strval($hiloString[$i+1]))->where('CodigoCCB',$hiloString[$i+2])->Count();                                

                        if ($afiliado == 0){                                    
                            $afiliados = new Afiliados();
                            $afiliados->Matricula = $hiloString[$i+1];
                            $afiliados->CodigoCCB = $hiloString[$i+2];
                            $afiliados->RazonSocial = $hiloString[$i+3];
                            $afiliados->FechaRenovacion = $hiloString[$i+4];
                            if ($hiloString[$i+5] == "Si" || $hiloString[$i+5] == 1){
                                $afiliados->Afiliado = 1;
                            }else{
                                $afiliados->Afiliado = 0;
                            }
                            $afiliados->CantidadPasaportes = $hiloString[$i+6];
                            $afiliados->FechaCreacion = Carbon::now();
                            $afiliados->FechaDescarga = null;
                            $afiliados->FechaRedencion = null;
                            $afiliados->save();
                        }
                    }
                }
            }                
            $date = Carbon::now();
            $afiliadosAll = Afiliados::whereDate('FechaCreacion',$date->toDateString())->get();

            return response()->json(['status' => true, 'datos' =>  $afiliadosAll]);

        } catch (Exception $e) {
            return response()->json(['message' => $e], 500);
        }       
    }    
    public function GetAfiliados(){ 
        $date = Carbon::now();
        $afiliadosAll = Afiliados::select('Matricula','CodigoCCB','RazonSocial','FechaRenovacion','Afiliado','CantidadPasaportes')->whereDate('FechaCreacion',$date->toDateString())->get();
        return Datatables($afiliadosAll)->make(true);
    }
}