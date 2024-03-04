let resolution = window.innerWidth;

document.addEventListener("DOMContentLoaded", (event) => {
    getData()
    date()
    
    setTimeout(() => {
        const ced = localStorage.getItem('5baa61e4werg')
        const pageElement = document.body;

        if( resolution <= 767){
            // // Configura las opciones para la generación del PDF
            const options = {
                filename: `${ced}.pdf`, // Nombre del archivo PDF
                image: { type: 'jpeg', quality: 0.98 }, // Tipo de imagen y calidad
                html2canvas: { scale: 2 }, // Escala del lienzo HTML2Canvas
                jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait'}, // Configuración de jsPDF
                // pagebreak: { mode: 'avoid-all', avoid: 'img' }
            };
    
            // // Genera el PDF con html2pdf
            html2pdf().set(options).from(pageElement).save()
        }else{      
            const { jsPDF } = window.jspdf;
            html2canvas(document.body, {
                onrendered: function(canvas) {                 
                    var pdfData = canvas.toDataURL("image/png");                
                    var doc = new jsPDF("p", "mm", "letter");
                    var width = doc.internal.pageSize.getWidth();
                    var height = doc.internal.pageSize.getHeight();
                    doc.addImage(pdfData, 'JPEG', 0, 0, width, height);
                    doc.save(`${ced}.pdf`);
                    console.log('PDF generated successfully.');
                }            
            });
        }
        
        // localStorage.removeItem('5baa61e4')
        // localStorage.removeItem('7f83b1657ff1fc53')
        // localStorage.removeItem('5baa61e4werg')

    }, 1500);


});

function date(){
    const fechaHoraActual = new Date();

    const año = fechaHoraActual.getFullYear();
    const mes = ("0" + (fechaHoraActual.getMonth() + 1)).slice(-2); // Agregamos un cero al principio si el mes es menor a 10
    const dia = ("0" + fechaHoraActual.getDate()).slice(-2); // Agregamos un cero al principio si el día es menor a 10
    
    const hora = ("0" + fechaHoraActual.getHours()).slice(-2); // Agregamos un cero al principio si la hora es menor a 10
    const minutos = ("0" + fechaHoraActual.getMinutes()).slice(-2); // Agregamos un cero al principio si los minutos son menores a 10
    const segundos = ("0" + fechaHoraActual.getSeconds()).slice(-2); // Agregamos un cero al principio si los segundos son menores a 10
    
    const fechaHoraFormateada = dia + '-' + mes + '-' + año + ' ' + hora + ':' + minutos + ':' + segundos,
        fieldDate = document.querySelector('#date');
    fieldDate.innerHTML= fechaHoraFormateada
    
}

function getData(){
    const mat = localStorage.getItem('5baa61e4'),
        ccb = localStorage.getItem('7f83b1657ff1fc53'),
        doc = localStorage.getItem('5baa61e4werg'),
        setmat = document.querySelector('.setmat'),
        setccb = document.querySelector('.setccb'),
        setdoc = document.querySelector('.setdoc'),
        tabAtra = document.querySelector('.tableAtracciones--body'),
        tabPass = document.querySelector('.tablePasaportes--body'),
        listComb = document.querySelector('.listCombos'),
        cantPassText = document.querySelector('.cantPassText'),
        navDesc = document.querySelector('.nav__desc'),
        msnAfiliado = document.querySelector('.boxCombos__afiliados')

    if(mat && ccb && doc){
        fetch(`/api/construirPdf/${mat}/${ccb}/${doc}`)
        .then(response => response.json())
        .then(json => {
            const valAf = json.afiliados,
                valCom = json.combos,
                valFam = json.familairTipo2,
                valInf = json.infantilTipo1,
                valIns = json.inscritos,
                valPass = json.pasaportes;

            setmat.innerHTML = valAf.Matricula
            setccb.innerHTML = valAf.CodigoCCB
            setdoc.innerHTML = valIns.Documento
            cantPassText.innerHTML = valAf.CantidadPasaportes
            
            if(valAf.Afiliado == 0){
                navDesc.innerHTML = `FELICITACIONES Sr(a) Empresario (a)`             
            }else{
                navDesc.innerHTML = `¡Felicitaciones!  Sr (a) Afiliado(a)`
                msnAfiliado.classList.add('active')
            }
            
            tabAtra.innerHTML = ''
            tabAtra.innerHTML += `
                <div class="tableAtracciones--body--single">
                    <p class="body1">${valFam.NOMBRE}</p>
                    <p class="body2">${valFam.VALOR}</p>
                </div>
                <div class="tableAtracciones--body--single">
                    <p class="body1">${valInf.NOMBRE}</p>
                    <p class="body2">${valInf.VALOR}</p>
                </div>
            `
            
            tabPass.innerHTML = ''
            valPass.forEach(el => {
                const splitPass = el.Pasaporte.split(' ');
                const setCOP = el.Valor.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
                tabPass.innerHTML += `
                    <div class="tablePasaportes--body--single">
                        <p class="body1">${splitPass[1]}     </p>
                        <p class="body2">${el.Atracciones}</p>
                        <p class="body3">${el.Descuento}</p>
                        <p class="body4">$ ${setCOP}</p>
                    </div>
                `
            })

            listComb.innerHTML = ''
            valCom.forEach(el => {
                let desc = '';
                if(el.Descuento != '0%') {
                    desc = '('+el.Descuento +' de descuento):'
                }

                listComb.innerHTML += `
                    <li class="listCombos--single"><strong>${el.Pasaporte} ${desc}</strong> ${el.Valor ? '' : el.Valor}</li>
                `
            })

            var qrcodeContainer = document.getElementById('qrcode');
            const setCat = valAf.Matricula+valAf.CodigoCCB

            // Crear una instancia de QRCode.js y generar el código QR
            let widthWR = 100
            let heightWR = 100
            if( resolution <= 767){
                widthWR = 80
                heightWR = 80
            }    
            var qrcode = new QRCode(qrcodeContainer, {
                text: setCat, // El texto que deseas codificar en el código QR
                width : widthWR, // Ancho del código QR
                height: heightWR, // Altura del código QR
                colorDark : '#000000', // Color de los módulos oscuros
                colorLight : '#ffffff', // Color de los módulos claros
                correctLevel : QRCode.CorrectLevel.H// Nivel de corrección de errores
            });

            // console.log(json);
        })
    }else{
        window.location.href = '/'
    }
        
    

}