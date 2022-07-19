io = io.connect();
var currentPlayer;
var players = []


function GameEngine() {
	player = new MyHero();
	var keyPressed = [];	
	world = {
		width: 40,
		height: 20,
		data:	[

			6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 2, 2, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 2, 2, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 5, 5, 5, 5, 5, 5, 5, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7, 8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 9, 10, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 5, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
			6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 6,
			6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6,

		]
	};

   
	this.drawWorld = function(){
        var levelObjectsMap = {
            0: 'green',
            2: 'prize',
            5: 'river',
            7: 'upLeftTree',
            8: 'upRightTree',
            9: 'lowLeftTree',
            10: 'lowRightTree'
    
        }
		var html = '';
		for(var y=0; y<world.height; y++) {
			html += "<div class='row'>";

			for(var x=0; x<world.width; x++) {
				html += "<div class='";

                // if(world.data[y*world.width+x] == 0)
                // {
                // 	html += 'green';
                // }

				// use the level object map to generate html and css strings		
                html += levelObjectsMap[world.data[y*world.width+x]]
				html += "'></div>"
			}

			html += "</div>";
		}
		$('#container').append(html);
	}
	//game loop that goes forever
	this.loop = function() {
		
		players.forEach(function(player){
			player.draw()
		})	
	}

	//to detect multiple keys being pressed 
	$(document).keydown(function(e) {
		if(e.keyCode == 65)
		{
			player.performAction("MOVE_LEFT");		
		}

		else if(e.keyCode == 68)
		{
			player.performAction("MOVE_RIGHT");		
		}

		else if(e.keyCode == 87)
		{
			player.performAction("MOVE_UP");		
		}

		else if(e.keyCode == 83)
		{
			player.performAction("MOVE_DOWN");		
		}

		keyPressed[e.keyCode] = true;
		
	}).keyup(function(e) {
		delete keyPressed[e.keyCode];
	});

	// run it
	this.drawWorld();
	setInterval(this.loop, 50);
}


function MyHero(name, x, y, grid, direction,counter) {
    this.name = name
    this.grid = grid || 41;
	this.gridMovementX = x || -5;
	this.gridMovementY = y || -14;
	this.counter = counter || 1;
	this.direction = direction || "";
	var spritePos = {
		left: this.grid % 2 == 0 ? '150px -1463px' : '-180px -1463px',
		right: this.grid % 2 == 0 ? '150px -490px' : '180px -490px',
		up: this.counter == 1 ?'150px -1236px' : '180px -1236px',
		down: this.counter == 1 ? '150px -912px' :'180px -912px'
	}

	// this.set_name = function() {
	// 	var html = "<h5 class='name'>"+name+"</h5>"
	// 	$('#my_player').append(html);
	// }

	this.draw = function()
	{
		$(`.${this.name}`).css({
			top: this.gridMovementY+"px", 
			left: this.gridMovementX+"px",
			 "background-position": spritePos[this.direction]
		});

	}
	this.performAction = function(action){
        if (world.data[this.grid] == 2){
            $('.prize').hide();
            alert('prize found')
        }
		if (action == "MOVE_LEFT") {
			if (world.data[this.grid - 1] >= 5) {
				console.log ("Sorry you can't move there");
			} else {
                this.grid -= 1;
				this.gridMovementX -= 20;
				this.direction = 'left'
            }		
		}
			
		else if(action == 'MOVE_RIGHT') {
			if (world.data[this.grid+1] >= 5) {
				console.log ("sorry you cant move there");
			} else {
                this.grid += 1;
                this.gridMovementX += 20;
                this.direction ='right'
            }
		}	
		else if(action == 'MOVE_UP') {
			if (world.data[this.grid - 40] >= 5 ) {
				console.log("sorry you can't move up anymore");
			} else {
                this.grid -= 40;
                this.counter *= -1;
                this.gridMovementY -= 20;
                this.direction = 'up'
            }
		}
		else if(action == 'MOVE_DOWN') {
			if (world.data[this.grid + 40] >= 5) {
				console.log ("Sorry you can't move there");
			} else {
                this.grid += 40;
                this.counter *= -1;
                this.gridMovementY += 20;
                this.direction = 'down'
            }	
		}	
		io.emit('player_movement', {
            player: currentPlayer.name,
            pos: {
                x: this.gridMovementX,
                y: this.gridMovementY,
                grid: this.grid,
                counter: this.counter,
                direction: this.direction
            }
        })
			
	}
	
}

$(document).ready(function(){
	var engine = new GameEngine();
	var name = prompt("Type in your username");
	currentPlayer = new MyHero(name);

	io.emit('got_new_user', currentPlayer);
    
	io.on('new_user',function(stuff){
		players.push(new MyHero(stuff.name))
		var newPlayer = `<div class="da_player ${stuff.name}" id="my_player" style="position:absolute">`;
		$('#container').append(newPlayer)
	});

	io.on('update_pos', function(data){
		players = data.map(function(player){
			return new MyHero(player.name, player.gridMovementX, player.gridMovementY, player.grid, player.direction, player.counter)
		})
		// console.log('active hash map is ', players)
	});
});
