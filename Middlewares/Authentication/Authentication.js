const Authentication = (app, JWT) => {
    //Authentication
    app.use(["/addExercise", "/getAllExercises", "updateUser", "updateExerciseById", "/getUser", "/deleteUser"], (req,res,next) => {        
        // const Token =  req.cookies.Token;
        const Token =  req.headers.authorization;
        if (Token==null) {
            res.status(400).send("Please Login First!")
        }
        else {
            JWT.verify(Token, process.env.JWT_KEY, (err,user) => {
                if(err) {
                    res.status(401).send("Not Authenticated!")
                }
                req.data = user;
                next()
            })
        }
    })

}

module.exports = Authentication;