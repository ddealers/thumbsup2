(function() {
  var U2A1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U2A1 = (function(_super) {
    __extends(U2A1, _super);

    function U2A1() {
      this.nextEvaluation = __bind(this.nextEvaluation, this);
      this.finishEvaluation = __bind(this.finishEvaluation, this);
      this.evaluateAnswer = __bind(this.evaluateAnswer, this);
      this.initEvaluation = __bind(this.initEvaluation, this);
      var manifest, sounds;
      manifest = [
        {
          id: 'head',
          src: 'pleca1.png'
        }, {
          id: 'inst',
          src: 'inst.png'
        }, {
          id: 'c1',
          src: 'circle1.png'
        }, {
          id: 'c2',
          src: 'circle2.png'
        }, {
          id: 'n1',
          src: 'nube1.png'
        }, {
          id: 'n2',
          src: 'nube2.png'
        }, {
          id: 'n3',
          src: 'nube3.png'
        }, {
          id: 'n4',
          src: 'nube4.png'
        }, {
          id: 'casa',
          src: 'casita.png'
        }
      ];
      sounds = [
        {
          src: 'sounds/boing.mp3',
          id: 'boing'
        }, {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/TU2_U2_A1_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.answers = [
        {
          id: 2,
          text: 'a cake on the dining room table.'
        }, {
          id: 0,
          text: 'a cake in the kitchen table.'
        }, {
          id: 0,
          text: 'a dresser in the bedroom.'
        }, {
          id: 3,
          text: 'two bedrooms.'
        }, {
          id: 2,
          text: 'a clock in the bedroom.'
        }, {
          id: 1,
          text: 'six windows.'
        }, {
          id: 1,
          text: 'some books.'
        }, {
          id: 1,
          text: 'three people in the house.'
        }, {
          id: 0,
          text: 'a fridge.'
        }, {
          id: 3,
          text: 'two dresses in the closet.'
        }, {
          id: 0,
          text: 'a lamp in the hallway.'
        }, {
          id: 2,
          text: 'a cell phone on the dresser.'
        }
      ];
      U2A1.__super__.constructor.call(this, null, manifest, sounds);
    }

    U2A1.prototype.setStage = function() {
      U2A1.__super__.setStage.apply(this, arguments);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', ['Read, look and drag the phrases to complete the sentences.'], 60, 200);
      this.insertBitmap('casa', 'casa', 168, 274);
      this.intento = 0;
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 12, 0));
      return this.setDropper().setClouds().introEvaluation();
    };

    U2A1.prototype.setDropper = function() {
      this.addToMain(new WordCompleter('dropper', '', '', '#FFF', '#E90E2C', 300, 1050, 350, 60));
      return this;
    };

    U2A1.prototype.setClouds = function() {
      var n1, n2, n3, n4, nube1, nube2, nube3, nube4, tn1, tn2, tn3, tn4;
      nube1 = new createjs.Container();
      nube1.x = 1322;
      nube1.y = 260;
      nube1.name = 'nube1';
      nube2 = new createjs.Container();
      nube2.x = 1308;
      nube2.y = 446;
      nube2.name = 'nube2';
      nube3 = new createjs.Container();
      nube3.x = 1300;
      nube3.y = 654;
      nube3.name = 'nube3';
      nube4 = new createjs.Container();
      nube4.x = 1290;
      nube4.y = 850;
      nube4.name = 'nube4';
      n1 = this.createBitmap('n1', 'n1', 0, 0);
      n2 = this.createBitmap('n2', 'n2', 0, 0);
      n3 = this.createBitmap('n3', 'n3', 0, 0);
      n4 = this.createBitmap('n4', 'n4', 0, 0);
      tn1 = new DraggableText('tn0', "There is", 0, 28, 42);
      tn2 = new DraggableText('tn1', "There are", 1, 15, 50);
      tn3 = new DraggableText('tn2', "There isn't", 2, 30, 40);
      tn4 = new DraggableText('tn3', "There aren't", 3, 26, 50);
      nube1.addChild(n1, tn1);
      nube2.addChild(n2, tn2);
      nube3.addChild(n3, tn3);
      nube4.addChild(n4, tn4);
      this.addToLibrary(tn1, tn2, tn3, tn4);
      this.addToMain(nube1, nube2, nube3, nube4);
      return this;
    };

    U2A1.prototype.introEvaluation = function() {
      var i, _i;
      U2A1.__super__.introEvaluation.apply(this, arguments);
      for (i = _i = 0; _i <= 3; i = _i += 1) {
        this.observer.subscribe('init_evaluation', this.library['tn' + i].onInitEvaluation);
      }
      this.library['dropper'].changeText('');
      this.library['dropper'].changeLabel(this.answers[this.index].text);
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 1
      });
      TweenLite.from(this.library['casa'], 1, {
        alpha: 0,
        y: this.library['casa'].y + 100,
        delay: 2
      });
      TweenLite.from(this.library['dropper'], 1, {
        alpha: 0,
        x: this.library['dropper'].x + 100,
        ease: Quart.easeOut,
        delay: 4,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
      return TweenMax.allFrom([this.library['nube1'], this.library['nube2'], this.library['nube3'], this.library['nube4']], 1, {
        alpha: 0,
        y: stageSize.h,
        delay: 3
      });
    };

    U2A1.prototype.initEvaluation = function(e) {
      var i, _i, _results;
      U2A1.__super__.initEvaluation.apply(this, arguments);
      _results = [];
      for (i = _i = 0; _i <= 3; i = _i += 1) {
        _results.push(this.library['tn' + i].addEventListener('drop', this.evaluateAnswer));
      }
      return _results;
    };

    U2A1.prototype.evaluateAnswer = function(e) {
      var pt;
      this.answer = e.target;
      pt = this.library['dropper'].globalToLocal(this.stage.mouseX, this.stage.mouseY);
      if (this.library['dropper'].hitTest(pt.x, pt.y)) {
        if (this.answer.index === this.answers[this.index].id) {
          this.answer.x = this.answer.pos.x;
          this.answer.y = this.answer.pos.y;
          this.library['dropper'].changeText(this.answer.text.text);
          createjs.Sound.play('good');
          return setTimeout(this.finishEvaluation, 1 * 1000);
        } else {
          this.warning();
          this.answer.returnToPlace();
          this.intento++;
          if (this.intento === 2) {
            return setTimeout(this.finishEvaluation, 1 * 1000);
          }
        }
      } else {
        return this.answer.returnToPlace();
      }
    };

    U2A1.prototype.finishEvaluation = function() {
      if (this.intento === 0) {
        this.library['score'].plusOne();
      }
      this.intento = 0;
      return TweenLite.to(this.library['dropper'], 0.5, {
        alpha: 0,
        y: stageSize.h,
        ease: Back.easeOut,
        onComplete: this.nextEvaluation
      });
    };

    U2A1.prototype.nextEvaluation = function() {
      this.index++;
      if (this.index < this.answers.length) {
        this.library['dropper'].y = 1050;
        this.library['dropper'].x = 400;
        this.library['dropper'].changeText('');
        this.library['dropper'].changeLabel(this.answers[this.index].text);
        return TweenLite.to(this.library['dropper'], 0.5, {
          alpha: 1,
          x: 300,
          ease: Quart.easeOut
        });
      } else {
        return this.finish();
      }
    };

    U2A1.prototype.finish = function() {
      TweenLite.to(this.library['casa'], 1, {
        alpha: 0,
        y: this.library['casa'].y + 100
      });
      TweenLite.to(this.library['dropper'], 1, {
        alpha: 0,
        x: this.library['dropper'].x + 100,
        ease: Quart.easeOut
      });
      TweenMax.allTo([this.library['nube1'], this.library['nube2'], this.library['nube3'], this.library['nube4']], 1, {
        alpha: 0,
        y: stageSize.h
      });
      return U2A1.__super__.finish.apply(this, arguments);
    };

    window.U2A1 = U2A1;

    return U2A1;

  })(Oda);

}).call(this);
