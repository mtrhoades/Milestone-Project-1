
// Adding Wubbah lubbah dub dub phrase at the bottom.
const funnyPhrase = document.createElement('h2');
funnyPhrase.setAttribute('id', 'funnyPhrase');
funnyPhrase.textContent = "Wubbah lubbah dub dub!";
funnyPhrase.style.color = "white";
document.body.append(funnyPhrase);

    
// Make Array for checkers board.

const checkersBoard = [
    null, 0, null, 1, null, 2, null, 3,
    4, null, 5, null, 6, null, 7, null,
    null, 8, null, 9, null, 10, null, 11,
    null, null, null, null, null, null, null, null,
    null, null, null, null, null, null, null, null,
    12, null, 13, null, 14, null, 15, null,
    null, 16, null, 17, null, 18, null, 19,
    20, null, 21, null, 22, null, 23, null
]


// Find each piece on board: (using parse to turn string id into a number id)
let findPiece = function (pieceId) {
    let parsed = parseInt(pieceId);
    return checkersBoard.indexOf(parsed);
};

// DOM Selectors:
const cells = document.querySelectorAll("td")
let rickHeadPieces = document.querySelectorAll("p")
let mortyHeadPieces = document.querySelectorAll("span")
const rickTurnText = document.querySelectorAll(".rickTurnText")
const mortyTurnText = document.querySelectorAll(".mortyTurnText")
const divider = document.querySelector("#divider")


// Player properties:
let turn = true;
let rickScore = 12;
let mortyScore = 12;
let playerPieces;

// Create object to hold the properties of the pieces:
let selectedPiece = {
    pieceId: -1,
    indexOfBoardPiece: -1,
    isKing: false,
    seventhSpace: false,
    ninthSpace: false,
    fourteenthSpace: false,
    eighteenthSpace: false,
    minusSeventhSpace: false,
    minusNinthSpace: false,
    minusFourteenthSpace: false,
    minusEighteenthSpace: false
}

// Initialize event listeners on pieces:
function addPiecesEventListener() {
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


// Hold the length of players piece count:
function getPlayerPieces() {
    if (turn) {
        playerPieces = rickHeadPieces;
    } else {
        playerPieces = mortyHeadPieces;
    }
    removeCellonclick();
    resetBorders();
}

// Function for removing possible moves from old selected piece:
function removeCellonclick() {
    for (let i = 0; i < cells.length; i++) {
        cells[i].removeAttribute("onclick");
    }
}

// Reset borders to default:
function resetBorders() {
    for (let i = 0; i < playerPieces.length; i++) {
        playerPieces[i].style.border = "1px solid white";
    }
    resetSelectedPieceProperties();
    getSelectedPiece();
}

// Reset all properties of selected piece:
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

// Selects id and index of checkersboard array cell it is on:
function getSelectedPiece() {
    selectedPiece.pieceId = parseInt(event.target.id);
    selectedPiece.indexOfBoardPiece = findPiece(selectedPiece.pieceId);
    isPieceKing();
}

// Make function for if the piece is king or not:
function isPieceKing() {
    if (document.getElementById(selectedPiece.pieceId).classList.contains("king")) {
        selectedPiece.isKing = true;
    } else {
        selectedPiece.isKing = false;
    }
    getAvailableSpaces();
}

// Create function for getting available spaces to move piece to:
function getAvailableSpaces() {
    if (checkersBoard[selectedPiece.indexOfBoardPiece + 7] === null &&
        cells[selectedPiece.indexOfBoardPiece + 7].classList.contains("noPieceHere") !== true) {
            selectedPiece.seventhSpace = true;
        }
    if (checkersBoard[selectedPiece.indexOfBoardPiece + 9] === null &&
        cells[selectedPiece.indexOfBoardPiece + 9].classList.contains("noPieceHere") !== true) {
            selectedPiece.ninthSpace = true;
        }
    if (checkersBoard[selectedPiece.indexOfBoardPiece - 7] === null &&
        cells[selectedPiece.indexOfBoardPiece - 7].classList.contains("noPieceHere") !== true) {
            selectedPiece.minusSeventhSpace = true;
        }
    if (checkersBoard[selectedPiece.indexOfBoardPiece - 9] === null &&
        cells[selectedPiece.indexOfBoardPiece - 9].classList.contains("noPieceHere") !== true) {
            selectedPiece.minusNinthSpace = true;
        }
    checkAvailableJumpSpaces();
}

// Make function for finding available jump spaces:
function checkAvailableJumpSpaces() {
    if (turn) {
        if (checkersBoard[selectedPiece.indexOfBoardPiece + 14] === null
            && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece + 7] >= 12) {
                selectedPiece.fourteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece + 18] === null
            && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece + 9] >= 12) {
                selectedPiece.eighteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece - 14] === null
            && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece - 7] >= 12) {
                selectedPiece.minusFourteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece - 18] === null
            && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece - 9] >= 12) {
                selectedPiece.minusEighteenthSpace = true;
            }
    
    } else {
        if (checkersBoard[selectedPiece.indexOfBoardPiece + 14] === null
            && cells[selectedPiece.indexOfBoardPiece + 14].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece + 7] < 12 && checkersBoard[selectedPiece.indexOfBoardPiece + 7] !== null) {
                selectedPiece.fourteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece + 18] === null
            && cells[selectedPiece.indexOfBoardPiece + 18].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece + 9] < 12 && checkersBoard[selectedPiece.indexOfBoardPiece + 9] !== null) {
                selectedPiece.eighteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece - 14] === null
            && cells[selectedPiece.indexOfBoardPiece - 14].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece - 7] < 12 && checkersBoard[selectedPiece.indexOfBoardPiece - 7] !== null) {
                selectedPiece.minusFourteenthSpace = true;
            }
        if (checkersBoard[selectedPiece.indexOfBoardPiece - 18] === null
            && cells[selectedPiece.indexOfBoardPiece - 18].classList.contains("noPieceHere") !== true
            && checkersBoard[selectedPiece.indexOfBoardPiece - 9] < 12 && checkersBoard[selectedPiece.indexOfBoardPiece - 9] !== null) {
                selectedPiece.minusEighteenthSpace = true;
            }
    }
    checkPieceConditions();
}

