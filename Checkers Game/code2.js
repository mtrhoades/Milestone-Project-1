/* STEP 1. (making sure javascript is working with live server.) */
// Adding Wubbah lubbah dub dub phrase at the bottom.
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);


/*----------- Game State Data ----------*/

const board = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]

/*---------- Cached Variables ----------*/

// parses pieceId's and returns the index of that piece's place on the board
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return board.indexOf(parsed);
};

// DOM referenes
const cells = document.querySelectorAll("td");
let rickHeadPieces = document.querySelectorAll("p");
let mortyHeadPieces = document.querySelectorAll("span")
const rickTurnText = document.querySelectorAll(".rickTurnText");
const mortyTurnText = document.querySelectorAll(".mortyTurnText");

// player properties
let turn = true;
let rickScore = 12;
let mortyScore = 12;
let playerPieces; // will be declared later

// selected piece properties
let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false, // I chose 7 and 9 spaces because for every selected piece, when counting cells from the LEFT of the selected piece, they can only move into the 7th or 9th spaces, which are the ones diagonally infront of selected piece.
    ninthSpace: false,
    fourteenthSpace: false, // I chose 14th and 18th spaces for when jumping occurs, it's the same logic for the 7th and 9th spaces but doubled because we are jumping.
    eighteenthSpace: false,
    minusSeventhSpace: false, // minus is used for red pieces, moving down the board, and positive is used for black pieces moving up the board
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

/*---------- Event Listeners ----------*/

// initialize event listeners on pieces
function givePiecesEventListeners() {
    if (turn) {
        for (let i = 0; i < rickHeadPieces.length; i++) {
            rickHeadPieces[i].addEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < mortyHeadPieces.length; i++) {
            mortyHeadPieces[i].addEventListener("click", getPlayerPieces);
        }
    }
}

/*---------- Logic ----------*/

// holds the length of the players piece count
function getPlayerPieces() {
    if (turn) {
        playerPieces = rickHeadPieces;
    } else {
        playerPieces = mortyHeadPieces;
    }
    removeCellonclick();
    resetBorders();
}

// removes possible moves from old selected piece (* this is needed because the user might re-select a piece *)
function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

// resets borders to default
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
    getSelectedPiece();
}

// resets selected piece properties
function resetSelectedPieceProperties() {
    selectedPiece.pieceId = -1;
    selectedPiece.pieceId = -1;
    selectedPiece.isKing = false;
    selectedPiece.seventhSpace = false;
    selectedPiece.ninthSpace = false;
    selectedPiece.fourteenthSpace = false;
    selectedPiece.eighteenthSpace = false;
    selectedPiece.minusSeventhSpace = false;
    selectedPiece.minusNinthSpace = false;
    selectedPiece.minusFourteenthSpace = false;
    selectedPiece.minusEighteenthSpace = false;
}

// gets ID and index of the board cell its on
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(this.event.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();
}

// checks if selected piece is a king
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true;
    } else {
        selectedPiece.isKing = false;
    }
    getAvailableSpaces();
}

// gets the moves that the selected piece can make
function getAvailableSpaces() {
    if (board[selectedPiece.indexOfBoardPiece + 7] === null && 
        cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.seventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece + 9] === null && 
        cells[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.ninthSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 7] === null && 
        cells[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusSeventhSpace = true;
    }
    if (board[selectedPiece.indexOfBoardPiece - 9] === null && 
        cells[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPieceHere") !== true) {
        selectedPiece.minusNinthSpace = true;
    }
    checkAvailableJumpSpaces();
}

// gets the moves that the selected piece can jump
function checkAvailableJumpSpaces() {
    if (turn) {
        if (board[selectedPiece.indexOfBoardPiece + 14] === null 
        && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 7] >= 12) {
            selectedPiece.fourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece + 18] === null 
        && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 9] >= 12) {
            selectedPiece.eighteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 14] === null 
        && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 7] >= 12) {
            selectedPiece.minusFourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 18] === null 
        && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 9] >= 12) {
            selectedPiece.minusEighteenthSpace = true;
        }
    } else {
        if (board[selectedPiece.indexOfBoardPiece + 14] === null 
        && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 7] < 12 && board[selectedPiece.indexOfBoardPiece + 7] !== null) {
            selectedPiece.fourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece + 18] === null 
        && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece + 9] < 12 && board[selectedPiece.indexOfBoardPiece + 9] !== null) {
            selectedPiece.eighteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 14] === null && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 7] < 12 
        && board[selectedPiece.indexOfBoardPiece - 7] !== null) {
            selectedPiece.minusFourteenthSpace = true;
        }
        if (board[selectedPiece.indexOfBoardPiece - 18] === null && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
        && board[selectedPiece.indexOfBoardPiece - 9] < 12
        && board[selectedPiece.indexOfBoardPiece - 9] !== null) {
            selectedPiece.minusEighteenthSpace = true;
        }
    }
    checkPieceConditions();
}

// restricts movement if the piece is a king
function checkPieceConditions() {
    if (selectedPiece.isKing) {
        givePieceBorder();
    } else {
        if (turn) {
            selectedPiece.minusSeventhSpace = false;
            selectedPiece.minusNinthSpace = false;
            selectedPiece.minusFourteenthSpace = false;
            selectedPiece.minusEighteenthSpace = false;
        } else {
            selectedPiece.seventhSpace = false;
            selectedPiece.ninthSpace = false;
            selectedPiece.fourteenthSpace = false;
            selectedPiece.eighteenthSpace = false;
        }
        givePieceBorder();
    }
}

