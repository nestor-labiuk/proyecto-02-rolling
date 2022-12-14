const seleccionarJuego = (id) => {
  localStorage.setItem('detalleDeJuego', id)
  window.location.href = '../pages/detalle_del_juego.html'
}

const $seccionJuegosDisparos = document.getElementById('seccionJuegosDisparos')
const $seccionJuegosCombates = document.getElementById('seccionJuegosCombates')
const $seccionJuegosEstrategias = document.getElementById('seccionJuegosEstrategias')
const $seccionJuegosRolMulti = document.getElementById('seccionJuegosRolMulti')
const $seccionJuegosCartas = document.getElementById('seccionJuegosCartas')
const $seccionJuegosDeportes = document.getElementById('seccionJuegosDeportes')
const $seccionJuegoSemanal = document.getElementById('seccionJuegoSemanal')
const $seccionElegidoSemanal = document.getElementById('seccionElegidoSemanal')

let listaJuegosEstrategias = ''
let listaJuegosCombates = ''
let listaJuegosDisparos = ''
let listaJuegosDeportes = ''
let listaJuegosRolMulti = ''
let listaJuegosCartas = ''

fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(juegos => {

    const juegosEstrategias = juegos.filter(juego => juego.genre === "MOBA")
    const juegosCombates = juegos.filter(juego => juego.genre === "Fighting")
    const juegosDisparos = juegos.filter(juego => juego.genre === "Shooter")
    const juegosDeportes = juegos.filter(juego => juego.genre === "Sports")
    const juegosRolMulti = juegos.filter(juego => juego.genre === "MMORPG")
    const juegosCartas = juegos.filter(juego => juego.genre === "Card Game")
    const elegidoSemanal = juegos.find(juego => juego.id === 3)

    const elegirJuegoSemanal = id => {
      const elegidoSemanal = juegos.find(juego => juego.id === id)
      $seccionElegidoSemanal.innerHTML = `
        <div class="row card-body ">
          <h2 class="card-title text-light  fs-1 text-center my-3 border border-start-0 border-end-0 border-top-0   border-2 p-3">Destacado de la semana
          </h2>
          <div class="col-12 col-md-8 col-lg-9 card mb-3 text-dark  fondo-card border-0">
            <img src=${elegidoSemanal.thumbnail} class="h- m-2 p-2"
            alt="Juego ${elegidoSemanal.title}">
          </div>
          <div class="col-12 col-md-4 col-lg-3 text-light pt-3 d-flex flex-column justify-content-between">
            <div>  
              <h5 class="card-title ">${elegidoSemanal.title}</h5>
              <p class="card-text te">Categoria: ${elegidoSemanal.genre} </p>
              <p class="card-text te">Descripci??n: ${elegidoSemanal.short_description} </p>
            </div>
            <div class="d-flex justify-content-center">
              <button class="btn btn-success m-5 " onclick="seleccionarJuego(this.id)" id="${elegidoSemanal.id}">Ir al juego</button>
            </div>
          </div>
        </div>
      `
    }

    const creaTarjetasJuegos = (juego, lista, seccion, cantidad) => {
      juego.forEach((item, index) => {
        if (index < cantidad) {
          lista += `
          <div class="card text-dark my-3 mx-auto col-6  " style="width: 18rem;">
          <img src=${item.thumbnail} class="card-img-top mt-2" alt=Juego ${item.title}>
            <div class="card-body d-flex flex-column justify-content-around">
              <h5 class="card-title fw-bold">${item.title}</h5>
              <p class="card-text">${item.short_description}</p>
              <div class="d-flex justify-content-center">
                <button class="btn btn-success" onclick="seleccionarJuego(this.id)" id="${item.id}">Ir al juego</button>
              </div>            
            </div>
          </div>
        `
        }
        seccion.innerHTML = lista
      })
    }

    elegirJuegoSemanal(9)
    creaTarjetasJuegos(juegosEstrategias, listaJuegosEstrategias, $seccionJuegosEstrategias, 4)
    creaTarjetasJuegos(juegosCombates, listaJuegosCombates, $seccionJuegosCombates, 4)
    creaTarjetasJuegos(juegosDisparos, listaJuegosDisparos, $seccionJuegosDisparos, 4)
    creaTarjetasJuegos(juegosDeportes, listaJuegosDeportes, $seccionJuegosDeportes, 4)
    creaTarjetasJuegos(juegosRolMulti, listaJuegosRolMulti, $seccionJuegosRolMulti, 4)
    creaTarjetasJuegos(juegosCartas, listaJuegosCartas, $seccionJuegosCartas, 4)

  })
