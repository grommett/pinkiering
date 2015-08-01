var backgroundFactory = require('./background');
var background ;
var particle = require('./particle');
var vector = require('./vector');
var utils = require('../utils');

/*
 * Generates a particle array
 * @params {total} number number od particles to generate
 * @returns {array} an array of particle instances
*/
function generateParticles(total) {
  var particleArray = [];
  var i = 0;
  var randomX;
  var randomY
  for(i; i<=total; total++) {
    particleArray.push(particle.create({
      location: vector.create(utils.random(0, 1500)),
      acceleration: vector.create(utils.random(0, 585))
    }))
  }
  return particleArray;
}

module.exports = {
  create: function(el) {
    var context;
    //var particles = generateParticles(100);

    el.setAttribute('width', 1500);
    el.setAttribute('height', 585);
    context = el.getContext('2d');
    //background = backgroundFactory.create(context, '/imgs/bkg.jpg');

    
    function animate(highResTimestamp) {
      context.clearRect(0, 0, el.width, el.height);
      // particles.forEach(function(particle) {
      //   particle.update();
      //   var loc = particle.position();
      //   console.log('loc: ', loc)
      //   context.fillRect(loc.x,loc.y,20,20);
      // })

      //requestAnimationFrame(animate);
    }

    // Start the animation.
    //requestAnimationFrame(animate);
  }
}