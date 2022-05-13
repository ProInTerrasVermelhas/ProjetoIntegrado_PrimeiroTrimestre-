	var canvas = document.querySelector('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
	var ctx = canvas.getContext("2d");
    var cima = 87, baixo = 83, esquerda = 65, direita = 68;	
	var moveEsquerda = false, moveDireita = false, moveCima = false, moveBaixo = false;
	var x = 100, y = 100;
    var aux = 2
	var posX = -100, posY = -100

	function paredes(){
	ctx.fillRect(300,0,20,300)
	ctx.fillStyle = "black"
	ctx.fillRect(800,600,20,300)
	ctx.fillStyle = "black"
	ctx.fillRect(1200,400,20,500)
	ctx.fillStyle = "black"
	ctx.fillRect(300,300,300,20)
	ctx.fillStyle = "black"
	ctx.fillRect(650,600,300,20)
	ctx.fillStyle = "black"
	ctx.fillRect(900,400,300,20)
	ctx.fillStyle = "black"
	ctx.fillRect(900,100,20,300)
	ctx.fillStyle = "black"
	ctx.fillRect(600,100,300,20)
	ctx.fillStyle = "black"
	ctx.fillRect(0,600,500,20)
	ctx.fillStyle = "black"
	}

		function alien(){

		update();

		window.addEventListener("keydown",keydownHandler);
		window.addEventListener("keyup",keyupHandler);

		function keydownHandler(e){
			var key = e.keyCode;
		
			if(key == esquerda && key != direita){
				moveEsquerda = true;
			}
			
			if(key == direita && key != esquerda){
				moveDireita = true;
			}
			
			if(key == cima && key != baixo){
				moveCima = true;
			}
			
			if(key == baixo && key != cima){
				moveBaixo = true;
			}
		}

		function keyupHandler(e){
			var key = e.keyCode;
			
			if(key == esquerda && key != direita){
				moveEsquerda = false;
			}
		
			if(key == direita && key != esquerda){
				moveDireita = false;
			}
			
			if(key == cima && key != baixo){
				moveCima = false;
			}
		
			if(key == baixo && key != cima){
				moveBaixo = false;
			}
		}

		function mover(){
			if(moveEsquerda){
        x = x - aux
			  x--
			}
		
			if(moveDireita){
        x = x + aux
				x++;
			}
			
			if(moveCima){
        y = y - aux
				y--;
			}

			if(moveBaixo){
        y = y + aux
				y++;
			}
		}

		function criarObjeto(){
			ctx.clearRect(x,y,canvas.width,canvas.height)
			paredes()
			ctx.fillRect(x,y,100,100)
			ctx.fillStyle = "purple"
		}

		function update(){
			requestAnimationFrame(update);
			mover();
			criarObjeto();
		}
	}
