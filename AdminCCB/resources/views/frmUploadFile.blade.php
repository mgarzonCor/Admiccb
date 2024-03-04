<meta name="csrf-token" content="{{ csrf_token() }}">
@extends('layouts.app')
@section('content')

<link rel="stylesheet" href="https://cdn.datatables.net/2.0.1/css/dataTables.dataTables.css" />
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">

<style>
    #loadingSpinnerBackground {
    position: absolute;
    top: 0;
    left: 0;
    height:100%;
    width:100%;
    cursor: not-allowed;
    opacity: 0.5;
    background: url('../img/loader.gif') center no-repeat;
    z-index: 99;
}
</style>

<form enctype="multipart/form-data" method="post" name="fileinfo">  
  <!-- <div class="container"> -->
        <!-- <h4>Subida de Excel con Javascript y conversion a JSON</h4> -->
        <div class="panel panel-primary">
            <div class="panel-heading">Subir base de datos en EXCEL de la Cámara de Comercio de Bogotá</div>
            <div class="panel-body">
                <!-- Input type file to upload excel file -->
                <input type="file" id="fileUpload" name="fileUpload" accept=".xls,.xlsx" /><br />
                <button type="button" id="uploadExcel" class="btn btn-success uploadExcel">Enviar</button>

                <!-- Render parsed JSON data here -->
                <div style="margin-top:10px;">
                    <pre id="jsonData"></pre>
                </div>
            </div>
        </div>
    <!-- </div> -->
</form>
<!-- <div id="content" class="precarga"></div> -->
<table class="display" width="100%" id="tablaAfiliados" name="tablaAfiliados" style="display:none;">
    <thead>
    <tr>
        <th>Matricula</th>
        <th>Código CCB</th>
        <th>Razón Social</th>
        <th>Fecha de Renovación</th>
        <th>Afiliado</th>
        <th>Cantidad de Pasaportes</th>
    </tr>
    </thead>
    <tbody></tbody>
</table>

<div id="loadingSpinnerBackground" style="display:none;">
    <div id="loadingSpinnerContents" >        
    </div>
</div>

<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.7.1/jquery.min.js" integrity="sha512-v2CJ7UaYy4JwqLDIrZUI/4hqeoQieOmAZNXBeQyjo21dadnwR+8ZaIJVT8EE2iyI61OV8e6M8PP2/4hpQINQ/g==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.15.3/xlsx.full.min.js"></script>
<script src="https://cdn.datatables.net/2.0.1/js/dataTables.js"></script>
<script src="/js/uploadFile.js"></script>

@endsection