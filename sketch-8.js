function setup() { 
  createCanvas(400, 400);
	background(0);
  

 
   
    for(var x=20;x<=380;x=x+20){
      line(x,20,20,y);
			var y = x;
     //why there is a line
      stroke(255);
      line(380,y,x,380);  
			// why the middle line isn't parralel.
    }
  
  
}
