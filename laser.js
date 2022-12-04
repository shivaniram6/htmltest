function Laser(shipos,ang){
  this.pos=createVector(shipos.x,shipos.y);
  this.velocity=p5.Vector.fromAngle(ang);
  this.velocity.mult(10);  
  this.update=function(){
    this.pos.add(this.velocity);   
  }
  this.render=function(){
    push();
    stroke(255);
    strokeWeight(6);
    point(this.pos.x,this.pos.y);
    pop();

  }
  this.hits=function(asteroid){
    var d=dist(this.pos.x,this.pos.y,asteroid.pos.x,asteroid.pos.y);
    if (d<asteroid.r){
      return true;      
    }
    else{
      return false;
    }   
  }
}