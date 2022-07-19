const path = require('path');
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cookieParser = require('cookie-parser')
const bodyParser = require('body-parser')
const session = require('express-session')


const port = process.env.PORT || 6789;

// configuring our environments
app.use(cookieParser());  
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use(express.static(path.join(__dirname, 'public'))); //for handling static contents
app.use(session({secret: 'foobarhello'})); //for using sessions
app.set('view engine', 'ejs');

// const activeUsers = new Set();
const activeUsersMap = {}

app.get('/', function(req, res){
  res.render('index', {title:'Welcome Page'});
});

io.on("connection", function (socket) {
  console.log("Made socket connection");

  socket.on("got_new_user", function (data) {
    socket.userId = data;
    // activeUsers.add(data);
    activeUsersMap[data.name] = data
    console.log(activeUsersMap)
    // io.emit("new_user", [...activeUsers]);
    const myData = Object.keys(activeUsersMap).map(key => activeUsersMap[key])

    io.emit("new_user", data);
  });

  socket.on("disconnect", () => {
    // delete activeUsers[socket.userId]
    // activeUsers.delete(socket.userId);
    io.emit("user disconnected", socket.userId);
  });

  socket.on('player_movement', function(data){

    activeUsersMap[data.player]["gridMovementX"] = data.pos.x
    activeUsersMap[data.player]["gridMovementY"] = data.pos.y
    activeUsersMap[data.player]["grid"] = data.pos.grid
    activeUsersMap[data.player]["direction"] = data.pos.direction
    activeUsersMap[data.player]["counter"] = data.pos.counter
    const activeUserList = Object.keys(activeUsersMap).map(key =>  activeUsersMap[key])
    // console.log(activeUserList)
    io.emit('update_pos', activeUserList)
  })
});


server.listen(port, function() {
  console.log(`Listening on port ${port}`);
});