// IMPORTS:
import { getInputDirection } from "./input.js";



// SELECTORS:
export const snakeSpeed = 5; // used in equation for speed inside function main.
let newSnakeSegments = 0



// SNAKE BODY OBJECT INSIDE OF AN ARRAY:
const snakeBody = [ { x: 11, y: 11 } ] // x and y to show where on the grid to start. (the very middle) Just the head is one object inside the array.



// SNAKE FUNCTIONS:
export function updateSnake() { // called in the function main on game.js
    addSegments(); // calls addSegments function everytime we update

    const inputDirection = getInputDirection(); // imported from input.js and set to a variable.

    // make for loop to move snake body segments into the same place as the one before it, essentially following the head of the snake:
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // update head of snake based on where it is moving:
    snakeBody[0].x = inputDirection.x + snakeBody[0].x
    snakeBody[0].y = inputDirection.y + snakeBody[0].y // inputDirection is defined in input.js
}

function addSegments() { // create function for adding segments to the snake when it eats the food pieces.
    for (let i = 0; i < newSnakeSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // taking last segment/element of snake and duplicating it onto the end of the snake to make more segments.
    }
    newSnakeSegments = 0 // make it so the snake stops making segments, not constantly creating more. (only the ones equal to the expansion rate everytime a piece of food is eaten.)

}

export function drawSnake(gameBoard) { // called in the function main in game.js
    snakeBody.forEach(segment => {
        // for each segment of the snake create a snake element, show position of start, and style it.
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('rickSnake') // styled in styles.css file
        gameBoard.appendChild(snakeElement); // appends the snake to the gameBoard, and onto the page.
    });
}

export function expandSnake(amount) { // called in the food.js file 
    newSnakeSegments = newSnakeSegments + amount
}

// create function for getting snakes position for when dropping new food piece:
export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => { // using .some for any of our snake positions.
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position) // if the two positions are exaclty the same as defined below in function equalPostions, than onSnake function will return true.
    })
}

function equalPositions(position1, position2) { // compares the snake (position1) and new food piece (position2).
    return position1.x === position2.x && position1.y === position2.y
}

export function getSnakeHead() { // used in checkDeath function in game.js
    return snakeBody[0]
}

export function snakeIntersection() { // created for when snake eats itself
    return onSnake(snakeBody[0], { ignoreHead: true })
}

