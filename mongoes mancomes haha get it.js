class Mango{
    constructor(x, y, diameter){

      var options = {
          isStatic: true,
          restitution: 0,
          friction: 1,
      }
      this.image = loadImage("Plucking mangoes/mango.png");

      this.body = Bodies.circle(x, y, diameter, options);
      this.x = x;
      this.y = y;
      this.diameter = diameter;
      World.add(world, this.body);
            
    }
    display(){

      push();
   
      var pos = this.body.position; 
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      imageMode(CENTER);
      image(this.image, 0, 0, this.diameter, this.diameter);
      pop();

    }
}