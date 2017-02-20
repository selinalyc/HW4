function setup() { 
  createCanvas(400, 400);
}

  function draw(){
  background(0);
   
    for(var x=0;x<=400;x=x+10){
    var y = random(400);  
      line(x,400,x,y);
      stroke(255);
  // How to make the changing slower
  }
    

  
}
