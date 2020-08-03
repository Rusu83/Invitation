var img;
var n=100;
var m=0;

function preload(){
  img=loadImage("da.png");
}

function setup() {
  createCanvas(500,500);
  translate(10,10);
  img.resize(n,n);
  //noLoop();
}


function draw() {
  translate(10,10);
  img.loadPixels();
  for(var y=0;y<n;y++){
    for(var x=0;x<n;x++){
      var index=(x+y*n)*4;
      var br=(img.pixels[index+0]+img.pixels[index+1]+img.pixels[index+2])/3;
      if(br>map(sin(m),-1,1,0,255))
        stroke(255);
      else
        stroke(0);
      point(x,y);
    }
  }
  m+=0.05;
  
}
