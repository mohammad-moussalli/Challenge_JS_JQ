var start_game = false;
var win = false;
var level = 1;

document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";
function startGame(){
    start_game = true;
    document.getElementById("title").innerHTML = `Level ${level}`;
    randomButton();
}

document.addEventListener("keydown", startGame);

function youWin(){
    win = true;
    level += 1;
    document.getElementById("title").innerHTML = `Level ${level}`;
}

function youLose(){
    win = false;
    level = 1;
    document.style = ".game-over";
    document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
}

function randomButton(){
    var random = Math.floor(Math.random() * 4) + 1;
    var button = 1;
    if(random == 1){
        var blue_audio = new Audio('sounds/blue.mp3');
        blue_audio.play();
        button = document.getElementById("blue").style.opacity = 0.5;
        setTimeout(() => {document.getElementById("blue").style.opacity = 1;
    }, 100);
    }else if(random == 2){
        var green_audio = new Audio('sounds/green.mp3');
        green_audio.play();
        button = document.getElementById("green").style.opacity = 0.5;
        setTimeout(() => {document.getElementById("green").style.opacity = 1;
    }, 100);
    }else if(random == 3){
        var red_audio = new Audio('sounds/red.mp3');
        red_audio.play();
        button = document.getElementById("red").style.opacity = 0.5;
        setTimeout(() => {document.getElementById("red").style.opacity = 1;
    }, 100);
    }else{
        var yellow_audio = new Audio('sounds/yellow.mp3');
        yellow_audio.play();
        button = document.getElementById("yellow").style.opacity = 0.5;
        setTimeout(() => {document.getElementById("yellow").style.opacity = 1;
    }, 100);
    }
    return button;
}

var pressed_button = document.getElementsByTagName("button");
for (var i = 0; i < button.length; i++){
    if(pressed_button[i] == randomButton()){
        pressed_button[i].addEventListener("click", youWin);
    }else{
        pressed_button[i].addEventListener("click", youWin);
    }
}






