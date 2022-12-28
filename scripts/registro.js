function registrarse(){

  const nombre = document.getElementById('nombre').value
  const nombreDeUsuario = document.getElementById('usuario').value
  const correo = document.getElementById('email').value
  const contrasenia = document.getElementById('contrasenia').value
  const controlContrasenia = document.getElementById('controlContrasenia').value

  if (!nombre.match(/^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]{8,16}$/)){ 
    alert("El nombre ingresado no es válido, debe contener entre 8 y 16 caracteres alfanuméricos")
    return
  };

  if (!nombreDeUsuario.match(/^[a-z0-9_-]{3,16}$/)){ 
    alert("El usuario ingresado no es valido. Puedes utilizar letras minúsculas, números, guion bajo, guion medio y puede contener entre 3-16 caracteres")
    return
  };

  if (!correo.match(/([a-z]\w+@[a-z]+\.[a-z]{2,5})/)) {
    alert("El mail ingresado no es valido, asegurese de que su email contenga letras en minúsculas, un @ y un .")
    return
  };

  if (!contrasenia.match(/^[A-Z](?=\w*\d)(?=\w*[a-z])\S{8,16}/)){
    alert("La contraseña ingresada no es valida, asegúrese de que la primer letra sea mayúscula y algun número. La contraseña puede contener entre 8-16 carácteres alfanuméricos")
    return
  };

  if (contrasenia===controlContrasenia){
  }else{ 
    alert("Las contraseñas no coinciden")
    return
  };

  const nuevoUsuario = {
    name: nombre,
    userName: nombreDeUsuario,
    email: correo,
    password:contrasenia,
    isAdmin: false
  }

  fetch('http://localhost:3000/users',{
    method: 'POST',
    body: JSON.stringify(nuevoUsuario),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then(response => response.json())
    .then(data => alert(("Se completo exitosamente su registro"))) // Mostrar funcion con mensaje de registro completado
}    


const eye = document.getElementById('eye')
eye.addEventListener("click", function(){
  if (contrasenia.type == "password"){
    contrasenia.type == "text" 
  } else{
    contrasenia.type = "password"
  }
})