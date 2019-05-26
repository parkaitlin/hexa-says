const Player = require('../models/player'); 

module.exports = {
    new: async (req, res)=>{
        try {
            const createdPlayer = await Player.create(req.body);
            console.log(createdPlayer)
        } catch (error) {
            res.send(error)
        }
    },
    index: async (req, res)=>{
        try {
            const leaderboard = await Player.find({})
            console.log(leaderboard)
        } catch (error) {
            res.send(error)
        }
    }
}