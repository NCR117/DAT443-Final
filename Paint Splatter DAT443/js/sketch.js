function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}

function draw() {
    background(220);

    //Paint Splatter V2

    noStroke();

    //Edit the Fill code to make the seven different colours 
    //Colors are as follows: 
    // Red: FF0000, Orange: FF7A00, Yellow: FFF500
    // Green: 2CA718, Blue: 0066FF, Purple: 7000FF
    fill('#7000FF');        // PURPLE HERE RIGHT NOW AS A PLACEHOLDER
    ellipse(400, 400, 95);
    ellipse(390, 360, 110);
    ellipse(350, 390, 95);
    ellipse(390, 430, 75);
    ellipse(426, 434, 80);
    ellipse(450, 410, 100);
    ellipse(440, 380, 100);
    ellipse(300, 300, 20);
    ellipse(310, 290, 16);
    ellipse(300, 300, 21);
    ellipse(500, 475, 18);
    ellipse(500, 330, 15);
    ellipse(270, 400, 13);
    ellipse(330, 490, 19);
    ellipse(490, 485, 14);
}