/**
    This is the gameController!

    -   testUserSchema and testGameSchema are functions that can be used
        to test if your Schema's are running properply
 */

const Game = require('../models/Game')
const User = require('../models/User')

module.exports = {
    testUserSchema: async (req,res) => {

        try{
            // remember when testing we need to obey our Schema!
            const 
                testUser = 'test01',                        // a string
                testEmail = 'test01@testy.com',             // a string
                testPass = 'test01@testy.com'               // a string

            await User.create({
                userName: testUser, 
                email: testEmail, 
                password: testPass
            })

            console.log('Test User has been added!')

        } catch (err){
            console.log(err)
        }
    },

    testGameSchema: async (req,res) => {
        
        try{
            // remember when testing we need to obey our Schema!
            const 
                testName = 'name test01',                   // a string
                testGenre = 'strategy',                     // a string
                testConsole = 'playstationGame',            // enum, '/models/Game' for full list
                testRating = 5,                             // range restriced, '/models/Game' for full list
                // testUser = 'user test01',
                testCompleted = true                        // boolean

            await Game.create({
                name: testName,
                genre: testGenre, 
                console: testConsole,
                rating: testRating,
                // user: testUser,
                completed: testCompleted, 
            })
            console.log('Game has been added!')

        } catch (err){
            console.log(err)
        }
    },

        
}