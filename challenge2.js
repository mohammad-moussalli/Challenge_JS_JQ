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








});