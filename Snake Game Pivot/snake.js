// IMPORTS:
import { getMoveDirection } from "./move.js";



// SELECTORS:
export let snakeSpeed = 5; // used in equation for speed inside function main.
let newSnakeSegments = 0



// SNAKE BODY OBJECT INSIDE OF AN ARRAY:
const snakeBody = [ { x: 11, y: 11 } ] // x and y to show where on the grid to start. (the very middle) Just the head is one object inside the array.



// SNAKE FUNCTIONS:
export function updateSnake() { // called in the function main on game.js
    addSegments(); // calls addSegments function everytime we update

    const moveDirectionInput = getMoveDirection(); // imported from input.js and set to a variable.

    // make for loop to move snake body segments into the same place as the one before it, essentially following the head of the snake:
    for (let i = snakeBody.length - 2; i >= 0; i--) {
        snakeBody[i + 1] = { ...snakeBody[i] }
    } // ***** EXPLAIN HOW THE REST OPERATOR HERE WORKS!****

    // update head of snake based on where it is moving:
    snakeBody[0].x = moveDirectionInput.x + snakeBody[0].x
    snakeBody[0].y = moveDirectionInput.y + snakeBody[0].y // moveDirectionInput is defined in input.js
}

function addSegments() { // create function for adding segments to the snake when it eats the food pieces.
    for (let i = 0; i < newSnakeSegments; i++) {
        snakeBody.push({ ...snakeBody[snakeBody.length - 1] }) // taking last segment/element of snake and duplicating it onto the end of the snake to make more segments.
        console.log(newSnakeSegments)
        checkForWin();
    }
    newSnakeSegments = 0 // make it so the snake stops making segments, not constantly creating more. (only the ones equal to the expansion rate everytime a piece of food is eaten.)
    
}

function checkForWin() {
    for (let i = 0; i < snakeBody.length; i++) {
        if (snakeBody.length === 10) {
            let snakeSpeed = 7;
            console.log(snakeSpeed) 
            let winnerText = document.querySelectorAll('#winnerText');
            for (let i = 0; i < winnerText.length; i++) {
                winnerText[i].textContent = "YOU WON! High Score - 3";
                winnerText[i].style.color = "#c9e610";
            }
        } else if (snakeBody.length === 19) {
            let snakeSpeed = 9;
            console.log(snakeSpeed)    
            winnerText.textContent = "YOU WON! High Score - 6";
            winnerText.style.color = "#d9387e";
            winnerText.style.fontSize = "25px";
        } else if (snakeBody.length === 28) {
            let snakeSpeed = 11;
            console.log(snakeSpeed)
            winnerText.textContent = "YOU WON! High Score - 9";
            winnerText.style.color = "#14c9e0";
            winnerText.style.fontSize = "30px";
        } else if (snakeBody.length === 37) {
            let snakeSpeed = 13;
            console.log(snakeSpeed)
            winnerText.textContent = "YOU WON! High Score - 12";
            winnerText.style.color = "#07e027";
            winnerText.style.fontSize = "35px";
        } else if (snakeBody.length === 46) {
            let snakeSpeed = 15;
            console.log(snakeSpeed)
            winnerText.textContent = "YOU WON! High Score - 15";
            winnerText.style.color = "#38d9c9";
            winnerText.style.fontSize = "40px";
        } else if (snakeBody.length >= 49) {
            let snakeSpeed = 17;
            console.log(snakeSpeed)
            winnerText.textContent = "YOU ARE KILLING IT SNAKE MASTER!";
            winnerText.style.color = "#d67206";
            winnerText.style.fontSize = "40px";
        }
        return
    }
}

export function drawSnake(gameBoard) { // called in the function main in game.js
    snakeBody.forEach(segment => {
        // for each segment of the snake create a snake element, show position of start, and style it.
        let snakeElement = document.createElement('div');
        // let rickFoodImage = document.createElement('img');
        // rickFoodImage.src = './assets/rickhead5.png'
        // rickFoodImage.setAttribute('id', 'mortyFoodImage')
        // snakeElement.appendChild(rickFoodImage);
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

