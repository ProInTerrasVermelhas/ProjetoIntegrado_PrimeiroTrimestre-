window.onload = function(){
	//Constantes que armazenam o código de cada seta do teclado
	var LEFT = 37, UP = 38, RIGHT = 39, DOWN = 40;
	var cnv = document.querySelector("canvas");
	var	ctx = cnv.getContext("2d");
	var spriteSheet = new Image();
	spriteSheet.src = "img/img.png";
	var alien = new Sprite(spriteSheet);
	var scene = new Image();
	scene.src = "img/scene.png";
    
	window.addEventListener("keydown",keydownHandler,false);
	window.addEventListener("keyup",keyupHandler,false);
    

	
	function keydownHandler(e){
		switch(e.keyCode){
			case RIGHT:
				alien.mvRight = true;
				alien.mvLeft = false;
				alien.mvUp = false;
				alien.mvDown = false;
				break;
			case LEFT:
				alien.mvRight = false;
				alien.mvLeft = true;
				alien.mvUp = false;
				alien.mvDown = false;
				break;
			case UP:
				alien.mvRight = false;
				alien.mvLeft = false;
				alien.mvUp = true;
				alien.mvDown = false;
				break;
			case DOWN:
				alien.mvRight = false;
				alien.mvLeft = false;
				alien.mvUp = false;
				alien.mvDown = true;
				break;
		}
	}
	
	function keyupHandler(e){
		switch(e.keyCode){
			case RIGHT:
				alien.mvRight = false;
				break;
			case LEFT:
				alien.mvLeft = false;
				break;
			case UP:
			alien.mvUp = false;
				break;
			case DOWN:
				alien.mvDown = false;
				break;
		}
	}
	

	//Quano a imagem é carregada, o programa é iniciado
	spriteSheet.onload = function(){
		init();
		alien.posX = alien.posY = 300;
	}

	function init(){
		loop();
	}

	function update(){
		alien.move();
	}

	function draw(){
		ctx.clearRect(0,0,cnv.width,cnv.height);
		ctx.drawImage(scene,0,0,scene.width,scene.height,0,0,scene.width,scene.height);
		alien.draw(ctx);
	}

	function loop(){
		window,requestAnimationFrame(loop,cnv);
		update();
		draw();
	}
}
function Sprite(img){
	//Atributos ****************
	this.mvLeft = this.mvUp = this.mvRight = this.mvDown = false;
	
	//Origem para captura da imagem a ser exibida
	this.srcX = this.srcY = 0;
	//Posição no canvas onde a figura será exibida
	this.posX = this.posY = 0;
	this.width = 59;
	this.height = 57;

	this.speed = 2;
	this.img = img;
	this.countAnim = 0;

	//Métodos *****************
	//Desenha a figura
	this.draw = function(ctx){
		ctx.drawImage(	this.img,	//Imagem de origem
						//Captura da imagem
						this.srcX,	//Origem da captura no eixo X
						this.srcY,	//Origem da captura no eixo Y
						this.width,	//Largura da imagem que será capturada
						this.height,//Altura da imagem que será capturada
						//Exibição da imagem
						this.posX,	//Posição no eixo X onde a imagem será exibida 
						this.posY,	//Posição no eixo Y onde a imagem será exibida 
						this.width,	//Largura da imagem a ser exibida 
						this.height	//Altura da imagem a ser exibida 
					);
		this.animation();
	}

	//Move a figura
	this.move = function(){
		if(this.mvRight){
			this.posX += this.speed;
			this.srcY = this.height * 3; 
		} else
		if(this.mvLeft){
			this.posX -= this.speed;
			this.srcY = this.height * 2; 
		} else
		if(this.mvUp){
			this.posY -= this.speed;
			this.srcY = this.height * 1; 
		} else
		if(this.mvDown){
			this.posY += this.speed;
			this.srcY = this.height * 0; 
		}
	}
	
	//Anima a figura
	this.animation = function(){
		if(this.mvLeft || this.mvUp || this.mvRight || this.mvDown){
			//Caso qualquer seta seja pressionada, o contador de animação é incrementado
			this.countAnim++;
			if(this.countAnim >= 20){
				this.countAnim = 0;
			}
			this.srcX = Math.floor(this.countAnim / 7) * this.width;
		} else {
			//Caso nenhuma tecla seja pressionada, o contador de animação é zerado e a imagem do personagem parado é exibida
			this.srcX = 0;
			this.countAnim = 0;
		}
	}
}