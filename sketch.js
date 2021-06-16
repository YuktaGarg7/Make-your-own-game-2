var bg,bg2,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("photo-1445905595283-21f8ae8a33d2.jpg");
  bg2 = loadImage("images.jpg");
}

function setup() {
  createCanvas(800,500);
  system = new System();
  security = new Security();

}

function draw() {
  background(bg);
  clues();
  security.display();

  // Add code to display score in the middle of the screen

  textSize(20)
  fill("lightBLUE");
  text("Score :" + score, 350, 200)
  // Add code to display the end screen
if(score === 3){
  clear();
  background(bg2);
  fill("black");
  textSize(40);
  text("TASK UNLOCKED", 300, 50);
}

  drawSprites()
}