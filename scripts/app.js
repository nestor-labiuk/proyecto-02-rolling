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

    $seccionElegidoSemanal.innerHTML = `
    <div class="row card-body pt-5">
    <div class="col-12 col-md-8 col-lg-9 card mb-3 text-dark ">
      <h2 class="card-title text-dark text-center my-3">Destacados de la semana
      </h2>
      <img src=${elegidoSemanal.thumbnail} class="h- m-2 p-2"
      alt="...">
    </div>
    <div class="col-12 col-md-4 col-lg-3 text-light">
      <h5 class="card-title ">${elegidoSemanal.title}</h5>
      <p class="card-text te">${elegidoSemanal.short_description} </p>
        <a href="../pages/error404.html" class="btn btn-primary">Ir al juego</a>
    </div>
  </div>
    `

    const creaTarjetasJuegos = (juego, lista, seccion, cantidad) => {
      juego.forEach((item, index) => {
        if (index < cantidad) {
          lista += `
          <div class="card text-dark my-3 mx-auto col-6" style="width: 18rem;">
          <img src=${item.thumbnail} class="card-img-top mt-2" alt=${item.title}>
            <div class="card-body">
              <h5 class="card-title fw-bold">${item.title}</h5>
              <p class="card-text">${item.short_description}</p>
              <a href="../pages/error404.html" class="btn btn-primary">Ir al juego</a>
            </div>
          </div>
        `
        }
        seccion.innerHTML = lista
      })
    }

    creaTarjetasJuegos(juegosEstrategias, listaJuegosEstrategias, $seccionJuegosEstrategias, 4)
    creaTarjetasJuegos(juegosCombates, listaJuegosCombates, $seccionJuegosCombates, 4)
    creaTarjetasJuegos(juegosDisparos, listaJuegosDisparos, $seccionJuegosDisparos, 4)
    creaTarjetasJuegos(juegosDeportes, listaJuegosDeportes, $seccionJuegosDeportes, 4)
    creaTarjetasJuegos(juegosRolMulti, listaJuegosRolMulti, $seccionJuegosRolMulti, 4)
    creaTarjetasJuegos(juegosCartas, listaJuegosCartas, $seccionJuegosCartas, 4)

  })
