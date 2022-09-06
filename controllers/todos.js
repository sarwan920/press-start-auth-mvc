const Todo = require('../models/Todo')

module.exports = {
    getTodos: async (req,res)=>{
        console.log(req.user)
        try{
            // req.user is the logged in user. Passport is helping us do all this stuff
            const todoItems = await Todo.find({userId:req.user.id})
            

            const itemsLeft = await Todo.countDocuments({userId:req.user.id,completed: false})

            /**
             * 
                    PSEUDO CODE IDEAS FOR ANDREW
                
                1.  get all games from mongo using find(), something like:
                        Games.find( {user id you want to search} )

                2.  using .lean() may be handy so you can work with plain old javascript objects
                3.  map(), filter(), or forEach() what you fetched from find() conditionally 
                    seaching for 'pc', 'xbox', 'playstation', 'nintendo', etc.
                4.  sort() these new lists so they are in ascending order
                5.  render your view and be sure to pass these new lists along with it!

             */

            res.render('todos.ejs', {todos: todoItems, left: itemsLeft, user: req.user})
        }catch(err){
            console.log(err)
        }
    },
            /**
                ** ATTN ***

                - createTodo needs to be updated to reflect the new model, Game
                
             */
    createTodo: async (req, res)=>{
        try{
            await Todo.create({todo: req.body.todoItem, completed: false, userId: req.user.id})
            console.log('Todo has been added!')
            res.redirect('/todos')
        }catch(err){
            console.log(err)
        }
    },
    markComplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: true
            })
            console.log('Marked Complete')
            res.json('Marked Complete')
        }catch(err){
            console.log(err)
        }
    },
    markIncomplete: async (req, res)=>{
        try{
            await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
                completed: false
            })
            console.log('Marked Incomplete')
            res.json('Marked Incomplete')
        }catch(err){
            console.log(err)
        }
    },
    deleteTodo: async (req, res)=>{
        console.log(req.body.todoIdFromJSFile)
        try{
            await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile})
            console.log('Deleted Todo')
            res.json('Deleted It')
        }catch(err){
            console.log(err)
        }
    }
}    