let r
let countP=0,countC = 0


//creating elements
const div = document.createElement('div')
const btnRock = document.createElement('button')
btnRock.innerText="Rock"
btnRock.id="rock"

const btnPaper= document.createElement('button')
btnPaper.innerText="Paper"
btnPaper.id="paper"

const btnScissors = document.createElement('button')
btnScissors.innerText="Scissors"
btnScissors.id="scissors"

const btnAgain = document.createElement('button')
btnAgain.innerText="Again?"
btnAgain.id="again"

function getComputerChoice(){
    let rps = ['rock','paper','scissors']
    let choice = rps[Math.floor(Math.random()*rps.length)];
    console.log("Computer's choice: "+choice)
    return choice;
    
}

function playRound(playerSelection,computerSelection){
    let result
    switch(playerSelection){
        case "rock":
            if(computerSelection.toLowerCase()==="paper"){
                result =  "You Lose! Paper beats Rock"
                r=-1
            }
            else if(computerSelection.toLowerCase()==="scissors"){
                result =  "You Win! Rock beats Scissors"
                r=1
            }
            else{
                result =  "A Tie"
                r=0
            }
            break
        case "scissors":
            if(computerSelection.toLowerCase()==="paper"){
                result=  "You Win! Scissors beats Paper"
                r=1
            }
            else if(computerSelection.toLowerCase()==="rock"){
                result =  "You Lose! Rock beats Scissors"
                r=-1
            }
            else{
                result =  "A Tie"
                r=0
            }
            break
        case "paper":
            if(computerSelection.toLowerCase()==="rock"){
                result =  "You Win! Paper beats Rock"
                r=1
            }
            else if(computerSelection.toLowerCase()==="scissors"){
                result =  "You Lose! Scissors beats Paper"
                r=-1
            }
            else{
                result = "A Tie"
                r=0
            }
            break  
    }
    return result
}
btnAgain.hidden=true
function reset(){
    countC=0
    countP=0
    computerSelection=''
    
    btnRock.disabled=true
    btnPaper.disabled=true
    btnScissors.disabled=true
    btnAgain.hidden=false
}


function game(playerSelection,computerSelection){
    
    let res
        res = playRound(playerSelection,computerSelection)
        if(r==1){
            countP++
         }
         else if(r==-1){
            countC++
         }
         
        div.innerText= res+"\n"+`Player: ${countP}, Computer: ${countC}`
         if(countP==5){
            div.innerText+=`\n player wins`
            reset()
         }
         else if(countC==5){
                div.innerText+=`\n computer wins`
                reset()
         }
   
}
//add to document
document.body.appendChild(btnRock)
document.body.appendChild(btnPaper)
document.body.appendChild(btnScissors)
document.body.appendChild(div)
document.body.appendChild(btnAgain)
  
//event listeners
btnRock.addEventListener('click', (e)=>{
    const computerSelection = getComputerChoice()
    game(e.target.id,computerSelection)
})
btnPaper.addEventListener('click', (e)=>{
    const computerSelection = getComputerChoice()
    game(e.target.id,computerSelection)})
btnScissors.addEventListener('click', (e)=>{
    const computerSelection = getComputerChoice()
    game(e.target.id,computerSelection)})
btnAgain.addEventListener('click', ()=>{
    btnRock.disabled=false
    btnPaper.disabled=false
    btnScissors.disabled=false
    btnAgain.hidden=true
    div.innerText=''
})

