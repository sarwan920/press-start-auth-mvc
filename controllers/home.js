module.exports = {
    getIndex: (req,res)=>{
        res.render('index.ejs')
    },

    getTestIndex: (req,res)=>{
        res.render('layouts/index')
    }
}