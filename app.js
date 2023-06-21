
function getComputerChoice(){
    let choice = Math.floor(Math.random()*3);
    switch(choice){
        case 0:
            choice = "Rock"
            break
        case 1:
            choice="Paper"
            break
        case 2:
            choice="Scissors"
            break
    }
    console.log("Computer's choice: "+choice)
    return choice;
    
}
function playRound(playerSelection,computerSelection){
    let result
    switch(playerSelection){
        case "rock":
            if(computerSelection.toLowerCase()==="paper"){
                result =  "You Lose! Paper beats Rock"
            }
            else if(computerSelection.toLowerCase()==="scissors"){
                result =  "You Win! Rock beats Scissors"
            }
            else{
                result =  "A Tie"
            }
            break
        case "scissors":
            if(computerSelection.toLowerCase()==="paper"){
                result=  "You Win! Scissors beats Paper"
            }
            else if(computerSelection.toLowerCase()==="rock"){
                result =  "You Lose! Rock beats Scissors"
            }
            else{
                result =  "A Tie"
            }
            break
        case "paper":
            if(computerSelection.toLowerCase()==="rock"){
                result =  "You Win! Paper beats Rock"
            }
            else if(computerSelection.toLowerCase()==="scissors"){
                result =  "You Lose! Scissors beats Paper"
            }
            else{
                result = "A Tie"
            }
            break  
    }
    return result
}
function game(playerSelection,computerSelection){
    let res
    let countP=0,countC = 0
    for (let index = 0; index < 5; index++) {
        res = playRound(playerSelection,computerSelection)
        if(res.slice(4,7)==="Win"){
            countP++
         }
         else if(res.slice(4,8)==="Lose"){
            countC++
         }
         
        return res+"\n"+`Player: ${countP}, Computer: ${countC}`
    }
   
}

const playerSelection =  prompt("Your Move:")
const computerSelection = getComputerChoice()
console.log(game(playerSelection, computerSelection))