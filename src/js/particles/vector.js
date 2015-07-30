module.exports = {
  create: function(x, y) {

    return {
      add: function(vector) {
        x += vector.x;
        y += vector.y;
      },
      minus: function(vector) {
        x -= vector.x;
        y -= vector.y;
      },
      multiply: function(vector) {
        x *= vector.x;
        y *= vector.y;
      },
      divide: function(vector) {
        x /= vector.x;
        y /= vector.y;
      }
    }
  }
}