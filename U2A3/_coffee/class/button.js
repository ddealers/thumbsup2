(function() {
  var Button;

  Button = (function() {
    function Button(name, image, index, x, y) {
      this.initialize(name, image, index, x, y);
    }

    Button.prototype = new createjs.Container();

    Button.prototype.Container_initialize = Button.prototype.initialize;

    Button.prototype.initialize = function(name, image, index, x, y) {
      this.Container_initialize();
      this.set({
        name: name,
        index: index,
        x: x,
        y: y,
        pos: {
          x: x,
          y: y
        },
        mouseChildren: false
      });
      this.bitmap = new createjs.Bitmap(image);
      this.bitmap.mouseEnabled = false;
      this.shape = new createjs.Shape();
      this.shape.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.bitmap.getBounds().width, this.bitmap.getBounds().height);
      this.set({
        width: this.bitmap.getBounds().width,
        height: this.bitmap.getBounds().height
      });
      this.addChild(this.bitmap, this.shape);
      return false;
    };

    Button.prototype.blink = function(state) {
      if (state == null) {
        state = true;
      }
      TweenMax.killTweensOf(this);
      this.alpha = 1;
      if (state) {
        return TweenMax.to(this, 0.5, {
          alpha: .2,
          repeat: -1,
          yoyo: true
        });
      }
    };

    window.Button = Button;

    return Button;

  })();

}).call(this);
