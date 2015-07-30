var vector = {
  add: function(vector) {
    this.x += vector.x;
    this.y += vector.y;
  },
  minus: function(vector) {
    this.x -= vector.x;
    this.y -= vector.y;
  },
  multiply: function(vector) {
    this.x *= vector.x;
    this.y *= vector.y;
  },
  divide: function(vector) {
    this.x /= vector.x;
    this.y /= vector.y;
  },
  scale: function(sc) {
    this.x *= sc;
    this.y *= sc;
  }
}

module.exports = {
  create: function(x, y) {
    return Object.create(vector, {
      x: {
        writable: true, value: x
      }, 
      y: {
        writable: true, value:y
      }
    });
  }
}