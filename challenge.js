var start_game = false;
var win = false;
var continue_playing = false;
var level = 1;
var buttons_memory = [];


document.getElementsByTagName("body")[0].style.backgroundColor = "#021c39";

function startGame(){
    continue_playing = true;
    if(win == false){
        start_game = true;
        document.getElementById("title").innerHTML = `Level ${level}`;
        randomButton();
    }
}

document.addEventListener("keydown", startGame);

function randomButton(){
    if(continue_playing == true){
        var random = Math.floor(Math.random() * 5);
        var button = 1;
        if(random == 0){
            var green_audio = new Audio('sounds/green.mp3');
            green_audio.play();
            button = document.getElementById("green");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("green").style.opacity = 1;
            }, 100);
            buttons_memory.push(button);
        }else if(random == 1){
            var red_audio = new Audio('sounds/red.mp3');
            red_audio.play();
            button = document.getElementById("red");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("red").style.opacity = 1;
            }, 100);
            buttons_memory.push(button);
        }else if(random == 2){
            var yellow_audio = new Audio('sounds/yellow.mp3');
            yellow_audio.play();
            button = document.getElementById("yellow");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("yellow").style.opacity = 1;
            }, 100);
            buttons_memory.push(button);
            console.log(buttons_memory);
        }else{
            var blue_audio = new Audio('sounds/blue.mp3');
            blue_audio.play();
            button = document.getElementById("blue");
            button.style.opacity = 0.5;
            setTimeout(() => {document.getElementById("blue").style.opacity = 1;
            }, 100);
            buttons_memory.push(button);
            
        }
        continuePlaying(buttons_memory);
    }
}

function youWin(){
    win = true;
    continue_playing = true;
    level += 1;
    document.getElementById("title").innerHTML = `Level ${level}`;
    randomButton();
}

function youLose(){
    win = false;
    buttons_memory = [];
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

function pressedButton(){
    var pressed_buttons = document.getElementsByTagName("button");
    for (var i = 0; i < pressed_buttons.length; i++){
        pressed_buttons[i].style.backgroundColor = "grey";
        pressed_buttons[i].style.boxShadow = "0px 0px 20px white"
    }
}

function continuePlaying(buttons_memory){
    for(j = 0; j < buttons_memory.length; j++){
        if(buttons_memory[j] == document.getElementById("blue")){
            document.getElementById("blue").addEventListener("click", youWin);
            document.getElementById("blue").addEventListener("click", pressedButton);
        }else{
            document.getElementById("blue").addEventListener("click", youLose);
            document.getElementById("blue").addEventListener("click", pressedButton);
        }
        if(buttons_memory[j] == document.getElementById("green")){
            document.getElementById("green").addEventListener("click", youWin);
            document.getElementById("green").addEventListener("click", pressedButton);
        }else{
            document.getElementById("green").addEventListener("click", youLose);
            document.getElementById("green").addEventListener("click", pressedButton);
        }
        if(buttons_memory[j] == document.getElementById("red")){
            document.getElementById("red").addEventListener("click", youWin);
            document.getElementById("red").addEventListener("click", pressedButton);
        }else{
            document.getElementById("red").addEventListener("click", youLose);
            document.getElementById("red").addEventListener("click", pressedButton);
        }
        if(buttons_memory[j] == document.getElementById("yellow")){
            document.getElementById("yellow").addEventListener("click", youWin);
            document.getElementById("yellow").addEventListener("click", pressedButton);
        }else{
            document.getElementById("yellow").addEventListener("click", youLose);
            document.getElementById("yellow").addEventListener("click", pressedButton);
        }
    }

}


    


