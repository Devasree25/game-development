var blueCar = document.getElementById("bluecar");
var greyCar = document.getElementById("redcar");
var result = document.getElementById("result");
var score = document.getElementById("score");
var game = document.getElementById("game");
var counter = 0;

blueCar.addEventListener("animationiteration",function(){
    var random = ((Math.random()*3))*130
    blueCar.style.left = random+"px";
    counter++;
})

window.addEventListener("keydown",function(e){
    if(e.keyCode == "39"){
        var greyCarleft = parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"))
        if(greyCarleft<260){
            greyCar.style.left = (greyCarleft+130)+"px";
        }
    };
    if(e.keyCode == "37"){
        var greyCarleft = parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"))
        if(greyCarleft>0){
            greyCar.style.left = (greyCarleft+130)+"px";
        }
    };
    
        
})
setInterval(function Gameover(){
    var blueCarTop= parseInt(window.getComputedStyle(blueCar).getPropertyValue("Top"))
    var blueCarleft= parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"))
    var greyCarleft= parseInt(window.getComputedStyle(greyCar).getPropertyValue("left"))
    if((blueCarleft === greyCarleft)&&(blueCarTop>250)&&(blueCarTop<450)){
        result.style.display = "block";
        game.style.style = "none";
        score.innerHTML = `Your score is" ${counter}`;

        counter = 0;
    }
})