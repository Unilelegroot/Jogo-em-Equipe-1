var sapo, sapoAnimation;
var aranha, aranhaAnimation;
var cobra, cobraAnimation;
var cinos, cinosAnimation;
var nyjag, nyjagAnimation;

function preload(){
  sapoAnimation = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png", "./assets/sapojump6.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png", "./assets/cobra1.png", "./assets/cobra2.png", "./assets/cobra3.png", "./assets/cobra4.png");
  aranhaAnimation = loadAnimation("./assets/aranha0.png", "./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
  cinosAnimation = loadAnimation("./assets/Cinos0.png","./assets/Cinos1.png","./assets/Cinos2.png");
  nyjagAnimation = loadAnimation("./assets/nyjag_0.png","./assets/nyjag_1.png","./assets/nyjag_2.png","./assets/nyjag_3.png");
}

function setup() {
  createCanvas(1420, 500);
  sapo = createSprite(100, 100);
  sapo.addAnimation("sapoAnimation", sapoAnimation);
  aranha = createSprite(400, 100);
  aranha.addAnimation("aranhaAnimation", aranhaAnimation);
  cobra = createSprite(600, 100);
  cobra.addAnimation("cobraAnimation", cobraAnimation);
  cinos = createSprite(900,100);
  cinos.addAnimation("cinosAnimation", cinosAnimation);
  nyjag = createSprite(1200,100);
  nyjag.addAnimation("nyjagAnimation",nyjagAnimation);
}

function draw() {
  background("lightgrey"); 
  
  drawSprites();
}




