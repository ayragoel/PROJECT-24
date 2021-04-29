class Iron {
    constructor(x, y) {
      var options = {
        'restitution':0.8,
        'friction' :3,
        'density':30
        };
    
    this.body = Bodies.rectangle(x, y, 50, 50, options);
    this.width = 80;
    this.height = 80;
    World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      //pos.x = 250;
      //pos.y = ;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      //rotate(angle);
      strokeWeight(3);
      stroke('white')
      fill('red')
      rectMode(CENTER)
      rect(0, 0, this.width, this.height);
      pop();
    };
  };