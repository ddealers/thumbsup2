(function() {
  var U4A2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U4A2 = (function(_super) {
    __extends(U4A2, _super);

    function U4A2() {
      this.nextEvaluation = __bind(this.nextEvaluation, this);
      this.finishEvaluation = __bind(this.finishEvaluation, this);
      this.evaluateAnswer = __bind(this.evaluateAnswer, this);
      this.initEvaluation = __bind(this.initEvaluation, this);
      this.updateCounter = __bind(this.updateCounter, this);
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
          id: 'bluewhale',
          src: 'bluewhale_img.png'
        }, {
          id: 'dolphin',
          src: 'dolphin_img.png'
        }, {
          id: 'eagle',
          src: 'eagle_img.png'
        }, {
          id: 'giantpanda',
          src: 'giantpanda_img.png'
        }, {
          id: 'polarbear',
          src: 'polarbear_img.png'
        }, {
          id: 'gorilla',
          src: 'gorilla_img.png'
        }, {
          id: 'jaguar',
          src: 'jaguar_img.png'
        }, {
          id: 'lion',
          src: 'lion_img.png'
        }, {
          id: 'seaturtle',
          src: 'seaturttle_img.png'
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
          src: 'sounds/TU2_U4_A2_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.letters = [['g', 'i', 'a', 'n', 't', 'p', 'a', 'n', 'd', 'a'], ['p', 's', 'e', 'a', 't', 'u', 'r', 't', 'l', 'e'], ['o', 'u', 's', 'q', 'f', 'a', 't', 'y', 'i', 'j'], ['l', 'g', 'e', 'x', 'k', 'e', 'j', 'd', 'o', 'a'], ['a', 'e', 'd', 'o', 'l', 'p', 'h', 'i', 'n', 'g'], ['r', 'a', 'n', 'h', 'y', 'j', 'i', 'n', 'b', 'u'], ['b', 'g', 'o', 'r', 'i', 'l', 'l', 'a', 't', 'a'], ['e', 'l', 'k', 'd', 'o', 'z', 'p', 'l', 'n', 'r'], ['a', 'e', 'o', 'f', 'e', 'a', 'd', 'o', 'f', 'l'], ['r', 'b', 'l', 'u', 'e', 'w', 'h', 'a', 'l', 'e']];
      this.answers = [
        {
          id: 'seaturtle',
          line: ['l11', 'l12', 'l13', 'l14', 'l15', 'l16', 'l17', 'l18', 'l19']
        }, {
          id: 'polarbear',
          line: ['l10', 'l20', 'l30', 'l40', 'l50', 'l60', 'l70', 'l80', 'l90']
        }, {
          id: 'bluewhale',
          line: ['l91', 'l92', 'l93', 'l94', 'l95', 'l96', 'l97', 'l98', 'l99']
        }, {
          id: 'giantpanda',
          line: ['l0', 'l1', 'l2', 'l3', 'l4', 'l5', 'l6', 'l7', 'l8', 'l9']
        }, {
          id: 'dolphin',
          line: ['l42', 'l43', 'l44', 'l45', 'l46', 'l47', 'l48']
        }, {
          id: 'gorilla',
          line: ['l61', 'l62', 'l63', 'l64', 'l65', 'l66', 'l67']
        }, {
          id: 'jaguar',
          line: ['l29', 'l39', 'l49', 'l59', 'l69', 'l79']
        }, {
          id: 'eagle',
          line: ['l41', 'l51', 'l61', 'l71', 'l81']
        }, {
          id: 'lion',
          line: ['l18', 'l28', 'l38', 'l48']
        }
      ];
      U4A2.__super__.constructor.call(this, null, manifest, sounds);
    }

    U4A2.prototype.setStage = function() {
      U4A2.__super__.setStage.apply(this, arguments);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.library.header.mouseEnabled = false;
      this.insertInstructions('instructions', ['Find the words and drag the cursor.'], 80, 200);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 150, 0));
      return this.setAnimals().setSopa().introEvaluation();
    };

    U4A2.prototype.setAnimals = function() {
      this.insertBitmap('bluewhale', 'bluewhale', 1018, 930);
      this.insertBitmap('dolphin', 'dolphin', 454, 920);
      this.insertBitmap('eagle', 'eagle', 66, 312);
      this.insertBitmap('giantpanda', 'giantpanda', 1322, 498);
      this.insertBitmap('gorilla', 'gorilla', 244, 722);
      this.insertBitmap('jaguar', 'jaguar', 284, 264);
      this.insertBitmap('lion', 'lion', 1172, 260);
      this.insertBitmap('seaturtle', 'seaturtle', 1180, 744);
      this.insertBitmap('polarbear', 'polarbear', 736, 848);
      return this;
    };

    U4A2.prototype.setSopa = function() {
      var h, i, j, letra, lhlength, llength, sha, shapesContainer, sopa, _i, _j;
      j = 0;
      h = this.letters.length;
      sopa = new createjs.Container();
      sopa.x = 594;
      sopa.y = 296;
      sopa.name = 'sopa';
      sopa.visible = false;
      shapesContainer = new createjs.Container();
      shapesContainer.name = 'shapesContainer';
      sopa.addChild(shapesContainer);
      this.addToLibrary(shapesContainer);
      llength = this.letters.length - 1;
      sha = new createjs.Shape();
      sha.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(-sopa.x, -sopa.y, stageSize.w, stageSize.h);
      sopa.addChild(sha);
      for (h = _i = 0; _i <= llength; h = _i += 1) {
        lhlength = this.letters[h].length - 1;
        for (i = _j = 0; _j <= lhlength; i = _j += 1) {
          letra = new ClickableText("l" + j, this.letters[h][i], "l" + j, i * 52, h * 52);
          letra.h = h;
          letra.i = i;
          letra.text.font = '40px Quicksand';
          letra.text.textAlign = 'center';
          sopa.addChild(letra);
          this.addToLibrary(letra);
          j++;
        }
      }
      this.addToMain(sopa);
      return this;
    };

    U4A2.prototype.updateCounter = function() {
      this.time--;
      this.library.score.updateTotal(this.time);
      if (this.time === 0) {
        return this.finish();
      }
    };

    U4A2.prototype.introEvaluation = function() {
      U4A2.__super__.introEvaluation.apply(this, arguments);
      TweenLite.from(this.library.header, 1, {
        y: -this.library.header.height
      });
      TweenLite.from(this.library.instructions, 1, {
        alpha: 0,
        x: 0,
        delay: 1,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
      return TweenMax.allFrom([this.library.bluewhale, this.library.dolphin, this.library.eagle, this.library.giantpanda, this.library.gorilla, this.library.jaguar, this.library.lion, this.library.seaturtle, this.library.polarbear], 1, {
        alpha: 0,
        delay: 1.5
      }, 0.1);
    };

    U4A2.prototype.initEvaluation = function(e) {
      U4A2.__super__.initEvaluation.apply(this, arguments);
      this.time = 151;
      this.timer = setInterval(this.updateCounter, 1000);
      this.library.sopa.visible = true;
      this.library.sopa.cache(-52, -52, 572, 572);
      TweenLite.from(this.library.sopa, 1, {
        alpha: 0,
        y: this.library['sopa'].y - 40
      });
      return this.library.sopa.addEventListener('mousedown', this.evaluateAnswer);
    };

    U4A2.prototype.evaluateAnswer = function(e) {
      var answer, clktxt, h, i, oup, pos, pt, shape, target,
        _this = this;
      answer = [];
      shape = new createjs.Shape();
      target = e.target;
      pt = this.mainContainer.globalToLocal(this.stage.mouseX, this.stage.mouseY);
      oup = this.mainContainer.getObjectUnderPoint(pt.x, pt.y);
      console.log('pt', pt, console.log('oup', oup));
      console.log('target', target);
      i = 0;
      h = 0;
      this.library.shapesContainer.addChild(shape);
      if (oup) {
        clktxt = oup.parent;
        if (clktxt instanceof ClickableText) {
          answer.push(clktxt.index);
          pos = {
            x: clktxt.i * 52 - 26,
            y: clktxt.h * 52,
            i: clktxt.i,
            h: clktxt.h
          };
          shape.graphics.s("rgba(255, 0, 0, 1)").f("rgba(255, 0, 0, 0.5)").rr(pos.x, pos.y, 52, 52, 10);
          this.library.sopa.cache(-52, -52, 572, 572);
          target.addEventListener('pressmove', function(ev) {
            var npos;
            pt = _this.mainContainer.globalToLocal(_this.stage.mouseX, _this.stage.mouseY);
            oup = _this.mainContainer.getObjectUnderPoint(pt.x, pt.y);
            if (oup) {
              clktxt = oup.parent;
              if (clktxt instanceof ClickableText) {
                i = Math.abs(clktxt.i - pos.i + 1) === 0 ? 1 : Math.abs(clktxt.i - pos.i + 1);
                h = Math.abs(clktxt.h - pos.h + 1) === 0 ? 1 : Math.abs(clktxt.h - pos.h + 1);
                npos = {
                  w: i * 52,
                  h: h * 52
                };
                answer.push(clktxt.index);
                shape.graphics.c().s("rgba(255, 0, 0, 1)").f("rgba(255, 0, 0, 0.5)").rr(pos.x, pos.y, npos.w, npos.h, 10);
                return _this.library.sopa.updateCache();
              }
            }
          });
          return target.addEventListener('pressup', function(ev) {
            var find, obj, _i, _j, _len, _ref;
            find = false;
            answer = Array();
            for (i = _i = 0; _i <= 99; i = _i += 1) {
              if (shape.hitTest(_this.library["l" + i].x, _this.library["l" + i].y + 13)) {
                answer.push(_this.library["l" + i].name);
              }
            }
            _ref = _this.answers;
            for (_j = 0, _len = _ref.length; _j < _len; _j++) {
              obj = _ref[_j];
              if (obj.line.toString() === answer.toString()) {
                TweenLite.to(_this.library[obj.id], 0.3, {
                  y: _this.library[obj.id].y - 200,
                  alpha: 0,
                  onComplete: _this.finishEvaluation
                });
                find = true;
              }
            }
            if (!find) {
              _this.library.shapesContainer.removeChild(shape);
            }
            return _this.library.sopa.updateCache();
          });
        }
      }
    };

    U4A2.prototype.finishEvaluation = function() {
      createjs.Sound.play('good');
      return this.nextEvaluation();
    };

    U4A2.prototype.nextEvaluation = function() {
      this.index++;
      if (this.index >= this.answers.length) {
        return this.finish();
      }
    };

    U4A2.prototype.finish = function() {
      clearInterval(this.timer);
      this.mainContainer.removeEventListener('mousedown', this.evaluateAnswer);
      TweenLite.to(this.library['sopa'], 1, {
        y: this.library['sopa'].y + 200,
        alpha: 0
      });
      return U4A2.__super__.finish.apply(this, arguments);
    };

    window.U4A2 = U4A2;

    return U4A2;

  })(Oda);

}).call(this);
