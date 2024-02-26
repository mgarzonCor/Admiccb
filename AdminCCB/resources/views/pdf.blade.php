<!DOCTYPE html>
<html lang="es">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>CCB PDF</title>

        <link rel="preconnect" href="https://fonts.bunny.net">
        <link rel="stylesheet" rel="stylesheet" type="text/css" href="css/libraries/bootstrap.min.css">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <link rel="stylesheet" rel="stylesheet" type="text/css" href="/build/assets/pdf-CX7MIqgD.css">
        


        {{-- Para desarrollo --}}
        {{-- @vite(['public/css/pdf.scss','public/js/pdf.js']) --}}

        
    </head>
    <body>

        <p class="currentDate">Fecha: <span id="date"></span></p>

        <div class="nav">
            <a class="nav__logo" href="https://www.mundoaventura.com.co/" target="_blank">
                <img class="nav__logo--img" src="/img/logoMA.png" alt="">
            </a>  
            <h5 class="nav__desc"></h5>   
            <a class="nav__logo" href="https://www.ccb.org.co/" target="_blank">
                <img class="nav__logo--img" src="/img/logoCCB1.png" alt="">
            </a>
        </div>
        <main class="container">    
            <div class="container__content">
                <div class="boxMatricula">
                    <p class="boxMatricula--desc">Imprima este documento y preséntelo directamente en las taquillas de redención frente al CC Plaza de las Américas.</p>
                    <div class="tableMatricula">
                        <div class="tableMatricula--header">
                            <p class="head1">No. Matrícula o Inscripción</p>
                            <p class="head2">Código CCB</p>
                            <p class="head3">Cédula</p>
                        </div>
                        <div class="tableMatricula--body">
                            <p class="body1 setmat">--</p>
                            <p class="body2 setccb">--</p>
                            <p class="body3 setdoc">--</p>
                        </div>
                    </div>
                </div>

                <div class="boxAtracciones">
                    <p class="boxAtracciones--title"><strong>Atracciones por tipo de pasaporte:</strong></p>
                    <p class="boxAtracciones--subtitle">Por renovar tu matrícula mercantil recibes <span class="cantPassText">-</span> pasaportes gratis así:</p>

                    <div class="tableAtracciones">
                        <div class="tableAtracciones--header">
                            <p class="head1">Pasaporte CCB</p>
                            <p class="head2">CCB Descripción</p>
                        </div>
                        <div class="tableAtracciones--body">
                            <div class="tableAtracciones--body--single">
                                <p class="body1">Familiar Tipo 2</p>
                                <p class="body2">Tropicana, Black Hole, Monasterio Inclinado, Carrusel, Tazas de
                                    Té, Tortugas, Ranger, Dragon Fly y Vía panamericana</p>
                            </div>
                            <div class="tableAtracciones--body--single">
                                <p class="body1">Infantil Tipo 1</p>
                                <p class="body2">Carrusel, Dragon Fly, Tren Rio Grande, Sillas Voladoras, Tacitas
                                    de Té, Tortugas, Montañita Rusa, Tropicana y Magic Bikes</p>
                            </div>
                        </div>
                    </div>
                    <p class="boxAtracciones__note" style="font-style: normal;">(Las atracciones podrán cambiar sin previo aviso y serán reemplazadas por similares)</p>
                    <p class="boxAtracciones__date"><strong>Fechas de redención:</strong> En los horarios habituales del parque a partir de marzo hasta el 7 de junio de 2024</p>
                </div>

                <div class="boxPasaportes">
                    <p class="boxPasaportes--title"><strong>Conozca más beneficios a los que también puede acceder:</strong></p>
                    <p class="boxPasaportes--subtitle">Obtenga más atracciones mejorando sus pasaportes CCB con los siguientes descuentos:</p>
                    <div class="tablePasaportes">
                        <div class="tablePasaportes--header">
                            <p class="head1">Pasaporte</p>
                            <p class="head2">Atracciones</p>
                            <p class="head3">Descuento</p>
                            <p class="head4">Pague solo</p>
                        </div>
                        <div class="tablePasaportes--body">
                            <div class="tablePasaportes--body--single">
                                <p class="body1">KIDS</p>
                                <p class="body2">21</p>
                                <p class="body3"><span>40</span>%</p>
                                <p class="body4">$ <span>33.000</span></p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="boxCombos">
                    <p class="boxCombos--title"><strong>Descuentos en combos de alimentos y bebidas:</strong></p>
                    <p class="boxCombos--subtitle">Presentando su certificado de matrícula o inscripción en los kioscos al interior del parque Mundo Aventura puede adquirir los siguientes combos con espectaculares descuentos:</p>
                    <ul class="listCombos">
                        <li class="listCombos--single"><strong>Combo perro + gaseosa 7 onz</strong></li>
                        <li class="listCombos--single"><strong>Combo pizza familiar: 6 porciones de pizza + 6 gaseosas 7 onzas </strong></li>
                    </ul>
                </div>

                <div class="boxRecomendaciones">
                    <p class="boxRecomendaciones--title"><strong>Otras recomendaciones:</strong></p>

                    <ul class="boxRecomendaciones__list">
                        <li class="boxRecomendaciones__list--single">1. Los pasaportes CCB gratis NO aplican para agencias, sucursales ni establecimientos de comercio, únicamente aplican para personas naturales y jurídicas.</li>
                        <li class="boxRecomendaciones__list--single">2. Es indispensable que todas las personas que van a hacer uso de los pasaportes se presenten al tiempo en la taquilla. Por lo tanto, los pasaportes no podrán ser usados en fechas diferentes al día de la redención.</li>
                        <li class="boxRecomendaciones__list--single">3. Los pasaportes se podrán redimir en los horarios de operación del parque hasta dos horas antes del cierre al público. Consultar horarios en www.mundoaventura.com.co</li>
                        <li class="boxRecomendaciones__list--single">4. Este beneficio no es acumulable con otras promociones y descuentos, ni canjeable por dinero en efectivo.</li>
                        <li class="boxRecomendaciones__list--single">5. Aplican todas las normas de seguridad y convivencia del parque, incluidas aquellas que exigen para el ingreso a las atracciones tener cierta estatura o no presentar ciertas condiciones de salud (la estatura mínima para usar al menos una atracción es de 70 cm).</li>
                      </ul>
                </div>

                <p class="copyEnd"><strong>¡Mundo Aventura Mucho Más que Diversión!</strong></p>
                
                <div id="qrcode"></div>
            </div>

            
            
        </main>
    </body>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2canvas/0.4.1/html2canvas.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jspdf/1.0.272/jspdf.debug.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>
    <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.js"></script>
    <script src="/js/pdf.js"></script>

</html>