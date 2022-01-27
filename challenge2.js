$(document).ready(function(){
    $("body").css("background-color", "#021c39");
    
    var win = false;
    var start_game = false;
    var level = 1;
    var continue_playing = false;
    var buttons_memory = [];

    function startGame(){
        continue_playing = true;
        if(win == false){
            start_game = true;
            $("#title").text(`Level ${level}`);
            randomButton();
            win = true;
        }
    }
    $(document).on("keydown", startGame);

    function randomButton(){
        if(continue_playing == true){
            var random = Math.floor(Math.random() * 5);
            var button = 1;
            if(random == 0){
                const green_audio = new Audio("sounds/green.mp3");
                green_audio.play();
                button = $("#green");
                button.css("opacity", "0.5");
                setTimeout(() => {button.css("opacity", "1");
                }, 100);
                buttons_memory.push(button);
            }else if(random == 1){
                const red_audio = new Audio("sounds/red.mp3");
                red_audio.play();
                button = $("#red");
                button.css("opacity", "0.5");
                setTimeout(() => {button.css("opacity", "1");
                }, 100);
                buttons_memory.push(button);
            }else if (random == 2) {
                const yellow_audio = new Audio("sounds/yellow.mp3");
                yellow_audio.play();
                button = $("#yellow");
                button.css("opacity", "0.5");
                setTimeout(() => {button.css("opacity", "1");
                }, 100);
                buttons_memory.push(button);
            }else{
                const blue_audio = new Audio("sounds/blue.mp3");
                blue_audio.play();
                button = $("#blue");
                button.css("opacity", "0.5");
                setTimeout(() => {button.css("opacity", "1");
                }, 100);
                buttons_memory.push(button);
            }
            for(j = 0; j < buttons_memory.length; j++){
                if(buttons_memory[j] == $("#green")){
                    $("#green").on("click", youWin);
                    $("#blue").on("click", youLose);
                    $("#red").on("click", youLose);
                    $("#yellow").on("click", youLose);

                }else if(buttons_memory[j] == $("#red")){
                    $("#red").on("click", youWin);
                    $("#blue").on("click", youLose);
                    $("#green").on("click", youLose);
                    $("#yellow").on("click", youLose);

                }else if(buttons_memory[j] == $("#yellow")){
                    $("#yellow").on("click", youWin);
                    $("#blue").on("click", youLose);
                    $("#green").on("click", youLose);
                    $("#red").on("click", youLose);
                }else if(buttons_memory[j] == $("#blue")){
                    $("#blue").on("click", youWin);
                    $("#green").on("click", youLose);
                    $("#red").on("click", youLose);
                    $("#yellow").on("click", youLose);

                }
            }
        }
    }

    function youWin(){
        win = true;
        continue_playing = true;
        level += 1;
        $("#title").text(`Level ${level}`);
        randomButton();
    }

    function youLose(){
        win = false;
        continue_playing = false;
        buttons_memory = [];
        level = 1;
        $("body").css("background-color", "red");
        $("body").css("opacity", "0.8");
        setTimeout(() => {$("body").css("background-color", "#021c39")
        }, 100);
        setTimeout(() => {$("body").css("opacity", "1")
        }, 100);
        var wrong_audio = new Audio('sounds/wrong.mp3');
        wrong_audio.play();
        $("#title").text("Game Over, Press Any Key to Restart");
    }

    
});