const mongoose = require('mongoose')

const GameSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

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
    enum: ['pcGame', 'playstationGame', 'xboxGame', 'nintendoGame'] 
  },

  rating: {                          
    type: Number,
    required: true,
    min: 0,                             // since 'rating' is type Number, use min/max validators
    max: 10,
  },

  user: {                            
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',                        // ref is how we connect it to the user model
    required: true,
  },

  completed: {
    type: Boolean,
    default: false,
  },

})

module.exports = mongoose.model('Game', GameSchema)
