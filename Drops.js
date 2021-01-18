class Rain
{
    constructor(x, y, radius)
    {
        var options={
            isStatic:false,
            friction:0.1
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body=Bodies.circle(this.x, this.y,this.radius, options);
        World.add(world,this.body);
    }
    display()
    {
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        fill("White");
        stroke("White");
        ellipseMode(CENTER);
        ellipse(0,0, this.radius);
        pop();
    }
    update()
    {
        if(this.body.position.y > height)
        {
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,400)});
        }
    }
}