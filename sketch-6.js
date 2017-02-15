function setup() { 
  createCanvas(400, 400);
	background(0);
  fill(255);  
  noStroke();
  for(var y=20;y<400;y=y+20){
    var startX = y;
    var endX = 400-startX;
    if(y <=200){
    for(var x=startX;x<=endX;x=x+20){
      ellipse(x,y,18,18);
    }
  }else{
    for(var x = 400-y; x <= y; x = x+20){
      ellipse(x,y,18,18);
    }
  }
  
}
}
