const AdminJuegos = document.getElementById('AdminJuegos');
let tableBody = document.getElementById('AdminTableBody');

const appendElementToTable = item => {
  let gameRow = document.createElement('tr');
      gameRow.scope = 'row'
      gameRow.innerHTML = `
        <td class='text-bold'>${item.id}</td>
        <td class='text-bold'>${item.title}</td>
        <td class='text-bold'>${item.short_description}</td>  
        <td class='text-bold'>${item.genre}</td>
        <td class='text-bold'>
         <i id='${item.id}' class ="bi bi-trash" onclick="eliminarJuego(this)"></i>

         <button type="button" class="btn btn-sm mb-1 botonModalEditar" onclick="mostrarDialogoDeEdicion(${item.id})" data-bs-toggle="modal" data-bs-target="#modalEditar" data-bs-whatever="@mdo"><i class="bi bi-pencil-fill"></i></button>

         <i id='${item.id}' class="bi bi-star"></i>
        </td>
      `
      tableBody.appendChild(gameRow)
}
fetch('http://localhost:3000/games',)
  .then(response => response.json())
  .then(data => {    
    data.sort(function(a, b) { 
      return b.id - a.id;
    }).forEach( (item) => {      
      appendElementToTable(item)
    });
  });

  //editar juego

  function mostrarDialogoDeEdicion (id) {
    console.log(id)
    const ValorDelTitulo = document.getElementById('EditarTitulo')
    const ValorDeLaCategoria = document.getElementById('EditarCategoria')
    const ValorDeLaDescripcion = document.getElementById('EditarDescripcion')
    fetch(`http://localhost:3000/games/${id}`)
      .then(response => response.json())
      .then(data => {    
    console.log(data);
    ValorDelTitulo.value = data.title
    ValorDeLaCategoria.value = data.genre
    ValorDeLaDescripcion.value = data.short_description
    });
  }
  
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  
  //   const body = {
  //     id: form.elements.id.value,
  //     title: form.elements.title.value,
  //     genre: form.elements.genre.value,
  //     short_description: form.elements.description.value,
  //   };
  
  //   fetch(`http://localhost:3000/games/${body.id}`, {
  //     method: 'PATCH',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //     body: JSON.stringify(body),
  //   })
  //   .then(response => response.json())
  //   .then(() => {
  //     console.log('Juego editado');
  //     document.getElementById(`juego-${body.id}`).innerHTML = `
  //     <td>${body.id}</td>
  //     <td>${body.titulo}</td>
  //     <td>${body.categoria}</td>
  //     <td>${body.descripcion}</td>
  //     <td class='text-bold'>
  //        <i id='${item.id}' class ="bi bi-trash" onclick="eliminarJuego(this)"></i>

  //        <button type="button" class="btn btn-sm mb-1 BotonModalEditar" onclick="mostrarDialogoDeEdicion(this)" data-id='${item.id}' data-bs-toggle="modal" data-bs-target="#modalEditar" data-bs-whatever="@mdo" data-title=${item.title}' data-genre=${item.genre}' data-description=${item.short_description}'><i class="bi bi-pencil-fill"></i></button>

  //        <i id='${item.id}' class="bi bi-star"></i>
  //       </td>
  //   `;
  //   });
  // });




  





//cargar Juego

// let nombre = document.getElementById('TituloJuego').value
// let genero = document.getElementById('CategoriaJuego').value
// let descripcion = document.getElementById('DescripcionJuego').value
// const cargarJuego = (evt) => {
// evt.preventDefault();
//   fetch('http://localhost:3000/games', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: evt.target.elements.tituloJuego.value,
//     short_description: evt.target.elements.descripcionJuego.value,
//     genre: evt.target.elements.categoriaJuego.value
//     }),
//     headers: {
//       'Content-type': 'application/json; charset=UTF-8',
//     },
//   })
//   .then((response) => response.json())
//   .then(data => {    
//     data.sort(function(a, b) { 
//       return b.id - a.id;
//     }).forEach( (item) => {      
//       appendElementToTable(item)
//     });
//   })
// }
// document.getElementById('Form-Juegos').addEventListener('submit', cargarJuego)


  // function eliminarJuego(element) {
  //   const isEliminar = confirm('¿Deseas eliminar el juego?')  
  //   if (isEliminar){
  //     fetch(`http://localhost:3000/games/${element.id}`, {
  //       method: 'DELETE'
  //     })
  //     .then(response => response.json())
  //     .then( () => { window.location.reload() })
  //   }    
  // }  


  //funcion resaltar y
  // const resaltar = document.getElementById('resaltar')

  // resaltar.addEventListener('click', destacar, false)

  // const destacar = () => {
  //   sombrear ()
  //   enlistar ()
  // }
  // //aplicamos la funcion
  // function sombrear (){
  //   let sombrear = document.getElementById('sombrear');
  //   sombrear.addEventListener('click',()=> {
  //     document.body.style.backgroundcolor="gray";
  //   }, false);

  // }
  // function enlistar (){
  //   let enlistar = document.getElementById('enlistar');
  //   enlistar.addEventListener('click', () =>{

  //   })
  // }



