function setup() { 
  createCanvas(400, 400);
  
}

function draw() { 
  background(220);
  
  
  for(x=0;x<400;x=x+15){
    ellipse(x,y,15,15);
    var y=x;
  }
}
