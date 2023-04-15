
const Gameboard = {gameboard:["","","",
                              "","","",
                              "","",""]};


                            //   "0","1","2"   0,4,8|0,1,2|0,3,6|1,4,7| 2,4,6|2,5,8|3,4,5|6,7,8
                            //   "3","4","5"
                            //   "6","7","8"
const Player = { };

const gamePlay = {xo:0,
                 gameWon:false,
                 checkWinner:()=>{
                    const wC = Gameboard.gameboard;
                    const winCondition = {1:[wC[0],wC[4],wC[8]],2:[wC[0],wC[1],wC[2]],3:[wC[0],wC[3],wC[6]],
                                          4:[wC[1],wC[4],wC[7]],5:[wC[2],wC[4],wC[6]],6:[wC[2],wC[5],wC[8]],
                                          7:[wC[3],wC[4],wC[5]],8:[wC[6],wC[7],wC[8]]}
                            
                          for(let i=1; i<10; i+=1){
                          
                            if(winCondition[i].join() === "X,X,X" || winCondition[i].join() === "O,O,O"){
                              console.log("SOMEONE WON");
                               gamePlay.gameWon = true;
                               Gameboard.gameboard = ["","","","","","","","",""];
                              break;
                            }                
                          }// return gamePlay.gameWon;
                 },
                 input :document.querySelectorAll(".input"),
                 addInput:(event) => {
                  if(gamePlay.gameWon === false){
                  const boardKey = event.target.getAttribute("data-key");
                  
                  if(gamePlay.input[boardKey].innerHTML === ""){
                      if(gamePlay.xo%2 === 0){
                        gamePlay.input[boardKey].innerText = "X";
                        Gameboard.gameboard[boardKey] = "X";
                      }else{
                        gamePlay.input[boardKey].innerText = "O";
                        Gameboard.gameboard[boardKey] = "O";
                   };
                   gamePlay.xo += 1;
                   
                  }
                }
                  // console.log(gamePlay.xo);
                  // console.log(event.target.dataset);
                  // console.log(event.target.dataset);
              },
              reset:()=>{
                console.log(gamePlay.gameWon)
                for(let i=0; i<gamePlay.input.length;i+=1){
                  gamePlay.input[i].innerText = "";
                }
                gamePlay.gameWon = false;
                
                
              },
              startGame:()=>{
                
                  if(gamePlay.gameWon === false){
                  for( let i=0; i<gamePlay.input.length; i+=1){
                    gamePlay.input[i].addEventListener("click", gamePlay.addInput);
                    gamePlay.input[i].addEventListener("click", gamePlay.checkWinner);
                  }
                }
                
                
                
              },
          };

// const gameBox : document.getElementsByClassName("game-box");








