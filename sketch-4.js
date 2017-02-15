function setup() { 
  createCanvas(400, 400);
    background(0);
  
  colorMode(HSB,100,100);
  var h = 0;
  
  noStroke();
  for(y=20;y<390;y=y+15){
    for(x=20;x<390;x=x+15){
       fill(h,100,100);
      ellipse(x,y,15,15);
    
      h= h +0.3;
    
    }
  }
  
}

function draw() { 

}
