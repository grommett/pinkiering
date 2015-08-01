module.exports = {
  merge: function(target, src) {
    for(key in src) {
      target[key] = src[key]
    }
    return target;
  },
  random: function(min, max) {
    min = min || 0;
    max = max || 999999;
    return min+Math.random()*(max-min);
  }
}