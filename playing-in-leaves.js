//Collision detection - Bouncing behavior
//TODO - seems to be bouncing on central point
//TODO - add 'cursor'

let l1;
let l2;
let l3;
let imgC,
  imgl1,
  imgl2,
  imgl3,
  imgBrain,
  imgArt,
  imgCoding,
  imgEarth,
  imgGame,
  imgArm;
let critter;
let leaf1;
let leaf2;
let leaf3;
let brain;
let art;
let coding;
let earth;
let game;
let mechanical_arm;

function preload() {
  imgC = loadImage("critter.png");
  imgl1 = loadImage("leaf1.png");
  imgl2 = loadImage("leaf2.png");
  imgl3 = loadImage("leaf3.png");
  //wc = loadImage("wordcloud.png");
  imgBrain = loadImage("brain.png");
  imgArt = loadImage("art.png");
  imgCoding = loadImage("coding.png");
  imgEarth = loadImage("earth.png");
  imgGame = loadImage("game.png");
  imgArm = loadImage("mechanical-arm.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  critter = createSprite(imgC.width / 3, imgC.height / 3);
  critter.addImage(imgC);
  critter.scale = 0.4;

  l1 = new Group();
  l2 = new Group();
  l3 = new Group();

  for (var i = 0; i < 20; i++) {
    leaf1 = createSprite(
      random(width / 6, (5 * width) / 6),
      random(height / 6, (5 * height) / 6)
    );
    leaf1.addImage(imgl1);
    leaf1.setCollider("circle", -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf1.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf1.mass = leaf1.scale;

    l1.add(leaf1);
  }

  for (var i = 0; i < 20; i++) {
    leaf3 = createSprite(
      random(width / 6, (5 * width) / 6),
      random(height / 6, (5 * height) / 6)
    );
    leaf3.addImage(imgl3);
    leaf3.setCollider("circle", -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf3.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf3.mass = leaf3.scale;

    l3.add(leaf3);
  }

  for (var i = 0; i < 20; i++) {
    leaf2 = createSprite(
      random(width / 6, (5 * width) / 6),
      random(height / 6, (5 * height) / 6)
    );
    leaf2.addImage(imgl2);
    leaf2.setCollider("circle", -2, 2, 55);
    // leaf1.setSpeed(random(.1, .2), random(.1, 20));

    //scale affects the size of the collider
    leaf2.scale = random(0.3, 0.5);
    //mass determines the force exchange in case of bounce
    leaf2.mass = leaf2.scale;

    l2.add(leaf2);
  }

  brain = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  brain.addImage(imgBrain);
  brain.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  brain.scale = random(0.3, 0.3);
  //mass determines the force exchange in case of bounce
  brain.mass = brain.scale;
  l2.add(brain);

  art = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  art.addImage(imgArt);
  art.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  art.scale = random(0.4, 0.4);
  //mass determines the force exchange in case of bounce
  art.mass = art.scale;
  l2.add(art);

  coding = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  coding.addImage(imgCoding);
  coding.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  coding.scale = random(0.2, 0.2);
  //mass determines the force exchange in case of bounce
  coding.mass = coding.scale;
  l2.add(coding);

  earth = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  earth.addImage(imgEarth);
  earth.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  earth.scale = random(0.1, 0.1);
  //mass determines the force exchange in case of bounce
  earth.mass = earth.scale;
  l2.add(earth);

  game = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  game.addImage(imgGame);
  game.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  game.scale = random(0.4, 0.4);
  //mass determines the force exchange in case of bounce
  game.mass = game.scale;
  l2.add(game);

  mechanical_arm = createSprite(
    random(width / 6, (5 * width) / 6),
    random(height / 6, (5 * height) / 6)
  );
  console.log("im here");
  mechanical_arm.addImage(imgArm);
  mechanical_arm.setCollider("circle", -2, 2, 55);
  //scale affects the size of the collider
  mechanical_arm.scale = random(0.4, 0.4);
  //mass determines the force exchange in case of bounce
  mechanical_arm.mass = mechanical_arm.scale;
  l2.add(mechanical_arm);
}

function draw() {
  background("#242A43");
  //image(wc, width / 2, height / 2, windowWidth, windowHeight);
  // console.log(wc);
  critter.position.x = mouseX;
  critter.position.y = mouseY;
  //circles bounce against each others
  // l1.displace(l1);
  l2.displace(l1);
  l3.displace(l1);
  // l2.displace(l2);
  // l3.displace(l3);
  l2.displace(l3);

  //all sprites bounce at the screen edges
  for (var i = 0; i < allSprites.length; i++) {
    var s = allSprites[i];
    if (s.position.x < 50) {
      s.position.x = 50;
      s.velocity.x = 0;
    }

    if (s.position.x > width - 50) {
      s.position.x = width - 51;
      s.velocity.x = 0;
    }

    if (s.position.y < 70) {
      s.position.y = 71;
      s.velocity.y = 0;
    }

    if (s.position.y > height - 70) {
      s.position.y = height - 71;
      s.velocity.y = 0;
    }
  }
  for (var i = 0; i < 20; i++) {
    critter.displace(l1[i]);
  }
  drawSprites();
  for (var i = 0; i < 26; i++) {
    critter.displace(l2[i]);
  }
  for (var i = 0; i < 20; i++) {
    critter.displace(l3[i]);
  }
  drawSprites();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
