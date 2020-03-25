class Ship {
    constructor() {
        this.clr = random(160, 255);
        // determine which side to start
        if (random(10) < 5) {
            this.x = 0;
            this.d = 1;
        } else {
            this.x = width;
            this.d = -1;
        }
        this.y = random(height);
        this.active = true;
    }

    show() {
        if (this.active) {
            fill(this.clr);
            rect(this.x, this.y, 55, 20);
        }
    }

    update () {
        this.x = this.x + this.d;
        // if (this.x < 0 || this.x > width) {
        //     this.active = false;
        // }
    }

}