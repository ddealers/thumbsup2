(function() {
  var ClickableLetter;

  ClickableLetter = (function() {
    function ClickableLetter(name, text, index, x, y) {
      this.initialize(name, text, index, x, y);
    }

    ClickableLetter.prototype = new createjs.Container();

    ClickableLetter.prototype.Container_initialize = ClickableLetter.prototype.initialize;

    ClickableLetter.prototype.initialize = function(name, text, index, x, y) {
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
      this.text = new createjs.Text(text, '40px Quicksand', '#333333');
      this.w = this.text.getMeasuredWidth() + 20 > 80 ? this.text.getMeasuredWidth() + 20 : 80;
      this.h = this.text.getMeasuredHeight() + 12 > 60 ? this.text.getMeasuredHeight() + 12 : 40;
      hit = new createjs.Shape();
      hit.graphics.beginFill('#000').drawRect(-10, -6, this.w, this.h);
      this.text.hitArea = hit;
      this.addChild(this.text);
      return false;
    };

    window.ClickableLetter = ClickableLetter;

    return ClickableLetter;

  })();

}).call(this);
