const express       = require('express')
const bodyParser    = require('body-parser')
// Model users
const Users = require('./models').users

var randomstring = require("randomstring");


// Express app
var app = express()
app.use(express.json())

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

// Routing
app.get('/', (req,res)=>{
    res.json('Nothing to show')
})
app.post('/', (req,res)=>{
    const token = req.body.api_token
    Users.findOne({where: {api_token: token}})
        .then(user => {
            if(!user){
                res.json({'status': 0, "msg": 'user not found!'})
            }
            res.json({'status': 1, 'user': user})
        });
})

app.post('/login', (req,res)=>{
    const uID = req.body.userID
    Users.findOne({where: {userID: uID}}).then(user => {
        if(!user){ // If user is not exist, create new user then login the user
            Users.create({
                userID: uID,
                api_token: randomstring.generate(50)
            })
            .then((user) => {res.json({'status': 1, "msg": 'Register success and logged you in!', 'user': user})})
        }else{ // If user exist, logging in
            user.update({
                api_token: randomstring.generate(50)
            })
            .then((user) => {res.json({'status': 1, "msg": 'Login success!', 'user': user})})
        }
    })
})

app.get('/logout/:api_token', (req,res)=>{
    const token = req.params.api_token
    Users.findOne({where: {api_token: token}}).then(user => {
        if(!user){ // If user is not exist
            res.json({'status': 0, "msg": 'You were not logged in!'})
        }else{ // If user exist, logging in
            user.update({api_token: ''})
            .then(res.json({'status': 1, "msg": 'Logout success!'}))
        }
    })
})

// Server serve
const PORT = process.env.PORT || 3000
app.listen(PORT, console.log('Server is running on ' + PORT ))