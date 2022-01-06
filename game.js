var heigth = window.innerHeight
var width = window.innerWidth
var lives = 1
var time = 10

function adjustmentStageGame() {
    heigth;
    width;
    console.log(heigth, width)
}

adjustmentStageGame()

var cronometer = setInterval(function(){
    time -=1
}, 1000)

function randomPosition() {
    if(document.querySelector('#mosquito')){
        document.querySelector('#mosquito').remove()
        if (lives > 3){
            window.location.href="game_over.html"
        }else{
            document.querySelector('#l' + lives).src="imagens/coracao_vazio.png"
            lives++
        }
        
    }

    var positionY = Math.floor(Math.random() * heigth) - 90
    var positionX = Math.floor(Math.random() * width) - 90

    positionY = positionY < 0 ? 0: positionY 
    positionX = positionX < 0 ? 0: positionX 

    console.log(positionY, positionX)

    var mosquito = document.createElement('img')
    mosquito.src = 'imagens/mosquito.png'

    // It is necessary to put a space between the two classes, otherwise it will return a class that does not exist
    
    mosquito.className = classMosquito() + ' ' + randomSide()
    mosquito.style.left = positionX + 'px'
    mosquito.style.top = positionY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'
    mosquito.onclick= function(){
        this.remove()
    }
    

    document.body.appendChild(mosquito)
}

function classMosquito() {
    var classMosquito = Math.floor(Math.random() * 3)
    if (classMosquito === 1) {
        return 'mosquito1'
    } else if (classMosquito === 2) {
        return 'mosquito2'
    } else {
        return 'mosquito3'
    }

}

function randomSide() {
    var side = Math.floor(Math.random() * 2)
    if (side === 1) {
        return 'sideA'
    } else{
        return 'sideB'
    } 

}