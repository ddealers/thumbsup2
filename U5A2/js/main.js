(function() {
  var U5A2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U5A2 = (function(_super) {
    __extends(U5A2, _super);

    function U5A2() {
      this.repeatSound = __bind(this.repeatSound, this);
      this.nextEvaluation = __bind(this.nextEvaluation, this);
      this.finishEvaluation = __bind(this.finishEvaluation, this);
      this.evaluateAnswer = __bind(this.evaluateAnswer, this);
      this.initEvaluation = __bind(this.initEvaluation, this);
      this.filterByID = __bind(this.filterByID, this);
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
          id: 'repeatbtn',
          src: 'repeat-btn.png'
        }, {
          id: 'playagain',
          src: 'play_again.png'
        }, {
          id: 'startgame',
          src: 'start_game.png'
        }, {
          id: 'windy',
          src: 'windy_image.png'
        }, {
          id: 'sunny',
          src: 'sunny_image.png'
        }, {
          id: 'snowy',
          src: 'snowing_image.png'
        }, {
          id: 'rainy',
          src: 'raining_image.png'
        }, {
          id: 'cloudy',
          src: 'cloudy_image.png'
        }
      ];
      sounds = [
        {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/TU2_U5_A2_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/TU2_U5_A2_raining.mp3',
          id: 'srainy'
        }, {
          src: 'sounds/TU2_U5_A2_cloudy.mp3',
          id: 'scloudy'
        }, {
          src: 'sounds/TU2_U5_A2_snowing.mp3',
          id: 'ssnowy'
        }, {
          src: 'sounds/TU2_U5_A2_sunny.mp3',
          id: 'ssunny'
        }, {
          src: 'sounds/TU2_U5_A2_windy.mp3',
          id: 'swindy'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.game = {
        steps: [
          {
            id: 'windy',
            texts: [
              {
                p: 'I',
                s: 1,
                c: 'my jacket.'
              }, {
                p: 'I',
                s: 1,
                c: 'my sweater.'
              }
            ]
          }, {
            id: 'sunny',
            texts: [
              {
                p: 'I',
                s: 1,
                c: 'my swimsuit.'
              }, {
                p: 'I',
                s: 2,
                c: 'my jacket.'
              }
            ]
          }, {
            id: 'rainy',
            texts: [
              {
                p: 'I',
                s: 1,
                c: 'my raincoat.'
              }, {
                p: 'I',
                s: 1,
                c: 'my umbrella.'
              }
            ]
          }, {
            id: 'snowy',
            texts: [
              {
                p: 'I',
                s: 1,
                c: 'my boots.'
              }, {
                p: 'I',
                s: 1,
                c: 'my coat.'
              }
            ]
          }, {
            id: 'cloudy',
            texts: [
              {
                p: 'I',
                s: 2,
                c: 'my swimsuit.'
              }, {
                p: 'I',
                s: 1,
                c: 'my jeans.'
              }
            ]
          }
        ]
      };
      U5A2.__super__.constructor.call(this, null, manifest, sounds);
    }

    U5A2.prototype.filterByID = function(x) {
      return x !== this.selected;
    };

    U5A2.prototype.setStage = function() {
      var repeat, step;
      U5A2.__super__.setStage.apply(this, arguments);
      this.steps = this.shuffle(this.game.steps);
      this.stepsid = (function() {
        var _i, _len, _ref, _results;
        _ref = this.steps;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          step = _ref[_i];
          _results.push(step.id);
        }
        return _results;
      }).call(this);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      repeat = new Button('repeatbtn', this.preload.getResult('repeatbtn'), 0, 800, 900);
      this.setReg(repeat, repeat.getBounds().width / 2, repeat.getBounds().height / 2);
      this.addToMain(repeat);
      this.insertInstructions('instructions', ['Listen and click on the correct option.'], 80, 200);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 15, 0));
      return this.setStep().introEvaluation();
    };

    U5A2.prototype.setStep = function() {
      var choose, img1, img2, intento, stepsView,
        _this = this;
      this.selected = this.stepsid[this.index];
      intento = 0;
      stepsView = this.stepsid.filter(this.filterByID);
      stepsView = this.shuffle(stepsView);
      img1 = this.preload.getResult(this.selected);
      img2 = this.preload.getResult(stepsView[0]);
      choose = new ChooseBitmap('chooseImg', img1, img2, 1, stageSize.w / 2, 300);
      choose.scaleX = choose.scaleY = 0.6;
      choose.setDistance(1100, 0);
      choose.addEventListener('selection', function(e) {
        _this.tindex = 0;
        if (e.success === false) {
          _this.warning();
          return intento = 1;
        } else {
          if (intento === 0) {
            _this.library.score.plusOne();
            createjs.Sound.play("good");
          }
          _this.showText();
          choose.removeAllEventListeners();
          return TweenLite.to(_this.library.repeatbtn, 0.5, {
            alpha: 0
          });
        }
      });
      this.addToMain(choose);
      TweenLite.from(choose, 1, {
        alpha: 0,
        y: this.library.chooseImg.y + 100,
        delay: 1
      });
      return this;
    };

    U5A2.prototype.introEvaluation = function() {
      U5A2.__super__.introEvaluation.apply(this, arguments);
      TweenLite.from(this.library.header, 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library.repeatbtn, 1, {
        alpha: 0,
        y: this.library.repeatbtn.y + 40,
        delay: 1
      });
      return TweenLite.from(this.library.instructions, 1, {
        alpha: 0,
        x: 0,
        delay: 1,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
    };

    U5A2.prototype.initEvaluation = function(e) {
      U5A2.__super__.initEvaluation.apply(this, arguments);
      this.library.chooseImg.initListeners();
      createjs.Sound.play("s" + this.stepsid[this.index]);
      return this.library.repeatbtn.addEventListener('click', this.repeatSound);
    };

    U5A2.prototype.showText = function() {
      var choosetxt, intento, text,
        _this = this;
      text = this.steps[this.index].texts[this.tindex];
      intento = 0;
      choosetxt = new ChooseText('chooseTxt', text.p, "want", "don't want", text.c, text.s, 0, 900);
      choosetxt.x = stageSize.w / 2 - choosetxt.width / 2;
      choosetxt.addEventListener('selection', function(e) {
        if (e.success === false) {
          _this.warning();
          return intento = 1;
        } else {
          if (intento === 0) {
            _this.library.score.plusOne();
            createjs.Sound.play("good");
          }
          return _this.evaluateAnswer();
        }
      });
      return this.addToMain(choosetxt);
    };

    U5A2.prototype.evaluateAnswer = function(e) {
      this.tindex++;
      if (this.tindex < this.steps[this.index].texts.length) {
        TweenLite.to(this.library.chooseTxt, 0.5, {
          y: this.library.chooseTxt.y - 100,
          alpha: 0
        });
        return this.showText();
      } else {
        return this.finishEvaluation();
      }
    };

    U5A2.prototype.finishEvaluation = function() {
      TweenLite.to(this.library.chooseTxt, 0.5, {
        y: this.library.chooseTxt.y - 100,
        alpha: 0
      });
      return TweenLite.to(this.library.chooseImg, 0.5, {
        alpha: 0,
        y: this.library.chooseImg.y - 100,
        ease: Back.easeOut,
        onComplete: this.nextEvaluation
      });
    };

    U5A2.prototype.nextEvaluation = function() {
      this.index++;
      createjs.Sound.stop();
      if (this.index < this.steps.length) {
        this.setStep();
        this.library.chooseImg.initListeners();
        createjs.Sound.play("s" + this.stepsid[this.index]);
        return TweenLite.to(this.library.repeatbtn, 0.5, {
          alpha: 1
        });
      } else {
        return this.finish();
      }
    };

    U5A2.prototype.repeatSound = function() {
      createjs.Sound.stop();
      return createjs.Sound.play("s" + this.stepsid[this.index]);
    };

    U5A2.prototype.finish = function() {
      return U5A2.__super__.finish.apply(this, arguments);
    };

    window.U5A2 = U5A2;

    return U5A2;

  })(Oda);

}).call(this);
