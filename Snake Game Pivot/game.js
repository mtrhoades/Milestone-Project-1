// ***********************************************************************************
// Start the snake game functionality: (import other js file - snake.js)
import { update as updateSnake, draw as drawSnake, snakeSpeed, getSnakeHead, snakeIntersection } from './snake.js'
import { update as updateFood, draw as drawFood } from './food.js'
import { outsideGrid } from './grid.js'


// (Create a main function to repeat depending on seconds when rendering.)

let lastRenderTime = 0;
// Define gameBoard so it can be passed into drawSnake function as argument.
const gameBoard = document.getElementById('grid-game-board')
let gameOver = false;

function main(currentTime) {
    if (gameOver) {
        if (confirm('You LOST! Press OK to restart the game')) {
            window.location.reload()
        }
        return
    } 

    window.requestAnimationFrame(main) // Method for performing animation and requests the browser calls a specified function to update animation before the next repaint.

    const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000 // divides by 1000 to convert miliseconds to seconds.

    if (secondsSinceLastRender < 1 / snakeSpeed) return // controls the speed of rendering the snake so it's not too fast.
    
    // console.log('Render') // prints out roughyly 1-2 seconds at a time.

    lastRenderTime = currentTime // redeclares variable from above to equal currentTime.
    
    update(); // loop that will update all logic for game.
    draw(); // loop that will draw everything on the screen based on the update loop^.
}

window.requestAnimationFrame(main)



// STEP 2. Define update() and draw() functions:
function update() {
    updateSnake(); // called and imported from snake.js file
    updateFood(); // called and imported from food.js file
    checkDeath();
}

function draw() {
    // need to remove pieces of the snake not needed:
    gameBoard.innerHTML = ""

    drawSnake(gameBoard); // imported from snake.js file and passed gameBoard as argument.

    drawFood(gameBoard); // imported from food.js file and passed gameboard as argument.
}

// function for losing the game: (running off grid or into itself)
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}

// function for WINNING THE GAME!
export function checkExpansionRateWin() {
    expansionRateWin = expansionRate * 10
}




const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);
