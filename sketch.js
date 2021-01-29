var maze1, maze;
 function preload()
{
     maze = loadImage("images/pac-man.jpg");
 } 
 function setup() 
 { 
   createCanvas(650, 720);
  maze1  = createSprite(325,30,585,10)
  maze2 = createSprite(325,650,585,10)
  maze3 = createSprite(610,532,10,245)
  maze4 = createSprite(37,532,10,245)
  maze5 = createSprite(610,130,10,200)
  maze6 = createSprite(37,130,10,200)
  maze7 = createSprite(92,225,115,10)
  maze8 = createSprite(557,225,115,10)
  maze9 = createSprite(557,295,115,10)
  maze10 = createSprite(92,295,115,10)
  maze11 = createSprite(92,415,115,10)
  maze12 = createSprite(92,345,115,10)
  maze13 = createSprite(557,415,115,10)
  maze14 = createSprite(557,345,115,10)

   }
    function draw()
     { 

    background(maze);
    text(mouseX+","+mouseY, mouseX, mouseY)
    drawSprites(); 
  }






// var canvas, backgroundImage;
// var carsAtEnd
// var gameState = 0;
// var playerCount;
// var allPlayers;
// var distance = 0;
// var database;

// var form, player, game;

// var cars, car1, car2, car3, car4;

// var track, car1_img, car2_img, car3_img, car4_img;

// function preload(){
//   track = loadImage("../images/track.jpg");
//   car1_img = loadImage("../images/car1.png");
//   car2_img = loadImage("../images/car2.png");
//   car3_img = loadImage("../images/car3.png");
//   car4_img = loadImage("../images/car4.png");
//   ground = loadImage("../images/ground.png");
// }

// function setup(){
//   canvas = createCanvas(650,720);

// //  database = firebase.database();
// //  game = new Game();
// //  game.getState();
//   // game.start();
// }


// function draw(){
//   background(0);















//   drawSprites();
//   // if(playerCount === 4){
//   //   game.update(1);
//   // }
//   // if(gameState === 1){
//   //   clear();
//   //   game.play();
//   // }
//   // if(gameState === 2){
//   //   game.end();
//   // }
// }
