console.log('linked')

class Player {
    constructor(){
        this.score = 0;
    }
    selectHex(){
        // place some animations (when the player clicks on something color of the hexagon changes and their is some animation)
    }
    checkForMatch(){
        for(let i = 0; i < game.playerArray.length; i++){
            if(game.playerArray[i] !== game.hexArray[i]){
                //game over
            }
        }
    }
    nextRound(){

    }
    win(){

    }
}
// player class
//methods:
    // nextRound
    // Win