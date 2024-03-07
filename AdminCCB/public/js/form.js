 let nmG,
    ccG;  

    getData()
    valid()
document.addEventListener("DOMContentLoaded", (event) => {
});


function valid() {
    const submit = document.querySelector('#follow'),
    name = document.querySelector('#nombre'),
    ced = document.querySelector('#cedula'),
    phone = document.querySelector('#telefono'),
    mail = document.querySelector('#email'),
    cofMail = document.querySelector('#confemail'),
    inputsText = document.querySelectorAll('.valAprovText'),
    inputsNum = document.querySelectorAll('.valAprovNum'),
    passRadio = document.querySelectorAll('input[name="first"'),
    passHogar = document.querySelectorAll('input[name="second"'),
    tyc = document.querySelector('#tyc');

    let flagData = false,
    flagPass = false,
    flagRadio = false,
    flagCheck = false;

    // Validacion que solo pueda ingresar texto
    inputsText.forEach(function(input) {
        input.addEventListener('input', function(event) {
            var valorInput = input.value;
            var regex = /^[a-zA-Z-á-é-í-ó-ú ]*$/;
            
            if (!regex.test(valorInput)) {
                input.value = input.value.replace(/[^a-zA-Z-á-é-í-ó-ú ]/g, '');
            }
        });
    });
    
    // Validacion que solo pueda ingresar numeros
    inputsNum.forEach(function(input1) {
        input1.addEventListener('input', function(event) {
            var valorInput1 = input1.value;
            var regex = /^[0-9]*$/;

            if (!regex.test(valorInput1)) {
                input1.value = input1.value.replace(/[^0-9]/g, '');
            }
        });
    });

    
    
    submit && submit.addEventListener('click', e=> {
        e.preventDefault()

        flagData = false,
        flagPass = false,
        flagRadio = false;
        flagCheck = false;

        const valid1 = document.querySelectorAll('.valid1'),
            valid2 = document.querySelectorAll('.valid2'),
            cantPass = document.querySelector('#pass'),
            passInf = document.querySelector('#passInf'),
            passFam = document.querySelector('#passFam');
        let group1,
            group2;

        const passTot = Number(passInf.value) +  Number(passFam.value);
        let group1Checked = false;
        let group2Checked = false;

        
        //Validacion datos pesonales
        if(name.value == "" || ced.valid == ""){
            valid1.forEach(function(el) {
                if (el.value.trim() == '') {
                    el.classList.add('err');
                } else {
                    el.classList.remove('err');
                }
            });
            modal('Los campos con (*) son obligatorios')
        }else{
            flagData = true;
        }

        //Validacion Suma de Pasaportes
        if(passInf.value == "" || passFam.value == ""){
            valid2.forEach(function(el) {
                if (el.value.trim() == '') {
                    el.classList.add('err');
                } else {
                    el.classList.remove('err');
                }
            });
        }else if(passTot > cantPass.innerHTML){
            modal('La cantidad de pasaportes infantil y familiar no coinciden con la cantidad total')
        }else{
            flagPass = true;
        }

        //Validacion Radio Buttons
        passRadio.forEach(function(radio) {
            if (radio.checked) {
                group1Checked = true;
                group1 = radio.value
            }
        });

        passHogar.forEach(function(radio) {
            if (radio.checked) {
                group2Checked = true;
                group2 = radio.value
            }
        });
        if(group1Checked && group2Checked){
            flagRadio = true;
        }else{
            modal('Los campos con (*) son obligatorios')
        }

        //Validacion Checkbox tyc
        // if(!tyc.checked){
        //     modal('Por favor aceptar términos y condiciones')
        // }else{
        //     flagCheck = true;

        // }

        //Se valida si todo los campos estan correctamente diligenciados
        if(flagData && flagPass && flagRadio ){
            //Todo bien
            const cot = nmG.innerText+ccG.innerHTML
            submit.setAttribute('disabled','true')
            localStorage.setItem('5baa61e4', nmG.innerHTML)
            localStorage.setItem('7f83b1657ff1fc53', ccG.innerHTML)
            localStorage.setItem('5baa61e4werg', ced.value)
            sendData(ixi.innerText,passFam.value,passInf.value,name.value,ced.value,nmG.innerText,phone.value,mail.value,cot,group1, group2)
        }

    })

    function modal(text){
        const msnModal = document.querySelector('.msnModal')
        const parent = msnModal.closest('.modalvalid')
        
        parent.classList.add('show')
        msnModal.innerHTML = text
        setTimeout(() => {
            parent.classList.remove('show')            
        }, 2000);

    }
    
}

function getData(){
    const mat = localStorage.getItem('5baa61e4'),
        ccb = localStorage.getItem('7f83b1657ff1fc53'),
        nm = document.querySelector('.nm'),
        cc = document.querySelector('.cc'),
        rs = document.querySelector('.rs'),
        cp = document.querySelector('.cp'),
        ixi = document.querySelector('.ixi'),
        bic = document.querySelector('.boxInfantil__content'),
        bfc = document.querySelector('.boxFamiliar__content');
        
        nmG = nm
        ccG = cc
        // nm = document.querySelector('.nm'),

    if(mat && ccb){
        fetch(`/api/afiliado/${mat}/${ccb}`)
        .then(response => response.json())
        .then(json => {
            const jaf = json.afiliados,
                jbic = json.infantilTipo1,
                vjbic = jbic.VALOR.split(', '),
                jbfc = json.familairTipo2,
                vjbfc = jbfc.VALOR.split(', ');

            bic.innerHTML=''
            bfc.innerHTML=''
            
            if(json.status){
                nm.innerText  = jaf.Matricula
                cc.innerText  = jaf.CodigoCCB
                rs.innerText  = jaf.RazonSocial
                cp.innerText  = jaf.CantidadPasaportes               
                ixi.innerText  = jaf.Id_Afiliado               
                
                
                generarContenidoHTML(jbic, vjbic, bic, 'passInf');
                generarContenidoHTML(jbfc, vjbfc, bfc, 'passFam');
            }
        })
    }else{
        window.location.href = '/'
    }
}

function generarContenidoHTML(elemento, valor, destino, idInput) {
    destino.innerHTML += `
        <div class="boxInfantil__content--single"><strong>${elemento.NOMBRE}</strong></div>
    `;

    valor.forEach(el => {
        destino.innerHTML += `
            <div class="boxInfantil__content--single">${el}</div>
        `;
    });

    destino.innerHTML += `
        <div class="boxInfantil__content--single">Cant. pasaporte <input type="number" class="valAprovNum valid2" id="${idInput}"></div>
    `;
}

function sendData(id,cantFam, cantInf, name, doc, mat, celular, mail, cr, ut, ho){


    var formData = new FormData();

    const bo = {

        
    "Id_Afiliados": id,
    "CantidadFamiliar": cantFam,
    "CantidadInfantil": cantInf,
    "test": name,
    "Documento": doc,
    "Matricula": mat,
    "Celular": celular,
    "Email": mail,
    "CodigoRedencion": cr,
    "Utilidad": ut,
    "Hogar": ho
}
    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

    $.ajax({
        url: '/api/guardarInscritos', // Ruta en Laravel
        method: 'POST',
        data: bo,
        haders: { "Content-type": "application/json",
            'X-CSRF-TOKEN': csrfToken },
        success: function(response) {
            console.log('Datos enviados correctamente', response);
            if(response.message === "Registro creado correctamente"){
                window.location.href = '/pdf'
            }else{
                window.location.href = '/'

            }
        },
        error: function(xhr, status, error) {
            console.error('Error al enviar datos:', error);
        }
    });
}