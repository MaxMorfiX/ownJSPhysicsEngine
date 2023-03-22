export class Engine {

    shapes = [];
    canvas;
    ctx;

    constructor(canvas, shapes = []) {

        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.shapes = shapes;

        requestAnimationFrame(this.update.bind(this));

    }

    update() {

        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.doFunctionOnEveryShape("update");

        for(let i = 0; i < this.shapes.length; i++) {

            let shape = this.shapes[i];

            shape.draw(this.ctx);

        }

        this.markPointsInside();

        requestAnimationFrame(this.update.bind(this));

    }

    doFunctionOnEveryShape(funcName) {
        for(let i = 0; i < this.shapes.length; i++) {

            let shape = this.shapes[i];

            shape[funcName]();

        }
    }

    markPointsInside() {
        for(let i in this.shapes) {

            let pointShape = this.shapes[i];
            
            for(let j in pointShape.points) {
                
                let point = pointShape.points[j];
                
                for(let k in this.shapes) {
                    
                    let shape = this.shapes[k];

                    if(shape === pointShape) continue;

                    if(shape.isPointInside(point)) {
                        point.draw(this.ctx);
                    }
                }
            }
        }
    }

}