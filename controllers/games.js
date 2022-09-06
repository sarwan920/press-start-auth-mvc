/**
    This is the gameController!

    -   testUserSchema and testGameSchema are functions that can be used
        to test if your Schema's are running properply
 */

const { findOneAndUpdate } = require('../models/Game')
const Game = require('../models/Game')
const User = require('../models/User')

module.exports = {

    getGames: async (req,res)=>{
        console.log(req.user)

        try{
            // req.user is the logged in user. Passport is helping us do all this stuff
            const gameItems = await Game.find().lean()

            // const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})

            console.log('gameItems', gameItems)

            res.render('layouts/game', {
                gameItems
            })
        }catch(err){
            console.log(err)
        }
    },

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
    getTestGames: async (req,res)=>{
        // console.log('req.user', req.user.id)
        try{
            // req.user is the logged in user. Passport is helping us do all this stuff
            // const todoItems = await Game.find({userId:req.user.id})
            const gameItems = await Game.find({
                user: req.user.id
            })
            
            .sort( {rating: -1} )
            
            // const gameItems = await Game.find({req.user._id})
            // console.log('gameItems', gameItems)
            // console.log('req.user', req.user)
            // console.log('GAMEON', gameItems.filter( game => game.completed === false ))

            const pcGames = gameItems.filter( game => game.console === 'pcGame')
                

            // const playstationGame = 
            const playstationGame = gameItems.filter( game => game.console === 'playstationGame')
            // const xboxGame = 
            const xboxGame = gameItems.filter( game => game.console === 'xboxGame')
            // const nintendoGame = 
            const nintendoGame = gameItems.filter( game => game.console === 'nintendoGame')

            res.render('layouts/games', {
                consoles: {
                    pcGames,
                    playstationGame, 
                    xboxGame,
                    nintendoGame
                },
                games: gameItems.filter( game => game.completed === false ), 
                user: req.user
            })
        } catch (err){
            console.log(err)
        }
    },
    
    postTestGames: async (req,res)=>{
        // console.log('form', req.body)
        try{
            // req.user is the logged in user. Passport is helping us do all this stuff
            // const todoItems = await Game.find({userId:req.user.id})

            const gameItems = await Game.create({
                name: req.body.name,
                genre: req.body.genre, 
                console: req.body.console,
                rating: req.body.rating, 
                user: req.user._id,
            })

            // console.log('req.user', req.user)

            res.redirect('/games/testGames')

        } catch (err){
            console.log(err)
        }
    },
    getTestSignup: async (req,res)=>{
        console.log(req.user)
        try{
            // req.user is the logged in user. Passport is helping us do all this stuff
            // const todoItems = await Game.find({userId:req.user.id})
            const gameItems = await Game.find()
            // console.log('gameItems', gameItems)
            // console.log('req.user', req.user)

            res.render('layouts/games', {
                games: gameItems, 
                user: req.user
            })
        } catch (err){
            console.log(err)
        }
    },
    
    postTestMarkDone: async (req,res)=>{
        
        try{

            console.log('USER', req.user)
            console.log('BODY', req.body)

            await Game.findOneAndUpdate(
                {_id: req.body.id}, 
                {completed: true}
                )
                
            res.redirect('/games/testGames')

        } catch (err){
            console.log(err)
        }
    },
    getTestRandomGame: async (req,res)=>{
        
        try{

            // get rando here:
            console.log('get rando')
            
            const numOfGames = await Game.countDocuments({user:req.user.id, completed: false});
            const gameItems = await Game.find({user:req.user.id});

            const randomIndex = Math.floor(Math.random() * gameItems.length)
            const randomGame = gameItems[randomIndex]
            console.log('random', randomGame)
            res.render('layouts/randomGames', {
                games: gameItems.filter( game => game.completed === false ), 
                user: req.user,
                random: randomGame
            })

        } catch (err){
            console.log(err)
        }
    },


        
}