@extends('layouts.app')
@vite(['public/js/form.js'])

@section('content')
    
    <div class="container__content">
        <div class="boxFormInfo">
            <div class="boxFormInfo--left">
                <div class="boxInfo">
                    <div class="boxInfo--single">
                        <p class="desc">Número de matrícula o inscripción:</p>
                        <p class="val">$$$$</p>
                    </div>
                    <div class="boxInfo--single">
                        <p class="desc">Código CCB:</p>
                        <p class="val">$$$$</p>
                    </div>
                    <div class="boxInfo--single">
                        <p class="desc">Razón Social:</p>
                        <p class="val">Michael Alejandro Garzon Urquijo</p>
                    </div>
                    <div class="boxInfo--single">
                        <p class="desc">Cantidad de pasaportes que podrá disfrutar:</p>
                        <p class="val" id="pass">8</p>
                    </div>
                </div>
            </div>
            <div class="boxFormInfo--right">
                <div class="boxFormulario">
                    <p class="boxFormulario--title">Ingrese sus datos completos</p>

                    <div class="boxFormulario__content">
                        <div class="boxFormulario-group ">
                            <label for="nombre" class="col-sm-6 col-form-label-sm">* Nombre</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-sm valid1 valAprovText" id="nombre" value=""  >
                            </div>
                        </div>
                        <div class="boxFormulario-group ">
                            <label for="cedula" class="col-sm-6 col-form-label-sm">* Cédula</label>
                            <div class="col-sm-6">
                                <input type="text" class="form-control form-control-sm valid1 valAprovNum" id="cedula" value=""  >
                            </div>
                        </div>
                        <div class="boxFormulario-group ">
                            <label for="telefono" class="col-sm-6 col-form-label-sm">* Teléfono</label>
                            <div class="col-sm-6">
                                <input type="number" class="form-control form-control-sm valid1 valAprovNum" id="telefono" value=""  >
                            </div>
                        </div>
                        <div class="boxFormulario-group ">
                            <label for="email" class="col-sm-6 col-form-label-sm">* Email</label>
                            <div class="col-sm-6">
                                <input type="email" class="form-control form-control-sm valid1" id="email" value=""  >
                            </div>
                        </div>
                        <div class="boxFormulario-group ">
                            <label for="confemail" class="col-sm-6 col-form-label-sm">* Confirmar Email</label>
                            <div class="col-sm-6">
                                <input type="email" class="form-control form-control-sm valid1" id="confemail" value=""  >
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="boxTipoPasaporte">
            <p class="boxTipoPasaporte--title">Escoja los tipos de pasaporte que quiere disfrutar</p>
            <p class="boxTipoPasaporte--subtitle">Por favor indique en cada una de las casillas, la cantidad de pasaportes CCB infantil y/o familiar que desea redimir:
                <br>(Recuerde que la suma total de los pasaportes no peude exceder la cantidad asignada).
            <div class="boxTipoPasaporte__solicitud">
                <div class="boxInfantil">
                    <div class="boxInfantil__content">                        
                        <div class="boxInfantil__content--single"><strong>CCB Infatil 2019</strong></div>
                        <div class="boxInfantil__content--single">Carrusel</div>
                        <div class="boxInfantil__content--single">Dragon Fly</div>
                        <div class="boxInfantil__content--single">La Granja</div>
                        <div class="boxInfantil__content--single">Paseo de Piratas</div>
                        <div class="boxInfantil__content--single">Soft Play</div>
                        <div class="boxInfantil__content--single">Tacitas de té</div>
                        <div class="boxInfantil__content--single">Tortugas</div>
                        <div class="boxInfantil__content--single">Tren rio grande</div>
                        <div class="boxInfantil__content--single">Bus Loco</div>
                        <div class="boxInfantil__content--single">Via Panamericana</div>
                        <div class="boxInfantil__content--single">Cant. pasaporte <input type="number" class="valAprovNum valid2" id="passInf"></div>
                    </div>
                </div>
                <div class="boxAtencion">
                    <p class="boxAtencion--title">Atención:</p>
                    <p class="boxAtencion--subtitle">Recuerde que solo puede hacer una (1) vez el proceso de la solicitud de todos sus pasaportes CCB</p>
                </div>
                <div class="boxFamiliar">
                    <div class="boxFamiliar__content">
                        <div class="boxFamiliar__content--single"><strong>CCB Familiar 2019</strong></div>
                        <div class="boxFamiliar__content--single">Carrusel</div>
                        <div class="boxFamiliar__content--single">Dragon Fly</div>
                        <div class="boxFamiliar__content--single">Ikaro</div>
                        <div class="boxFamiliar__content--single">La Granja</div>
                        <div class="boxFamiliar__content--single">Magic Bikes</div>
                        <div class="boxFamiliar__content--single">Monasterio Inclinado</div>
                        <div class="boxFamiliar__content--single">Tacitas de té</div>
                        <div class="boxFamiliar__content--single">Tropicana</div>
                        <div class="boxFamiliar__content--single">Cant. pasaporte <input type="number" class="valAprovNum valid2" id="passFam"></div>
                    </div>
                </div>
            </div>

            <p class="boxTipoPasaporte--desc"><span>Nota:</span> Es necesario que la cantidad de pasaportes en cada tipo sume el número de pasaportes a los cualesusted tiene derecho
            p un menor valor, de lo contrario no podra procesar su solicitud.</p>


        </div>

        <div class="boxEncuesta">
            <p class="boxEncuesta--title">Conteste la siguiente encuesta:</p>
            <div class="formRadio">
                <fieldset class="form-group">
                    <h5 class="mt-4">* 1 ¿Los pasaportes CCB seran utilizados por?</h5>
                    <div class="form-check">
                        <input class="form-check-input" name="first" type="radio" value="" id="first1">
                        <label class="form-check-label" for="first1">
                            Representante Legal
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="first" type="radio" value="" id="first2">
                        <label class="form-check-label" for="first2">
                            Amigo o Familiar
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="first" type="radio" value="" id="first3">
                        <label class="form-check-label" for="first3">
                            Empleado
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="first" type="radio" value="" id="first4">
                        <label class="form-check-label" for="first4">
                            Otro
                        </label>
                    </div>
                </fieldset>
                <fieldset class="form-group">
                    <h5 class="mt-4">* 2 ¿Como está compuesto su hogar?</h5>
                    <div class="form-check">
                        <input class="form-check-input" name="second" type="radio" value="" id="second1">
                        <label class="form-check-label" for="second1">
                            Vive Solo(a)
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="second" type="radio" value="" id="second2">
                        <label class="form-check-label" for="second2">
                            Pareja
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="second" type="radio" value="" id="second3">
                        <label class="form-check-label" for="second3">
                            Hijos
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" name="second" type="radio" value="" id="second4">
                        <label class="form-check-label" for="second4">
                            Pareja + Hijos
                        </label>
                    </div>
                </fieldset>
            </div>
        </div>

        <button type="button" id="follow" class="btn btn-success follow">Aceptar y continuar</button>
    </div>

    <div class="modalvalid">
        <div class="modalvalid-content">
            <p class="text-danger msnModal">Modal body text goes here.</p>
        </div>
    </div>
    
@endsection