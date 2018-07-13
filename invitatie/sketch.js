var ok=0,x=-100,y=-300,k=0,j=20;

function setup() {
  createCanvas(500,500);
  textSize(58);
  textAlign(CENTER);
  noStroke();
}

function draw() {
  background(255,0,120);
  fill(100,50,250);
  if(k==1&&mouseY>400){
    if(mouseX<250){
      rect(0,350,250,150);
      if(mouseIsPressed){
        ok=3;
        k=0;
      }
    }
    else{
      rect(250,350,250,150);
      k=0;
    }
  }
  fill(200,230,54);
  if(ok==0){
    text("Hey!",x,y);
    if(x>245&&y>245)
      text("Click!",250,400);
  }
  if(ok==1){
    text("How's it going?",x,y);
      if((x>245&&x<255)&&(y>245&&y<255)){
        text("Click!",250,400);
      }
  }
  if(ok==2){
    text("Wanna come \n to my wedding?",x,y);
    if((x>245&&x<255)&&(y>245&&y<255)){
      text(" YES",50,450);
      text("NO",450,450);
      k=1;
    }
  }
  if(ok==3){
    j+=0.5;
    textSize(j);
    text("Yaaaaaaaay!",x,y);
    x+=random(-5,5);
    y+=random(-5,5);
    if(j>100){
      ok=4;
      textSize(48);
    }
  }
  if(ok==4)
    text("Contact me and I'll\n give you the details",250,200);
  x=lerp(x,250,0.05);
  y=lerp(y,250,0.05);
}

function mousePressed(){
  if(ok<=1)
    ok++;
  if(ok==2)
  x=random(-500,1000);
  y=random(-500,1000);
}
