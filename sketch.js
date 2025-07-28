var sapo, sapoAnimation;
var aranha, aranhaAnimation;
var cobra, cobraAnimation;

function preload(){
  sapoAnimation = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png", "./assets/sapojump6.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png", "./assets/cobra1.png", "./assets/cobra2.png", "./assets/cobra3.png", "./assets/cobra4.png");
  aranhaAnimation = loadAnimation("./assets/aranha0.png", "./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
}

function setup() {
  createCanvas(1420, 500);
  sapo = createSprite(100, 100);
  sapo.addAnimation("sapoAnimation", sapoAnimation);
  aranha = createSprite(400, 100);
  aranha.addAnimation("aranhaAnimation", aranhaAnimation);
  cobra = createSprite(600, 100);
  cobra.addAnimation("cobraAnimation", cobraAnimation);
}

function draw() {
  background("lightgrey"); 
  
  drawSprites();
}




