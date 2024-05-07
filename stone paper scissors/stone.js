let userscore = 0;
let comscore = 0;
const choices = document.querySelectorAll(".choice");

const msg=document.querySelector("#msg");
const userScorepara= document.querySelector("#user-score");

const comScorepara= document.querySelector("#Computer-score");

const gencompchoice = () => {
  const option = [" rock", "paper", " scissor"];
  const randIdx = Math.floor(Math.random() * 3);
  return option[randIdx];
};

const drowgame = () => {
   
  console.log("game was drow");

  
  msg.innerText="game was drow .play again";
 
};

const showWinner = (userWin)=>{
    userscore++;
    userScorepara.innerText= userscore;
    if( userWin){
       

        msg.innerText="you win!";
        msg.style.backgroundColor = " green";
    }
    else{

      comscore++;
        comScorepara.innerText= comscore;
       
        msg.innerText="you lose!";
        msg.style.backgroundColor = " red";
    }
}
const playGame = (userchoice) => {
  console.log("user choice", userchoice);
  const comchoice = gencompchoice();
  console.log(" Computer choice", comchoice);

  if (userchoice === comchoice) {
    drowgame();
  }
  else{
    let useeWin = true;
    if (userchoice ==="rock"){
        useeWin=comchoice==="paper"? false:true;
    }
    else if( userchoice==="paper"){
        useeWin=comchoice==="scissors"? false:true;
    }
    else{
        comchoice==="rock"?false:true;
    }
    showWinner(useeWin);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    // console.log("choice was clicked",userchoice);
    playGame(userchoice);
  });
});
