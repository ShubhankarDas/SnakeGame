var snake;
var food;
var scl = 10;
var p1 = 0;
var p2 = 0;
var diePoint = 20;
var killPoint = 20;


function setup(){
    createCanvas(600,500);
    
    snakep1 = new Snake();
    snakep1.setColor(255,0,238);
    
    snakep2 = new Snake();
    snakep2.setPlayerInfo(0,100,1,0);
    snakep2.setColor(0,97,225);
    
    food = new Food();
    food.create();
    frameRate(15);
}
function draw(){
    background(51);
    snakep1.update();
    snakep2.update();
    food.show();
    snakep1.show();
    snakep2.show();
    
    if(snakep1.eat(food)){
        food.create();
        p1 = p1+10;
        document.getElementById("p1").innerHTML = p1;
    }
    if(snakep2.eat(food)){
        food.create();
        p2=p2+10;
        document.getElementById("p2").innerHTML = p2;
    }
    if(snakep1.kill(snakep2)){
        p1 = p1 +killPoint;
        document.getElementById("p1").innerHTML = p1;
        snakep2.die();
    }
    if(snakep2.kill(snakep1)){
        p2 = p2 +killPoint;
        document.getElementById("p2").innerHTML = p2;
        snakep1.die();
    }
}

function keyPressed(){
    if(keyCode === UP_ARROW){
        snakep1.changeDirection(0,-1);
    }
    else if(keyCode === DOWN_ARROW){
        snakep1.changeDirection(0,1);
    }
    else if(keyCode === LEFT_ARROW){
        snakep1.changeDirection(-1,0);
    }
    else if(keyCode === RIGHT_ARROW){
        snakep1.changeDirection(1,0);
    }
    
    if(key == 'W'){
        snakep2.changeDirection(0,-1);
    }
    else if(key == 'S'){
        snakep2.changeDirection(0,1);
    }
    else if(key == 'A'){
        snakep2.changeDirection(-1,0);
    }
    else if(key == 'D'){
        snakep2.changeDirection(1,0);
    }
    
    if(snakep1.dead && keyCode === ENTER){
        snakep1 = new Snake();
        snakep1.setColor(255,0,238);
        p1 = p1 - diePoint;
        document.getElementById("p1").innerHTML = p1;
    }
    if(snakep2.dead && keyCode === ENTER){
        snakep2 = new Snake();
        snakep2.setPlayerInfo(0,100,1,0);
        snakep2.setColor(0,97,225);
        p2 = p2 - diePoint;
        document.getElementById("p2").innerHTML = p2;
    }
}