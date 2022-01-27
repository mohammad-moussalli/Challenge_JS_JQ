$(document).ready(function(){
    $("body").css("background-color", "#021c39");
    
    var win = false;
    var start_game = false;
    var level = 1;
    function startGame(){
        continue_playing = true;
        if(win == false){
            start_game = true;
            $("#title").text(`Level ${level}`);
            win = true;
        }
    }
    $(document).on("keydown", startGame);

    function youWin(){
        win = true;
        level += 1;
        $("#title").text(`Level ${level}`);
    }

    function youLose(){
        win = false;
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
        $("#title").tet("Game Over, Press Any Key to Restart");
    }







});