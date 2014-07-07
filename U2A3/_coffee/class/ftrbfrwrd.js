(function() {
  var AfterBeforeWord;

  AfterBeforeWord = (function() {
    function AfterBeforeWord(name, after_label, text, before_label, bgcolor, stcolor, x, y, w, h) {
      if (w == null) {
        w = 100;
      }
      if (h == null) {
        h = 20;
      }
      this.initialize(name, after_label, text, before_label, bgcolor, stcolor, x, y, w, h);
    }

    AfterBeforeWord.prototype = new createjs.Container();

    AfterBeforeWord.prototype.Container_initialize = AfterBeforeWord.prototype.initialize;

    AfterBeforeWord.prototype.initialize = function(name, after_label, text, before_label, bgcolor, stcolor, x, y, w, h) {
      this.Container_initialize();
      this.name = name;
      this.x = x;
      this.y = y;
      this.alabel = new createjs.Text(after_label, '52px Quicksand', '#333');
      this.text = new createjs.Text(text, '52px Quicksand', '#333');
      this.blabel = new createjs.Text(before_label, '52px Quicksand', '#333');
      this.graphic = new createjs.Graphics().beginFill(bgcolor).drawRect(0, 0, w, h).setStrokeStyle(3).beginStroke(stcolor).moveTo(0, h).lineTo(w, h);
      this.shape = new createjs.Shape(this.graphic);
      this.text.textAlign = 'center';
      this.shape.x = this.alabel.getMeasuredWidth();
      this.text.x = this.alabel.getMeasuredWidth() + w / 2;
      this.blabel.x = this.alabel.getMeasuredWidth() + w;
      this.width = this.alabel.getMeasuredWidth() + w + this.blabel.getMeasuredWidth();
      this.addChild(this.shape, this.alabel, this.text, this.blabel);
      return false;
    };

    AfterBeforeWord.prototype.changeAfterLabel = function(text) {
      return this.label.text = text;
    };

    AfterBeforeWord.prototype.changeBeforeLabel = function(text) {
      return this.label.text = text;
    };

    AfterBeforeWord.prototype.changeText = function(text) {
      this.text.text = text;
      return this.text.textAlign = 'center';
    };

    AfterBeforeWord.prototype.blink = function(state) {
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

    window.AfterBeforeWord = AfterBeforeWord;

    return AfterBeforeWord;

  })();

}).call(this);
