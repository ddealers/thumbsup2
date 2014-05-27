(function() {
  var U1A5,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U1A5 = (function(_super) {
    __extends(U1A5, _super);

    function U1A5() {
      this.finish = __bind(this.finish, this);
      this.storyTale = __bind(this.storyTale, this);
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
          id: 'repeatbtn',
          src: 'repeat-btn.png'
        }, {
          id: 'playagain',
          src: 'play_again.png'
        }, {
          id: 'startgame',
          src: 'start_game.png'
        }, {
          id: 'title1',
          src: 'title1.png'
        }, {
          id: '1',
          src: '1.png'
        }, {
          id: '2',
          src: '2.png'
        }, {
          id: '3',
          src: '3.png'
        }, {
          id: '4',
          src: '4.png'
        }, {
          id: '5',
          src: '5.png'
        }, {
          id: '6',
          src: '6.png'
        }, {
          id: '7',
          src: '7.png'
        }, {
          id: '8',
          src: '8.png'
        }, {
          id: '1b',
          src: '1b.png'
        }, {
          id: '2b',
          src: '2b.png'
        }, {
          id: '3b',
          src: '3b.png'
        }, {
          id: '4b',
          src: '4b.png'
        }, {
          id: '5b',
          src: '5b.png'
        }, {
          id: '6b',
          src: '6b.png'
        }, {
          id: '7b',
          src: '7b.png'
        }, {
          id: '8b',
          src: '8b.png'
        }, {
          id: 'btn',
          src: 'btn.png'
        }, {
          id: 'face1',
          src: 'face1.png'
        }, {
          id: 'face2',
          src: 'face2.png'
        }, {
          id: 'face3',
          src: 'face3.png'
        }, {
          id: 'face4',
          src: 'face4.png'
        }
      ];
      sounds = [
        {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }, {
          src: 'sounds/TU2_U1_A5_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/TU2_U1_A5_scene1.mp3',
          id: 'scene1'
        }, {
          src: 'sounds/TU2_U1_A5_scene2.mp3',
          id: 'scene2'
        }
      ];
      this.game = [
        {
          texts: [
            {
              idx: 2,
              t: "Sam",
              im: 'face1',
              x: 1400,
              y: 220
            }, {
              idx: 1,
              t: 'Kara',
              im: 'face2',
              x: 1400,
              y: 440
            }, {
              idx: 3,
              t: "Mrs. Smith",
              im: 'face3',
              x: 1400,
              y: 660
            }, {
              idx: 4,
              t: "Lily",
              im: 'face4',
              x: 1400,
              y: 880
            }
          ],
          positions: [
            {
              x: 222,
              y: 318
            }, {
              x: 670,
              y: 342
            }, {
              x: 212,
              y: 744
            }, {
              x: 664,
              y: 726
            }
          ]
        }, {
          texts: [
            {
              idx: 5,
              t: "Sam",
              im: 'face1',
              x: 1400,
              y: 220
            }, {
              idx: 7,
              t: 'Kara',
              im: 'face2',
              x: 1400,
              y: 440
            }, {
              idx: [6, 8],
              t: 'Lily',
              im: 'face4',
              x: 1400,
              y: 660
            }
          ],
          positions: [
            {
              x: 202,
              y: 340
            }, {
              x: 656,
              y: 340
            }, {
              x: 214,
              y: 766
            }, {
              x: 670,
              y: 768
            }
          ]
        }
      ];
      this.answers = [];
      U1A5.__super__.constructor.call(this, null, manifest, sounds);
    }

    U1A5.prototype.setStage = function() {
      var btnnext, ti;
      U1A5.__super__.setStage.apply(this, arguments);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', ['Read and drag the names to complete the story.'], 80, 200);
      ti = this.createBitmap('title', 'title1', 700, 270, 'tc');
      this.addToMain(ti);
      btnnext = new Button('btnnext', this.preload.getResult('btn'), 0, 1520, 1178);
      this.addToMain(btnnext);
      this.library['btnnext'].visible = false;
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 8, 0));
      return this.setCuento(1).introEvaluation();
    };

    U1A5.prototype.setCuento = function(scene) {
      var cuento, f, i, s, sc, scn, sp, t, y, _i, _j, _ref, _ref1;
      cuento = new createjs.Container();
      cuento.name = 'cuento';
      this.scene = scene;
      scn = this.game[scene - 1];
      for (i = _i = 1, _ref = scn.positions.length; _i <= _ref; i = _i += 1) {
        sp = this.createSprite("sp" + i, ["" + ((scene - 1) * 4 + i), "" + ((scene - 1) * 4 + i) + "b"], null, 0, 0);
        sp.mouseEnabled = false;
        s = new createjs.Shape();
        s.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, sp.getBounds().width, sp.getBounds().height);
        sc = new createjs.Container();
        sc.set({
          name: "sc" + i,
          index: (scene - 1) * 4 + i,
          x: scn.positions[i - 1].x,
          y: scn.positions[i - 1].y,
          sprite: sp,
          shape: s
        });
        sc.addChild(sp, s);
        cuento.addChild(sc);
        this.addToLibrary(sc);
      }
      for (i = _j = 1, _ref1 = scn.texts.length; _j <= _ref1; i = _j += 1) {
        y = scene === 1 ? 200 : 300;
        f = this.createBitmap(scn.texts[i - 1].im, scn.texts[i - 1].im, scn.texts[i - 1].x, scn.texts[i - 1].y + y, 'bc');
        this.addToLibrary(f);
        cuento.addChild(f);
        t = new DraggableText("t" + i, scn.texts[i - 1].t, scn.texts[i - 1].idx, scn.texts[i - 1].x, scn.texts[i - 1].y + y);
        t.text.lineHeight = 40;
        t.text.lineWidth = 400;
        t.text.textAlign = 'center';
        t.setHitArea();
        this.addToLibrary(t);
        cuento.addChild(t);
      }
      this.addToMain(cuento);
      return this;
    };

    U1A5.prototype.setCuentoFinal = function(scene) {
      var cuento, i, m, scn, _i, _ref;
      cuento = new createjs.Container();
      cuento.name = 'cuento';
      this.scene = scene;
      scn = this.game[scene - 1];
      for (i = _i = 1, _ref = scn.positions.length; _i <= _ref; i = _i += 1) {
        m = this.createBitmap("" + ((scene - 1) * 4 + i) + "b", "" + ((scene - 1) * 4 + i) + "b", scn.positions[i - 1].x, scn.positions[i - 1].y);
        cuento.addChild(m);
        this.addToLibrary(m);
      }
      return this.addToMain(cuento);
    };

    U1A5.prototype.introEvaluation = function() {
      var i, _i, _ref;
      U1A5.__super__.introEvaluation.apply(this, arguments);
      for (i = _i = 1, _ref = this.game[this.scene - 1].texts.length; _i <= _ref; i = _i += 1) {
        this.observer.subscribe('init_evaluation', this.library["t" + i].onInitEvaluation);
      }
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 0.5
      });
      TweenLite.from(this.library['title'], 1, {
        alpha: 0,
        y: this.library['title'].y + 40,
        delay: 1
      });
      return TweenLite.from(this.library['cuento'], 1, {
        alpha: 0,
        y: this.library['cuento'].y + 40,
        delay: 1,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
    };

    U1A5.prototype.initEvaluation = function(e) {
      var i, _i, _ref, _results;
      U1A5.__super__.initEvaluation.apply(this, arguments);
      _results = [];
      for (i = _i = 1, _ref = this.game[this.scene - 1].texts.length; _i <= _ref; i = _i += 1) {
        _results.push(this.library["t" + i].addEventListener('drop', this.evaluateAnswer));
      }
      return _results;
    };

    U1A5.prototype.evaluateAnswer = function(e) {
      var ans, dropped, hit, i, pt, _i, _j, _len, _ref, _ref1, _results;
      this.answer = e.currentTarget;
      dropped = false;
      _results = [];
      for (i = _i = 1, _ref = this.game[this.scene - 1].positions.length; _i <= _ref; i = _i += 1) {
        pt = this.library["sc" + i].shape.globalToLocal(this.stage.mouseX, this.stage.mouseY);
        if (this.library["sc" + i].shape.hitTest(pt.x, pt.y)) {
          if (!this.isArray(this.answer.index)) {
            if (this.answer.index === this.library["sc" + i].index) {
              this.library["sc" + i].sprite.gotoAndStop(1);
              this.answer.returnToOrigin();
              createjs.Sound.stop();
              createjs.Sound.play('good');
              if (!this.library["sc" + i].failed) {
                this.library['score'].plusOne();
              }
              _results.push(setTimeout(this.finishEvaluation(), 500));
            } else {
              this.library["sc" + i].failed = true;
              this.warning();
              _results.push(this.answer.returnToPlace());
            }
          } else {
            hit = false;
            _ref1 = this.answer.index;
            for (_j = 0, _len = _ref1.length; _j < _len; _j++) {
              ans = _ref1[_j];
              if (ans === this.library["sc" + i].index) {
                hit = true;
              }
            }
            if (hit) {
              this.library["sc" + i].sprite.gotoAndStop(1);
              this.answer.returnToOrigin();
              createjs.Sound.stop();
              createjs.Sound.play('good');
              if (!this.library["sc" + i].failed) {
                this.library['score'].plusOne();
              }
              _results.push(setTimeout(this.finishEvaluation(), 500));
            } else {
              this.library["sc" + i].failed = true;
              this.warning();
              this.intento = 1;
              _results.push(this.answer.returnToPlace());
            }
          }
        } else {
          _results.push(this.answer.returnToPlace());
        }
      }
      return _results;
    };

    U1A5.prototype.finishEvaluation = function() {
      var i, _i, _ref;
      for (i = _i = 1, _ref = this.game[this.scene - 1].positions.length; _i <= _ref; i = _i += 1) {
        if (this.library["sc" + i].sprite.currentFrame === 0) {
          return;
        }
      }
      if (this.scene < 2) {
        this.library['btnnext'].visible = true;
        this.library['btnnext'].alpha = 1;
        this.library['btnnext'].y = 1120;
        TweenLite.from(this.library['btnnext'], 1, {
          alpha: 0,
          y: this.library['btnnext'].y + 20
        });
        return this.library['btnnext'].addEventListener('click', this.nextEvaluation);
      } else {
        return this.nextEvaluation();
      }
    };

    U1A5.prototype.nextEvaluation = function() {
      var i, _i, _ref, _results;
      this.index++;
      if (this.index < this.game.length) {
        TweenLite.to(this.library['btnnext'], 1, {
          alpha: 0,
          y: this.library['btnnext'].y + 20
        });
        TweenLite.to(this.library['cuento'], 1, {
          alpha: 0,
          y: this.library['cuento'].y + 20
        });
        this.setCuento(this.index + 1);
        TweenLite.from(this.library['cuento'], 1, {
          alpha: 0,
          y: this.library['cuento'].y + 20
        });
        _results = [];
        for (i = _i = 1, _ref = this.game[this.scene - 1].texts.length; _i <= _ref; i = _i += 1) {
          this.library["t" + i].onInitEvaluation();
          _results.push(this.library["t" + i].addEventListener('click', this.evaluateAnswer));
        }
        return _results;
      } else {
        this.finalscene = 0;
        return setTimeout(this.storyTale, 2 * 1000);
      }
    };

    U1A5.prototype.storyTale = function() {
      var s;
      TweenLite.to(this.library['cuento'], 1, {
        alpha: 0,
        y: this.library['cuento'].y - 100
      });
      if (this.finalscene < this.game.length) {
        this.setCuentoFinal(this.finalscene + 1);
        s = createjs.Sound.play("scene" + this.scene);
        s.addEventListener('complete', this.storyTale);
        TweenLite.to(this.library['cuento'], 1, {
          alpha: 1,
          y: this.library['cuento'].y + 20
        });
        return this.finalscene++;
      } else {
        return this.finish();
      }
    };

    U1A5.prototype.finish = function() {
      TweenLite.to(this.library['title'], 1, {
        alpha: 0,
        y: this.library['title'].y + 40
      });
      return U1A5.__super__.finish.apply(this, arguments);
    };

    window.U1A5 = U1A5;

    return U1A5;

  })(Oda);

}).call(this);
