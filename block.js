class block{
    constructor(x, y, w, h, bool, color1, color2, color3){
        var options = {
            isStatic: bool
        }  
        this.body = Bodies.rectangle(x, y, w, h, options);
        this.width = w;
        this.height = h;
        this.color1 = color1;
        this.color2 = color2;
        this.color3 = color3;
        World.add(world, this.body);

        this.isOffScreen = function(){
            var pos = this.body.position;
            return (pos.y > height);
        }
        this.removeFromWorld = function(){
            World.remove(world, this.body);
        }
    }
    
    display(){
        rectMode(CENTER);
        var angle = this.body.angle;
        var pos = this.body.position;
        fill(this.color1, this.color2, this.color3);
        stroke(255);
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rect(0, 0, this.width, this.height);
        pop();
    }
}