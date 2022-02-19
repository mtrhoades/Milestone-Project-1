// OTHER JAVASCRIPT FILE IMPORTS:
import { updateSnake, drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js';
import { updateFood, drawFood } from './food.js';
import { outsideGrid } from './grid.js';



// SELECTORS:
let theLastRenderedTime = 0; // created to make equation for how fast the snake will go.
const gameBoard = document.getElementById('grid-game-board')
let gameOver = false;



// GAME FUNCTIONS:
function main(currentTime) { // made to repeat update() and draw()
    if (gameOver) {
        alert('You LOST! Press OK to restart the game');
            window.location.reload();
    return
    }
    window.requestAnimationFrame(main) // method for performing animation and requests the browser calls a specified function to update animation before the next repaint. (callback function)

    const timeSinceLastRender = (currentTime - theLastRenderedTime) / 1000 // is converted into seconds from miliseconds.

    if (timeSinceLastRender < 1 / snakeSpeed) { // controls the speed of rendering the snake so it's not too fast. snakeSpeed is defined in snake.js
        return
    }  
    theLastRenderedTime = currentTime // redeclares variable from above to equal currentTime.
    
    update(); 
    draw(); // since this is the "main" function, we have to call update() and draw() inside of it, to get ran over and over again.
}

window.requestAnimationFrame(main) // Needs to be called again globally.

function update() { // used to update a list of other update functions all at once
    updateSnake(); 
    updateFood(); 
    checkDeath();
}

function draw() { // used to draw the board and pieces on the screen after the update functions are ran ^.
    gameBoard.innerHTML = "" // need to remove pieces of the snake not needed:
    drawSnake(gameBoard); // imported from snake.js file and passed gameBoard as argument.
    drawFood(gameBoard); // imported from food.js file and passed gameboard as argument.
}

// function for losing the game: (running off grid or into itself)
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}



// FUNNY PHRASE APPENDAGE:
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);
