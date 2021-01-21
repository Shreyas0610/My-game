class Player {
    constructor() {
        this.name = null;
        this.index = null
        this.score = 0;
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });

    }

    update(){
        var playerIndex = "Players/Player " + this.index;
        database.ref(playerIndex).set({
            name:this.name,
            score: this.score
        });
    }
}