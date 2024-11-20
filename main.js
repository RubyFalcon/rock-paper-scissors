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
//INPUT GET choice of type string
// opponentChoice of type string = function randomChoice
//CASE  of choice:
// choise either 'rock' paper' 'scissors'
// IF choice == randomChoice => 'its a draw'
// IF choice 'rock' & random 'scissors