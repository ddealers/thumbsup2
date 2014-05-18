(function() {
  var U6A1,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U6A1 = (function(_super) {
    __extends(U6A1, _super);

    function U6A1() {
      this.nextEvaluation = __bind(this.nextEvaluation, this);
      this.finishEvaluation = __bind(this.finishEvaluation, this);
      this.evaluateLocation = __bind(this.evaluateLocation, this);
      this.evaluateAnswer = __bind(this.evaluateAnswer, this);
      this.initDrag = __bind(this.initDrag, this);
      this.selectPuzzle = __bind(this.selectPuzzle, this);
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
          id: 'b1',
          src: 'p1-btn.png'
        }, {
          id: 'b2',
          src: 'p2-btn.png'
        }, {
          id: 'm1',
          src: 'marco-1.png'
        }, {
          id: 'm2',
          src: 'marco-2.png'
        }, {
          id: 'p1p1',
          src: 'puzzle1-1.png'
        }, {
          id: 'p1p1back',
          src: 'puzzle1-1-back.png'
        }, {
          id: 'p1p2',
          src: 'puzzle1-2.png'
        }, {
          id: 'p1p2back',
          src: 'puzzle1-2-back.png'
        }, {
          id: 'p1p3',
          src: 'puzzle1-3.png'
        }, {
          id: 'p1p3back',
          src: 'puzzle1-3-back.png'
        }, {
          id: 'p1p4',
          src: 'puzzle1-4.png'
        }, {
          id: 'p1p4back',
          src: 'puzzle1-4-back.png'
        }, {
          id: 'p1p5',
          src: 'puzzle1-5.png'
        }, {
          id: 'p1p5back',
          src: 'puzzle1-5-back.png'
        }, {
          id: 'p1p6',
          src: 'puzzle1-6.png'
        }, {
          id: 'p1p6back',
          src: 'puzzle1-6-back.png'
        }, {
          id: 'p1p7',
          src: 'puzzle1-7.png'
        }, {
          id: 'p1p7back',
          src: 'puzzle1-7-back.png'
        }, {
          id: 'p1p8',
          src: 'puzzle1-8.png'
        }, {
          id: 'p1p8back',
          src: 'puzzle1-8-back.png'
        }, {
          id: 'p1p9',
          src: 'puzzle1-9.png'
        }, {
          id: 'p1p9back',
          src: 'puzzle1-9-back.png'
        }, {
          id: 'p1p10',
          src: 'puzzle1-10.png'
        }, {
          id: 'p1p10back',
          src: 'puzzle1-10-back.png'
        }, {
          id: 'p1p11',
          src: 'puzzle1-11.png'
        }, {
          id: 'p1p11back',
          src: 'puzzle1-11-back.png'
        }, {
          id: 'p1p12',
          src: 'puzzle1-12.png'
        }, {
          id: 'p1p12back',
          src: 'puzzle1-12-back.png'
        }, {
          id: 'p2p1',
          src: 'puzzle2-1.png'
        }, {
          id: 'p2p1back',
          src: 'puzzle2-1-back.png'
        }, {
          id: 'p2p2',
          src: 'puzzle2-2.png'
        }, {
          id: 'p2p2back',
          src: 'puzzle2-2-back.png'
        }, {
          id: 'p2p3',
          src: 'puzzle2-3.png'
        }, {
          id: 'p2p3back',
          src: 'puzzle2-3-back.png'
        }, {
          id: 'p2p4',
          src: 'puzzle2-4.png'
        }, {
          id: 'p2p4back',
          src: 'puzzle2-4-back.png'
        }, {
          id: 'p2p5',
          src: 'puzzle2-5.png'
        }, {
          id: 'p2p5back',
          src: 'puzzle2-5-back.png'
        }, {
          id: 'p2p6',
          src: 'puzzle2-6.png'
        }, {
          id: 'p2p6back',
          src: 'puzzle2-6-back.png'
        }, {
          id: 'p2p7',
          src: 'puzzle2-7.png'
        }, {
          id: 'p2p7back',
          src: 'puzzle2-7-back.png'
        }, {
          id: 'p2p8',
          src: 'puzzle2-8.png'
        }, {
          id: 'p2p8back',
          src: 'puzzle2-8-back.png'
        }, {
          id: 'p2p9',
          src: 'puzzle2-9.png'
        }, {
          id: 'p2p9back',
          src: 'puzzle2-9-back.png'
        }, {
          id: 'p2p10',
          src: 'puzzle2-10.png'
        }, {
          id: 'p2p10back',
          src: 'puzzle2-10-back.png'
        }, {
          id: 'p2p11',
          src: 'puzzle2-11.png'
        }, {
          id: 'p2p11back',
          src: 'puzzle2-11-back.png'
        }, {
          id: 'p2p12',
          src: 'puzzle2-12.png'
        }, {
          id: 'p2p12back',
          src: 'puzzle2-12-back.png'
        }, {
          id: 'btnfalse',
          src: 'false-btn.png'
        }, {
          id: 'btntrue',
          src: 'true-btn.png'
        }
      ];
      sounds = [
        {
          src: 'sounds/TU2_U6_A1_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/boing.mp3',
          id: 'boing'
        }, {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }, {
          src: 'sounds/bell_cow_3.mp3',
          id: 'bell'
        }
      ];
      U6A1.__super__.constructor.call(this, null, manifest, sounds);
    }

    U6A1.prototype.setStage = function() {
      U6A1.__super__.setStage.apply(this, arguments);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', 'Drag the puzzle pieces, read and click on the correct answers.', 80, 200);
      this.p1 = new createjs.Container();
      this.p1.name = 'p1';
      this.p1.x = 1462;
      this.p1.y = 966;
      this.b1 = this.createBitmap('b1', 'b1', 0, 0);
      this.b1.mouseEnabled = false;
      this.shape1 = new createjs.Shape();
      this.shape1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.b1.getBounds().width, this.b1.getBounds().height);
      this.p1.addChild(this.b1, this.shape1);
      this.p2 = new createjs.Container();
      this.p2.name = 'p2';
      this.p2.x = 1462;
      this.p2.y = 1060;
      this.b2 = this.createBitmap('b2', 'b2', 0, 0);
      this.b2.mouseEnabled = false;
      this.shape2 = new createjs.Shape();
      this.shape2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, this.b2.getBounds().width, this.b2.getBounds().height);
      this.p2.addChild(this.b2, this.shape2);
      this.addToMain(this.p1, this.p2);
      this.addToLibrary(this.p1, this.p2);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 8, 0));
      return this.introEvaluation();
    };

    U6A1.prototype.introEvaluation = function() {
      U6A1.__super__.introEvaluation.apply(this, arguments);
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 0.5,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
      return TweenMax.from([this.library['p1'], this.library['p2'], this.library['p3']], 1, {
        alpha: 0,
        y: stageSize.h,
        delay: 1
      });
    };

    U6A1.prototype.initEvaluation = function(e) {
      var i, _i, _results;
      U6A1.__super__.initEvaluation.apply(this, arguments);
      _results = [];
      for (i = _i = 1; _i <= 2; i = _i += 1) {
        this.blink(this['p' + i]);
        _results.push(this['p' + i].addEventListener('click', this.selectPuzzle));
      }
      return _results;
    };

    U6A1.prototype.selectPuzzle = function(e) {
      var i, _i;
      for (i = _i = 1; _i <= 2; i = _i += 1) {
        this.blink(this["p" + i], false);
        this['p' + i].removeEventListener('click', this.selectPuzzle);
      }
      this.trueb = new createjs.Container();
      this.trueb.x = 600;
      this.trueb.y = 1080;
      this.trueb.name = 'btntrue';
      this["true"] = this.createBitmap('btrue', 'btntrue', 0, 0);
      this["true"].mouseEnabled = false;
      this.shapetrue = new createjs.Shape();
      this.shapetrue.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(0, 0, this["true"].getBounds().width, this["true"].getBounds().height);
      this.trueb.addChild(this["true"], this.shapetrue);
      this.falseb = new createjs.Container();
      this.falseb.x = 840;
      this.falseb.y = 1080;
      this.falseb.name = 'btnfalse';
      this["false"] = this.createBitmap('bfalse', 'btnfalse', 0, 0);
      this["false"].mouseEnabled = false;
      this.shapefalse = new createjs.Shape();
      this.shapefalse.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(0, 0, this["false"].getBounds().width, this["false"].getBounds().height);
      this.falseb.addChild(this["false"], this.shapefalse);
      this.addToMain(this.trueb, this.falseb);
      this.addToLibrary(this.trueb, this.falseb);
      console.log(e.target);
      switch (e.target.parent.name) {
        case 'p1':
          this.pieces = {
            p1p1: {
              x: 304,
              y: 162,
              text: 'A firefighter puts out fires.',
              label: 'true',
              back: true
            },
            p1p2: {
              x: 493,
              y: 162
            },
            p1p3: {
              x: 634,
              y: 162,
              text: 'A nurse helps sick people.',
              label: 'true',
              back: true
            },
            p1p4: {
              x: 828,
              y: 163
            },
            p1p5: {
              x: 304,
              y: 334,
              text: 'A mail carrier works at he post office.',
              label: 'true',
              back: true
            },
            p1p6: {
              x: 493,
              y: 334,
              text: 'A bus driver works in an office.',
              label: 'false',
              back: true
            },
            p1p7: {
              x: 637,
              y: 334,
              text: 'A waitress works at a grocery store.',
              label: 'false',
              back: true
            },
            p1p8: {
              x: 815,
              y: 333,
              text: 'A salesclerk works at a bank.',
              label: 'false',
              back: true
            },
            p1p9: {
              x: 303,
              y: 515
            },
            p1p10: {
              x: 458,
              y: 516,
              text: 'A librarian sells books.',
              label: 'false',
              back: true
            },
            p1p11: {
              x: 676,
              y: 515
            },
            p1p12: {
              x: 815,
              y: 516,
              text: 'A chef serves food.',
              label: 'false',
              back: true
            }
          };
          this.answers = 8;
          this.setPuzzle(1);
          break;
        case 'p2':
          this.pieces = {
            p2p1: {
              x: 308,
              y: 166,
              text: 'A doctor works at a bank.',
              label: 'false',
              back: true
            },
            p2p2: {
              x: 497,
              y: 166
            },
            p2p3: {
              x: 641,
              y: 166,
              text: 'A teacher works at a library.',
              label: 'false',
              back: true
            },
            p2p4: {
              x: 834,
              y: 166
            },
            p2p5: {
              x: 306,
              y: 338,
              text: 'A mechanic fixes cars.',
              label: 'true',
              back: true
            },
            p2p6: {
              x: 496,
              y: 336,
              text: 'A police officer puts out fires.',
              label: 'false',
              back: true
            },
            p2p7: {
              x: 638,
              y: 337,
              text: 'A farmer fixes cars.',
              label: 'false',
              back: true
            },
            p2p8: {
              x: 820,
              y: 336,
              text: 'A waitress works at a restaurant.',
              label: 'true',
              back: true
            },
            p2p9: {
              x: 309,
              y: 520
            },
            p2p10: {
              x: 462,
              y: 520,
              text: 'A vet helps sick animals.',
              label: 'true',
              back: true
            },
            p2p11: {
              x: 678,
              y: 519
            },
            p2p12: {
              x: 820,
              y: 519,
              text: 'A salesclerk works at a museum.',
              label: 'false',
              back: true
            }
          };
          this.answers = 8;
          this.setPuzzle(2);
      }
      TweenLite.from(this.library.btntrue, 1, {
        alpha: 0,
        y: this.library.btntrue.y - 40
      });
      return TweenLite.from(this.library.btnfalse, 1, {
        alpha: 0,
        y: this.library.btnfalse.y - 40,
        delay: 0.2
      });
    };

    U6A1.prototype.setPuzzle = function(num) {
      var dpp, dragpieces, i, index, m, pp, puzzle, _i, _j;
      this.num = num;
      puzzle = new createjs.Container();
      puzzle.x = 150;
      puzzle.y = 290;
      puzzle.name = 'puzzle';
      m = this.createBitmap("m" + num, "m" + num, 290, 150);
      puzzle.addChild(m);
      for (i = _i = 1; _i <= 12; i = _i += 1) {
        if (this.pieces["p" + num + "p" + i].back) {
          pp = this.createBitmap("p" + num + "p" + i + "b", "p" + num + "p" + i + "back", this.pieces["p" + num + "p" + i].x, this.pieces["p" + num + "p" + i].y);
        } else {
          pp = this.createBitmap("p" + num + "p" + i, "p" + num + "p" + i, this.pieces["p" + num + "p" + i].x, this.pieces["p" + num + "p" + i].y);
        }
        this.addToLibrary(pp);
        puzzle.addChild(pp);
      }
      dragpieces = new createjs.Container();
      dragpieces.x = stageSize.w / 2;
      dragpieces.y = 270;
      dragpieces.name = 'dragpieces';
      index = 0;
      for (i = _j = 1; _j <= 12; i = _j += 1) {
        if (this.pieces["p" + num + "p" + i].back) {
          dpp = new Draggable("dp" + num + "p" + i, this.preload.getResult("p" + num + "p" + i), "p" + num + "p" + i, index * 176, 0);
          dpp.addEventListener('drop', this.evaluateAnswer);
          this.observer.subscribe('init_drag', dpp.onInitEvaluation);
          this.observer.subscribe('stop_drag', dpp.onStopEvaluation);
          dpp.scaleX = dpp.scaleY = 0.6;
          index++;
          this.addToLibrary(dpp);
          dragpieces.addChild(dpp);
        }
      }
      dragpieces.width = index * 176;
      this.setReg(dragpieces, dragpieces.width / 2, 0);
      this.addToMain(puzzle);
      this.addToMain(dragpieces);
      TweenLite.from(puzzle, 1, {
        alpha: 0,
        y: puzzle.y - 40,
        delay: 0.6
      });
      return TweenLite.from(dragpieces, 1, {
        alpha: 0,
        y: puzzle.y - 40,
        delay: 0.6,
        onComplete: this.initDrag
      });
    };

    U6A1.prototype.initDrag = function() {
      return this.observer.notify('init_drag');
    };

    U6A1.prototype.initListeners = function() {
      this.library.btntrue.addEventListener('click', this.evaluateLocation);
      return this.library.btnfalse.addEventListener('click', this.evaluateLocation);
    };

    U6A1.prototype.stopListeners = function() {
      this.library.btntrue.removeEventListener('click', this.evaluateLocation);
      return this.library.btnfalse.removeEventListener('click', this.evaluateLocation);
    };

    U6A1.prototype.evaluateAnswer = function(e) {
      var hit, hpt, htt, pt;
      this.answer = e.target;
      hit = this.library[this.answer.index + 'b'];
      pt = hit.globalToLocal(this.stage.mouseX, this.stage.mouseY);
      if (hit.hitTest(pt.x, pt.y)) {
        hpt = hit.parent.localToGlobal(hit.x, hit.y);
        htt = this.answer.parent.globalToLocal(hpt.x, hpt.y);
        this.insertText('dropper', this.pieces[this.answer.index].text, '48px Quicksand', '#333', stageSize.w / 2, 1020, 'center');
        createjs.Sound.play('bell');
        this.observer.notify('stop_drag');
        this.answer.putInPlace(htt);
        this.answer.removeAllEventListeners();
        return this.initListeners();
      } else {
        return this.answer.returnToPlace(this.answer.alpha, this.answer.scaleX, this.answer.scaleY);
      }
    };

    U6A1.prototype.evaluateLocation = function(e) {
      var name;
      name = e.target.parent.name;
      console.log(name, "btn" + this.pieces[this.answer.index].label);
      if (name === ("btn" + this.pieces[this.answer.index].label)) {
        this.stopListeners();
        createjs.Sound.play('good');
        this.library['score'].plusOne();
        return setTimeout(this.finishEvaluation, 1 * 1000);
      } else {
        this.warning();
        return setTimeout(this.finishEvaluation, 1 * 1000);
      }
    };

    U6A1.prototype.finishEvaluation = function() {
      return TweenLite.to(this.library['dropper'], 0.5, {
        alpha: 0,
        y: stageSize.h,
        ease: Quart.easeOut,
        onComplete: this.nextEvaluation
      });
    };

    U6A1.prototype.nextEvaluation = function() {
      this.index++;
      if (this.index < this.answers) {
        return this.initDrag();
      } else {
        return this.finish();
      }
    };

    U6A1.prototype.blink = function(obj, state) {
      if (state == null) {
        state = true;
      }
      TweenMax.killTweensOf(obj);
      obj.alpha = 1;
      if (state) {
        return TweenMax.to(obj, 0.5, {
          alpha: .5,
          repeat: -1,
          yoyo: true
        });
      }
    };

    U6A1.prototype.finish = function() {
      TweenLite.to(this.library.dragpieces, 1, {
        alpha: 0,
        y: this.y - 40
      });
      TweenLite.to(this.library.puzzle, 1, {
        alpha: 0,
        y: this.y - 40
      });
      TweenMax.to([this.library.p1, this.library.p2, this.library.btntrue, this.library.btnfalse], 1, {
        alpha: 0,
        y: stageSize.h
      });
      return U6A1.__super__.finish.apply(this, arguments);
    };

    window.U6A1 = U6A1;

    return U6A1;

  })(Oda);

}).call(this);
