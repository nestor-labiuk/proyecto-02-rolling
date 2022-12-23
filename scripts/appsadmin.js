const gameSection = document.getElementById('GamesSection')

let tableBody = document.getElementById('TableAdminBody')
console.log(tableBody)
fetch('http://localhost:3000/games')
  .then(response => response.json())
  .then(data => {    
    data.forEach( (item) => {      
      let gameRow = document.createElement('tr');
      gameRow.scope = 'row'
      gameRow.innerHTML = `
        <td class='text-bold'>${item.orden}</td>
        <td class='text-bold'>${item.title}</td>
        <td class='text-bold'>${item.short_description}</td>  
        <td class='text-bold'>${genre}</td>
        <td class='text-bold'>
          <i id='${item.id}' class ="bi bi-trash" onclick="deleteGame(this)"></i>
        </td>
      `
      tableBody.appendChild(gameRow)
    });
  });
  // function deleteGame(element) {
  //   const isDelete = confirm('¿Deseas eliminar el elemento?')  
  //   if (isDelete){
  //     fetch(`http://localhost:3000/games${element.id}`, {
  //       method: 'DELETE'
  //     })
  //     .then(response => response.json())
  //     .then( () => { window.location.reload() })
  //   }    
  // }

  