// Steering Text Paths
// Coding Train / Daniel Shiffman
// https://thecodingtrain.com/challenges/59-steering-behaviors

let font;
let vehicles = [];

function preload() {
  font = loadFont("LemonJellyPersonalUse-dEqR.ttf"); //("Metropolis-Medium.otf");
}

function setup() {
  createCanvas(800, 300);
  background(51);

  let points = font.textToPoints("Hello world", 80, 160, 180, {
    sampleFactor: 0.45,
  });

  for (let i = 0; i < points.length; i++) {
    let pt = points[i];
    let vehicle = new Vehicle(pt.x, pt.y);
    vehicles.push(vehicle);
  }
}

function draw() {
  background(51);
  for (let i = 0; i < vehicles.length; i++) {
    let v = vehicles[i];
    v.behaviors();
    v.update();
    v.show();
  }
}
