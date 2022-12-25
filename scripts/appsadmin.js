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
         <i id='${item.id}' class ="bi bi-trash" onclick="deleteGame(this)"></i>
         <i id='${item.id}' class="bi bi-pencil-fill" onclick="editGame(this)"></i>
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

  //cargar Juego

  let nombre = document.getElementById('TituloJuego').value
  let genero = document.getElementById('CategoriaJuego').value
  let descripcion = document.getElementById('DescripcionJuego').value
  const cargarJuego = (evt) => {
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
      data.sort(function(a, b) { 
        return b.id - a.id;
      }).forEach( (item) => {      
        appendElementToTable(item)
      });
    })
  }
  document.getElementById('cargar-juegos').addEventListener('submit', cargarJuego)


  // function deleteGame(element) {
  //   console.log(element)
  //   const isDelete = confirm('¿Deseas eliminar el juego?')  
  //   if (isDelete){
  //     fetch(`http://localhost:3000/games/${element.id}`, {
  //       method: 'DELETE'
  //     })
  //     .then(response => response.json())
  //     .then( () => { window.location.reload() })
  //   }    
  // }


  

// instrucciones
// 1. vincular la modal con el boton que la abre a traves del id
// 2. en la modal vas a tener un formulario <form></form>
// 3. ese formulario tiene que tener 2 cosas, a. Un evento submit b. un boton que dispare ese evento
// 4. en tu codigo en javascript vas a interceptar ese evento a traves de un eventListener
// 5. una vez intercerceptado ese evento, podes acceder a los elementos del formulario a traves de evt.target.elements
// 6. Teniendo esos valores podes hacer POST, PUT o PATCH con los datos de ese formulario

  