(function() {
  var ClickableText;

  ClickableText = (function() {
    function ClickableText(name, text, index, x, y) {
      this.initialize(name, text, index, x, y);
    }

    ClickableText.prototype = new createjs.Container();

    ClickableText.prototype.Container_initialize = ClickableText.prototype.initialize;

    ClickableText.prototype.initialize = function(name, text, index, x, y) {
      var hit;
      this.Container_initialize();
      this.name = name;
      this.index = index;
      this.x = x;
      this.y = y;
      this.pos = {
        x: x,
        y: y
      };
      this.text = new createjs.Text(text, '32px Quicksand', '#333333');
      this.text.mouseEnabled = false;
      this.width = this.text.getMeasuredWidth() + 20;
      this.height = this.text.getMeasuredHeight() + 6;
      hit = new createjs.Shape();
      hit.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(-10, -6, this.text.getMeasuredWidth() + 40, this.text.getMeasuredHeight() + 12);
      this.addChild(this.text, hit);
      return false;
    };

    ClickableText.prototype.setLineWidth = function(width) {
      var h, hit, w;
      this.text.lineWidth = width;
      h = this.text.getMeasuredHeight() + 12;
      w = this.width > width ? width + 20 : this.width;
      hit = new createjs.Shape();
      switch (this.text.textAlign) {
        case 'left':
          hit.graphics.c().beginFill('rgba(0,0,0,0.1)').drawRect(0, 0, w, h);
          break;
        case 'center':
          hit.graphics.c().beginFill('rgba(0,0,0,0.1)').drawRect(-w / 2, 0, w, h);
          break;
        case 'right':
          hit.graphics.c().beginFill('rgba(0,0,0,0.1)').drawRect(-w, 0, w, h);
      }
      this.text.hitArea = hit;
      this.width = w;
      return false;
    };

    window.ClickableText = ClickableText;

    return ClickableText;

  })();

}).call(this);
