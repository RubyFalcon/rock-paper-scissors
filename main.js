// FUNCTION getComputerChoice
// gets x as random numbner between 0 and 2
// assign 0 to 'rock', 1 to 'paper', 2 to scissors using IF statements
// return our random choice

function getComputerChoice() {
    let x = Math.floor(Math.random()* 3) ;
    let choice;
    if (x == 0){
        choice ='rock';
    }
    else if (x == 1){
        choice = 'paper';
    }
    else {
        choice = 'scissors';
    }
    return choice;
}

// GET input from human
// LOOP forever until human provides either 'rock' , 'paper' or 'scissors'
// IF input is allowed, return humanChoice
// ELSE alert use that their input is incorrect and to try again
function getHumanChoice() {
    let  keepGoing =true;
    
    while(keepGoing){
        let humanChoice = prompt("choose 'rock' , 'paper' or 'scissors");
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == 'rock' || humanChoice =='paper' || humanChoice == 'scissors') {
            
            keepGoing = false;
            return humanChoice;
        }
        else{
            alert("your input was incorrect, try again.")
        }
    }
    
}

//GET humanScore and computerScore variables, INITIALIZE to 0
let humanScore = 0;
let computerScore = 0;


//FUNCTION playRound()
// compare choices and return a winner
function playRound(humanChoice, computerChoice){
    const result = document.querySelector("#result");
    let humanScorecontainter = document.querySelector('#humanscore');
    let computerScorecontainer = document.querySelector('#computerscore')
     if(humanChoice == computerChoice){
        result.textContent = "It's a draw!";
        console.log("Its a draw");
     }
     else if((humanChoice== 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock' ) || (humanChoice == 'scissors' && computerChoice == 'paper')){
        result.textContent = "Congrats you won!";
        humanScore += 1;
     }
     else {
        result.textContent = 'You lost, unlucky';
        computerScore += 1;
     }
     humanScorecontainter.textContent = humanScore;
     computerScorecontainer.textContent = computerScore;
    //  console.log(`human: ${humanScore}, computer: ${computerScore}`);
}


// FUNCTION playGame to play 5 rounds
function playGame(){
    
        const buttons = document.querySelector("div")
        buttons.addEventListener("click", (e)=> {
            const target = e.target;
           
            if (target.id == 'rock' || target.id =='paper' || target.id == 'scissors'){
                const computerSelection = getComputerChoice();
                let humanChoice;
                switch(target.id) {
                    case('rock'):
                    humanChoice = 'rock';
                    console.log('rock');
                    break;
                    case('scissors'):
                    humanChoice = 'scissors';
                    break;
                    case('paper'):
                    humanChoice = 'paper';
                    break;
                }
                playRound(humanChoice, computerSelection);  
            }
            
        })
        
        
     
 
}
 playGame();

//INPUT GET choice of type string
// opponentChoice of type string = function randomChoice
//CASE  of choice:
// choise either 'rock' paper' 'scissors'
// IF choice == randomChoice => 'its a draw'
// IF choice 'rock' & random 'scissors