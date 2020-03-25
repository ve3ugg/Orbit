let cx;
let cy;
let planets = [];
let numPlanets = 1;
let stars = [];
let numStars = 200;
let shipActive = false;

function setup() {
	createCanvas(windowWidth, windowHeight);

	cx = width / 2;
	cy = height / 2;

	for (let j = 0; j < numStars; j++) {
		stars.push(new Star());
	}

	for (let i = 0; i < numPlanets; i++) {
		planets.push(new Planet());
	}

	// let ship = new Ship();

}

function draw() {
	background(0);
	for (let j = 0; j < stars.length; j++) {
		stars[j].show();
	}

	// ship.update();

	translate(cx, cy);

	for (let i = 0; i < planets.length; i++) {
		planets[i].update();
		planets[i].show();
		planets[i].angle += planets[i].speed;
		planets[i].moonAngle += planets[i].moonSpeed;
		if (planets[i].angle > TWO_PI) {
			planets[i].angle = 0;
		}
	}
	// draw sun
	// fill(color(255, 255, 0));
	// ellipse(0, 0, 75);


}
function mouseClicked() {
	// fill(255);
	// ellipse(mouseX-cx, mouseY-cy, 50, 50);
	// stars.push(new Star());
	planets.push(new Planet());
	console.log("click");
}

