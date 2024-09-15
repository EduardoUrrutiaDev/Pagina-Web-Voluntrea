const button = document.getElementById('sendBtn')
var nombre = document.getElementById('nombres');
var apellidos = document.getElementById('apellidos');
var correo = document.getElementById('correo');
var celular = document.getElementById('celular');
var edad = document.getElementById('edad');
var servicio = document.getElementById('servicio');
var generoMale = document.getElementById('male');
var generoFamale = document.getElementById('famale');
var confirmar = document.getElementById('confirmar');
var objRegister = {};

const URL_BACKEND = 'http://localhost:8080/register';

button.addEventListener('click', (event) => {
    event.preventDefault();

    objRegister.nombre = nombre.value
    objRegister.apellido = apellidos.value
    objRegister.email = correo.value
    objRegister.telefono = celular.value
    objRegister.edad = edad.value
    objRegister.tipo_oficio = servicio.value
    objRegister.confirmar = confirmar.checked
    objRegister.genero = generoMale.checked ? generoMale.value : generoFamale.value

    fetch(URL_BACKEND, {
                method: 'POST',
                headers: {'Content-type': 'application/json'},
                body: JSON.stringify(objRegister)    
            })
            .then(async response => {
                console.log(response);
            });
})