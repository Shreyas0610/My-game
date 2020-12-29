var form;

var kingdomImage;

function preload (){
  kingdomImage = loadImage("defendkingdomhome.jpg");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  
  form = new Form();
}

function draw() {
  background(kingdomImage);  

  
  form.display();
  
}