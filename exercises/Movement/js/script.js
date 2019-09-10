/*****************

Movement
Tanya Boulanger
September 10, 2019
*/

let x = 0; // All the way to the left
let y = 0; // All the way at the top
let size = 1; // One pixel diameter
// setup()
//
// Create the canvas and set up the colors
function setup() {
  // Create the canvas to the required size
  createCanvas(500,500);
  // Colors
  background(0);
  fill(255,0,0);
  noStroke();
}
// draw()
//
// Move and grow the circle, then draw it
function draw() {
  // Move the circle
  x += 5;
  y += 5;
  // Increase its size
  size += 2;
  // Draw it
  ellipse(x,y,size,size);
}
