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


// Make Array for checkers board.

const checkersBoardArray = [
    ['null', '0', 'null', '1', 'null', '2', 'null', '3'],
    ['4', 'null', '5', 'null', '6', 'null', '7', 'null'],
    ['null', '8', 'null', '9', 'null', '10', 'null', '11'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['null', 'null', 'null', 'null', 'null', 'null', 'null', 'null'],
    ['12', 'null', '13', 'null', '14', 'null', '15', 'null'],
    ['null', '16', 'null', '17', 'null', '18', 'null', '19'],
    ['20', 'null', '21', 'null', '22', 'null', '23', 'null'],
];




// // Appending the rick & morty head pieces to start the game.

// // Mortys:
//     let mortyImage1 = document.createElement('img');
//     mortyImage1.setAttribute('id', 'mortyHead')
//     mortyImage1.src = './assets/mortyhead3.png';
//     let mortyBlackSquare = document.getElementById('20');
//     mortyBlackSquare.appendChild(mortyImage1);

//     let mortyImage2 = document.createElement('img');
//     mortyImage2.setAttribute('id', 'mortyHead')
//     mortyImage2.src = './assets/mortyhead3.png';
//     let mortyBlackSquare2 = document.getElementById('21');
//     mortyBlackSquare2.appendChild(mortyImage2);

//     let mortyImage3 = document.createElement('img');
//     mortyImage3.setAttribute('id', 'mortyHead')
//     mortyImage3.src = './assets/mortyhead3.png';
//     let mortyBlackSquare3 = document.getElementById('22');
//     mortyBlackSquare3.appendChild(mortyImage3);

//     let mortyImage4 = document.createElement('img');
//     mortyImage4.setAttribute('id', 'mortyHead')
//     mortyImage4.src = './assets/mortyhead3.png';
//     let mortyBlackSquare4 = document.getElementById('23');
//     mortyBlackSquare4.appendChild(mortyImage4);

//     let mortyImage5 = document.createElement('img');
//     mortyImage5.setAttribute('id', 'mortyHead')
//     mortyImage5.src = './assets/mortyhead3.png';
//     let mortyBlackSquare5 = document.getElementById('24');
//     mortyBlackSquare5.appendChild(mortyImage5);

//     let mortyImage6 = document.createElement('img');
//     mortyImage6.setAttribute('id', 'mortyHead')
//     mortyImage6.src = './assets/mortyhead3.png';
//     let mortyBlackSquare6 = document.getElementById('25');
//     mortyBlackSquare6.appendChild(mortyImage6);

//     let mortyImage7 = document.createElement('img');
//     mortyImage7.setAttribute('id', 'mortyHead')
//     mortyImage7.src = './assets/mortyhead3.png';
//     let mortyBlackSquare7 = document.getElementById('26');
//     mortyBlackSquare7.appendChild(mortyImage7);

//     let mortyImage8 = document.createElement('img');
//     mortyImage8.setAttribute('id', 'mortyHead')
//     mortyImage8.src = './assets/mortyhead3.png';
//     let mortyBlackSquare8 = document.getElementById('27');
//     mortyBlackSquare8.appendChild(mortyImage8);

//     let mortyImage9 = document.createElement('img');
//     mortyImage9.setAttribute('id', 'mortyHead')
//     mortyImage9.src = './assets/mortyhead3.png';
//     let mortyBlackSquare9 = document.getElementById('28');
//     mortyBlackSquare9.appendChild(mortyImage9);

//     let mortyImage10 = document.createElement('img');
//     mortyImage10.setAttribute('id', 'mortyHead')
//     mortyImage10.src = './assets/mortyhead3.png';
//     let mortyBlackSquare10 = document.getElementById('29');
//     mortyBlackSquare10.appendChild(mortyImage10);

//     let mortyImage11 = document.createElement('img');
//     mortyImage11.setAttribute('id', 'mortyHead')
//     mortyImage11.src = './assets/mortyhead3.png';
//     let mortyBlackSquare11 = document.getElementById('30');
//     mortyBlackSquare11.appendChild(mortyImage11);

//     let mortyImage12 = document.createElement('img');
//     mortyImage12.setAttribute('id', 'mortyHead')
//     mortyImage12.src = './assets/mortyhead3.png';
//     let mortyBlackSquare12 = document.getElementById('31');
//     mortyBlackSquare12.appendChild(mortyImage12);

// // Ricks:

// let rickImage1 = document.createElement('img');
// rickImage1.setAttribute('id', 'mortyHead')
// rickImage1.src = './assets/rickhead5.png';
// let rickBlackSquare1 = document.getElementById('0');
// rickBlackSquare1.appendChild(rickImage1);

// let rickImage2 = document.createElement('img');
// rickImage2.setAttribute('id', 'mortyHead')
// rickImage2.src = './assets/rickhead5.png';
// let rickBlackSquare2 = document.getElementById('1');
// rickBlackSquare2.appendChild(rickImage2);

// let rickImage3 = document.createElement('img');
// rickImage3.setAttribute('id', 'mortyHead')
// rickImage3.src = './assets/rickhead5.png';
// let rickBlackSquare3 = document.getElementById('2');
// rickBlackSquare3.appendChild(rickImage3);

// let rickImage4 = document.createElement('img');
// rickImage4.setAttribute('id', 'mortyHead')
// rickImage4.src = './assets/rickhead5.png';
// let rickBlackSquare4 = document.getElementById('3');
// rickBlackSquare4.appendChild(rickImage4);

// let rickImage5 = document.createElement('img');
// rickImage5.setAttribute('id', 'mortyHead')
// rickImage5.src = './assets/rickhead5.png';
// let rickBlackSquare5 = document.getElementById('4');
// rickBlackSquare5.appendChild(rickImage5);

// let rickImage6 = document.createElement('img');
// rickImage6.setAttribute('id', 'mortyHead')
// rickImage6.src = './assets/rickhead5.png';
// let rickBlackSquare6 = document.getElementById('5');
// rickBlackSquare6.appendChild(rickImage6);

// let rickImage7 = document.createElement('img');
// rickImage7.setAttribute('id', 'mortyHead')
// rickImage7.src = './assets/rickhead5.png';
// let rickBlackSquare7 = document.getElementById('6');
// rickBlackSquare7.appendChild(rickImage7);

// let rickImage8 = document.createElement('img');
// rickImage8.setAttribute('id', 'mortyHead')
// rickImage8.src = './assets/rickhead5.png';
// let rickBlackSquare8 = document.getElementById('7');
// rickBlackSquare8.appendChild(rickImage8);

// let rickImage9 = document.createElement('img');
// rickImage9.setAttribute('id', 'mortyHead')
// rickImage9.src = './assets/rickhead5.png';
// let rickBlackSquare9 = document.getElementById('8');
// rickBlackSquare9.appendChild(rickImage9);

// let rickImage10 = document.createElement('img');
// rickImage10.setAttribute('id', 'mortyHead')
// rickImage10.src = './assets/rickhead5.png';
// let rickBlackSquare10 = document.getElementById('9');
// rickBlackSquare10.appendChild(rickImage10);

// let rickImage11 = document.createElement('img');
// rickImage11.setAttribute('id', 'mortyHead')
// rickImage11.src = './assets/rickhead5.png';
// let rickBlackSquare11 = document.getElementById('10');
// rickBlackSquare11.appendChild(rickImage11);

// let rickImage12 = document.createElement('img');
// rickImage12.setAttribute('id', 'mortyHead')
// rickImage12.src = './assets/rickhead5.png';
// let rickBlackSquare12 = document.getElementById('11');
// rickBlackSquare12.appendChild(rickImage12);




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