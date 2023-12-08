let table = document.createElement('table');

for (let i = 0; i < 10; i++) {
  let row = table.insertRow(i);

  for (let j = 0; j < 10; j++) {
    let cell = row.insertCell(j);
    cell.textContent = (i+1)*(j+1);
     
    cell.style.border = '1px solid black'; 
    cell.style.padding = '8px';
  }
}

let tableContainer = document.getElementById('table-container');
tableContainer.appendChild(table);
