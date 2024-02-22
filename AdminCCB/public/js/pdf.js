import './bootstrap';



document.addEventListener("DOMContentLoaded", (event) => {
    date()
    
    // setTimeout(() => {
    //     var pdf = new jsPDF('body', 'pt', 'letter');
    //     pdf.addHTML(document.body, function() {
    //         pdf.save('test.pdf');
    //     });
    // }, 1500);
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