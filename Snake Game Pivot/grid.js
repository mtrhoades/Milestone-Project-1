// set gridSize variable to the size of the grid to multiply down below with the random math function.
const gridSize = 21;

export function randomGridPosition() {
    return {
        x: Math.floor(Math.random() * gridSize) + 1, // formula for randomizing number between 1 - 21
        // ^ randomized a number between 0 - .99999999....
        y: Math.floor(Math.random() * gridSize) + 1
    }
}


// function for when snake goes outside grid, you lose!
export function outsideGrid(position) {
    return (
        position.x < 1 || position.x > gridSize || 
        position.y < 1 || position.y > gridSize
    )
}