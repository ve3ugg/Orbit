class Star {
    constructor() {
        this.clr = random(160, 255);
        this.x = random(width);
        this.y = random(height);
        this.r = random(1, 5);
    }

    show() {
        fill(this.clr);
        ellipse(this.x, this.y, this.r);
    }

}