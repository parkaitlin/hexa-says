console.log('linked')

array = [];

document.querySelector('.hexagon').addEventListener('click', (e)=>{
    console.log(e.target.id);
    array.push(e.target.id)
    console.log(array);
})
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
    //set interval/set timeout?
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
