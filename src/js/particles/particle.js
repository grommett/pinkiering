var vector = require('./vector');
var utils = require('../utils');

defaults = {
  acceleration: vector.create(1,1),
  location: vector.create(0,0)
}

module.exports = {
  create: function(opts) {
    var settings = utils.merge(opts || {}, defaults);
    return {
      update: function() {
        settings.location.x += settings.acceleration.x
        settings.location.y += settings.acceleration.y
      },
      position: function() {
        return vector.create(settings.location.x, settings.location.y);
      }
    }
  }
}