// gives the piece a green highlight for the user (showing its movable)
function givePieceBorder() {
    if (selectedPiece.seventhSpace || selectedPiece.ninthSpace || selectedPiece.fourteenthSpace || selectedPiece.eighteenthSpace
    || selectedPiece.minusSeventhSpace || selectedPiece.minusNinthSpace || selectedPiece.minusFourteenthSpace || selectedPiece.minusEighteenthSpace) {
        document.getElementById(selectedPiece.pieceId).style.border = "3px solid green";
        giveCellsClick();
    } else {
        return;
    }
}

// gives the cells on the board a 'click' bassed on the possible moves
function giveCellsClick() {
    if (selectedPiece.seventhSpace) {
        cells[selectedPiece.indexOfBoardPiece + 7].setAttribute("onclick", "makeMove(7)");
    }
    if (selectedPiece.ninthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 9].setAttribute("onclick", "makeMove(9)");
    }
    if (selectedPiece.fourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 14].setAttribute("onclick", "makeMove(14)");
    }
    if (selectedPiece.eighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece + 18].setAttribute("onclick", "makeMove(18)");
    }
    if (selectedPiece.minusSeventhSpace) {
        cells[selectedPiece.indexOfBoardPiece - 7].setAttribute("onclick", "makeMove(-7)");
    }
    if (selectedPiece.minusNinthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 9].setAttribute("onclick", "makeMove(-9)");
    }
    if (selectedPiece.minusFourteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 14].setAttribute("onclick", "makeMove(-14)");
    }
    if (selectedPiece.minusEighteenthSpace) {
        cells[selectedPiece.indexOfBoardPiece - 18].setAttribute("onclick", "makeMove(-18)");
    }
}

/* v when the cell is clicked v */

// makes the move that was clicked
function makeMove(number) {
    document.getElementById(selectedPiece.pieceId).remove();
    cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
    if (turn) {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="rickHeadPiece king" id="${selectedPiece.pieceId}"></p>`;
            rickHeadPieces = document.querySelectorAll("p");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="rickHeadPiece" id="${selectedPiece.pieceId}"></p>`;
            rickHeadPieces = document.querySelectorAll("p");
        }
    } else {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="mortyHeadPiece king" id="${selectedPiece.pieceId}"></span>`;
            mortyHeadPieces = document.querySelectorAll("span");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="mortyHeadPiece" id="${selectedPiece.pieceId}"></span>`;
            mortyHeadPieces = document.querySelectorAll("span");
        }
    }

    let indexOfPiece = selectedPiece.indexOfBoardPiece // must be saved as a variable becuase you CAN NOT pass object properties directly into arguments of a function.
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2); // 3rd parameter removes the piece that got jumped from the board.
    } else {
        changeData(indexOfPiece, indexOfPiece + number); // 1st. parameter = old spot (starting spot), 2nd parameter = new spot (ending spot, after jump).
    }
}

// Changes the board states data on the back end
function changeData(indexOfBoardPiece, modifiedIndex, removePiece) {
    board[indexOfBoardPiece] = null; // old spot
    board[modifiedIndex] = parseInt(selectedPiece.pieceId); // new spot with id 
    if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) { // >= 57 is the last row on the board.
        document.getElementById(selectedPiece.pieceId).classList.add("king") // adds class of "king".
    }
    if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) { // <= 7 is the first row on the board.
        document.getElementById(selectedPiece.pieceId).classList.add("king"); // adds class of "king".
    }
    if (removePiece) { // for jumped pieces to be removed from the board.
        board[removePiece] = null;
        if (turn && selectedPiece.pieceId < 12) {
            cells[removePiece].innerHTML = ""; // gives the removed piece an empty string for innerHTML since it is being completely removed from the board.
            mortyScore-- // mortys or blacks score, goes down 1 since the piece got jumped, removing it from the board.
        }
        if (turn === false && selectedPiece.pieceId >= 12) {
            cells[removePiece].innerHTML = "";
            rickScore--
        }
    }
    resetSelectedPieceProperties();
    removeCellonclick();
    removeEventListeners();
}

// removes the 'onClick' event listeners for pieces
function removeEventListeners() {
    if (turn) {
        for (let i = 0; i < rickHeadPieces.length; i++) {
            rickHeadPieces[i].removeEventListener("click", getPlayerPieces);
        }
    } else {
        for (let i = 0; i < mortyHeadPieces.length; i++) {
            mortyHeadPieces[i].removeEventListener("click", getPlayerPieces);
        }
    }
    checkForWin();
}

// Checks for a win
function checkForWin() {
    if (mortyScore === 0) {
        for (let i = 0; i < rickTurnText.length; i++) {
            rickTurnText[i].style.color = "yellow";
            mortyTurnText[i].style.display = "none";
            rickTurnText[i].textContent = "RICK WINS!";
        }
    } else if (rickScore === 0) {
        for (let i = 0; i < mortyTurnText.length; i++) {
            mortyTurnText[i].style.color = "yellow";
            rickTurnText[i].style.display = "none";
            mortyTurnText[i].textContent = "RICK WINS!";
        }
    }
    changePlayer();
}

// Switches players turn
function changePlayer() {
    if (turn) {
        turn = false;
        for (let i = 0; i < rickTurnText.length; i++) {
            rickTurnText[i].style.color = "lightgray";
            mortyTurnText[i].style.color = "yellow";    
        }
    } else {
        turn = true;
        for (let i = 0; i < mortyTurnText.length; i++) {
            mortyTurnText[i].style.color = "lightgray";
            rickTurnText[i].style.color = "yellow";
        }
    }
    givePiecesEventListeners();
}

// initialze event listeners on pieces again
givePiecesEventListeners();