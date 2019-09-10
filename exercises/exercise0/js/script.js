// Exercise 0 - Spiritual Self-Portrait
// Tanya Boulanger
// September 8, 2019
//
// Self Portrait more like looks like spoon face, heh.


  function setup() {
    createCanvas(500,500);
     background(200,0,20);
     noStroke();
     //head
     fill("#FFE5B4")
     ellipseMode(CENTER);
     ellipse(250,180,180,250);
     //neck
     rectMode(CENTER)
     rect(250,400,80,250);
     //eyelashes
     //white eyes
     fill(255);
     ellipse(220,140,35,15);
     ellipse(280,140,35,15);
     //color eyes
     stroke(0);
     strokeWeight(3);
     fill(0,200,40);
     ellipse(222,140,11,11);
     ellipse(282,140,11,11);
     //iris
     fill(0);
     noStroke();
     ellipse(222,140,5,5);
     ellipse(282,140,5,5);
     //mouth
     fill("#FFC0CB");
     ellipse(250,230,45,15);

}

function draw() {
}
