var buttonColors=["red","blue","green","yellow"]
var gamepattern=[];
function nextSequence() {
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColor = buttonColours[randomNumber];
    gamepattern.push(randomChosenColor);

    $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio= new audio("sounds/"+name+".mp3");
    audio.play();
     
    $("btn").click (function(){
        var userchosencolour=$(this).attr("id");
        userclickedpattern.push(userchosencolour);

        playsound(userchosencolour);
    });
     function nextSequence(){
        var randomNumber=Math.floor(Math.random()*4);
        var randomChosenColor=buttonColour[randomNumber];
        gamepattern.push(randomChosenColor);
        $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
        playsound(randomChosenColor);
        function playsound(name){
            var audio= new audio("sounds/"+name+".mp3");
            audio.play();   
        }

     }              
     
     function animatepress(currentColour){
        $("#"+currentColour).addClass("pressed");
        setTimeout (function(){
            $("#"+currentColour).removeClass("pressed");
        },100);
     }
     var started = false;
     var level=0;
      
     $(document).keypress(function(){
        if(!started){
            $("#level-title").text("level"+level);
            nextSequence();
            started=true;
        }
     });
     $(".btn").click(function(){
        var userchosencolour =$(this).attr("id");
        checkAnswer(userclickedpattern.length-1);
     });

     function checkAnswer(currentLevel){
        if(gamepattern[currentLevel]===userclickedpattern[currentLevel]){
            console.log("success");
        if(userclickedpattern.length===gamepattern.length){
            setTimeout(function(){
                nextSequence();
            },1000);
        }    
        }
        else{
            console.log("wrong");
            playsound("wrong");
            $("body").addClass("game-over");
            setTimeout(function(){
            $("body").removeClass("game-over");    
            },200);

            $("#level-title").text("gameover, press any key to restart");
            startover();
        }
     }
       function startover(){
        level=0;
        gamepattern=[];
        started=false;
       }
}