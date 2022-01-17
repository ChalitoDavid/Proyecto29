class Chain {
 
 
    constructor(bodyA, pointB){
   
      var options = {
          
          bodyA: bodyA.body,
          pointB: pointB,
          'stiffness': 0.03,
          'length': 4
      
      }
      this.line = Constraint.create(options);
      World.add(world, this.line);
      this.bodyA = bodyA.body;
      this.pointB = pointB;
      this.image=loadImage("sprites/abuela.png")
  
    }
  
    display(){
      push();
      strokeWeight(4);
     if(this.line.bodyA){
      stroke(86, 38, 16)
      line(this.bodyA.position.x, this.bodyA.position.y, this.pointB.x, this.pointB.y)
    
     }
     image(this.image,180,80,150,150)
     pop();
    }
  
    fly(){
      this.line.bodyA = null;
    }
  }
  