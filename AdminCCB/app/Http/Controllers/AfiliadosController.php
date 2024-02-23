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
                return response()->json(['status' => true, 'afiliados' => 'No se encontró ningún registro con esos parámetros']);
            }
           
            return response()->json(['status' => true, 'afiliados' => $afiliado, 'familairTipo2' => $familairTipo2, 'infantilTipo1' => $infantilTipo1]);

        } catch (\Throwable $th) {            
            return response()->json(['status' => false, 'error' => 'Error al cosultar con la base de datos']);
        }
    }

    public function store(Request $request){
        try {
            if ($request != null){

                $inscritos = Inscritos::where('Documento',$request->Documento)->first();               
                
                if ($inscritos == null){
                    //Guardar inscruitos
                    $inscritos = new Inscritos();     
                    $inscritos->FechaCreacion = date("Y-m-d H:i:s");               

                }

                $inscritos->Id_Afiliados = $request->Id_Afiliados;
                $inscritos->CantidadFamiliar = $request->CantidadFamiliar;
                $inscritos->CantidadInfantil = $request->CantidadInfantil;
                $inscritos->Nombre = $request->Nombre;
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

        // $data = [
        //     'titulo' => 'Afiliados'
        // ];
        // // $pdf = \PDF::loadView('pdf', $data);
        // // return $pdf->download('archivo.pdf');       
        // // $datos = Datos::find($id);

        // //Descargar pdf de la vista
        // $pdf =  \PDF::loadView('pdf', $data )
        //          ->setPaper('letter', 'portrait');
        //         // ->stream('informe.pdf');

        // return $pdf->download('archivo.pdf');

        // // $html = Config::get("htmlAfiliados");        
        // // $pdf = app('dompdf.wrapper');
        // // $pdf->loadHTML($html);
        // // return $pdf->download('miPDF.pdf');
    }
}