const checkersBoardArray = [
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],
    ['X', 'X', 'X', 'X', 'X', 'X', 'X', 'X'],

];


// Grab the div id of portal for reset & start buttons.
const portal = document.getElementById('portal');

// Add reset button.
const resetButton = document.createElement('button');
resetButton.textContent = 'Reset Game';
resetButton.style.display = "inline-block"
resetButton.style.color = "red"
portal.appendChild(resetButton);
resetButton.addEventListener('click', function() {
    alert("Let's reset this game.");
});

// Add start game button.
const startButton = document.createElement('button');
startButton.textContent = 'Start Game';
startButton.style.display = "inline-block"
startButton.style.color = "green"
portal.appendChild(startButton)
startButton.addEventListener('click', function() {
    alert("Let's start the game!");
});
// ^ click event should start the functionality of moving the pieces to begin the game.




// // Create center tag to center the checkersBoard.
// let center = document.createElement('center');

// // Create a table element to create the checkersBoard.
// let checkersBoard = document.createElement('table');
// checkersBoard.setAttribute('class', 'checkersBoard')


// // Make a for loop to loop through creating each row, (8x8).
// for (let i =0; i < checkersBoardArray.length; i++) {

//     // Create the rows.
//     let row = document.createElement('tr');

//     // Make another for loop inside of the previous one to loop through creating each cell. (8 in each row/column)
//     for (let j = 0; j < 8; j++) {

//         // Create the cells.
//         let cell = document.createElement('td');

//         // Coloring the cells using if statement.
//         if ((i + j) % 2 == 0) { // if the sum of cells is even, color blue, else color black.
//             cell.setAttribute('class', 'cell bluecell'); // Setting two classes for all blue cells: cell & bluecell.
//             row.appendChild(cell);
//         } else {
//             cell.setAttribute('class', 'cell blackcell'); // Setting two classes for all black cells: cell & blackcell.
//             row.appendChild(cell); // Appending the cells to the rows.
//         }

//         // Adding start pieces - mortys: (8 of them)
//         function mortyHead(url) {
//             let image = document.createElement('img');
//             image.setAttribute('id', 'mortyHead')
//             image.src = url;
//             if (i === 0 && j === 1) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 0 && j === 3) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 0 && j === 5) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 0 && j === 7) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 1 && j === 0) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 1 && j === 2) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 1 && j === 4) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 1 && j === 6) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 2 && j === 1) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 2 && j === 3) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 2 && j === 5) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 2 && j === 7) {
//                 cell.appendChild(image);
//                 return image
//             }
//         }
//         mortyHead('./assets/mortyhead3.png')

//         // Adding start pieces - ricks: (8 of them)
//         function rickHead(url) {
//             let image = document.createElement('img');
//             image.setAttribute('id', 'rickHead')
//             image.src = url;
//             if (i === 7 && j === 0) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 7 && j === 2) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 7 && j === 4) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 7 && j === 6) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 6 && j === 1) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 6 && j === 3) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 6 && j === 5) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 6 && j === 7) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 5 && j === 0) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 5 && j === 2) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 5 && j === 4) {
//                 cell.appendChild(image);
//                 return image
//             } else if (i === 5 && j === 6) {
//                 cell.appendChild(image);
//                 return image
//             }
//         }
//         rickHead('./assets/rickhead5.png')

//     }
//     checkersBoard.appendChild(row); // Appending the rows to the checkers board.

    
// }
// center.appendChild(checkersBoard); // Appending the checkers board to the center variable, to make the whole thing centered.


// // Modifying the table (checkers board) properties.
// checkersBoard.setAttribute('cellspacing', '0'); // No spacing between cells.
// checkersBoard.setAttribute('width', '900px'); // Modifying the width altogether.
// checkersBoard.setAttribute('height', '800px');
// document.body.appendChild(center); // Appending the checkers board to the page (body).




// Adding Wubbah lubbah dub dub phrase at the bottom.
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);