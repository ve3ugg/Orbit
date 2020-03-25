class Planet {
    constructor() {
        // this.x = 0;
        // this.y = 0;
        this.r = random(200, height / 2.2);
        this.diam = random(30, 100);
        this.speed = random((800 - this.r) / 100000);
        this.angle = random(TWO_PI);
        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);
        this.clr = color(random(50, 255));
        // this.clr = color(random(255), random(255), random(255));
        this.moonX = this.x;
        this.moonY = this.y;
        this.moonClr = color(random(255), random(255), random(255));
        this.moonAngle = 0;
        // this.moonR = this.diam * 1.1;
        this.moonR = random(this.diam * 1.1, this.diam * 2);
        this.moonSpeed = random(0.01, 0.05);
        this.moonSize = random(5, this.diam * 0.9);
        if (random(10) < 5) {
            this.moonSpeed *= -1;
        }

    }

    show() {
        // stroke(this.moonClr);
        // line(this.moonX, this.moonY, this.x, this.y);
        stroke(this.clr);
        line(0, 0, this.x, this.y);
        fill(this.clr, 0.5);
        ellipse(this.x, this.y, this.diam);
        fill(this.moonClr);
        ellipse(this.moonX, this.moonY, this.moonSize);
    }

    update() {
        this.x = this.r * cos(this.angle);
        this.y = this.r * sin(this.angle);
        this.moonX = this.x + (this.moonR * cos(this.moonAngle));
        this.moonY = this.y + (this.moonR * sin(this.moonAngle));
    }
}
