module.exports = {
  create: function() {
    var x = 100;
    var y = 100;
    return {
      update: function() {

      },
      getPosition: function() {
        return {x: x, y: y}
      },
      setPosition: function(obj) {
        x = obj.x || x;
        y = obj.y || y;
      }, 
      move: function(obj) {
        x += obj.x || 0
        y += obj.Y || 0
      }
    }
  }
}