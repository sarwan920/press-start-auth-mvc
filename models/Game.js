const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  genre: {
    type: String,
    required: true,
    enum: [                              
        'survival', 
        'simulation', 
        'shooter', 
        'puzzle', 
        'strategy', 
        'racing', 
        'sports', 
        'fighting', 
        'action', 
        'adventure', 
        'rpg'
    ]
  },

  console: {
    type: String,
    required: true,
    enum: ['pc', 'playstation', 'xbox', 'nintendo'] 
  },

  rating: {                          
    type: Number,
    required: true,
    min: 0,                             // since 'rating' is type Number, use min/max validators
    max: 10,
  },

  userId: {                            
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',                        // ref is how we connect it to the user model
  },

})

module.exports = mongoose.model('Game', GameSchema)
