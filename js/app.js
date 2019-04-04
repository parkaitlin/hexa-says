console.log('linked')

// music starts immediately

// FUNCTIONS
const countdown = ()=>{
    document.getElementsByClassName('.overlay').style
    // hide start screen (display to none)
    // countdown 3-2-1
    // unblur game screen
    // 2s pause setTimeout
    // startRoundOne()
}

let i = 0;
const playSequence = ()=>{
setTimeout(()=>{
    const lightUp = document.getElementById(game.hexArray[i])
    const lightOff = document.getElementById(game.hexArray[i])
    lightUp.style.backgroundColor = "pink";
    setTimeout(()=>{
    lightOff.style.backgroundColor = "green";
    }, 1500); 
if(i === game.hexArray.length-1){
    return
} else if(i < game.hexArray.length){
    playSequence();
}
i++
},2000)
}

const checkForMatch = ()=>{
for(let i = 0; i < game.player.array.length; i++){
if(game.player.array[i] !== game.hexArray[i]){
    console.log('WRONG!')
    game.startGame = false;
    game.hexArray = []
//some animation indicating its wrong
// game over overlay display swiched to flex
//maybe blur the background too
} else if(game.player.array.length === game.hexArray.length && game.player.array[i] === game.hexArray[i]){
// some animation indicating the next round
if(game.round < 2){
    console.log('Move on to next round')
    game.player.array = [];
    game.round += 1;
// startNextRound() <--- delay for animation like 5s
} else if(game.round = 2){
    console.log('YOU WIN!')
}
} else if(game.player.array[i] === game.hexArray[i]){
console.log('NICE!')
}
}
}

//GAME
document.querySelector('.hexagons').addEventListener('click', (e)=>{
if(e.target.id !== ''){
    game.player.array.push(e.target.id); 
    document.getElementById(e.target.id).style.backgroundColor='aqua'
    setTimeout(()=>{
        document.getElementById(e.target.id).style.backgroundColor='green'
    }, 1500)
}
checkForMatch();
console.log(game.player.array); // test 
})

const startFirstRound = ()=>{
for(let i = 1; i < 5; i++){
    let randomNum = Math.floor(Math.random() * 14 + 1);
    game.hexArray.push(`hex${randomNum}`);
    console.log(game.hexArray); // test 
}
playSequence();
}

const startNextRound = ()=>{
//if game.round = (last round) call player.win() function)
}

const initiateGame = ()=>{
    game.startGame = true;
    game.player = new Player;
    game.round = 1
    // countdown();
}

const game = {
    startGame: false,
    gameInit: initiateGame,
    player:{},
    hexArray: [],
    round: 0
}

document.querySelector('.start').addEventListener('click', ()=>{
    console.log('started game') // test for click
    // initiateGame();
})


// somehow prompt (don't use prompt) player to copy sequence
// attach a event listenter for clicks on the hexagons
    // for each click --> push the e.target.id to the player array
    // compare player array to hexaArray for the current id after every click
    // maybe part of the click event --> create a function checkForMatch
        // if playerArray[i]===hexaArray[i] --> say something like nice!
        // if playerArray[i]!==hexaArray[i] ---> wrong - have an 'X' show up on the hexagon or shake it
            // overlay try again screen
            // which the button triggers start overlay

// after the player completes the sequence (so after the last array check)
// call on nextRound() (from player class)
    // animate 'round 2' 
// NEED SECOND FUNCTION TO REUSE AND ADD TO SEQUENCE
    // push two more hex(random value)s into the hexa array
    // light up divs/hexagons that are in the array one by one
    // somehow prompt (don't use prompt) player to copy sequence
        // for each click --> push the e.target.id to the player array
        // compare player array to hexaArray for the current id after every click
    // maybe part of the click event --> create a function checkForMatch
        // if playerArray[i]===hexaArray[i] --> say something like nice!
        // if playerArray[i]!==hexaArray[i] ---> wrong - have an 'X' show up on the hexagon or shake it
        // hexaArray = []
        // playerArray = []
        // startGame = false    
        // overlay try again screen
            // which the button triggers start overlay


//sequencing needs to build off of the existing array 
    // and also repeat the whole array again each round














// initiateGame function
    // startGame = true
    // player = new Player
    // countdown function

// game object:
    //startGame:false 
    //initiateGame function
    //Player: {}
    //hexaArray: []
    //playerArray: []

// countdown function
    //
    // start background music

// event listener for start button <-- background should be blurred
// initiateGame function <-- background should be blurred
// countdown function <-- background should be blurred
// game screen fadesin <-- first sequence starts

// randomizer value
    // const randomHexagon = Math.floor(Math.random() * 14)
// first sequence randomly lights up 4 hexagons (one at a time)
// after each hexagon lights up the id of the hexagon is pushed into the hexaArray
// THIS IS FIRST SEQUENCE FUNCTION