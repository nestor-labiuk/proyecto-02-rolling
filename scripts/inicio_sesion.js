const email = document.getElementById('email')
const password = document.getElementById('contrasenia')
const form = document.getElementById('login')
form.addEventListener('submit', (event) => event.preventDefault())

function iniciarSesion(){
  fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data =>{
      const user = data.find((item) => item.email === email.value)
      console.log(user)
      const clave = data.find((item) => item.password === password.value)
      console.log(clave)
      
      if (email.value==user.email && password.value==clave.password && user.isAdmin){
      window.location.href='administracion.html'
      }else if(email.value==user.email && password.value==clave.password){
      window.location.href="http://127.0.0.1:5500/index.html"
      }else{
        alert("El usuario o contraseña ingresado no son correctos")
        return
      }
    })
}
  
