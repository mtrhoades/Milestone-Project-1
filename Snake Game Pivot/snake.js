import { getInputDirection } from "./input.js"; // gets imported automatically from input.js file when called down below inside function update.

export const snakeSpeed = 5; // defines the snake speed


// starts the snake in the very middle of the grid and each row is one segment of the snake.
const snakeBody = [
    { x: 11, y: 11}
] 

let newSegments = 0

export function update() {
    // call addSegments function everytime we update:
    addSegments();

    // call getInputDirection function and set to a variable:
    const inputDirection = getInputDirection();

    // Make for loop to move snake body segments into the same place as the one before it, essentially following the head of the snake:
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    }

    // update head of snake based on where it is moving: (HARDCODED) (-1 for y is moving up and 1 is moving down)
    snakeBody[0].x += inputDirection.x
    snakeBody[0].y += inputDirection.y
}


export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        // For each segment of the snake create a snake element, show position of start, and style it.
        const snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = segment.y;
        snakeElement.style.gridColumnStart = segment.x;
        snakeElement.classList.add('rickSnake') // styled in styles.css file
        gameBoard.appendChild(snakeElement); // appends the snake to the gameBoard, and into the browser.
    });
}


export function expandSnake(amount) {
    newSegments += amount
}

export function onSnake(position, { ignoreHead = false } = {}) {
    return snakeBody.some((segment, index) => { // using .some for any of our snake positions.
        if (ignoreHead && index === 0) return false;
        return equalPositions(segment, position) // if the two positions are exaclty the same as defined below in function equalPostions, than onSnake function will return true.
    })
}

export function getSnakeHead() {
    return snakeBody[0]
}

export function snakeIntersection() {
    return onSnake(snakeBody[0], { ignoreHead: true })
}

function equalPositions(position1, position2) {
    return position1.x === position2.x && position1.y === position2.y
}

// Create function for adding segments to the snake when it eats the food pieces.
function addSegments() {
    for (let i = 0; i < newSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // taking last segment/element of snake and duplicating it onto the end of the snake to make more segments.
    }
    // make it so the snake gets rid of the new Segments, not constantly creating more.
    newSegments = 0
}