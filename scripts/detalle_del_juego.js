const miId = localStorage.getItem('detalleDeJuego')
const $detalleJuego = document.getElementById('detalleJuego')


fetch(`http://localhost:3000/games/${miId}`)
.then(response => response.json())
.then( elegido=> {
    $detalleJuego.innerHTML = `
      <div>
        <h2 class=" text-light text-center mx-md-5 fs-1 border border-start-0 border-end-0 border-top-0 border-2 p-3 " >${elegido.title}</h2>
        <div class="row card-body  justify-content-center m-auto p-0 pt-2">
          <div class="col-12 col-md-10 col-9xl  card border-0 mb-3 text-dark image mx-auto fondo-card p-0" >
            <img src=${elegido.thumbnail}
            alt="Juego ${elegido.title}">
          </div>
        </div>
        <div class="row justify-content-around  m-3">
          <div class="col-12 col-md-4 col-lg-3 text-light mb-5">
            <h5 class="card-title text-center text-md-start fs-3">${elegido.title}</h5>
            <p class="card-text text-center text-md-start fs-5">${elegido.short_description} </p>
            <p class="card-text text-center text-md-start fs-5 ">${elegido.short_description} </p>
          </div>
          <div class="col-12 col-md-4 col-lg-3 text-light mt-2 ">
            <p class="card-text text-center text-md-end fs-5"<strong class="fw-bold">Genero: </strong>${elegido.genre} </p>
            <p class="card-text text-center text-md-end fs-5"<strong class="fw-bold">Plataforma: </strong>${elegido.platform} </p>
            <p class="card-text text-center text-md-end fs-5"<strong class="fw-bold">Publicado por: </strong>${elegido.publisher} </p>
            <p class="card-text text-center text-md-end fs-5"<strong class="fw-bold">Desarrollado por: </strong>${elegido.developer} </p>
            <p class="card-text text-center text-md-end fs-5"<strong class="fw-bold">Fecha: </strong>${elegido.release_date} </p>
          </div>
        </div>
        <div class="d-flex m-1 justify-content-center mt-5 m-md-1">
          <a  href="../pages/error404.html" class="btn btn-success" >Jugar ahora</a>
        </div>      
      </div>
    `
})