// Make function for checking if piece is king or not (restricts movement):
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

// Define givePieceBorder function for highlighting piece when it is selected:
function givePieceBorder() {
    if (selectedPiece.seventhSpace || selectedPiece.ninthSpace || selectedPiece.fourteenthSpace || selectedPiece.eighteenthSpace
        || selectedPiece.minusSeventhSpace || selectedPiece.minusNinthSpace || selectedPiece.minusFourteenthSpace || selectedPiece.minusEighteenthSpace) {
            document.getElementById(selectedPiece.pieceId).style.border = "3px solid green";
            giveCellsClick();
        } else {
            return;
        }
}

// Define function for giveCellsClick to give onclick attribute for selected pieces to move:
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

// Define makeMove function for making the moves when clicked:
function makeMove(number) {
    document.getElementById(selectedPiece.pieceId).remove();
    cells[selectedPiece.indexOfBoardPiece].innerHTML = "";
    if (turn) {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="rickHeadPiece-King" id="${selectedPiece.pieceId}"></p>`;
            rickHeadPieces = document.querySelectorAll("p");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<p class="rickHeadPiece" id="${selectedPiece.pieceId}"></p>`;
            rickHeadPieces = document.querySelectorAll("p");
        }
    } else {
        if (selectedPiece.isKing) {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="mortyHeadPiece-King" id="${selectedPiece.pieceId}"></span>`;
            mortyHeadPieces = document.querySelectorAll("span");
        } else {
            cells[selectedPiece.indexOfBoardPiece + number].innerHTML = `<span class="mortyHeadPiece" id="${selectedPiece.pieceId}"></span>`;
            mortyHeadPieces = document.querySelectorAll("span");
        }
    }
    let indexOfPiece = selectedPiece.indexOfBoardPiece
    if (number === 14 || number === -14 || number === 18 || number === -18) {
        changeData(indexOfPiece, indexOfPiece + number, indexOfPiece + number / 2);
    } else {
        changeData(indexOfPiece, indexOfPiece + number);
    }
}

// Define the changeData function for the back-end data manipulation:
function changeData(indexOfBoardPiece, modifiedIndex, removePiece) {
    checkersBoard[indexOfBoardPiece] = null;
    checkersBoard[modifiedIndex] = parseInt(selectedPiece.pieceId);
    if (turn && selectedPiece.pieceId < 12 && modifiedIndex >= 57) {
        document.getElementById(selectedPiece.pieceId).classList.add("king")
    }
    if (turn === false && selectedPiece.pieceId >= 12 && modifiedIndex <= 7) {
        document.getElementById(selectedPiece.pieceId).classList.add("king");
    }
    if (removePiece) {
        checkersBoard[removePiece] = null;
        if (turn && selectedPiece.pieceId < 12) {
            cells[removePiece].innerHTML = "";
            mortyScore--
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

// function for removing onclick event listeners for pieces:
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

// Define the checkForWin function to determine if there is a winner yet:
function checkForWin() {
    if (mortyScore === 0) {
        divider.style.display = "none";
        for (let i = 0; i < rickTurnText.length; i++) {
            rickTurnText[i].style.color = "yellow";
            mortyTurnText[i].style.display = "none";
            rickTurnText[i].textContent = "RICK WINS!";
        }
    } else if (rickScore === 0) {
        divider.style.display = "none";
        for (let i = 0; i < mortyTurnText.length; i++) {
            mortyTurnText[i].style.color = "yellow";
            rickTurnText[i].style.display = "none";
            mortyTurnText[i].textContent = "RICK WINS!";
        }
    }
    changePlayer();
}

// Define function changePlayer to switch players turn:
function changePlayer() {
    if (turn) {
        turn = false;
        for (let i = 0; i < rickTurnText.length; i++) {
            rickTurnText[i].style.color = "lightGrey";
            mortyTurnText[i].style.color = "white";
        }
    } else {
        turn = true;
        for (let i = 0; i < mortyTurnText.length; i++) {
            mortyTurnText[i].style.color = "lightGrey";
            rickTurnText[i].style.color = "white";
        }
    }
    addPiecesEventListener();
}

// Calling function from beginning (globally scoped):
addPiecesEventListener();




/* ***********************************************************************************************************************************************/



// // Appending the rick & morty head pieces to start the game.

// function for appending rick and morty heads as supposed to hard coding to each specific cell id.
// let mortyHeadArray = document.querySelectorAll(".mortyHeadPiece")

// for (let i = 0; i < mortyHeadArray.length; i++) {
//     let mortyImage = document.createElement('img');
//     mortyImage.setAttribute('id', 'mortyHead')
//     mortyImage.src = './assets/mortyhead3.png';
//     let mortyBlackSquare = document.getElementsByTagName("id");
//     mortyBlackSquare.appendChild(mortyImage);

// }


// Mortys:

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

// // // Ricks:

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


