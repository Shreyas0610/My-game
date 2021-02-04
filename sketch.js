var form;
var player;
var game;

var gameState = 0;
var playerCount = 0;

var redCastle, blueCastle; 

var bridge, backgroundPlay;

var redCastleIMG, blueCastleIMG;
var bridgeIMG, backgroundIMG;

var kingdomImage;

var database;

function preload (){
  kingdomImage = loadImage("defendkingdomhome.jpg");

  redCastleIMG = loadImage("Red Castle.jpg")
  blueCastleIMG = loadImage("Blue Castle.jpg")

  bridgeIMG = loadImage("bridge.png")
  backgroundIMG = loadImage("background for play.jpg")

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

  if(playerCount === 2){
    game.update(1);
  }

  if(gameState === 1){
    clear();
    game.play();
  }
  
}