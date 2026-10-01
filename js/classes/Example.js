// This is just a demo class showing the module + class pattern you'll use for
// your own game objects. It draws a circle that bounces around the canvas.
// Delete it once you've got the idea, or use it as a starting point.

export default class Example {
  #x;
  #y;
  #vx;
  #vy;
  #radius;

  constructor(x, y, radius = 20) {
    this.#x = x;
    this.#y = y;
    this.#radius = radius;
    this.#vx = random(-3, 3);
    this.#vy = random(-3, 3);
  }

  // A getter, so code outside this class can read the position
  // without being able to set it directly.
  get position() {
    return { x: this.#x, y: this.#y };
  }

  update() {
    this.#x += this.#vx;
    this.#y += this.#vy;

    // Bounce off the edges of the canvas.
    if (this.#x < this.#radius || this.#x > width - this.#radius) {
      this.#vx *= -1;
    }
    if (this.#y < this.#radius || this.#y > height - this.#radius) {
      this.#vy *= -1;
    }
  }

  display() {
    push();
    noStroke();
    fill(255, 200, 0);
    circle(this.#x, this.#y, this.#radius * 2);
    pop();
  }
}
