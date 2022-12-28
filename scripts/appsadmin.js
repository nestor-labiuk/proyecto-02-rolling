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
        <input type="checkbox" checked="checked">
        </td>
        <td class='text-bold'>
         <i id='${item.id}' class ="bi bi-trash" onclick="eliminarJuego(this)"></i>
         <button type="button" class="btn btn-sm mb-1 botonModalEditar" onclick="mostrarDialogoDeEdicion(${item.id})" data-bs-toggle="modal" data-bs-target="#modalEditar" data-bs-whatever="@mdo"><i class="bi bi-pencil-fill"></i></button>
         <i id="Estrella" class="bi bi-star" onclick="resaltarJuego(${this.id})"></i>
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
function cargarJuego(evt) {
  evt.preventDefault();
  fetch('http://localhost:3000/games', {
    method: 'POST',
    body: JSON.stringify({
      title: evt.target.elements.tituloJuego.value,
      short_description: evt.target.elements.descripcionJuego.value,
      genre: evt.target.elements.categoriaJuego.value
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then(data => {
      data.sort(function (a, b) {
        return b.id - a.id;
      }).forEach((item) => {
        appendElementToTable(item);
      });
    });
}
document.getElementById('Form-Juegos').addEventListener('submit', cargarJuego)
  function eliminarJuego(element) {
    const isEliminar = confirm('¿Deseas eliminar el juego?')  
    if (isEliminar){
      fetch(`http://localhost:3000/games/${element.id}`, {
        method: 'DELETE'
      })
      .then(response => response.json())
      .then( () => { window.location.reload() })
    }    
  }  

