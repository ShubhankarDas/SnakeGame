function Snake(){
    this.x = 0;                 //x pointer 
    this.y = 0;                 //y pointer
    this.xspeed = 1;            //x increment
    this.yspeed = 0;            //y increment
    this.snakeLength = 10;      //length of the snake
    this.tail = [];             //snakes tail
    this.dead = false;
    this.blink = true;
    this.otherSnakes = [];
    this.otherTotalSnakes = 0;
    
    this.r = 225;
    this.b=225;
    this.g=225;
    
    for(var i =0 ; i<this.snakeLength-1 ; i++){
        this.tail[i] = createVector(this.x -(i -1),this.y - (i-1));
    }
    
    this.setColor = function(red,blue,green){
        this.r = red;
        this.b = blue;
        this.g = green;
    }
    
    this.setPlayerInfo = function(xaxis,yaxis,xsp,ysp){
        this.x = xaxis;
        this.y = yaxis;
        this.xspeed = xsp;
        this.yspeed = ysp;
    }
    
    this.update = function(){
        if(!this.dead){
            for(var i =0 ; i<this.tail.length-1 ; i++){
                this.tail[i] = this.tail[i+1];
            }

            this.tail[this.snakeLength -1] = createVector(this.x,this.y);

            this.x = this.x + this.xspeed*scl;
            this.y = this.y + this.yspeed*scl;
            
            //snake dies if it touchs itself
            for(var i = 0; i< this.snakeLength ; i++){
                if(this.tail[i].x == this.x && this.tail[i].y == this.y){
                    this.die();
                    break;
                }
            }
            
            //snake dies when goes out of bound
            if(this.x < 0 || this.x >width-scl){
                this.die();
            }
            if(this.y < 0 || this.y > height-scl){
                this.die();
            }
        }
    }
    
    this.show = function(){
        if(this.dead && this.blink){
            this.blink = !this.blink;
            return;
        }
        fill(this.r,this.g,this.b);
        for(var i = 0; i< this.snakeLength ; i++){
            rect(this.tail[i].x,this.tail[i].y,scl,scl);
        }
        rect(this.x,this.y,scl,scl);
        this.blink = !this.blink;
    }
    
    this.changeDirection = function(x, y){
        if(x == 0 && this.yspeed == 0){
            this.xspeed = x;
            this.yspeed = y;
        }
        else if(y == 0 && this.xspeed == 0){
            this.xspeed = x;
            this.yspeed = y;
        }
    }
    
    this.eat = function(food){
        var d = dist(this.x, this.y,food.x,food.y);
        if(d<1){
            this.addLength();
            return true;
        }else{
            return false;
        }
    }
    
    this.kill = function(snake){
        if(snake.dead){
            return false;
        }
        if(this.x == snake.x && this.y == snake.y){
            return true;
        }
        for(var i = 0; i< this.snakeLength -1 ; i++){
            if(this.tail[i].x == snake.x && this.tail[i].y == snake.y){
                return true;
            }
        }
        return false;
    }
    
    this.addLength = function(){
        this.snakeLength++;
    }
    
    this.die = function(){
        this.dead = 1;
    }
}