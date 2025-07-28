var grama, gramaImage;
var sapo, sapoAnimation;
var aranha, aranhaAnimation;
var cobra, cobraAnimation;
var cinos, cinosAnimation;
var nyjag, nyjagAnimation;
var formiga, formigaAnimation;


function preload(){
  sapoAnimation = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png", "./assets/sapojump6.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png", "./assets/cobra1.png", "./assets/cobra2.png", "./assets/cobra3.png", "./assets/cobra4.png");
  aranhaAnimation = loadAnimation("./assets/aranha0.png", "./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
  cinosAnimation = loadAnimation("./assets/Cinos0.png","./assets/Cinos1.png","./assets/Cinos2.png");
  nyjagAnimation = loadAnimation("./assets/nyjag_0.png","./assets/nyjag_1.png","./assets/nyjag_2.png","./assets/nyjag_3.png");
  formigaAnimation = loadAnimation("./assets/formiga0.png", "./assets/formiga1.png", "./assets/formiga2.png", "./assets/formiga3.png", "./assets/formiga4.png", "./assets/formiga5.png");
  gramaImage = loadImage("./assets/grama.png");
}

function setup() {
  createCanvas(1420, 500);
  grama = createSprite(710, 250);
  grama.addImage(gramaImage);
  sapo = createSprite(100, 400);
  sapo.addAnimation("sapoAnimation", sapoAnimation);
  aranha = createSprite(400, 200);
  aranha.addAnimation("aranhaAnimation", aranhaAnimation);
  cobra = createSprite(600, 400);
  cobra.addAnimation("cobraAnimation", cobraAnimation);
  cinos = createSprite(900,100);
  cinos.addAnimation("cinosAnimation", cinosAnimation);
  nyjag = createSprite(1200,100);
  nyjag.addAnimation("nyjagAnimation",nyjagAnimation);
  formiga = createSprite(800, 100);
  formiga.addAnimation("formigaAnimation", formigaAnimation);
}

function draw() {
  background("lightgrey"); 
  
  drawSprites();
}




