import Example from "./classes/Example.js";

// This file is loaded as an ES module (see index.html), which means it has
// its own scope — functions declared here are NOT automatically global like
// they would be in a plain <script>. p5.js looks for setup() and draw() on
// `window`, so we attach them explicitly below. You shouldn't need to touch
// this part; just write your game logic using classes in js/classes/.

let example;

window.setup = function setup() {
  createCanvas(600, 400).parent("game-container");
  example = new Example(width / 2, height / 2);
};

window.draw = function draw() {
  background(30);

  example.update();
  example.display();

  // Your own game will likely have something like:
  //   game.update();
  //   game.display();
  // where `game` is a top-level class (created in setup()) that owns
  // the player, enemies/obstacles, and everything else — see the
  // assignment brief's "composition" requirement.
};

// If you need keyboard input, p5 looks for these on window too:
// window.keyPressed = function keyPressed() { ... };
