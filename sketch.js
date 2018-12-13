///The image I have decided to create is a snowglobe that encapsulates the rutgers "R" symbol. With it being the end of the semester
//and the holiday season upon us, I thought that a snowglob would be fitting. As you slowly drag your cursor accross the screen. watch as the snow drifts around.
//After an hour passes and you are no longer mesmorized by the incredible realism of the snow, kick back and enjoy yourself a hot chocolate.




//create vars that can be used throughout the code
var img;

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
fill(c);
	strokeWeight(2);
stroke(14); //wanted there to be a boarder
	arc(0, 0, 200, 200, 0, HALF_PI + PI, CHORD);
	beginShape();
c = color(255, 255, 255);
fill(c); //Mapping of the base of the snowglobe
vertex(1, -150);
vertex(2, -98);
vertex(100, 1);
vertex(150, 2);
endShape(CLOSE);


rotate(3.95);{
  //Had to rotate the image to get it to lay flat on the bas of the snowglob
image(img, -25, 10, 60, 60);
}

rotate(2.350)
c = color(255, 255, 255); // Update 'c' with grayscale value
fill(c);
stroke(255, 255, 255);
strokeWeight(4);

//Here are a ton of points that are the snowflakes
point(30, 20);
point(80, 20 + snowmove);
point(85, 50 + snowmove);
point(30, 75 + snowmove);
point(80, 40 + snowmove);
point(50, 50 + snowmove);
point(20, 20 + snowmove);
point(-50, 20 + snowmove);
point(-60, 35 + snowmove);
point(-75, 10 + snowmove);
point(-80, 20 + snowmove);
point(80, 1 + snowmove);
point(85, 10 + snowmove);
point(30, 90 + snowmove);
point(36, 40 + snowmove);
point(36, -10 + snowmove);
point(-10, 20 + snowmove);
point(-50, 20 + snowmove);
point(-6, 10 + snowmove);
point(-7, -40 + snowmove);
point(-6, -70 + snowmove);
point(-7, 10 + snowmove);
point(-8, 20 + snowmove);
point(70 , -10 + snowmove);
point(85, 0 + snowmove);
point(0, 90 + snowmove);
point(0, -45 + snowmove);
point(0, -10 + snowmove);
point(0, -20 + snowmove);
point(0, -90 + snowmove);
point(0, -6 + snowmove);
point(0, -40 + snowmove);
point(20, 0 + snowmove);
point(0, 40 + snowmove);
point(-75, 0 + snowmove);
point(-60, 0 + snowmove);
point(-75,0 + snowmove);
point(-80, 0 + snowmove);
point(70, 0 + snowmove);
point(85, 0 + snowmove);
point(0, 90 + snowmove);
point(0, -45 + snowmove);
point(0, -10 + snowmove);
point(0, -20 + snowmove);
point(0, -90 + snowmove);
point(0, -6 + snowmove);
point(0, -40 + snowmove);
point(20 , 0 + snowmove);

}


function mouseMoved(){
    snowmove = random(-5, 50);
//the random function makes it so that when the snow moves it does not only move in one direction.
}
