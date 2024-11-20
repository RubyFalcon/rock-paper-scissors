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
   
     if(humanChoice == computerChoice){
        
        console.log("Its a draw");
     }
     else if((humanChoice== 'rock' && computerChoice == 'scissors') || (humanChoice == 'paper' && computerChoice == 'rock' ) || (humanChoice == 'scissors' && computerChoice == 'paper')){
        console.log("Congrats you won!");
        humanScore += 1;
     }
     else {
        console.log('You lost, unlucky')
        computerScore += 1;
     }
     console.log(`human: ${humanScore}, computer: ${computerScore}`);
}


// FUNCTION playGame to play 5 rounds
function playGame(){
    let i = 0;
    while (i < 5) {
        i++;
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}
 
playGame();
//INPUT GET choice of type string
// opponentChoice of type string = function randomChoice
//CASE  of choice:
// choise either 'rock' paper' 'scissors'
// IF choice == randomChoice => 'its a draw'
// IF choice 'rock' & random 'scissors