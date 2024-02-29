function uploadFile(){
    e.preventDefault()
    var url = document.getElementById("inputDatos").value;

    console.log(url);

    // fetch(`/api/uploadFile`)
    // .then(response => response.json())
    // .then(json => {
    //     console.log(json.datos);       
    // })    

    if (selectedFile) {
        var fileReader = new FileReader();
        fileReader.onload = function(event) {
          var data = event.target.result;
  
          var workbook = XLSX.read(data, {
            type: "binary"
          });
          workbook.SheetNames.forEach(sheet => {
            let rowObject = XLSX.utils.sheet_to_row_object_array(
              workbook.Sheets[sheet]
            );
            let jsonObject = JSON.stringify(rowObject);
            document.getElementById("jsonData").innerHTML = jsonObject;
            console.log(jsonObject);
          });
        };
        fileReader.readAsBinaryString(selectedFile);
      }

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    
    $.ajax({
        url: '/api/uploadFile', // Ruta en Laravel
        method: 'POST',
        data: jsonObject,
        haders: { "Content-type": "application/json",
            'X-CSRF-TOKEN': csrfToken },
        success: function(response) {
            console.log('Datos enviados correctamente', response.datos);
            // if(response.message === "Registro creado correctamente"){
                
            // }else{
            //     window.location.href = '/'

            // }
        },
        error: function(xhr, status, error) {
            console.error('Error al enviar datos:', error);
        }
    });
}

var selectedFile;
document
  .getElementById("fileUpload")
  .addEventListener("change", function(event) {
    selectedFile = event.target.files[0];
  });
document
  .getElementById("uploadExcel")
  .addEventListener("click", function() {    
    if (selectedFile) {

      //Añadimos la imagen de carga en el contenedor
      // $('#content').html('<div class="loading" style="width: 20%; height: 20%; position: absolute; top: 50%; izquierda: 50%; transformar: translate(-50%, -50%)"><img src="../img/loader2.gif" alt="loading"/><br/>Un momento, por favor...</div>');
      $('#loadingSpinnerBackground').show();

      var fileReader = new FileReader();
      fileReader.onload = function(event) {
        var data = event.target.result;

        var workbook = XLSX.read(data, {
          type: "binary"
        });
        workbook.SheetNames.forEach(sheet => {
          let rowObject = XLSX.utils.sheet_to_row_object_array(
            workbook.Sheets[sheet]
          );
          let jsonObject = JSON.stringify(rowObject);
          document.getElementById("jsonData").innerHTML = jsonObject;          
          // console.log(jsonObject);
        });
      };
      fileReader.readAsBinaryString(selectedFile);
      var formData = new FormData();
      var fileUpload = document.getElementById("fileUpload");
      formData.append("fileUpload", fileUpload.files[0]);
      const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
      var excel = ($("#fileUpload"))[0].files[0];
      var datos = new FormData();
      datos.append("datos", excel);
      // console.log(datos);
        $.ajax({
          url: '/api/uploadFile', //Ruta en Laravel
          method: 'POST',
          data: datos,
          processData: false,
          contentType: false,
          haders: { "Content-type": "application/json", 'X-CSRF-TOKEN': csrfToken },
          success: function(response) {
            // console.log('Datos enviados correctamente', response.datos);

            //Cargamos finalmente el contenido deseado
            // $('#content').fadeIn(1000).html(response.datos);
            $('#tablaAfiliados').show();

            new DataTable('#tablaAfiliados', {
              language: {
                "decimal": "",
                "emptyTable": "No hay información",
                "info": "Mostrando _START_ a _END_ de _TOTAL_ Entradas",
                "infoEmpty": "Mostrando 0 to 0 of 0 Entradas",
                "infoFiltered": "(Filtrado de _MAX_ total entradas)",
                "infoPostFix": "",
                "thousands": ",",
                "lengthMenu": "Mostrar _MENU_ Entradas",
                "loadingRecords": "Cargando...",
                "processing": "Procesando...",
                "search": "Buscar:",
                "zeroRecords": "Sin resultados encontrados",
                "paginate": {
                    "first": "Primero",
                    "last": "Ultimo",
                    "next": "Siguiente",
                    "previous": "Anterior"
                }
              },
              deferLoading: 57,
              processing: true,
              serverSide: true,
              ajax:{
                url: '/api/datatableAfiliados',
                method: 'GET',
              },
              columns: [
                { data: 'Matricula' },
                { data: 'CodigoCCB' },
                { data: 'RazonSocial' },
                { data: 'FechaRenovacion' },
                { data: 'Afiliado' },
                { data: 'CantidadPasaportes' }
              ]
            });
            
            $('#loadingSpinnerBackground').hide();
          },
          error: function(xhr, status, error) {
              console.error('Error al enviar datos:', error);
          }
        });
      
    }
  }); 