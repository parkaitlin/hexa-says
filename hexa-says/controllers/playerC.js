const Player = require('../models/player'); 


module.exports = {
    new: async (req, res)=>{
        try {
            const createdPlayer = await Player.create(req.body);
            res.redirect('/');
        } catch (error) {
            res.send(error)
        }
    },
    index: async (req, res)=>{
        try {
            const leaderboard = await Player.find().sort({score: -1})
            res.render('hexa-says', {
                leaderboard: leaderboard
            })
        } catch (error) {
            res.send(error)
        }
    }
}
