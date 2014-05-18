(function() {
  var ChooseBitmap,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  ChooseBitmap = (function() {
    function ChooseBitmap(name, img1, img2, success, x, y) {
      this._dispatchSelection = __bind(this._dispatchSelection, this);
      this.initialize(name, img1, img2, success, x, y);
    }

    ChooseBitmap.prototype = new createjs.Container();

    ChooseBitmap.prototype.Container_initialize = ChooseBitmap.prototype.initialize;

    ChooseBitmap.prototype.initialize = function(name, img1, img2, success, x, y) {
      this.Container_initialize();
      this.name = name;
      this.x = x;
      this.y = y;
      this.pos = {
        x: x,
        y: y
      };
      this.success = success;
      this.firstOption = new createjs.Container();
      this.secondOption = new createjs.Container();
      this.rand = Math.random() > 0.5 ? 1 : 2;
      this.first = new createjs.Bitmap(img1);
      this.first.width = img1.width;
      this.first.index = 1;
      this.second = new createjs.Bitmap(img2);
      this.second.width = img2.width;
      this.second.index = 2;
      if (this.rand === 1) {
        this.secondOption.x = this.first.width + 20;
      } else {
        this.firstOption.x = this.first.width + 20;
      }
      console.log(this.firstOption);
      this.shape1 = new createjs.Shape();
      this.shape1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.first.getBounds().width, this.first.getBounds().height);
      this.shape1.index = 1;
      this.shape2 = new createjs.Shape();
      this.shape2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.second.getBounds().width, this.second.getBounds().height);
      this.shape2.index = 2;
      this.firstOption.addChild(this.first, this.shape1);
      this.secondOption.addChild(this.second, this.shape2);
      this.addChild(this.firstOption, this.secondOption);
      return false;
    };

    ChooseBitmap.prototype.initListeners = function() {
      this.firstOption.children[1].addEventListener('click', this._dispatchSelection);
      return this.secondOption.children[1].addEventListener('click', this._dispatchSelection);
    };

    ChooseBitmap.prototype.setImages = function(img1, img2, success) {
      this.removeAllChildren();
      this.firstOption = new createjs.Container();
      this.secondOption = new createjs.Container();
      this.first = new createjs.Bitmap(img1);
      this.first.width = img1.width;
      this.first.index = 1;
      this.second = new createjs.Bitmap(img2);
      this.second.width = img2.width;
      this.second.index = 2;
      this.shape1 = new createjs.Shape();
      this.shape1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.first.getBounds().width, this.first.getBounds().height);
      this.shape1.index = 1;
      this.shape2 = new createjs.Shape();
      this.shape2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.second.getBounds().width, this.second.getBounds().height);
      this.shape2.index = 2;
      this.firstOption.addChild(this.first, this.shape1);
      this.secondOption.addChild(this.second, this.shape2);
      return this.addChild(this.firstOption, this.secondOption);
    };

    ChooseBitmap.prototype.setDistance = function(dist, w) {
      var width;
      if (this.rand === 1) {
        width = w != null ? w : this.second.width;
        this.secondOption.x = dist;
        return this.regX = this.secondOption.x + width / 2;
      } else {
        width = w != null ? w : this.first.width;
        this.firstOption.x = dist;
        return this.regX = this.firstOption.x + width / 2;
      }
    };

    ChooseBitmap.prototype._dispatchSelection = function(e) {
      console.log(e.target.index);
      if (e.target.index === this.success) {
        if (e.target.index === 1) {
          TweenLite.to(this.firstOption, 1, {
            x: this.regX - this.first.width / 2
          });
          TweenLite.to(this.secondOption, 1, {
            alpha: 0
          });
        } else {
          TweenLite.to(this.firstOption, 1, {
            alpha: 0
          });
          TweenLite.to(this.secondOption, 1, {
            x: this.regX + this.second.width / 2
          });
        }
      }
      return this.dispatchEvent({
        type: 'selection',
        success: e.target.index === this.success
      });
    };

    window.ChooseBitmap = ChooseBitmap;

    return ChooseBitmap;

  })();

}).call(this);
