var vector = require('../../src/js/particles/vector');
var test = require('tape');

test('vector', function(t) {

  // add
  var v1 = vector.create(0,0);
  var addVector = vector.create(2,2);
  v1.add(addVector);
  t.equal(v1.x, 2, 'should add x value from another vector');
  t.equal(v1.y, 2, 'should add y value from another vector');

  // subtract
  var v3 = vector.create(10,10);
  var subVector = vector.create(2,2);
  v3.minus(subVector);
  t.equal(v3.x, 8, 'should subtract x value from another vector');
  t.equal(v3.y, 8, 'should subtract y value from another vector');

  // multiply
  var v4 = vector.create(10,10);
  var multiply = vector.create(2,2);
  v4.multiply(multiply);
  t.equal(v4.x, 20, 'should multiply x value from another vector');
  t.equal(v4.y, 20, 'should multiply y value from another vector');

  // divide
  var v5 = vector.create(10,10);
  var divide = vector.create(2,2);
  v5.divide(divide);
  t.equal(v5.x, 5, 'should divide x value from another vector');
  t.equal(v5.y, 5, 'should divide y value from another vector');

  // scale
  v2 = vector.create(4,4);
  v2.scale(.5);
  t.equal(v2.x, 2, 'should scale x value');
  t.equal(v2.y, 2, 'should scale y value');

  // end
  t.end()
})