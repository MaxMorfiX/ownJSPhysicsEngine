export class Vector2 {

	#x;
	#y;

	get x() {
		return this.#x;
	}
	set x(x) {
		this.#wasMagnitudeCalculated = false;
		this.#wasMagnitudeCalculated = false;
		this.#wasMagnitudeCalculated = false;
		
		this.#x = x;
	}

	get y() {
		return this.#y;
	}
	set y(y) {
		this.#wasMagnitudeCalculated = false;
		this.#wasMagnitudeCalculated = false;
		this.#wasMagnitudeCalculated = false;

		this.#y = y;
	}

	#wasMagnitudeCalculated = false;
	#wasMagnitudeSqrCalculated = false;
	#wasAngleCalculated = false;

	#magnitude;
	#magnitudeSqr;
	#angle;

	get magnitude() {
		if(this.#wasMagnitudeCalculated) return this.#magnitude;
		
		this.#magnitude = Math.sqrt(this.magnitudeSqr);
		this.#wasMagnitudeCalculated = true;

		return this.#magnitude;
	}
	get magnitudeSqr() {
		if(this.#wasMagnitudeSqrCalculated) return this.#magnitudeSqr;
		
		this.#magnitudeSqr = this.x * this.x + this.y * this.y;
		this.#wasMagnitudeSqrCalculated = true;

		return this.#magnitudeSqr;
	}

	set magnitude(val) {

		if (this.magnitude === 0) {
			return;
		}

		const normalized = this.normalize();
		
		this.x = normalized.x * val;
		this.y = normalized.y * val;

		this.#magnitude = val;
		this.#magnitudeSqr = val*val;
		
		this.#wasMagnitudeCalculated = true;
		this.#wasMagnitudeSqrCalculated = true;
	}
	
	get angle() {
		if(this.#wasAngleCalculated) return this.#angle;
		
		this.#angle = Math.atan2(this.y, this.x);

		this.#wasAngleCalculated = true;
		return this.#angle;
	}
		
	set angle(angle) {
		
		let rotated = this.rotate(angle - this.angle);
		
		this.x = rotated.x;
		this.y = rotated.y;

		this.#angle = angle;
		this.#wasAngleCalculated = true;
	}



	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}

	clone() {
		return new Vector2(this.x, this.y);
	}

	add(vector) {
		return new Vector2(this.x + vector.x, this.y + vector.y);
	}
	subtract(vector) {
		return new Vector2(this.x - vector.x, this.y - vector.y);
	}
	mult(vector) {
		return new Vector2(this.x * vector.x, this.y * vector.y);
	}
	divide(vector) {
		return new Vector2(this.x / vector.x, this.y / vector.y);
	}

	dot(vector) {
		return (this.x * vector.x + this.y + vector.y);
	}

	moveTowards(vector, t) {
		// Linearly interpolates between vectors A and B by t.
		// t = 0 returns A, t = 1 returns B
		t = Math.min(t, 1); // still allow negative t
		var diff = vector.subtract(this);
		return this.add(diff.scale(t));
	}

	distance(vector) {
		return Math.sqrt(this.distanceSqr(vector));
	}

	distanceSqr(vector) {
		var deltaX = this.x - vector.x;
		var deltaY = this.y - vector.y;
		return (deltaX * deltaX + deltaY * deltaY);
	}

	normalize() {
		var mag = this.magnitude;
		var vector = this.clone();
		if(Math.abs(mag) < 1e-9) {
			vector.x = 0;
			vector.y = 0;
		} else {
			vector.x /= mag;
			vector.y /= mag;
		}
		return vector;
	}

	rotate(alpha) {
		var cos = Math.cos(alpha);
		var sin = Math.sin(alpha);
		var vector = new Vector2();
		vector.x = this.x * cos - this.y * sin;
		vector.y = this.x * sin + this.y * cos;
		return vector;
	}

	scale(alpha) {
		let vector = this.clone();
		vector.magnitude = vector.magnitude*alpha
		return vector;
	}

	toPrecision(precision) {
		var vector = this.clone();
		vector.x = vector.x.toFixed(precision);
		vector.y = vector.y.toFixed(precision);
		return vector;
	}

	toString() {
		var vector = this.toPrecision(1);
		return ("[" + vector.x + ", " + vector.y + "]");
	}
}