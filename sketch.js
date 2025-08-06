var ceu, ceuImage;
var grama, gramaImage;
var sapo, sapoAnimation, sapoAnimationJump;
var aranha, aranhaAnimation;
var cobra, cobraAnimation;
var cinos, cinosAnimation;
var nyjag, nyjagAnimation;
var formiga, formigaAnimation;
var morcego, morcegoAnimation;
var gramaInvisivel;
var mosquito, mosquitoAnimation;
var inimigosGroup;
var inimigos;


function preload() {
  ceuImage = loadImage("./assets/ceu.png");
  sapoAnimationJump = loadAnimation("./assets/sapojump0.png", "./assets/sapojump1.png", "./assets/sapojump2.png", "./assets/sapojump3.png", "./assets/sapojump4.png", "./assets/sapojump5.png", "./assets/sapojump6.png");
  sapoAnimation = loadAnimation("./assets/saporun0.png", "./assets/saporun1.png", "./assets/saporun2.png", "./assets/saporun3.png");
  cobraAnimation = loadAnimation("./assets/cobra0.png", "./assets/cobra1.png", "./assets/cobra2.png", "./assets/cobra3.png", "./assets/cobra4.png");
  aranhaAnimation = loadAnimation("./assets/aranha0.png", "./assets/aranha1.png", "./assets/aranha2.png", "./assets/aranha3.png");
  cinosAnimation = loadAnimation("./assets/Cinos0.png", "./assets/Cinos1.png", "./assets/Cinos2.png");
  nyjagAnimation = loadAnimation("./assets/nyjag_0.png", "./assets/nyjag_1.png", "./assets/nyjag_2.png", "./assets/nyjag_3.png");
  formigaAnimation = loadAnimation("./assets/formiga0.png", "./assets/formiga1.png", "./assets/formiga2.png", "./assets/formiga3.png", "./assets/formiga4.png", "./assets/formiga5.png");
  gramaImage = loadImage("./assets/grama.png");
  morcegoAnimation = loadAnimation("./assets/morcego1.png", "./assets/morcego2.png", "/assets/morcego3.png");
  mosquitoAnimation = loadAnimation("./assets/mosquito1.png", "./assets/mosquito2.png", "./assets/mosquito3.png");
}

function setup() {
  createCanvas(1420, 500);

  ceu = createSprite(600, 100);
  ceu.addImage(ceuImage);

  grama = createSprite(710, 250);
  grama.addImage(gramaImage);

  gramaInvisivel = createSprite(710, 450, 1420, 40);
  gramaInvisivel.visible = false;

  sapo = createSprite(100, 400);
  sapo.addAnimation("correndo", sapoAnimation);
  sapo.addAnimation("pulando", sapoAnimationJump);
  sapo.changeAnimation("correndo");
  sapo.scale = 0.45;

  aranha = createSprite((grama.x / 2)+227, 220);
  aranha.addAnimation("aranhaAnimation", aranhaAnimation);

  // cinos = createSprite(900,400);
  // cinos.mirrorX(-1);
  // cinos.scale = 2.25;

  // nyjag = createSprite(600,100);
  // nyjag.addAnimation("nyjagAnimation",nyjagAnimation);
  // nyjag.scale = 0.90;
  // nyjag.mirrorX(-1);

  // formiga = createSprite(800, 400);
  // formiga.addAnimation("formigaAnimation", formigaAnimation);
  // formiga.scale = 1.3;

  // morcego = createSprite(600, 230);
  // morcego.addAnimation("morcegoVoando", morcegoAnimation);
}

function draw() {
  background("lightgrey");
  // movimentação da grama
  grama.velocityX = -3.5;
  if (grama.x < -100) {
    grama.x = 710;
  }
  // movimento zig zag da "jaguatirica"
  // if(nyjag.y<=100){
  //   nyjag.velocityX=-2;
  //   nyjag.velocityY=2;
  // }
  // if(nyjag.y>=261){
  //   nyjag.velocityY=-2;

  // }
  // gravidade no sapo
  sapo.velocityY += 0.8;
  sapo.collide(gramaInvisivel);
  // pulo
  if (keyDown("space") && sapo.y >= 360) {
    sapo.velocityY = -12;
    sapo.changeAnimation("pulando");
  } else if (sapo.y >= 360) {
    sapo.changeAnimation("correndo");
  }
  // movimento dos sprites
  // if (cinos.x >= 900) {
  //   cinos.velocityX = -2;
  //   cinos.mirrorX(-1);
  // }
  // if (cinos.x <= 100) {
  //   cinos.velocityX = 2;
  //   cinos.mirrorX(1);
  // }
  //aranha.x = (grama.x/2)+20;
  aranha.velocityX = grama.velocityX;
  // cobra.velocityX = -4.2;
  gerarInimigosSolo();
  drawSprites();
  text("X: " + mouseX + " / Y: " + mouseY, mouseX, mouseY);
}

function gerarInimigosSolo() {
  var randFrame = Math.round(random(80, 120));
  if (frameCount % randFrame == 0) {
    inimigo = createSprite(width+50, 400);
    inimigo.velocityX = -4.2;
    var rand = Math.round(random(1, 3));
    //console.log(rand)
    switch (rand) {
      case 1:
        inimigo.scale = 0.43
        inimigo.addAnimation("cobraAnimation", cobraAnimation);
        break;
      case 2:
        inimigo.mirrorX(-1);
        inimigo.scale = 2.25
        inimigo.addAnimation("cinosAnimation", cinosAnimation);
        break;
      case 3:
        inimigo.scale = 1.3
        inimigo.addAnimation("formigaAnimation", formigaAnimation);
        break;
    }
  }
}
