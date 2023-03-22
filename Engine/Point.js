import {Vector2} from "/Engine/Vector2.js";

export class Point {
    
    mass = 1;
    position = new Vector2();
    velocity = new Vector2();

    get x() {return this.position.x}
    get y() {return this.position.y}

    gravityScale = new Vector2(0, 1);

    drawingParams = {
        strokeStyle: "black",
        fillStyle: "black",
        lineWidth: 1,
        fFill: true
    };
    
    constructor(position, params = {}) {
        this.position = position;
        this.mass = params.mass || this.mass;
        this.velocity = params.velocity || this.velocity;
        this.gravityScale = params.gravityScale || this.gravityScale;

        this.drawingParams.strokeStyle = params.strokeStyle || params.lineColor || params.color || this.drawingParams.strokeStyle;
        this.drawingParams.fillStyle = params.fillStyle || params.fillColor || params.color || this.drawingParams.fillStyle;
        this.drawingParams.lineWidth = params.lineWidth || this.drawingParams.lineWidth;
        this.drawingParams.fFill = params.fillOrNot || params.fFill || params.fill || this.drawingParams.fFill;
    }

    draw(ctx) {

        ctx.beginPath();

        ctx.strokeStyle = this.drawingParams.strokeStyle;
        ctx.fillStyle = this.drawingParams.fillStyle;
        ctx.lineWidth = this.drawingParams.lineWidth;

        ctx.arc(this.position.x, this.position.y, 2, 0, 2*Math.PI);

        if(this.drawingParams.fFill) ctx.fill();
        
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