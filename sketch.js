var form;
var player;
var game;

var gameState = 0;
var playerCount = 0;

var redCastleIMG, blueCastleIMG;
var kingdomImage;

var database;

function preload (){
  kingdomImage = loadImage("defendkingdomhome.jpg");

  redCastleIMG = loadImage("Red Castle.jpg")
  blueCastleIMG = loadImage("Blue Castle.jpg")

}

function setup() {
  createCanvas(displayWidth,displayHeight);

  database = firebase.database();

  game = new Game();
  game.getState();
  game.start();
}

function draw() {
  background(kingdomImage);  

  
  form.display();
  
}