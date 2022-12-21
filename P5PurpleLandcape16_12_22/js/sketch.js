var x, y, d, k, mySong, speed;

//function preload() {

//mySong = loadSound('assets/river.mp3');

//} 

// TO-DO LIST: (DELETE AS COMPLETED)
// MAKE THE CLOUDS AUTO GENERATIVE - ERROR
// ADD SOUNDS - ERROR
// ADD OVERLAP PEN FEAUTURE - ERROR
// PLAY WITH THE WEBSITE BACKGROUND, MAKE IT PRETTY AND MATCH THE PALLETTE OF THE PURPLE LANDSCAPE
// MAYBE EVEN MAKE A BORDER FOR THE SCENE?


function setup() {
    var canvas = createCanvas(1400, 1200);
    canvas.parent("p5container");


    pSlider = createSlider(-150, 320, -150);
    pSlider.position(1300, 1380);
    pSlider.style('width', '500px');


    x = width/2;
    y = height/2;
    d = 200;
    speed = .4;


}


function draw() {

const p = pSlider.value();
var shade = pSlider.value();

    noStroke();

  //Sky

    fill(shade)
    ellipse(600, 500, 2100)

  fill(63,13,115,105); //RGB Values + Tint - Red, Green, Blue, Alpha (Tint)
   ellipse(600, 500, 2100)

   //Drawing Tool - ERROR
   
   fill(83,13,115,200); 
   if (mouseIsPressed) {
   line(mouseX, mouseY, pmouseX, pmouseY);
   ellipse(mouseX, mouseY, 10, 10);
   }

      //Various Purple Scenic Details

    fill(83,13,115,125); 
    //Hills
    ellipse(100, 1200, 1200)
    ellipse(1000, 1200, 1500)

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

    //Birds

    //Owl






//Experimental Clouds

x = x + speed;

if (x > height + 200 + d/2)
x = 0 - d/2

cloudSize = (30, 90);
cloudHeight = (90, 200);


ellipse (x-0, cloudHeight, cloudSize);
ellipse(x-30, cloudHeight, cloudSize);
ellipse(x-50, cloudHeight, cloudSize);
ellipse(x-30, cloudHeight, cloudSize);
ellipse(x-70, cloudHeight, cloudSize);
ellipse(x-95, cloudHeight, cloudSize);

// ellipse(x 170-200, 130-180, 30-90)

 //Try to make the clouds auto generate

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

// Stars

ellipse(600, 500, 5)
ellipse(356, 376, 5)
ellipse(554, 134, 5)
ellipse(566, 578, 5)
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
ellipse(83, 570, 5)
ellipse(900, 359, 5)
ellipse(1146, 30, 5)
ellipse(987, 420, 5)
ellipse(876, 123, 5)





   //Lightbulb Appearance 

    fill('#616161') //Wire
    rect(685, p-380, 30, 200);
 
 fill('#F7FFA0') //Bulb
   ellipse(700, p, 250)
   square(625, p-130, 150, 20);

   fill('#D7D7D7') //Casing
   square(625, p-260, 150, 20);

   fill('#C6C6C6') // Casing Details
   rect(625, p-140, 150, 10);
   rect(625, p-160, 150, 10);
   rect(625, p-180, 150, 10);
   rect(625, p-200, 150, 10);

   fill('#FAFFC2') //Filament 
   rect(650, p-110, 10, 90);
   rect(740, p-110, 10, 90);
   square(650, p-50, 100, 20);


}
