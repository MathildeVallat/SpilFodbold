
// Her loader vi billeder
var n=0
let billeder=[];
let img1;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img_goal
let img_blaasejr;
let img_rodsejr;
let musik

// Andet kodning
var goal1=0;
var goal2=0;
var goal3=0;
var målmand=0;
var målmandPositioner=[1,2,3];
var score=0;
var t2=0;
var t1=0;
var t3=0;
var t4=0;
var holdFarve=[255,0,0];
var timerValue=60;
var timerStarted=0;
var redScore=0;
var blueScore=0;
var goal1Farve=[0,0,0];
var goal2Farve=[0,0,0];
var goal3Farve=[0,0,0];


//Load billederne
function preload() {
	img1=loadImage('img1.jpg');
	img2=loadImage('img2.jpg');
	img3=loadImage('img3.jpg');
	img4=loadImage('img4.jpg');
	img5=loadImage('img5.jpg');
	img6=loadImage('img6.jpg');
	img7=loadImage('img7.jpg');
	img_goal=loadImage('img_goal.jpg')
	img_blaasejr=loadImage ('img8_blaasejr.jpg')
	img_rodsejr=loadImage('img8_rodsejr.jpg')
	billeder=[img1,img2,img3,img4,img_goal,img5,img5,img6,img_goal,img7,img7,img_blaasejr,img_rodsejr];
	musik = loadSound('clap.mp3');
}

function setup(){
createCanvas(windowWidth,windowHeight);
}

function draw(){
print(redScore);
background(255);

image(billeder[n],50,100, 1000,700);

if (n==5){
  spillet();
}

if (n==7){
  timerValue=60;
  score=0;}

if (n==5&&timerStarted==0){
  setInterval(timeIt,1000);
  timerStarted=1;
}

if (n==8&&timerStarted==0){
  setInterval(timeIt,1000);
  timerStarted=1;
}

if (n==8){
  holdFarve=[0,0,255];
  spillet();
}
if (timerValue<=0&&n==5){
  n++;
  redScore=score;
}

if (timerValue<=0&&n==8){
  n++;
  blueScore=score;
}

if (n==9){
tjekVinder();

}



print(n);
}


function spillet(){
  timeInterval();

  background(255,255,255);
  fill(65);
  textSize(100);
  text(målmand, 0, 100);

  fill(goal1Farve);
  textSize(100);
  text(goal1, 400, 200);

  fill(goal2Farve);
  textSize(100);
  text(goal2, 500, 200);

  fill(goal3Farve);
  textSize(100);
  text(goal3, 600, 200);

  fill(holdFarve);
  textSize(100);
  text(score, 0, 300);

  fill(holdFarve);
  textSize(25);
  text("Score:", 0, 225);

  fill(65);
  textSize(25);
  text("Målmandens position:", 0, 25);

  fill(65);
  textSize(50);
  text("Mål:", 475, 100);

  fill(65);
  textSize(50);
  text("TID: "+timerValue, 700, 50);


  if(goal1==1&&målmand!=1) {
    score=score+1;
    }


  if(goal2==1&&målmand!=2) {
    score=score+1;

      }
  if(goal3==1&&målmand!=3) {
    score=score+1;
    }
}

function keyPressed() {
    if (keyCode==LEFT_ARROW){
      goal1=1;
      goal1Farve=[0,255,0];
      setTimeout(resetmål,10);
      }

    if (keyCode==UP_ARROW){
          goal2=1;
          goal2Farve=[0,255,0];
          setTimeout(resetmål,10);

        }
    if (keyCode==RIGHT_ARROW){
          goal3=1;
          goal3Farve=[0,255,0];
          setTimeout(resetmål,10);

          }
    if (keyCode === 32) {
        		n=n+1
          }
    if (n==10){
        		n=0
        	}
    if(keyCode === 66) {//blaa sejr
        		n=11
        	}
    if(keyCode === 82) {//rod sejr
        		n=12
        	}

    }


function målmandPosition(){
  målmand=random(målmandPositioner);

}

function timeInterval(){
  t2=millis();
  if(t2-t1>2000){
      t1=t2;
      målmandPosition();
      console.log(målmand);
  }
}

function resetmål(){
goal1=0;
goal2=0;
goal3=0;
goal1Farve=[0,0,0];
goal2Farve=[0,0,0];
goal3Farve=[0,0,0];
}

function timeIt() {
if (timerValue>0){
    timerValue--;
}

}

function tjekVinder() {
  if (redScore<blueScore){
    n=11;
		musik.play()
  }

  if (redScore>blueScore){
    n=12;
	  musik.play()
  }

}
