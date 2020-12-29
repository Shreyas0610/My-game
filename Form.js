class Form {
    constructor () {
        this.button = createButton("Play");
        this.greeting = createElement("h2");
        this.input = createInput("Name");
        this.title = createElement("h2");
    }
    
    hide() {
        this.button.hide();
        this.greeting.hide();
        this.input.hide();
        this.title.hide();
    }
    display() {
        this.title.html("Defend Kingdom");

        this.title.position(displayWidth/2 - 50, 0);

        this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 + 30, displayHeight/2);
    }

}