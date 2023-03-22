

export class Shape {
    
    points = [];
    
    constructor(points) {
        this.points = points;
    }

    draw(ctx) {

        this.drawLines(ctx);

        for(let i = 0; i < this.points.length; i++) {

            let point = this.points[i];
            // point.draw(ctx);

        }
    }

    drawLines(ctx) {

        ctx.beginPath();
        let lastPoint = this.points[this.points.length - 1];
        ctx.moveTo(lastPoint.x, lastPoint.y);

        for(let i = 0; i < this.points.length; i++) {
            let point = this.points[i];
            ctx.lineTo(point.x, point.y);
        }

        ctx.stroke();
        ctx.closePath();
    }

    doFunctionOnEveryPoint(funcName) {
        for(let i = 0; i < this.points.length; i++) {

            let point = this.points[i];

            point[funcName]();

        }
    }

    update() {
        this.doFunctionOnEveryPoint("_update");
        this.doFunctionOnEveryPoint("update");
        this.doFunctionOnEveryPoint("updatePosition");
    }

    isPointInside(point) {
        // ray-casting algorithm based on
        // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html

        if(this.points.length < 3) return false;

        var x = point.x, y = point.y;

        var inside = false;
        for (var i = 0, j = this.points.length - 1; i < this.points.length; j = i++) {
            var xi = this.points[i].x, yi = this.points[i].y;
            var xj = this.points[j].x, yj = this.points[j].y;

            var intersect = ((yi > y) != (yj > y))
                && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
            if (intersect) inside = !inside;
        }

        return inside;
    }

}