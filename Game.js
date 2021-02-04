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
    redCastle = createSprite(displayWidth-200,displayHeight/2);
    blueCastle = createSprite(200,displayHeight/2);

    bridge = createSprite(displayWidth-500,displayHeight/2)
    
    bridge.addImage(bridgeIMG);
    
    redCastle.scale = 0.5;
    blueCastle.scale = 0.5;

    redCastle.addImage(redCastleIMG);
    blueCastle.addImage(blueCastleIMG);
  }

  play(){
    form.hide();

    background(backgroundIMG);

    Player.getPlayerInfo();
    
    drawSprites();
     
  }
}