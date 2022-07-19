module.exports = function Route(app){
  app.get('/', function(req, res){
    res.render('index', {title:'Welcome Page'});
  });

  

app.io.route('got_new_user', function(req){
	req.session.sessionID = req.sessionID;
  	req.session.username = req.data.username;
  	users[req.session.username] = req.session.sessionID;
  	console.log (users);
 	  app.io.broadcast('new_user',
 	  {
	      name: req.data.username,
	      id: req.sessionID
      });
      console.log ("hello");

app.io.route('disconnect', function(req){
	req.io.emit('disconnect_user', {data:req.data});
	console.log("somebody disconnected");
  
  
 
  });

});
 //you will add more routes and logic here but this is how to write the default route for your project
}