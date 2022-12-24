const AdminJuegos = document.getElementById('AdminJuegos')

let tableBody = document.getElementById('AdminTableBody')
console.log(tableBody)
fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(data => {    
    data.forEach( (item) => {      
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
    });
  });
  // function deleteGame(element) {
  //   const isDelete = confirm('¿Deseas eliminar el juego?')  
  //   if (isDelete){
  //     fetch(`http://localhost:3000/games${element.id}`, {
  //       method: 'DELETE'
  //     })
  //     .then(response => response.json())
  //     .then( () => { window.location.reload() })
  //   }    
  // }


  

  