class Bob{
	constructor(x,y,r)
	{
		var options={
			isStatic: true,
			restitution:0.6,
			friction:2,
			density:1
		}
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-10)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var bobpos=this.body.position;		
			push()
			translate(bobpos.x, bobpos.y);
			rectMode(CENTER)
			strokeWeight(3);
			stroke("red");
			fill("pink");
			ellipse(0,0,this.r, this.r);
			pop()
	}

}
