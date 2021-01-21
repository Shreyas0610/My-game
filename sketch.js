var form;
var player;

var gameState
var playerCount;


var kingdomImage;

function preload (){
  kingdomImage = loadImage("defendkingdomhome.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();
  player = new Player();
}

function draw() {
  background(kingdomImage);  

  
  form.display();
  
}