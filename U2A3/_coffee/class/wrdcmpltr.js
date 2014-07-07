(function() {
  var WordCompleter;

  WordCompleter = (function() {
    function WordCompleter(name, text, label, bgcolor, stcolor, x, y, w, h) {
      if (w == null) {
        w = 100;
      }
      if (h == null) {
        h = 20;
      }
      this.initialize(name, text, label, bgcolor, stcolor, x, y, w, h);
    }

    WordCompleter.prototype = new createjs.Container();

    WordCompleter.prototype.Container_initialize = WordCompleter.prototype.initialize;

    WordCompleter.prototype.initialize = function(name, text, label, bgcolor, stcolor, x, y, w, h) {
      this.Container_initialize();
      this.name = name;
      this.x = x;
      this.y = y;
      this.label = new createjs.Text(label, '52px Quicksand', '#333');
      this.label.x = w + 20;
      this.text = new createjs.Text(text, '52px Quicksand', '#333');
      this.graphic = new createjs.Graphics().beginFill(bgcolor).drawRect(0, 0, w, h).setStrokeStyle(3).beginStroke(stcolor).moveTo(0, h).lineTo(w, h);
      this.shape = new createjs.Shape(this.graphic);
      this.text.textAlign = 'center';
      this.text.x = w / 2;
      this.addChild(this.shape, this.text, this.label);
      return false;
    };

    WordCompleter.prototype.changeLabel = function(text) {
      return this.label.text = text;
    };

    WordCompleter.prototype.changeText = function(text) {
      this.text.text = text;
      return this.text.textAlign = 'center';
    };

    WordCompleter.prototype.blink = function(state) {
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

    window.WordCompleter = WordCompleter;

    return WordCompleter;

  })();

}).call(this);
