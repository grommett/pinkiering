'use strict'
var particle = require('./particle');
var vector = require('./vector');
var utils = require('../utils');
var speed = .25;
var width = 1500;
var height = 585;
/*
 * Generates a particle array
 * @params {total} number number of particles to generate
 * @returns {array} an array of particle instances
*/
function generateParticles(total) {
  var particleArray = [];
  var i = 0;

  for(i; i<=total; i++) {
    particleArray.push(particle.create({
      acceleration: vector.create(utils.random(-speed, speed), utils.random(-speed, speed)),
      location: vector.create(utils.random(0, width), utils.random(0, height)),
      width: utils.random(1, 3),
      rotation: parseInt(utils.random(0, 180)),
      rotationVelocity: utils.random(0, 10),
    }));
  }
  return particleArray;
}

function draw(context, particle) {
  var maxAlpha = .5
  var loc = particle.position();
  var alpha = maxAlpha*(loc.x/width);
  //console.log('rotation ', particle.rotation);
  // context.save();
  // context.translate(loc.x,loc.y); 
  // context.rotate(particle.rotation * Math.PI / 180);
  context.fillStyle = 'rgba(187, 217, 194, '+alpha+')';
  context.beginPath();
  context.arc(loc.x, loc.y, particle.width, 0, 2 * Math.PI);
  context.closePath();
  context.fill();
  // context.translate(0,0); 
  // context.restore();
}

module.exports = {
  /*
   * Creates the particle system
   * @params {canvas} el the canvas element
  */
  create: function(el) {
    var context;
    var particles = generateParticles(100);
    var loc;
    el.setAttribute('width', width);
    el.setAttribute('height', height);
    context = el.getContext('2d');

    /*
     * Animation loop
    */
    function animate() {
      context.clearRect(0, 0, width, height);
      particles.forEach(function(particle) {
        loc = particle.position();
        if(loc.x > width || loc.x < 0) particle.reverse('x')
        if(loc.y > height || loc.y < 0) particle.reverse('y')
        particle.update();
        draw(context, particle);
      })

      requestAnimationFrame(animate);
    }

    // Start the animation.
    requestAnimationFrame(animate);
  }
}