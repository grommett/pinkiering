module.exports = {
  create: function(context, imgSrc) {
    var img = new Image();
    img.onload = function(loadedImg) {
      //el.draw()
      console.log('image loaded ', loadedImg);
      context.drawImage(img, 0, 0);
    }
    img.src = imgSrc;

    return {
      update: function() {
        console.log('update image');
        context.drawImage(img, 0, 0);
      }
    }
  }
}