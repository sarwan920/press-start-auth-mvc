/**
  since we have passport, we get to check to see if they are authenticated, 
  or if they are logged in or not(sessions)
 */

module.exports = {
    
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {                // magic middleware      
        return next()                             // move onto the controller if true
      } else {
        res.redirect('/')
      }
    }
  }
  