var canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var ctx = canvas.getContext('2d');
var cima = 38, baixo = 40, esquerda = 37, direita = 39;
var x = 100, y = 100;

function criarObjeto(){
ctx.clearRect(0, 0, canvas.width, canvas.height)
    ctx.fillStyle = "yellow"
    ctx.fillRect(x, y, 100, 100)
}

criarObjeto()

window.addEventListener("keydown", teclaPressionada)


function teclaPressionada(e){
    if(e.keyCode == esquerda){
        x--
    }
    if(e.keyCode == direita){
        x++
    }
    if(e.keyCode == cima){
        y--
    }
    if(e.keyCode == baixo){
        y++
    }
    criarObjeto()
}
   