// You could have multiple flags like: start, launch to indicate the state of the game.
var tank,canvas,shootingBall,bubbleBall
const { Engine, World, Bodies, Body, Mouse, MouseConstraint, Constraint, Composite, Detector } = Matter;
// The above line creates different constant variables for Engine, World, Bodies etc.

/*

const {Engine} = Matter 
is the same as c
onst Engine = Matter.Engine

*/

function setup() {
    // Setup the canvas, the ground the, tanker, the shooting ball and the bubble balls.
    
    
    createCanvas(1600,800)
    shootingBall = new CanonBall(50,400)
    tank = new Tanker(50,400,50,50)

}

function draw() {
tank.display()
// Remember to update the Matter Engine and set the background.
drawSprites()
}


function keyReleased() {
    // Call the shoot method for the cannon.
    Matter.Body.applyForce(shootingBall.body, shootingBall.body.position, {x:-20,y:20})
}