
const Gameboard = {gameboard:["","","",
                              "","","",
                              "","",""]};


                            //   "0","1","2"   0,4,8|0,1,2|0,3,6|1,4,7| 2,4,6|2,5,8|3,4,5|6,7,8
                            //   "3","4","5"
                            //   "6","7","8"
const Player = {};

const gamePlay = {xo:0, checkWinner:()=>{
  const wC = Gameboard.gameboard;
  const winCondition = {1:[wC[0],wC[4],wC[8]],2:[wC[0],wC[1],wC[2]],3:[wC[0],wC[3],wC[7]],
                        4:[wC[1],wC[4],wC[7]],5:[wC[2],wC[4],wC[6]],6:[wC[2],wC[5],wC[8]],
                        7:[wC[3],wC[4],wC[5]],8:[wC[6],wC[7],wC[8]]};
          
              for(let i=1; i<10; i+=1){
              
                if(winCondition[i].join() === "X,X,X" || winCondition[i].join() === "O,O,O"){
                   console.log("SOMEONE WON");
                   const gameWon = true;
                   break
                }else{  //  console.log(winCondition[i].join()+ i); 
                  
                }
              }
            },
            
           };

// const gameBox = document.getElementsByClassName("game-box");

const input = document.querySelectorAll(".input");


const addInput = (event) => {
    const boardKey = event.target.getAttribute("data-key");
    // console.log(boardKey);

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
    // console.log(gamePlay.xo);
    // console.log(event.target.dataset);
    // console.log(event.target.dataset);

}

for( let i=0; i<input.length; i+=1){
    input[i].addEventListener("click", addInput);
    input[i].addEventListener("click", gamePlay.checkWinner);
    
}




