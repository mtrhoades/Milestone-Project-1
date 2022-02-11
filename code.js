// Create center tag to center the checkersBoard.
let center = document.createElement('center');

// Create a table element to create the checkersBoard.
let checkersBoard = document.createElement('table');
checkersBoard.setAttribute('class', 'checkersBoard')

// Make a for loop to loop through creating each row, (8x8).
for (let i =0; i < 8; i++) {

    // Create the rows.
    let row = document.createElement('tr');

    // Make another for loop inside of the previous one to loop through creating each cell. (8 in each row/column)
    for (let j = 0; j < 8; j++) {

        // Create the cells.
        let cell = document.createElement('td');

        // Coloring the cells using if statement.
        if ((i + j) % 2 == 0) { // if the sum of cells is even, color blue, else color black.
            cell.setAttribute('class', 'cell bluecell'); // Setting two classes for all blue cells: cell & bluecell.
            row.appendChild(cell);
        } else {
            cell.setAttribute('class', 'cell blackcell'); // Setting two classes for all black cells: cell & blackcell.
            row.appendChild(cell); // Appending the cells to the rows.
        }
    }
    checkersBoard.appendChild(row); // Appending the rows to the checkers board.
}
center.appendChild(checkersBoard); // Appending the checkers board to the center variable, to make the whole thing centered.


// Modifying the table (checkers board) properties.
checkersBoard.setAttribute('cellspacing', '0'); // No spacing between cells.
checkersBoard.setAttribute('width', '900px'); // Modifying the width altogether.
checkersBoard.setAttribute('height', '800px');
document.body.appendChild(center); // Appending the checkers board to the page (body).



// Adding Wubbah lubbah dub dub phrase at the bottom.
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);