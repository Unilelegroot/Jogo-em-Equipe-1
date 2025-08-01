var ceu, ceuImage;
var grama, gramaImage;
var sapo, sapoAnimation;
var aranha, aranhaAnimation;
var cobra, cobraAnimation;
var cinos, cinosAnimation;
var nyjag, nyjagAnimation;
var formiga, formigaAnimation;
var morcego, morcegoAnimation;
var gramaInvisivel;


function preload(){
  ceuImage = loadImage("./assets/ceu.png");
  sapoAnimation = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png", "./assets/sapojump6.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png", "./assets/cobra1.png", "./assets/cobra2.png", "./assets/cobra3.png", "./assets/cobra4.png");
  aranhaAnimation = loadAnimation("./assets/aranha0.png", "./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
  cinosAnimation = loadAnimation("./assets/Cinos0.png","./assets/Cinos1.png","./assets/Cinos2.png");
  nyjagAnimation = loadAnimation("./assets/nyjag_0.png","./assets/nyjag_1.png","./assets/nyjag_2.png","./assets/nyjag_3.png");
  formigaAnimation = loadAnimation("./assets/formiga0.png", "./assets/formiga1.png", "./assets/formiga2.png", "./assets/formiga3.png", "./assets/formiga4.png", "./assets/formiga5.png");
  gramaImage = loadImage("./assets/grama.png");
  morcegoAnimation = loadAnimation("./assets/morcego1.png","./assets/morcego2.png","/assets/morcego3.png");
}

function setup() {
  createCanvas(1420, 500);
  ceu = createSprite(600,100);
  ceu.addImage(ceuImage);
  grama = createSprite(710, 250);
  grama.addImage(gramaImage);
  gramaInvisivel = createSprite(710, 450, 1420, 40);
  gramaInvisivel.visible = false;
  sapo = createSprite(100, 400);
  sapo.addAnimation("sapoAnimation", sapoAnimation);
  sapo.scale = 2;
  aranha = createSprite(700, 220);
  aranha.addAnimation("aranhaAnimation", aranhaAnimation);
  cobra = createSprite(600, 400);
  cobra.addAnimation("cobraAnimation", cobraAnimation);
  cobra.scale = 2;
  cinos = createSprite(900,400);
  cinos.addAnimation("cinosAnimation", cinosAnimation);
  cinos.mirrorX(-1);
  cinos.scale=2.25;
  nyjag = createSprite(600,100);
  nyjag.addAnimation("nyjagAnimation",nyjagAnimation);
  nyjag.scale=0.90;
  nyjag.mirrorX(-1);
  formiga = createSprite(800, 400);
  formiga.addAnimation("formigaAnimation", formigaAnimation);
  morcego = createSprite(600, 230);
  morcego.addAnimation("morcegoVoando", morcegoAnimation);
  
}  

function draw() {
  background("lightgrey"); 
  grama.velocityX = -3.5;
  if(grama.x<-100){
    grama.x = 710;
  }
  sapo.collide(gramaInvisivel);
  sapo.velocityY = 0.5;
  if(keyDown("space") && sapo.y >= 390){
    sapo.velocityY = -20;
  }
  if(cinos.x>=900){
    cinos.velocityX=-2;
    cinos.mirrorX(-1);
  }
  if(cinos.x <=100){
    cinos.velocityX=2;
    cinos.mirrorX(1);
  }
  
  drawSprites(); 
text("X: "+mouseX+" /Y: "+mouseY,mouseX,mouseY);
}




