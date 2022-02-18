import { onSnake, expandSnake } from "./snake.js"; // auto imported.
import { randomGridPosition } from "./grid.js"

// Create food variable
let food = getRandomFoodPosition()
// { x: 10, y: 1 } // CSS grid starts at 1, 0 is technically outside of the grid.

// Create variable for when the snake eats the food and gains another segment to the snake body
const expansionRate = 3;


export function update() {
    // Make the snake eat the food when it is over top of it:
    if (onSnake(food)) { // onSnake and expandSnake functions are defined in snake.js file
        expandSnake(expansionRate);
        food = getRandomFoodPosition()
    }
}


// Same as function draw in snake.js but formulated for food instead:
export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    // const mortyFoodImage = document.createElement('img');
    // mortyFoodImage.src = './assets/mortyhead3.png'
    // mortyFoodImage.setAttribute('id', 'mortyFoodImage')
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('mortyFood') // styled in styles.css file
    // foodElement.appendChild(mortyFoodImage);
    gameBoard.appendChild(foodElement); // appends the snake to the gameBoard, and into the browser.
}

// Make food appear in random position:
function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) { // currently when our food is null or is on the snake already, than get new food position.
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition // will loop ^ until there is a new position for the food that is NOT on the snake already.
}