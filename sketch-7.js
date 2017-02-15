function setup() { 
  createCanvas(400, 400);
	background(0);
  

  for(var y=20;y<=height-20;y=y+20){
   
    for(var x=20;x<=width-20;x=x+20){
      line(20,y,width-20,y);
      line(x,20,x,height-20);
      stroke(255);
        
    }
  }
  
}
