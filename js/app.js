
const audio = document.querySelector("audio");
const body = document.querySelector('body');
body.width = window.innerWidth
body.height = window.innerHeight

// FUNCTIONS
const firstFlip = ()=>{
    document.querySelector('div#hex1.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex2.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex3.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex4.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex5.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex6.setOneHexagon').classList.toggle('is-flipped');
    document.querySelector('div#hex7.setOneHexagon').classList.toggle('is-flipped');
}

let i = 0;
const playSequence = ()=>{
    game.playersTurn = false
    setTimeout(()=>{
        const lightUpLeft = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[1];
        const lightOffLeft = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[1];
        
        const lightUpMid = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[3];
        const lightOffMid = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[3];

        const lightUpRight = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[5];
        const lightOffRight = document.querySelector(`#${game.hexArray[i]}`).lastElementChild.childNodes[5];
        
        lightUpLeft.style.borderRight = "30px solid rgba(206,186,199,1)";
        lightUpMid.style.backgroundColor = "rgba(206,186,199,1)";
        lightUpRight.style.borderLeft = "30px solid rgba(206,186,199,1)";

        setTimeout(()=>{
        lightOffLeft.style.borderRight = "30px solid rgba(206,186,199,0.5)";
        lightOffMid.style.backgroundColor = "rgba(206,186,199,0.5)";
        lightOffRight.style.borderLeft = "30px solid rgba(206,186,199,0.5)";
    }, 500); 
if(i === game.hexArray.length - 1){
    i = 0;
    game.playersTurn = true
    playerTurn();
    return
} else if(i < game.hexArray.length){
    playSequence();
}
i++
},800)
}

const playerTurn = ()=>{
    setTimeout(()=>{
        document.getElementById('your-turn').style.display="flex";
        setTimeout(()=>{
            document.getElementById('your-turn').style.display="none";
        }, 900);
    }, 600)
}

const checkForMatch = ()=>{
for(let i = 0; i < game.player.array.length; i++){
if(game.player.array[i] !== game.hexArray[i]){
    game.startGame = false;
    game.playersTurn = false;
    game.hexArray = []
    document.querySelector('.flowers').style.animation="shake 1s ease-in"
    setTimeout(()=>{
        audio.pause();
        document.querySelector('.second-overlay').style.display="flex"
        document.querySelector('.flowers').style.filter="blur(5px)"    
    }, 1000);
} else if(game.player.array.length === game.hexArray.length && game.player.array[i] === game.hexArray[i]){
    if(game.round < 30){
        game.playersTurn = false;
        game.player.array = [];
        game.player.score += 10
        game.round += 1;
        document.querySelector('.score').innerText=`score: ${game.player.score}`;
        document.querySelector('.rnd').innerText=`round: ${game.round}`;
        announceRnd();
        addHexagon();
        startNextRound();
    } else if(game.round = 30){ //will initiate Winning screen
        game.playersTurn = false;
        document.getElementById('winner').style.display='flex'
    }
    } else if(game.player.array[i] === game.hexArray[i]){
        game.player.score += 1;
        document.querySelector('.score').innerText=`score: ${game.player.score}`;
    }
}
}

const announceRnd = ()=>{
setTimeout(()=>{
    document.querySelector('.flowers').style.filter="none"
    document.getElementById('round-num').innerText=`ROUND ${game.round}`;
    document.getElementById('round-num').style.display="flex";
setTimeout(()=>{
    document.getElementById('round-num').style.display="none";
}, 2000);
}, 800);
}

const addHexagon = ()=>{
let i = game.platform.length + 1;
if(i <= 14){
game.platform.push(`hex${i}`);
setTimeout(()=>{
    document.querySelector(`div#hex${i}.newHexagon`).classList.toggle('is-flipped');
}, 1800);
}
}

const startFirstRound = ()=>{
for(let i = 1; i < 4; i++){
    let randomArray = Math.floor(Math.random() * 7 + 1);
    game.hexArray.push(`hex${randomArray}`);
}
playSequence();
}

const startNextRound = ()=>{
for(let i = 1; i < 2; i++){
    let randomNum = Math.floor(Math.random()* game.platform.length + 1);
    game.hexArray.push(`hex${randomNum}`);
    console.log(game.hexArray);
}
setTimeout(()=>{
    playSequence();
}, 2800);
}

//Game
const initiateGame = ()=>{
game.startGame = true;
game.player = new Player;
game.round = 1
document.querySelector('.first-overlay').style.animation="fadeOutUp 2s ease-out"
document.querySelector('.score').innerText=`score: ${game.player.score}`;
document.querySelector('.rnd').innerText=`round: ${game.round}`;
setTimeout(()=>{
    startFirstRound();
}, 2200);
}

const game = {
    startGame: false,
    gameInit: initiateGame,
    platform: ['hex1', 'hex2', 'hex3', 'hex4', 'hex5', 'hex6', 'hex7'],
    player:{},
    hexArray: [],
    playersTurn: false,
    round: 0
}


//Event Listeners
document.querySelector('.flowers').addEventListener('click', (e)=>{
    if(e.target.id !== '' && game.playersTurn === true){
        game.player.array.push(e.target.id); 
        document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[1].style.borderRight='30px solid rgba(206,186,199,1)'
        document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[3].style.backgroundColor='rgba(206,186,199,1)'
        document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[5].style.borderLeft='30px solid rgba(206,186,199,1)'
        setTimeout(()=>{
            document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[1].style.borderRight="30px solid rgba(206,186,199,0.6)"
            document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[3].style.backgroundColor='rgba(206,186,199,0.6)'
            document.querySelector(`#${e.target.id}`).lastElementChild.childNodes[5].style.borderLeft="30px solid rgba(206,186,199,0.6)"
        }, 500)
    }
    checkForMatch();
})


document.querySelector('.start').addEventListener('click', ()=>{
initiateGame();
audio.play();
setTimeout(()=>{
    document.querySelector('.first-overlay').style.display="none"
    document.querySelector('.flowers').style.filter="none"
    firstFlip();
}, 1800)
})

document.querySelector('.gameOver').addEventListener('submit', (e)=>{
    e.preventDefault();
    const name = document.querySelector('#name').value;
    console.log(document.querySelector('#name').value);
    const newLi = document.createElement('li');
    newLi.innerText=`${name} __ ${game.player.score}`;
    document.querySelector('#orderList').appendChild(newLi);
})

















//PSEUDOCODE 


// if you have time
// const countdown = ()=>{
//     document.getElementsByClassName('.overlay').style
//     hide start screen (display to none)
//     countdown 3-2-1
//     unblur game screen
//     2s pause setTimeout
//     startRoundOne()
// }

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

// attach a event listenter for clicks on the hexagons
    // for each click --> push the e.target.id to the player array
    // compare player array to hexaArray for the current id after every click
    // maybe part of the click event --> create a function checkForMatch
        // if playerArray[i]===hexaArray[i] --> say something like nice!
        // if playerArray[i]!==hexaArray[i] ---> wrong - have an 'X' show up on the hexagon or shake it
            // overlay try again screen
            // which the button triggers start overlay

// somehow prompt (don't use prompt) player to copy sequence

// after the player completes the sequence (so after the last array check)
// call on nextRound() 
    // animate 'round 2' 
    // NEED SECOND FUNCTION TO REUSE AND ADD TO SEQUENCE
    // push one more hex(random value)s into the hexa array
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

    //some animation indicating its wrong
// game over overlay display swiched to flex
//maybe blur the background too