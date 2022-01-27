var start_game = false;
var win = false;
var continue_playing = false;
var level = 1;

document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";

function startGame(){
    continue_playing = true;
    if(win == false){
        start_game = true;
        document.getElementById("title").innerHTML = `Level ${level}`;
        randomButton();
        win = true;
    }
}

document.addEventListener("keydown", startGame);

function randomButton(){
    if(continue_playing == true){
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
    }   
    return random;
}

function youWin(){
    win = true;
    continue_playing = true;
    level += 1;
    document.getElementById("title").innerHTML = `Level ${level}`;
}

function youLose(){
    win = false;
    continue_playing = false;
    level = 1;
    document.getElementsByTagName("body")[0].style.backgroundColor = "red";
    document.getElementsByTagName("body")[0].style.opacity = 0.8;
    setTimeout(() => {document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";
    }, 100);
    setTimeout(() => {document.getElementsByTagName("body")[0].style.opacity = 1;
    }, 100);
    var wrong_audio = new Audio('sounds/wrong.mp3');
    wrong_audio.play();
    document.getElementById("title").innerHTML = "Game Over, Press Any Key to Restart";
}

var blue_button = 1;
var green_button = 2;
var red_button = 3;
var yellow_button = 4;

if(randomButton() == blue_button){
    document.getElementById("blue").addEventListener("click", youWin);
}else{
    document.getElementById("blue").addEventListener("click", youLose);
}
if(randomButton() == green_button){
    document.getElementById("green").addEventListener("click", youWin);
}else{
    document.getElementById("green").addEventListener("click", youLose);
}
if(randomButton() == red_button){
    document.getElementById("red").addEventListener("click", youWin);
}else{
    document.getElementById("red").addEventListener("click", youLose);
}
if(randomButton() == yellow_button){
    document.getElementById("yellow").addEventListener("click", youWin);
}else{
    document.getElementById("yellow").addEventListener("click", youLose);
}