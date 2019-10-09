let bubbles = []

function setup() {
 createCanvas(windowWidth, windowHeight);
 for ( let i = 0; i < 100; i++){
let x = random(width);
let y = random(height);
let r = random(1,60);
let b  = new Bubble(x,y,r);
 bubbles.push(b);
}

}

function mousePressed(){
  for (let i = 0 ; i < bubbles.length ; i++){
  bubbles[i].clicked(mouseX, mouseY);
  }
}







function draw(){
  background(10,30,282,50)

  for (let i = 0 ; i < bubbles.length ; i++){
  bubbles[i].move();
  bubbles[i].show();
  }
 }

class Bubble{
constructor(x,y,r){
  this.x = x;
  this.y = y;
  this.r =r;
  this.brightness = 0;
 }

clicked(px, py){
  let d = dist(px, py , this.x, this.y);
  if (d < this.r){
     this.brightness = 255
  //console.log("CLICKED ON BUBBLE!");
 }
}



  move(){
   this.x = this.x + random(-5,5);
   this.y = this.y + random(-5,5);
 }

show(){
    stroke(188,10,225,50);
    strokeWeight(4);
    fill(this.brightness, 25,30);
    ellipse(this.x, this.y, this.r * 2);
 }
}
