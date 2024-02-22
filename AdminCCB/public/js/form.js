import './bootstrap';


document.addEventListener("DOMContentLoaded", (event) => {
    valid()
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
        passHogar = document.querySelectorAll('input[name="second"');
        let flagData = false,
        flagPass = false,
        flagRadio = false;

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

        const valid1 = document.querySelectorAll('.valid1'),
            valid2 = document.querySelectorAll('.valid2'),
            cantPass = document.querySelector('#pass'),
            passInf = document.querySelector('#passInf'),
            passFam = document.querySelector('#passFam')

        const passTot = Number(passInf.value) +  Number(passFam.value);
        let group1Checked = false;
        let group2Checked = false;

        
        //Validacion datos pesonales
        if(name.value == "" || ced.valid == "" || phone.value == "" || mail.valid == "" || cofMail.value == ""){
            valid1.forEach(function(el) {
                if (el.value.trim() == '') {
                    el.classList.add('err');
                } else {
                    el.classList.remove('err');
                }
            });
            modal('Los campos con (*) son obligatorios')
        }else if(mail.value !== cofMail.value){
            cofMail.classList.add('err')
            cofMail.innerHTML = ""
            modal('Los correos no coinciden')
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
            }
        });

        passHogar.forEach(function(radio) {
            if (radio.checked) {
                group2Checked = true;
            }
        });
        if(group1Checked && group2Checked){
            flagRadio = true;
        }else{
            modal('Los campos con (*) son obligatorios')
        }

        //Se valida si todo los campos estan correctamente diligenciados
        if(flagData && flagPass && flagRadio){
            //Todo bien
            alert('todobien')
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