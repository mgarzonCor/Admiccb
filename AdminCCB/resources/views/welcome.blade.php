@extends('layouts.app')


@section('content')
    
    <div class="container__content">
        <h1 class="container__content--title">¡Señor(a) empresario(a) obtenga sus pasaportes para el parque Mundo Aventura!</h1>

        <div class="boxDesc">
            <h4 class="boxDesc--title">Recuerde que:</h2>
            <ul class="boxDesc__list">
                <li class="boxDesc__list--item">El plazo de redención es desde el <strong><span>01 de marzo al 27 de marzo de 2024.</span></strong></li>
                <li class="boxDesc__list--item">Al diligenciar el siguiente formulario, solicite una sola vez su beneficio.</li>
                <li class="boxDesc__list--item">Recuerde que el día de la visita al parque, deben presentarse todas las personas que van a redimir el beneficio.</li>
            </ul>
        </div>

        <div class="boxForm">
            <div class="boxForm-content">
                <div class="boxForm-group ">
                    <label for="matricula" class="col-sm-2 col-form-label-sm">* Ingrese su número de matricula o inscripcion</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control inputValidate" id="matricula" value=""  minlength="15" maxlength="15" >
                    </div>
                </div>
                <div class="boxForm-group ">
                    <label for="CCB" class="col-sm-2 col-form-label-sm">* Ingrese el Código CCB</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control inputValidate" id="CCB" value="" minlength="15" maxlength="15">
                    </div>
                </div>
            </div>

            <canvas id="canvasTrack"></canvas>

            <div class="boxForm-content track">
                <div class="boxForm-group ">
                    <label for="codTrack" class="col-sm-2 col-form-label-sm">* Ingrese el código de seguridad mostrado en la imagen</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control inputValidate form-control-sm" id="codTrack" value="" pattern="[0-9]*">
                    </div>
                </div>
            </div>

            <span class="msnError text-danger"><strong>Los campos con (*) son obligatorios</strong></span>
            <br>

            <button id="submit" type="button" class="btn btn-outline-success">Enviar</button>
        </div>
    </div>
    
@endsection