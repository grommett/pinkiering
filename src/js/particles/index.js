var backgroundFactory = require('./background');
var background ;
var particle = require('./particle');

module.exports = {
  create: function(el) {
    var context;
    var accleration = 5;
    el.setAttribute('width', 1500);//width = 1500;
    el.setAttribute('height', 585);
    context = el.getContext('2d');
    background = backgroundFactory.create(context, '/imgs/bkg.jpg');
    var p = particle.create();
    // Animate.
    
    function animate(highResTimestamp) {

      context.clearRect(0, 0, el.width, el.height);
      
      background.update();
      p.move({x:accleration, y: accleration})
      var loc = p.getPosition()
      context.fillRect(loc.x,loc.y,100,100);
      //srequestAnimationFrame(animate);
    }

    // Start the animation.
    requestAnimationFrame(animate);
  }
}