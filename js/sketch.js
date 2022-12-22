var x, y, d, k, mySong, speed;

//function preload() {

//mySong = loadSound('assets/river.mp3');

//} - Why won't this work? - 20th Dec

// TO-DO LIST: (DELETE AS COMPLETED)
// FINISH THE CLOUDS
// ADD SOUNDS - ERROR
// ADD OVERLAP PEN FEAUTURE - ERROR
// FINISH THE TWO BIRDS
// MAKE A BORDER FOR THE SCENE


function setup() {
    var canvas = createCanvas(1800, 1200);
    canvas.parent("p5container");



    pSlider = createSlider(-150, 320, -150);
    pSlider.position(1300, 1380);
    pSlider.style('width', '500px');

    g = width/20
    x = width/2;
    y = height/2;
    d = 200;
    speed = .5;
    zoom = 3


}


function draw() {

const p = pSlider.value();
var shade = pSlider.value();

    noStroke();

  //Sky

    fill(shade)
    ellipse(600, 500, 2900)

  fill(63,13,115,105); //RGB Values + Tint - Red, Green, Blue, Alpha (Tint)
   ellipse(600, 500, 2900)

   //Drawing Tool - ERROR
   
   fill(83,13,115,200); 
   if (mouseIsPressed) {
   line(mouseX, mouseY, pmouseX, pmouseY);
   ellipse(mouseX, mouseY, 10, 10);
   }

      //Various Purple Scenic Details

    fill(83,13,115,125); 

    //Hills

rect(0, 700, 2000, 500)
triangle(0, 700, 400, 700, 0, 600);
arc(890, 700, 980, 330, PI, TWO_PI);
arc(1600, 700, 980, 330, PI, TWO_PI);
rect(1110, 700, 270, 300)
rect(1110, 1090, 270, 300)
rect(0, 1000, 2000, 90)
rect(1110, 1000, 270, 90)
rect(1110, 1000, 270, 90)



    //House + Path
    rect(60, 800, 150, 100)
    rect(60, 800, 150, 100)
    triangle(60, 800, 210, 800, 140, 720);
    triangle(60, 800, 210, 800, 140, 720);
    triangle(210, 900, 260, 750, 210, 800);
    triangle(210, 900, 260, 800, 260, 750);
    triangle(260, 750, 140, 720, 210, 800);
    triangle(260, 750, 140, 720, 210, 800);
    triangle(260, 750, 140, 720, 210, 800);
    triangle(260, 750, 210, 690, 140, 720);
    triangle(260, 750, 210, 690, 140, 720);
    triangle(260, 750, 210, 690, 140, 720);
    rect(80, 820, 30, 30);
    rect(160, 820, 30, 30);
    rect(80, 820, 30, 30);
    rect(160, 820, 30, 30);
    rect(120, 820, 30, 80);
    rect(120, 820, 30, 80);
    rect(120, 820, 30, 80);
    triangle(110, 750, 130, 730, 110, 730);
    triangle(110, 750, 130, 730, 110, 730);
    rect(110, 700, 25, 30);
    rect(110, 700, 25, 30);
    triangle(136, 725, 150, 695, 130, 700);
    triangle(110, 750, 130, 730, 110, 730);
    rect(110, 700, 25, 30);
    triangle(136, 725, 150, 695, 130, 700);
    triangle(136, 725, 150, 715, 150, 695);
    triangle(136, 725, 150, 715, 150, 695);
    ellipse(130, 700, 40) //(Chimney Topper Here)
    triangle(100, 900, 40, 1000, 180, 900);
    triangle(180, 900, 40, 1000, 150, 1000);

    //Rabbit Hole + Paws 

    triangle(900, 530, 920, 550, 880, 550);
    triangle(940, 530, 960, 550, 920, 550);
    triangle(900, 530, 940, 530, 920, 550);
    triangle(900, 530, 920, 550, 880, 550);
    triangle(940, 530, 960, 550, 920, 550);
    triangle(900, 530, 940, 530, 920, 550);
    triangle(900, 530, 920, 550, 880, 550);
    triangle(940, 530, 960, 550, 920, 550);
    triangle(900, 530, 940, 530, 920, 550);
    ellipse(905, 530, 10)
    ellipse(935, 530, 10)
    ellipse(905, 530, 10)
    ellipse(935, 530, 10)
    rect(880, 550, 80, 10)
    rect(880, 550, 80, 10)
    rect(880, 550, 80, 10)
    triangle(900, 530, 920, 550, 880, 550);
    triangle(940, 530, 960, 550, 920, 550);
    triangle(900, 530, 940, 530, 920, 550);
    rect(880, 550, 80, 10)

    //Rabbit

    ellipse(915, p/20+527, 6)
    ellipse(915, p/20+527, 6)
    ellipse(925, p/20+527, 6)
    ellipse(925, p/20+527, 6)
    ellipse(920, p/20+530, 25)
    triangle(915, p/20+535, 925, p/20+535, 920, p/20+530);
    triangle(915, p/20+535, 925, p/20+535, 920, p/20+530);
    triangle(910, p/20+505, 920, p/20+505, 915, p/20+520);
    rect(920, p/20+535, 2, 4);
    rect(918, p/20+535, 2, 4);
    triangle(920, p/20+505, 930, p/20+505, 925, p/20+520);

    triangle(920, p/20+505, 930, p/20+505, 925, p/20+490);
    triangle(910, p/20+505, 920, p/20+505, 915, p/20+490);


    // Avian Tree

  ellipse(1510, 435, 210)
  rect(1480, 500, 60, 300)
  ellipse(1510, 435, 210)
  rect(1540, 630, 70, 20)
  rect(1410, 650, 70, 20)
  triangle(1480, 500, 1540, 500, 1510, 400)
  ellipse(1510, 605, 30)
  ellipse(1580, 465, 120)
  ellipse(1440, 455, 110)
  ellipse(1440, 405, 90)
  ellipse(1590, 395, 78)
  ellipse(1510, 365, 110)
  ellipse(1510, 605, 30)
  ellipse(1510, 605, 30)
  ellipse(1580, 465, 120)
  ellipse(1440, 455, 110)
  ellipse(1440, 405, 90)
  ellipse(1590, 395, 78)
  ellipse(1510, 365, 110)
  triangle(1540, 800, 1580, 800, 1540, 740)
  triangle(1440, 800, 1480, 800, 1480, 754)

    //Bird

triangle(1445, 647, 1465, 647, 1455, 665)
triangle(1425, 647, 1445, 647, 1435, 665)

    //Owl



//Experimental Clouds

x = x + speed;

if (x > height + 600 + d/2)
x = 0 - d/2

cloudSize = (30, 90);
cloudHeight = (90, 200);

ellipse (x+80, cloudHeight, cloudSize);

//Driving Van

g = g + zoom;

if (g > height + 600 + d/2)
g = 0 - d/2

fill(83,13,115,225); 

ellipse (g+5, 1060, 20)
ellipse (g+115, 1060, 20)
rect (g-24, 1040, 170, 15)
rect (g-19, 1020, 160, 20)
rect (g-19, 1020, 160, 20)
rect (g-20, 960, 130, 80)
rect (g+110, 990, 30, 10)

fill(83,13,115,100); 
rect (g+110, 990, 30, 40)
ellipse (g+5, 1060, 40)
ellipse (g+115, 1060, 40)

    //Fox body

    fill(83,13,115,125); 
    triangle(570, p/12+665, 570, p/12+693, 600, 690);
    rect(600, 690, 40, 30);
    triangle(570, p/12+693, 600, 690, 600, 720);
    triangle(570, p/12+693, 570, 720, 600, 720);
    triangle(570, p/12+665, 560, p/12+693, 570, 721);
    triangle(565, 693, 540, 720, 570, 720);
    triangle(565, 693, 540, 720, 570, 720);
    ellipse(620, 700, 40)
    ellipse(620, 700, 40)
    rect(585, 710, 40, 10);
    rect(585, 710, 40, 10);
    triangle(680, 710, 640, 715, 640, 690);
    triangle(660, 690, 680, 710, 640, 690);
    triangle(660, 705, 680, 710, 670, 730);
    triangle(660, 705, 680, 710, 670, 730);
    triangle(660, 705, 680, 710, 670, 730);

   // Fox Head Test 3
    // ellipse(540, p/8+680, 50) This allows the head to move in time with the slider, yet not at the same rate as the lightbulb
    
    ellipse(545, p/12+700, 10)
    ellipse(545, p/12+700, 10)
    ellipse(545, p/12+700, 10)
    ellipse(545, p/12+700, 10)
    rect(540, p/12+665, 10, 35);
    rect(540, p/12+665, 10, 35);
    triangle(565, p/12+680, 550, p/12+700, 550, p/12+680);
    triangle(525, p/12+680, 540, p/12+700, 540, p/12+680);
    triangle(525, p/12+680, 540, p/12+680, 520, p/12+665);
    triangle(565, p/12+680, 550, p/12+680, 570, p/12+665);
    triangle(520, p/12+665, 570, p/12+665, 545, p/12+650);
    triangle(570, p/12+665, 545, p/12+650, 570, p/12+630);
    triangle(520, p/12+665, 545, p/12+650, 520, p/12+630);
    triangle(520, p/12+655, 540, p/12+650, 520, p/12+635);
    triangle(520, p/12+655, 540, p/12+650, 520, p/12+635);
    triangle(520, p/12+655, 540, p/12+650, 520, p/12+635);
    triangle(570, p/12+655, 550, p/12+650, 570, p/12+635);
    triangle(570, p/12+655, 550, p/12+650, 570, p/12+635);
    triangle(570, p/12+655, 550, p/12+650, 570, p/12+635);

//Fox Eyes Test 2

triangle(570, p/12+665, 550, p/12+690, 550, p/12+665);
triangle(520, p/12+665, 540, p/12+690, 540, p/12+665);

fill(247, 255, 160, -shade) //Night Eyes
triangle(565, p/12+666, 550, 670, 550, p/12+666);
triangle(525, p/12+666, 540, 670, 540, p/12+666);
triangle(565, p/12+666, 550, 670, 550, p/12+666);
triangle(525, p/12+666, 540, 670, 540, p/12+666);

//House Window Lights

rect(80, 820, 30, 30);
rect(160, 820, 30, 30);

// Van Light

rect(g+130, 1020, 10, 10)

// Stars

ellipse(600, 500, 5)
ellipse(356, 376, 5)
ellipse(554, 134, 5)
ellipse(566, 568, 5)
ellipse(123, 80, 5)
ellipse(855, 169, 5)
ellipse(284, 295, 5)
ellipse(518, 467, 5)
ellipse(111, 344, 5)
ellipse(1000, 300, 5)
ellipse(290, 10, 5)
ellipse(365, 287, 5)
ellipse(475, 134, 5)
ellipse(510, 425, 5)
ellipse(240, 133, 5)
ellipse(370, 23, 5)
ellipse(500, 345, 5)
ellipse(83, 550, 5)
ellipse(900, 359, 5)
ellipse(1146, 30, 5)
ellipse(987, 420, 5)
ellipse(876, 123, 5)
ellipse(1399, 123, 5)
ellipse(1700, 467, 5)
ellipse(1678, 245, 5)
ellipse(1364, 34, 5)
ellipse(1789, 391, 5)



   //Lightbulb Appearance 

    fill('#616161') //Wire
    rect(885, p-380, 30, 200);
 
 fill('#F7FFA0') //Bulb
   ellipse(900, p, 250)
   square(825, p-130, 150, 20);

   fill('#D7D7D7') //Casing
   square(825, p-260, 150, 20);

   fill('#C6C6C6') // Casing Details
   rect(825, p-140, 150, 10);
   rect(825, p-160, 150, 10);
   rect(825, p-180, 150, 10);
   rect(825, p-200, 150, 10);

   fill('#FAFFC2') //Filament 
   rect(850, p-110, 10, 90);
   rect(940, p-110, 10, 90);
   square(850, p-50, 100, 20);


}
