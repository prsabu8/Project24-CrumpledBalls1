class Paper 
{
    constructor(x, y) 
    {
        var option = {
            isStatic: false,
		    restitution: 0.3,
		    friction: 0.5,
		    density: 1.2
        }
        this.body = Bodies.circle(x, y, 20, option);
        this.radius = 20;

        World.add(world, this.body);
    }
    display()
    {
        var pos = this.body.position;
        ellipseMode(CENTER);
        fill("violet");
        ellipse(pos.x, pos.y, this.radius);
    }
}