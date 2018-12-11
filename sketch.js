var img;

function preload() {
  img = loadImage('assets/rutgersSymbol.js');
}
function setup() {
 	img = loadImage("assets/rutgersSymbol.js");
	createCanvas(400, 400);
  fill(400);
}


function draw() {
  background(0, 200, 0);
 image(img, 0, 0);
	translate(width / 2, height / 2);
	rotate(2.350);
	var c = color(255,255, 160); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
	strokeWeight(2);
stroke(14); // Don't draw a stroke around shapes
	arc(0, 0, 200, 200, 0, HALF_PI + PI, CHORD);
	beginShape();
c = color(153, 0, 0); // Update 'c' with grayscale value
fill(c);
vertex(1, -150);
vertex(2, -98);
vertex(100, 1);
vertex(150, 2);
endShape(CLOSE);
	point(30, 20);
point(80, 20);
point(85, 50);
point(30, 75);
point(80, 40);
point(50, 50);
point(20, 20);
point(-50, 20);
point(-60, 35);
point(-75, 10);
point(-80, 20);
point(80, 1);
point(85, 10);
point(30, 90);
point(36, 40);
point(36, -10);
point(-10, 20);
point(-50, 20);
point(-60, 10);
point(-75, -40);
point(-60, -70);
point(-75, 10);
point(-80, 20);
point(70, -10);
point(85, 0);
point(0, 90);
point(0, -45);
point(0, -10);
point(0, -20);
point(0, -90);
point(0, -6);
point(0, -40);
point(20, 0);
point(0, 40);
point(-75, 0);
point(-60, 0);
point(-75,0);
point(-80, 0);
point(70, 0);
point(85, 0);
point(0, 90);
point(0, -45);
point(0, -10);
point(0, -20);
point(0, -90);
point(0, -6);
point(0, -40);
point(20, 0);
}
