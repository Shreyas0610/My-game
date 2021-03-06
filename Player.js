class Player {
    constructor() {
        this.name = null;
        this.index = null
        this.score = 0;
    }

    getCount() {
        var playerCountRef = database.ref('playerCount');
        playerCountRef.on("value", (data) => {
            playerCount = data.val();
        })
    }

    updateCount(count) {
        database.ref('/').update({
            playerCount: count
        });

    }

    update() {
        var playerIndex = "Players/Player " + this.index;
        database.ref(playerIndex).set({
            name: this.name,
            score: this.score
        });
    }

    static getPlayerInfo() {
        var playerInfoRef = database.ref('players');
        playerInfoRef.on("value", (data) => {
            allPlayers = data.val();
        })
    }
}