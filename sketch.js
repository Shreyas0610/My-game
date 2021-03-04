var form;
var player;
var game;

var gameState = 0;
var playerCount = 0;

var blueTroops, redTroops;

var blueTroopsIMG, redTroopsIMG;

var bullet1, bullet2;
var bulletIMG1, bulletIMG2;

var redCastle, blueCastle; 

var bridge, backgroundPlay;

var redCastleIMG, blueCastleIMG;
var bridgeIMG, backgroundIMG;

var kingdomImage;

var database;

var allPlayers;

function preload (){
  kingdomImage = loadImage("defendkingdomhome.jpg");

  redCastleIMG = loadImage("Red Castle.jpg")
  blueCastleIMG = loadImage("Blue Castle.jpg")

  bridgeIMG = loadImage("bridge.png")
  backgroundIMG = loadImage("background for play.jpg")

  redTroopsIMG = loadImage("left shooter.jpg");
  blueTroopsIMG = loadImage("rightshooter.jpg");

  bulletIMG1 = loadImage("Bullet-Shooting-512.jpg");
  bulletIMG2 = loadImage("Bullet-Shooting-flipped.jpg");

}

function setup() {
  createCanvas(displayWidth-50,displayHeight-50);

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