var img;
var snowlocation = 0
var snowmove = 0

function preload() {
  img = loadImage('rutgerssymbol.png');
}
function setup() {

	createCanvas(400, 400);
  fill(400);
}


function draw() {
  background(255, 255, 255);
	translate(width / 2, height / 2);


	rotate(2.350);
	var c = color(255,255, 160); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
	strokeWeight(2);
stroke(14); // Don't draw a stroke around shapes
	arc(0, 0, 200, 200, 0, HALF_PI + PI, CHORD);
	beginShape();
c = color(255, 255, 255); // Update 'c' with grayscale value
fill(c);
vertex(1, -150);
vertex(2, -98);
vertex(100, 1);
vertex(150, 2);
endShape(CLOSE);


rotate(3.95);{
image(img, -25, 10, 60, 60);
}

rotate(2.350)
c = color(255, 255, 255); // Update 'c' with grayscale value
fill(c);
stroke(255, 255, 255);
strokeWeight(4);
	point(30, 20);
point(80 + snowlocation, 20 + snowmove);
point(85 + snowlocation, 50 + snowmove);
point(30 + snowlocation, 75 + snowmove);
point(80 + snowlocation, 40 + snowmove);
point(50 + snowlocation, 50 + snowmove);
point(20 + snowlocation, 20 + snowmove);
point(-50 + snowlocation, 20 + snowmove);
point(-60 + snowlocation, 35 + snowmove);
point(-75 + snowlocation, 10 + snowmove);
point(-80 + snowlocation, 20 + snowmove);
point(80 + snowlocation, 1 + snowmove);
point(85 + snowlocation, 10 + snowmove);
point(30 + snowlocation, 90 + snowmove);
point(36 + snowlocation, 40 + snowmove);
point(36 + snowlocation, -10 + snowmove);
point(-10 + snowlocation, 20 + snowmove);
point(-50 + snowlocation, 20 + snowmove);
point(-60 + snowlocation, 10 + snowmove);
point(-75 + snowlocation, -40 + snowmove);
point(-60 + snowlocation, -70 + snowmove);
point(-75 + snowlocation, 10 + snowmove);
point(-80 + snowlocation, 20 + snowmove);
point(70 + snowlocation, -10 + snowmove);
point(85 + snowlocation, 0 + snowmove);
point(0 + snowlocation, 90 + snowmove);
point(0 + snowlocation, -45 + snowmove);
point(0 + snowlocation, -10 + snowmove);
point(0 + snowlocation, -20 + snowmove);
point(0 + snowlocation, -90 + snowmove);
point(0 + snowlocation, -6 + snowmove);
point(0 + snowlocation, -40 + snowmove);
point(20 + snowlocation, 0 + snowmove);
point(0 + snowlocation, 40 + snowmove);
point(-75 + snowlocation, 0 + snowmove);
point(-60 + snowlocation, 0 + snowmove);
point(-75 + snowlocation,0 + snowmove);
point(-80 + snowlocation, 0 + snowmove);
point(70 + snowlocation, 0 + snowmove);
point(85 + snowlocation, 0 + snowmove);
point(0 + snowlocation, 90 + snowmove);
point(0 + snowlocation, -45 + snowmove);
point(0 + snowlocation, -10 + snowmove);
point(0 + snowlocation, -20 + snowmove);
point(0 + snowlocation, -90 + snowmove);
point(0 + snowlocation, -6 + snowmove);
point(0 + snowlocation, -40 + snowmove);
point(20 + snowlocation, 0 + snowmove);

}
function mouseMoved() {
   snowlocation = snowlocation + 1

}
function mousePressed(){
    snowmove = snowlocation + 9
}
