let board = document.querySelector(".board");
let gamestm = document.querySelector(".gameStatement");
let stbtn = document.querySelector(".button");
let allCells = document.querySelectorAll(".cell");
// let p1 = document.querySelector(".p1");
// let p2 = document.querySelector(".p2");

let gamePlay = false;
let turn = "X";
let count = 0;
// let p1count = 0;
// let p2count = 0;

let victoryAud = new Audio("./music/vicAud.mp3");
let tieAud = new Audio("./music/tie.mp3");
let wrongAud = new Audio("./music/wrongclickTrimmed.wev");
let gamestAud = new Audio("./music/gamestart.mp3")
let clickAud = new Audio("./music/click12.aac")

stbtn.addEventListener("click", function(){

    if (gamePlay == false) {
        stbtn.innerHTML = "Reset";
        gamestm.innerHTML = "Player X's turn";
        turn = "X";
        gamestAud.play();
        count = 0;
        // let user1Name = prompt("Enter Player 1 Name: ");
        // let user2Name = prompt("Enter Player 2 Name: ");
        
        // p1.innerHTML = `${user1Name} : 0`;
        // p2.innerHTML = `${user2Name} : 0`;
    }
    else {
        stbtn.innerHTML = "Start";
        gamestm.innerHTML = "";
        // p1.innerHTML ="";
        // p2.innerHTML = "";
        // clearGrid();
    }
    clearGrid();
    gamePlay = !gamePlay;

})

board.addEventListener("click", function (event) {

    if (gamePlay == true && event.target.innerHTML == "") {
        let cell = event.target;
        // console.log(event);
        count++;
        clickAud.play();

        if (turn == "X") {
            cell.innerHTML = turn;
            cell.style.color = "black";
            // gamestm.innerHTML = "Player 0's turn"
            turn = "0";
        }
        else {
            cell.innerHTML = turn;
            cell.style.color = "red";
            turn = "X";
            // gamestm.innerHTML = "Player X's turn"
        }

        gamestm.innerHTML = `Player ${turn}'s turn`

        let output = checkWin();
        // console.log(output);

        if(output == 2){
            victoryAud.play();
            gamestm.innerHTML = "Player X win the game";
            //clearGrid();
            // p2.innerHTML = `${user1Name} : ${p2count}`;
            // p2count++;

            restart();
        }
        else if(output == 1){
            victoryAud.play();
            gamestm.innerHTML = "Player 0 win the game";
            //clearGrid();
            // p1count++;
            // p1.innerHTML = `${user1Name} : ${p1count}`;
            restart();

        }
        else if(count == 9){
            tieAud.play();
            gamestm.innerHTML = "TIE";
            //clearGrid();
            restart();
        }
    }
    else{
        wrongAud.play();
    }
})

function checkWin(){
    if ((allCells[0].innerHTML=="X" && allCells[1].innerHTML=="X" && allCells[2].innerHTML=="X") ||
        (allCells[3].innerHTML=="X" && allCells[4].innerHTML=="X" && allCells[5].innerHTML=="X") ||
        (allCells[6].innerHTML=="X" && allCells[7].innerHTML=="X" && allCells[8].innerHTML=="X") ||
        (allCells[0].innerHTML=="X" && allCells[3].innerHTML=="X" && allCells[6].innerHTML=="X") ||
        (allCells[1].innerHTML=="X" && allCells[4].innerHTML=="X" && allCells[7].innerHTML=="X") ||
        (allCells[2].innerHTML=="X" && allCells[5].innerHTML=="X" && allCells[8].innerHTML=="X") ||
        (allCells[0].innerHTML=="X" && allCells[4].innerHTML=="X" && allCells[8].innerHTML=="X") ||
        (allCells[2].innerHTML=="X" && allCells[4].innerHTML=="X" && allCells[6].innerHTML=="X")

    ) {
        return 2;
    }
    else if ((allCells[0].innerHTML=="0" && allCells[1].innerHTML=="0" && allCells[2].innerHTML=="0") ||
            (allCells[3].innerHTML=="0" && allCells[4].innerHTML=="0" && allCells[5].innerHTML=="0") ||
            (allCells[6].innerHTML=="0" && allCells[7].innerHTML=="0" && allCells[8].innerHTML=="0") ||
            (allCells[0].innerHTML=="0" && allCells[3].innerHTML=="0" && allCells[6].innerHTML=="0") ||
            (allCells[1].innerHTML=="0" && allCells[4].innerHTML=="0" && allCells[7].innerHTML=="0") ||
            (allCells[2].innerHTML=="0" && allCells[5].innerHTML=="0" && allCells[8].innerHTML=="0") ||
            (allCells[0].innerHTML=="0" && allCells[4].innerHTML=="0" && allCells[8].innerHTML=="0") ||
            (allCells[2].innerHTML=="0" && allCells[4].innerHTML=="0" && allCells[6].innerHTML=="0")
    ) {
        return 1;
    }
    else {
        return 0;
    }
}

function clearGrid() {
    for (let i = 0; i < allCells.length; i++) {
        allCells[i].innerHTML = "";
    }
}

function restart(){
    stbtn.innerHTML = "Game is Starting";
    stbtn.disabled = true;
    board.classList.add("disabled");

    setTimeout(function(){
        clearGrid();
        stbtn.disabled = false;
        board.classList.remove("disabled");
        stbtn.click();

    },3000)
}





















