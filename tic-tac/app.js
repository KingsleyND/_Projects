
const Gameboard = {gameboard:["","","",
                              "","","",
                              "","",""]};


                            //   "0","1","2"   0,4,8|0,1,2|0,3,6|1,4,7| 2,4,6|2,5,8|3,4,5|6,7,8
                            //   "3","4","5"
                            //   "6","7","8"
const Player = {player1Name : document.querySelector("#p1-name"),
                player2Name : document.querySelector("#p2-name"),
            addPlayerName: ()=>{
              Player.player1Name.innerHTML =  document.getElementById("p1name").value;
              Player.player2Name.innerHTML =  document.getElementById("p2name").value;
},
score: {player1:0,
        player2:0},
        scoreDisplay: {p1scoreDisplay: document.querySelector("#player-1-score"), p2scoreDisplay:document.querySelector("#player-2-score") }
 };
// gamePlay.streakCounter.X === 3|| gamePlay.streakCounter.O ===3
const gamePlay = {xo:0,
                defaultDomState: document.body.innerHTML,
                 gameWon:false,
                 streakCounter:{X: 0, O: 0, checkStreak: ()=>{if(gamePlay.streakCounter.X === 3|| gamePlay.streakCounter.O ===3){
                  return true;}
                }
                },
                winnerDisplay: document.querySelector(".player-name"),
                 checkWinner:()=>{
                    const wC = Gameboard.gameboard;
                    const winCondition = {1:[wC[0],wC[4],wC[8]],2:[wC[0],wC[1],wC[2]],3:[wC[0],wC[3],wC[6]],
                                          4:[wC[1],wC[4],wC[7]],5:[wC[2],wC[4],wC[6]],6:[wC[2],wC[5],wC[8]],
                                          7:[wC[3],wC[4],wC[5]],8:[wC[6],wC[7],wC[8]]}
                            
                          for(let i=1; i<10; i+=1){
                          
                            if(winCondition[i].join() === "X,X,X" || winCondition[i].join() === "O,O,O"){
                              console.log("SOMEONE WON");
                              if(winCondition[i].join() === "X,X,X"){
                                gamePlay.streakCounter.O = 0;
                                gamePlay.streakCounter.X += 1;
                                Player.score.player1 +=1;
                              }else if(winCondition[i].join() === "O,O,O"){
                                gamePlay.streakCounter.X = 0;
                                gamePlay.streakCounter.O +=1;
                                Player.score.player2 +=1;
                              }
                               gamePlay.gameWon = true;
                               Gameboard.gameboard = ["","","","","","","","",""];
                              break;
                            }              
                          }
                          if(gamePlay.streakCounter.X === 3|| gamePlay.streakCounter.O ===3){
                            if(gamePlay.streakCounter.X === 3){
                            gamePlay.winnerDisplay.innerHTML = `${Player.player1Name.innerHTML} Won! -Three win streak`
                            }else if(gamePlay.streakCounter.O ===3){
                              gamePlay.winnerDisplay.innerHTML = `${Player.player2Name.innerHTML} Won! -Three win streak`
                            }
                          } 
                          Player.scoreDisplay.p1scoreDisplay.innerHTML = Player.score.player1;
                          Player.scoreDisplay.p2scoreDisplay.innerHTML = Player.score.player2;
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
                document.getElementById("p1name").value = "";
                document.getElementById("p2name").value = "";
                // document.querySelector("#p1-name").innerHTML = "Player 1";
                
                gamePlay.gameWon = false;
                gamePlay.xo += 2;
                
              },
              
              startGame:()=>{
                
                  if(gamePlay.gameWon === false){
                    Player.addPlayerName();
                  for( let i=0; i<gamePlay.input.length; i+=1){
                    gamePlay.input[i].addEventListener("click", gamePlay.addInput);
                    gamePlay.input[i].addEventListener("click", gamePlay.checkWinner);
                  }
                }
                
                
                
              },

          };
                
// const gameBox : document.getElementsByClassName("game-box");


