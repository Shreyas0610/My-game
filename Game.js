class Game {
  constructor() { }


  getState() {
    var gameStateRef = database.ref('gameState');
    gameStateRef.on("value", function (data) {
      gameState = data.val();
    })

  }

  update(state) {
    database.ref('/').update({
      gameState: state
    });
  }


  async start() {
    if (gameState === 0) {
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if (playerCountRef.exists()) {
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();
    }
    redCastle = createSprite(displayWidth - 200, displayHeight / 2);
    blueCastle = createSprite(200, displayHeight / 2);

    blueTroops = createSprite(500, displayHeight - 485);
    redTroops = createSprite(displayWidth - 500, displayHeight - 485);

    blueTroops.addImage(blueTroopsIMG);
    redTroops.addImage(redTroopsIMG);

    blueTroops.scale = 0.2;
    redTroops.scale = 0.2;

    bridge = createSprite(displayWidth / 2, displayHeight - 400);
    bridge.addImage(bridgeIMG);

    redCastle.scale = 0.5;
    blueCastle.scale = 0.5;

    redCastle.addImage(redCastleIMG);
    blueCastle.addImage(blueCastleIMG);
  }

  play() {
    form.hide();

    background(backgroundIMG);

    Player.getPlayerInfo();

    if(keyDown("d")){
      blueTroops.x = blueTroops.x + 3;  
    };

    if(keyDown("a")){
      blueTroops.x = blueTroops.x - 3;  
    };

    if(keyDown(RIGHT_ARROW)){
      redTroops.x = redTroops.x + 3;  
    };

    if(keyDown(LEFT_ARROW)){
      redTroops.x = redTroops.x - 3;  
    };


    drawSprites();

  }
}