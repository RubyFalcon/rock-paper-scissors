// FUNCTION getComputerChoice

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

function getHumanChoice() {
    let  keepGoing =true;
    
    while(keepGoing){
        let humanChoice = prompt("choose 'rock' , 'paper' or 'scissors");
        if (humanChoice == 'rock' || humanChoice =='paper' || humanChoice == 'scissors') {
            
            keepGoing = false;
            return humanChoice;
        }
        else{
            alert("your input was incorrect, try again.")
        }
    }
    
}
//INPUT GET choice of type string
// opponentChoice of type string = function randomChoice
//CASE  of choice:
// choise either 'rock' paper' 'scissors'
// IF choice == randomChoice => 'its a draw'
// IF choice 'rock' & random 'scissors