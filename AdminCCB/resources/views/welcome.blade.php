@extends('layouts.app')


@section('content')
    
    <div class="container__content">
        <h1 class="container__content--title">¡Señor(a) empresario(a) obtenga sus pasaportes para el parque Mundo Aventura!</h1>

        <div class="boxDesc">
            <h4 class="boxDesc--title">Recuerde que:</h2>
            <ul class="boxDesc__list">
                <li class="boxDesc__list--item">El plazo de redención es desde el<strong><span>09 de marzo hasta el 7 de junio de 2024.</span></strong></li>
                <li class="boxDesc__list--item">Al diligenciar el siguiente formulario, solicite una sola vez su beneficio.</li>
                <li class="boxDesc__list--item">Recuerde que el día de la visita al parque, deben presentarse todas las personas que van a redimir el beneficio.</li>
            </ul>
        </div>

        <div class="boxForm">
            <div class="boxForm-content">
                <div class="boxForm-group ">
                    <label for="matricula" class="col-sm-2 col-form-label-sm">* Ingrese su número de matrícula o inscripción</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control inputValidate" id="matricula" value="" maxlength="15" >
                    </div>
                </div>
                <div class="boxForm-group ">
                    <label for="CCB" class="col-sm-2 col-form-label-sm">* Ingrese el Código CCB</label>
                    <div class="col-sm-12">
                        <input type="text" class="form-control inputValidate" id="CCB" value="" maxlength="15">
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

            <button id="submit" type="button" class="btn btn-success">Enviar</button>
        </div>
    </div>
    
    <div class="modalRegister">
        <div class="modalRegister__content">
            <p class="modalRegister__content--title">Se registro no se encuentra en nuestra base de datos</p>
            <div class="boxInfo">
                <p class="boxInfo--desc">Por favor verifique que:</p>
                <ul class="boxInfo--items">
                    <li>El número de matrícula o inscripción no tenga puntos, comas ni ceros a la izquierda.</li>
                    <li>Haya transcurrido <strong>cinco (5) días habiles</strong> de haber realizado el pago de la renovacion de su matrícula o inscripción para que pueda acceder a la plataforma de Mundo Aventura.</li>
                </ul>

                <p class="boxInfo--note"><strong>Importante: </strong>Los pasaportes CCB gratos <strong>NO aplican para agencias, sucursales ni establecimiento de comercio</strong>, únicamente aplican para personas naturales y jurídicas.</p>
            </div>
            <p class="modalRegister__content--desc">Si tiene inconvenientes con la solicitud de sus pasaportes CCB, por favor escribenosal correo electronico <a href="mailto:judy.roso@ccb.org.co">judy.roso@ccb.org.co</a> relacionando el nombre de su empres y NIT.</p>

            <p class="modalRegister__content--thanks"><strong>¡Gracias por su visita!</strong></p>

            <button type="button" class="btn btn-success  modalRegister__content--btn">Continuar</button>
        </div>
    </div>

@endsection