var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var cima = 38, baixo = 40, esquerda = 37, direita = 39;
var x = 100, y = 100;
var moveCima, moveBaixo, moveDireita, moveEsquerda;

function criarObjeto(){
ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "purple"
    ctx.fillRect(x, y, 100, 100)
}

update()

window.addEventListener("keydown", teclaPressionada)
window.addEventListener("keyup", teclaSolta)

function teclaPressionada(e){
    if((e.keyCode == esquerda) && (e.keyCode != direita)){
      esquerda = true
    }
    if((e.keyCode == direita) && (e.keyCode != esquerda)){
      direita = true
    }
    if((e.keyCode == cima) && (e.keyCode != baixo)){
       cima = true
    }
    if((e.keyCode == baixo) && (e.keyCode != cima)){
      baixo = true
    }
}
   
function teclaSolta(e){
    if((e.keyCode == esquerda) && (e.keyCode != direita)){
        esquerda = false
      }
      if((e.keyCode == direita) && (e.keyCode != esquerda)){
        direita = false
      }
      if((e.keyCode == cima) && (e.keyCode != baixo)){
         cima = false
      }
      if((e.keyCode == baixo) && (e.keyCode != cima)){
        baixo = false
      }
}

function mover(){
    if (moveEsquerda){
        x--
    }
    if (moveDireita){
        x++
    }
    if (moveCima){
        y--
    }
    if (moveBaixo){
        y++
    }
    update()
}

function update(){
    requestAnimationFrame(update, canvas)
    mover()
    criarObjeto()
}