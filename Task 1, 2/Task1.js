//Keys are important and personal for indivisuals which no one wants to publish on public repository so  anyone cannot have access to it
//so we add it to .gitignore file.

//examples

//Keys.js
module.exports={
    google:{
        clientID:"123.apps.googleusercontent.com",
        clientSecret:"WXYZ"
    }
};


//Config
passport.use(
    new GoogleStrategy({
    //options for google strategy
    callbackURL:'/auth/google/callback',
    clientID:'keys.google.clientID',
    clientSecret:'keys.google.clientSecret'
  
    },(accessToken,refreshToken,profile,done) => {
      // passport callback function
      console.log('passport callback function fired');
      console.log(profile);
      //new User()
    })
  )
  
  module.exports = passport;