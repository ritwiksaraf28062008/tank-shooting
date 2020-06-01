// You could have multiple flags like: start, launch to indicate the state of the game.

const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {

    var canvas = createCanvas(1200,400);

    tank = new Tanker(600,200,50,50);
}

function draw() {

tank.display();


}


//function keyReleased() {
    // Call the shoot method for the cannon.
//}