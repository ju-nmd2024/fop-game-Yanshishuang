
function Character(x,y,Fly){
  mainbody(x,y);
 
  ears(x,y);
  eyebrows(x,y);
  if (Fly){
  closeEye(x,y);
  push();
  translate(x-80,y-30);
  scale(0.8);
  rotate(PI/3);
  wings(0,0);
  pop();
  push();
  translate(x+90,y-30);
  scale(0.8);
  rotate(PI/-3);
  wings(0,0);
  pop();}
  else{
  eyes(x,y);
  push();
  translate(x-80,y-30);
  scale(0.8);
  rotate(PI/12);
  wings(0,0);
  pop();
  push();
  translate(x+90,y-30);
  scale(0.8);
  rotate(PI/-12);
  wings(0,0);
  pop();}
  mouth(x,y);
  foot(x,y);
}
function mainbody(x,y){
fill (150, 130, 110);
strokeWeight(2);
rect(x-100,y-120,200,240,90,90,100,100);
//feather
//outline
fill(210,180,140);
stroke(0,0,0);
beginShape();
vertex(x-70,y+90);
bezierVertex(x-70,y,x+70,y,x+70,y+90);
bezierVertex(x+70,y+130,x-60,y+130,x-70,y+90);
endShape();
//inside
beginShape();
vertex(x-10,y+70);
bezierVertex(x-10,y+80,x+10,y+80,x+10,y+70);
endShape();
push();
translate(40,0);
beginShape();
vertex(x-10,y+70);
bezierVertex(x-10,y+80,x+10,y+80,x+10,y+70);
endShape();
translate(-80,0);
beginShape();
vertex(x-10,y+70);
bezierVertex(x-10,y+80,x+10,y+80,x+10,y+70);
endShape();
translate(20,20);
beginShape();
vertex(x-10,y+70);
bezierVertex(x-10,y+80,x+10,y+80,x+10,y+70);
endShape();
translate(40,0);
beginShape();
vertex(x-10,y+70);
bezierVertex(x-10,y+80,x+10,y+80,x+10,y+70);
endShape();
pop();
}
function wings(x,y){
fill (92, 45, 10);
stroke(0,0,0);
strokeWeight(2);
beginShape();
vertex(x-20,y+100);
bezierVertex(x-20,y+130,x-60,y+130,x-50,y+100);
bezierVertex(x-10,y-10,x,y-10,x+40,y+100);
bezierVertex(x+50,y+130,x+20,y+130,x+10,y+100);
bezierVertex(x+10,y+130,x-20,y+130,x-20,y+100);
endShape();
}
function ears(x,y){
//ears
//Left ear
fill(92, 45, 10);
stroke(0,0,0);
strokeWeight(2);
beginShape();
vertex(x-85,y-80);
bezierVertex(x-130,y-80,x-110,y-100,x-100,y-90);
bezierVertex(x-120,y-95,x-120,y-145,x-110,y-150);
bezierVertex(x-100,y-110,x-80,y-100,x-66,y-100);
endShape(CLOSE);
//Right ear
beginShape();
vertex(x+85,y-80);
bezierVertex(x+130,y-80,x+110,y-100,x+100,y-90);
bezierVertex(x+120,y-95,x+120,y-145,x+110,y-150);
bezierVertex(x+100,y-110,x+80,y-100,x+66,y-100);
endShape(CLOSE);
}
function eyes(x,y){
//eyes
//Left eye
stroke(0,0,0);
strokeWeight(2);
fill(92, 45, 10);
ellipse(x-40,y-40,70);
fill(255,255,255);
ellipse(x-40,y-40,50);
fill(0,0,0);
ellipse(x-40,y-40,30);
fill(255,255,255);
noStroke();
ellipse(x-35,y-45,10);

//Right eye
push();
translate(80,0);
stroke(0,0,0);
strokeWeight(2);
fill(92, 45, 10);
ellipse(x-40,y-40,70);
fill(255,255,255);
ellipse(x-40,y-40,50);
fill(0,0,0);
ellipse(x-40,y-40,30);
fill(255,255,255);
noStroke();
ellipse(x-35,y-45,10);
pop();
}
function mouth(x,y){
//mouth
stroke(0,0,0);
strokeWeight(1);
fill(255,140,0);
beginShape();
vertex(x-8,y-10);
bezierVertex(x-8,y-20,x+8,y-20,x+8,y-10);
vertex(x,y);
endShape(CLOSE);
}
function eyebrows(x,y){
//eyebrows
//Left eyebrow
fill(210,180,140);
stroke(0,0,0);
strokeWeight(2);
beginShape();
vertex(x-5,y-45);
bezierVertex(x-5,y-85,x-60,y-85,x-70,y-85);
vertex(x-70,y-75);
vertex(x-85,y-75);
vertex(x-70,y-60);
endShape();

//Right eyebrow
beginShape();
vertex(x+5,y-45);
bezierVertex(x+5,y-85,x+60,y-85,x+70,y-85);
vertex(x+70,y-75);
vertex(x+85,y-75);
vertex(x+70,y-60);
endShape(CLOSE);
}
function foot(x,y){
//foot
//Left foot
fill(92, 45, 10);
stroke(0,0,0);
strokeWeight(2);
rect(x-40,y+104,10,20,5);
rect(x-30,y+102,10,24,5);
rect(x-20,y+104,10,20,5);

//Right foot
push();
translate(60,0);
fill(92, 45, 10);
stroke(0,0,0);
strokeWeight(2);
rect(x-40,y+104,10,20,5);
rect(x-30,y+102,10,24,5);
rect(x-20,y+104,10,20,5);
pop();
}
function closeEye(x,y){
  //eyesAreClosed
fill(92, 45, 10);
strokeWeight(3);
ellipse(x-40,y-40,70);
fill(0,0,0);
ellipse(x-40,y-40,70,5);
fill(92, 45, 10);
strokeWeight(3);
ellipse(x+40,y-40,70);
fill(0,0,0);
strokeWeight(3);
ellipse(x+40,y-40,70,5);
}
function Gamebackground(){
  background(140, 169, 219);
  noStroke();
  fill(255,255,255);
  ellipse(600,180,100);
  ellipse(545,200,100);
  ellipse(645,200,100);
  ellipse(600,210,100);
}
let x = 200;
let y = 200;

function draw(){
  Gamebackground();
  
      if (keyIsDown(32)){
          Character(x,y,true);
      }else{
          Character(x,y,false);
      }
      y = y  + 2;
      if (keyIsDown(32)){
          y = y  -12; 
      } 
      if(keyIsDown(68)){
          x = x + 4;
      }
      if (keyIsDown(65)){
          x = x - 4;
      }
}