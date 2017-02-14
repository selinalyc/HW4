function setup() { 
  createCanvas(400, 400);
  
}

function draw() { 
  background(0);
  
  noStroke();
  for(x=20;x<390;x=x+15){
    for(y=20;y<390;y=y+15){
      ellipse(x,y,15,15);
    }
  }
}
