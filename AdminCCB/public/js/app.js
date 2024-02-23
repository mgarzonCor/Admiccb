
let textoAleatorio;

document.addEventListener("DOMContentLoaded", (event) => {
    generateCanvas()
    valid()
});

function generateCanvas(){
    var canvas = document.getElementById('canvasTrack');
    var ctx = canvas && canvas.getContext('2d');

    var imagen = new Image();
    imagen.src = '../img/mundo.png'; // Ruta de tu imagen de fondo

    if(ctx){
        imagen.onload = function () {
            // Dibujar la imagen de fondo en el canvas
            ctx.drawImage(imagen, 0, 0, canvas.width, canvas.height);
            
            // Configurar estilo del texto
            ctx.font = '20px Arial';
            ctx.fillStyle = 'black'; // Color del texto
            
            // Obtener texto aleatorio y dibujarlo en el canvas
            textoAleatorio = generateText();
            ctx.fillText(textoAleatorio, 25, 50); // Posición del texto (50, 100)
        };
    }
}

function generateText() {
    var caracteresValidos = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var longitudTexto = 8; // Longitud del texto aleatorio
    var texto = '';
    for (var i = 0; i < longitudTexto; i++) {
        texto += caracteresValidos.charAt(Math.floor(Math.random() * caracteresValidos.length));
    }
    return texto;
}

function valid() {
    const submit = document.querySelector('#submit'),
        codTrack = document.querySelector('#codTrack'),
        codMat = document.querySelector('#matricula'),
        codC = document.querySelector('#CCB'),
        msn = document.querySelector('.msnError'),
        inputs = document.querySelectorAll('.inputValidate'),
        modal = document.querySelector('.modalRegister'),
        modalBtn = document.querySelector('.modalRegister__content--btn');
        
        modalBtn && modalBtn.addEventListener('click',e=>{

            window.location.reload()
        })

    inputs.forEach(function(input) {
        input.addEventListener('input', function(event) {
            var valorInput = input.value;
            var regex = /^[a-zA-Z0-9]*$/;

            if (!regex.test(valorInput)) {
                input.value = input.value.replace(/[^a-zA-Z0-9]/g, ''); // Elimina los caracteres especiales    
                // msn.classList.add('active')
                msn.textContent = 'No se permiten caracteres especiales';
                action('No se permiten caracteres especiales',true)
            }
        });
    });


    submit && submit.addEventListener('click', e=>{
        e.preventDefault()
        if(codMat.value == "" || codC.value == "" || codTrack.value == ""){
            action('Los campos con (*) son obligatorios',true)
        }else if(codMat.value.length > 15 || codC.value.length > 15 ){
            action('Los campos de matricula y codigo deben ser de maximo 15 caracteres',true)

        }else if(codTrack.value.length < 8){            
            action('El campo de código de seguridad debe tener 8 caracteres',true)
        }else if(codTrack.value !== textoAleatorio){    
            console.log(codTrack.value, textoAleatorio)        
            action('Código de seguridad incorrecto',false)
        }else{
            submit.setAttribute('disabled','true')
            fetch(`/api/afiliado/${codMat.value}/${codC.value}`)
            .then(response => response.json())
            .then(json => {
                console.log(json);
                if(json.afiliados === "No se encontró ningún registro con esos parámetros") modal.classList.add('show')
                if(json.status){
                    localStorage.setItem('5baa61e4', codMat.value);
                    localStorage.setItem('7f83b1657ff1fc53', codC.value);
                    window.location.href = '/form'
                }
            })
            .catch(error => {
                // Manejar cualquier error que ocurra durante la solicitud
                console.error('Error:', error);
            });
        }
    })

    function action(output, flag){
        msn.textContent = output;
        msn.classList.add('active');
        setTimeout(() => {
            msn.classList.remove('active');
            if (!flag) {
                setTimeout(() => {
                    location.reload();
                }, 2000);
            }
        }, 3500);
    }
}