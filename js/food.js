function Food(){
    
    this.x;
    this.y;
    
    this.show = function(){
        fill(255,0,100);
        rect(this.x, this.y, scl,scl);
    }
    
    this.create = function(){
        var rows = floor(width/scl);
        var cols = floor(height/scl);
        this.x = (floor(random(rows)))*scl;
        this.y = (floor(random(cols)))*scl;
    }
}