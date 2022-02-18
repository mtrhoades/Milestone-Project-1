let inputDirection = { x: 0, y: 0 }
let lastInputDirection = { x: 0, y: 0 }

// Add keyboard arrow movements
window.addEventListener('keydown', e => {
    switch (e.key) {
        case 'ArrowUp':
            // make if statements for lastInputDirection so snake does NOT move onto itself:
            if (lastInputDirection.y !== 0) break // break early
            inputDirection = { x: 0, y: -1 } // remember -1 moves y up, positive 1 moves y down
            e.preventDefault(); // keeps from using arrow keys for scroll bar in browser.
            break
        case 'ArrowDown':
            if (lastInputDirection.y !== 0) break
            inputDirection = { x: 0, y: 1 }
            e.preventDefault(); 
            break
        case 'ArrowLeft':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: -1, y: 0 } // remember -1 moves x left, postive 1 moves x right.
            break
        case 'ArrowRight':
            if (lastInputDirection.x !== 0) break
            inputDirection = { x: 1, y: 0 } 
            break
    }
})

export function getInputDirection() {
    // set variable for lastInputDirection so the snake does NOT move onto itself. (up to down, or left to right)
    lastInputDirection = inputDirection
    return inputDirection;
}