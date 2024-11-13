 function setup(){
  createCanvas(800,600);
 }
 
 function tree(){
    // the Crown of tree
    stroke(34,139,34);
    fill(144,238,144);
    ellipse(400,350,500,250);
  // the trunk
  fill(139,69,19);
  noStroke();
  rect(380,380,40,250);
  quad(380,580,360,600,440,600,420,580);
  quad(290,419,280,419,382,498,382,480);
  quad(510,330,520,330,410,458,410,428);
  quad(220,490,210,500,400,520,400,500);
  // the home of owl
  fill(139,69,19);
  ellipse(230,488,100,20);
  fill(245,222,179);
  rect(245,455,30,30);
  fill(0);
  ellipse(260,470,15);
  fill(205,133,63);
  triangle(260,430,240,455,280,455);
 }
function Character(x,y,Fly){
  push();
  translate(x,y);
  scale(0.2);
  translate(-x,-y);
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
  pop();
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
  push();
  scale(0.6);
  noStroke();
  fill(255,255,255);
  ellipse(200,180,100);
  ellipse(145,200,100);
  ellipse(245,200,100);
  ellipse(200,210,100);
  pop();
  push();
  translate(500,-50);
  scale(0.6);
  noStroke();
  fill(255,255,255);
  ellipse(200,180,100);
  ellipse(145,200,100);
  ellipse(245,200,100);
  ellipse(200,210,100);
  pop();
}
function startScreen(){
  background(	0,139,139);
  textSize(50);
  fill(255,200,0);
  text("Little Owl comes home",150,200);
rect(350,400,100,50);
stroke(255,255,255);
fill(255,255,255);
textSize(40);
text("Start",357,438);
Character(400,30);
}
function resultScreen(){
  background(250,128,114);
  textSize(50);
  text(" Game Over ",250,300);
  fill(0,0,0);
  rect(350,320,100,50);
  fill(255);
  textSize(20);
  text("Start Over",355,350);
}
function gameScreen(){
  Gamebackground();
  tree();
      if (keyIsDown(32)){
          Character(x,y,true);
      }else{
          Character(x,y,false);
      }
      if (state === "game"){
        y = y  + velocityY;
        velocityY = velocityY + acceleration;
         // decrease the velocity when clicking
         if (keyIsDown(32)){
         velocityY = velocityY - 0.7;
         } 
         if(keyIsDown(68)){
         x = x + 6;
         }
         if (keyIsDown(65)){
         x = x - 6;
        }
         if (y >= 600){
         state = "result";
         console.log(" you're Die ");
         x = 400;
         y = 30;
         velocityY = 0;
        }
        if(x > 190 && x < 240 && y > 460 && y < 470){
          state = "win";
          console.log (" you're Win");
          x = 400;
          y = 30;
          velocityY = 0;
        }
      } 
}
function winScreen(){
  background(0,255,255);
  Character(400,300);
  textSize(50);
  fill(255,255,0);
  text("Thank You ! 🥰",260,200);
  fill(0,0,0);
  rect(350,400,100,50);
  fill(255);
  textSize(20);
  text("Play again",355,430);
}
let x = 400;
let y = 30;
// game logic variable
let velocityY = 0.2;
let acceleration = 0.2;
let state = "start";
function draw(){
  if(state === "start"){
    startScreen();
  }else if (state === "game"){
    gameScreen();
    gameState = true;
  }else if (state === "result"){
    resultScreen();
  }else if ( state === "win"){
    winScreen();
  }
}function mouseClicked(){
  if(state === "start" && mouseX >= 350 && mouseX <= 450 && mouseY >= 400 && mouseY <= 450){
      state = "game";
  }
  else if (state === "result" && mouseY >= 320 && mouseY <= 370 && mouseX >= 350 && mouseX <= 450){
    state ="game";
  }
  else if (state === "win" && mouseY >= 400 && mouseY <= 450 && mouseX >= 350 && mouseX <= 450){
    state = "game";
  }
}