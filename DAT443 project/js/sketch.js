
function setup() {
    var canvas = createCanvas(1200, 900);
    canvas.parent("p5container");

}

function draw() {
    background(200);

    noStroke();

    fill('#811D1D');
    ellipse(600, 450, 500);

    fill(200);
    ellipse(600, 450, 400);

    fill('#811D1D');
    ellipse(600, 450, 300);

    fill(200);
    ellipse(600, 450, 200);

    fill('#811D1D');
    ellipse(600, 450, 100);

}