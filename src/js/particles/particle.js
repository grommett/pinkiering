var vector = require('./vector');
var utils = require('../utils');

defaults = {
  acceleration: vector.create(1,1),
  location: vector.create(0,0), 
  rotation: 0,
  rotationVelocity: 0,
  width: 2
}

module.exports = {
  create: function(opts) {

    return {
      update: function() {
        opts.location.x += opts.acceleration.x;
        opts.location.y += opts.acceleration.y;
        opts.rotation += opts.rotationVelocity;
      },
      position: function() {
        return vector.create(opts.location.x, opts.location.y);
      },

      reverse: function(prop) {
        if(prop === 'x') opts.acceleration.x *= -1;
        if(prop === 'y') opts.acceleration.y *= -1
      },

      width: opts.width,

      rotation: opts.rotation
    }
  }
}