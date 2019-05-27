
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
    const i = game.player.array.length - 1
    if(game.player.array[i] !== game.hexArray[i]){
        game.startGame = false;
        game.playersTurn = false;
        game.hexArray = []
        document.querySelector('.flowers').style.animation="shake 1s ease-in"
        document.querySelector('#final-score').innerText=game.player.score
        document.querySelector('#input-score').value=game.player.score
        setTimeout(()=>{
            audio.pause();
            document.querySelector('.second-overlay').style.display="flex"
            document.querySelector('.flowers').style.filter="blur(5px)"    
        }, 1000);
    } else if(game.player.array.length === game.hexArray.length && game.player.array[i] === game.hexArray[i]){
        if(game.round < 30){
            game.playersTurn = false;
            game.player.array = [];
            game.player.score += 11
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
    }, 2500);
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
        checkForMatch();
    }
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

// document.querySelector('.gameOver').addEventListener('submit', (e)=>{

// })

