
const Gameboard = {gameboard:["","","",
                              "","","",
                              "","",""]};


                            //   "0","1","2"   0,4,8|0,1,2|0,3,6|1,4,7| 2,4,6|2,5,8|3,4,5|6,7,8
                            //   "3","4","5"
                            //   "6","7","8"
const Player = {};

const gamePlay = {xo:0, checkWinner:()=>{
  const winCondition = Gameboard.gameboard;
                                switch(winCondition){
                                  case winCondition[0,4,8]="X":
                                };
} };

const gameBox = document.getElementsByClassName("game-box");

const input = document.querySelectorAll(".input");


const addInput = (event) => {
    const boardKey = event.target.getAttribute("data-key");
    console.log(boardKey);

    // gamePlay.checkWinner();
    
    if(input[boardKey].innerHTML === ""){
        if(gamePlay.xo%2 === 0){
          input[boardKey].innerText = "X";
          Gameboard.gameboard[boardKey] = "X";
        }else{
          input[boardKey].innerText = "O";
          Gameboard.gameboard[boardKey] = "O";
     }
     gamePlay.xo += 1;
     
    }
    console.log(gamePlay.xo);
    console.log(event.target.dataset);
    console.log(event.target.dataset);
    console.log("-------------------");
    console.log(Gameboard.gameboard);
}

for( let i=0; i<input.length; i+=1){
    
    input[i].addEventListener("click", addInput);
    
}



   


