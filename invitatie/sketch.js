var r,g,b,rf,gf,bf,p,sx=0,sy=0;

function setup() {
  createCanvas(window.innerWidth,window.innerHeight);
  r=random(255);
  g=random(255);
  b=random(255);
  rf=random(255);
  gf=random(255);
  bf=random(255);
  p=int(random(4));
  noStroke();
  //frameRate(5);
}

function draw() {
  background(r,g,b);
  fill(rf,bf,gf);
  switch(p%5){
    case 0:rect(0,0,sx,sy);break;
    case 1:rect(width,0,-sx,sy);break;
    case 2:rect(width,height,-sx,-sy);break;
    case 3:rect(0,height,sx,-sy);break;
		case 4:ellipse(width/2,height/2,2*sx,2*sy);
  }
 sx+=width/20;
 sy+=height/20;
 if(sx>width&&sy>height){
		sx=0;
	 	sy=0;
	 r=rf;
	 g=gf;
	 b=bf;
	 	rf=random(255);
  gf=random(255);
  bf=random(255);
  p=int(random(5));
 }
}
