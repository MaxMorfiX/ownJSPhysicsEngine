import {Vector2} from "/Engine/Vector2.js";

export class Point {
    
    mass = 1;
    position = new Vector2();
    velocity = new Vector2();

    get x() {return this.position.x}
    get y() {return this.position.y}

    gravityScale = new Vector2(0, 1);
    
    constructor(position, params = {}) {
        this.position = position;
        this.mass = params.mass || this.mass;
        this.velocity = params.velocity || this.velocity;
        this.gravityScale = params.gravityScale || this.gravityScale;
    }

    draw(ctx) {

        ctx.beginPath();

        ctx.arc(this.position.x, this.position.y, 2, 0, 2*Math.PI);
        ctx.fill();
        
        ctx.stroke();
        ctx.closePath();

    }

    _update() {
        this.velocity.x += this.gravityScale.x;
        this.velocity.y += this.gravityScale.y;
    }

    updatePosition() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }

    update() {}

}