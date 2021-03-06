(function() {
  var U1A4,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U1A4 = (function(_super) {
    __extends(U1A4, _super);

    function U1A4() {
      this.repeat = __bind(this.repeat, this);
      this.showPhrase = __bind(this.showPhrase, this);
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
          id: 'c1',
          src: 'circle1.png'
        }, {
          id: 'c2',
          src: 'circle2.png'
        }, {
          id: 'teacher',
          src: 'teacher.png'
        }, {
          id: 'repeat',
          src: 'repeat_btn.png'
        }, {
          id: 'arrive',
          src: 'arrive_time.png'
        }, {
          id: 'quiet',
          src: 'be_quiet.png'
        }, {
          id: 'bus',
          src: 'bus_late.png'
        }, {
          id: 'eat',
          src: 'eat_class.png'
        }, {
          id: 'aud',
          src: 'run_aud.png'
        }, {
          id: 'run',
          src: 'run_hall.png'
        }, {
          id: 'cafe',
          src: 'trash_cafeteria.png'
        }, {
          id: 'library',
          src: 'talk_library.png'
        }, {
          id: 'movies',
          src: 'watch_movies.png'
        }, {
          id: 'trash',
          src: 'throw_trash.png'
        }, {
          id: 'walk',
          src: 'walk_hall.png'
        }
      ];
      sounds = [
        {
          src: 'sounds/TU2_U1_A4_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/boing.mp3',
          id: 'boing'
        }, {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/TU2_U1_A4_arriveClass.mp3',
          id: 'sarrive'
        }, {
          src: 'sounds/TU2_U1_A4_beQuiet.mp3',
          id: 'squiet'
        }, {
          src: 'sounds/TU2_U1_A4_dontBeLate.mp3',
          id: 'sbus'
        }, {
          src: 'sounds/TU2_U1_A4_dontEat.mp3',
          id: 'seat'
        }, {
          src: 'sounds/TU2_U1_A4_dontRunAuditorium.mp3',
          id: 'saud'
        }, {
          src: 'sounds/TU2_U1_A4_dontRunHall.mp3',
          id: 'srun'
        }, {
          src: 'sounds/TU2_U1_A4_keepCafe.mp3',
          id: 'scafe'
        }, {
          src: 'sounds/TU2_U1_A4_sitQuietly.mp3',
          id: 'smovies'
        }, {
          src: 'sounds/TU2_U1_A4_talkQuietly.mp3',
          id: 'slibrary'
        }, {
          src: 'sounds/TU2_U1_A4_throwAway.mp3',
          id: 'strash'
        }, {
          src: 'sounds/TU2_U1_A4_walkHall.mp3',
          id: 'swalk'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.game = {
        answers: [
          {
            id: 'arrive',
            a: false
          }, {
            id: 'quiet',
            a: false
          }, {
            id: 'bus',
            a: false
          }, {
            id: 'eat',
            a: false
          }, {
            id: 'aud',
            a: false
          }, {
            id: 'run',
            a: false
          }, {
            id: 'cafe',
            a: false
          }, {
            id: 'library',
            a: false
          }, {
            id: 'movies',
            a: false
          }, {
            id: 'trash',
            a: false
          }, {
            id: 'walk',
            a: false
          }
        ]
      };
      U1A4.__super__.constructor.call(this, null, manifest, sounds);
    }

    U1A4.prototype.setStage = function() {
      var answer, choose1, choose2, repeat, shape1, shape2, sprite1, sprite2, _i, _len, _ref;
      U1A4.__super__.setStage.apply(this, arguments);
      this.answers = this.game.answers.slice(0);
      _ref = this.answers;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        answer = _ref[_i];
        answer.a = false;
      }
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', ['Listen and click on the correct picture.'], 80, 200);
      this.insertBitmap('teacher', 'teacher', 500, 268);
      repeat = new Button('repeat', this.preload.getResult('repeat'), 0, 882, 420);
      sprite1 = this.createSprite('choose1', ['arrive', 'quiet', 'bus', 'eat', 'aud', 'run', 'cafe', 'library', 'movies', 'trash', 'walk'], {
        arrive: 0,
        quiet: 1,
        bus: 2,
        eat: 3,
        aud: 4,
        run: 5,
        cafe: 6,
        library: 7,
        movies: 8,
        trash: 9,
        walk: 10
      }, 0, 0);
      sprite1.mouseEnabled = false;
      shape1 = new createjs.Shape();
      shape1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, sprite1.getBounds().width, sprite1.getBounds().height);
      choose1 = new createjs.Container();
      choose1.set({
        name: 'choose1',
        x: 540,
        y: 904,
        sprite: sprite1
      });
      this.setReg(choose1, sprite1.getBounds().width / 2, sprite1.getBounds().height / 2);
      choose1.addChild(sprite1, shape1);
      sprite2 = this.createSprite('choose2', ['arrive', 'quiet', 'bus', 'eat', 'aud', 'run', 'cafe', 'library', 'movies', 'trash', 'walk'], {
        arrive: 0,
        quiet: 1,
        bus: 2,
        eat: 3,
        aud: 4,
        run: 5,
        cafe: 6,
        library: 7,
        movies: 8,
        trash: 9,
        walk: 10
      }, 0, 0);
      sprite2.mouseEnabled = false;
      shape2 = new createjs.Shape();
      shape2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, sprite2.getBounds().width, sprite2.getBounds().height);
      choose2 = new createjs.Container();
      choose2.set({
        name: 'choose2',
        x: 1182,
        y: 904,
        sprite: sprite2
      });
      this.setReg(choose2, sprite2.getBounds().width / 2, sprite2.getBounds().height / 2);
      choose2.addChild(sprite2, shape2);
      this.addToMain(repeat, choose1, choose2);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 10, 0));
      return this.introEvaluation();
    };

    U1A4.prototype.introEvaluation = function() {
      U1A4.__super__.introEvaluation.apply(this, arguments);
      this.library['choose1'].alpha = 0;
      this.library['choose1'].scaleX = this.library['choose1'].scaleY = 0.6;
      this.library['choose2'].alpha = 0;
      this.library['choose2'].scaleX = this.library['choose2'].scaleY = 0.6;
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 0.5
      });
      TweenLite.from(this.library['teacher'], 1, {
        alpha: 0,
        y: this.library['teacher'].y + 100,
        delay: 1
      });
      return TweenLite.from(this.library['repeat'], 1, {
        alpha: 0,
        y: this.library['repeat'].y + 100,
        delay: 1,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
    };

    U1A4.prototype.initEvaluation = function(e) {
      U1A4.__super__.initEvaluation.apply(this, arguments);
      this.showPhrase();
      return this.library['repeat'].addEventListener('click', this.repeat);
    };

    U1A4.prototype.evaluateAnswer = function(e) {
      var selection;
      this.answer = e.target.parent.sprite;
      selection = this.answers.where({
        id: this.phrase.id
      });
      selection[0].a = true;
      if (this.phrase.id === this.answer.currentAnimation) {
        createjs.Sound.play('good');
        this.library['score'].plusOne();
        this.library['choose1'].removeEventListener('click', this.evaluateAnswer);
        this.library['choose2'].removeEventListener('click', this.evaluateAnswer);
        return setTimeout(this.finishEvaluation, 1 * 1000);
      } else {
        TweenMax.to([this.library['choose1'], this.library['choose2']], 1, {
          alpha: 0,
          scaleX: 0.6,
          scaleY: 0.6,
          ease: Elastic.easeOut,
          onComplete: this.finishEvaluation
        });
        return this.warning();
      }
    };

    U1A4.prototype.finishEvaluation = function() {
      return TweenMax.to([this.library['choose1'], this.library['choose2']], 1, {
        alpha: 0,
        scaleX: 0.6,
        scaleY: 0.6,
        ease: Elastic.easeOut,
        onComplete: this.nextEvaluation
      });
    };

    U1A4.prototype.nextEvaluation = function() {
      this.index++;
      if (this.index < this.answers.length - 1) {
        return this.showPhrase();
      } else {
        return this.finish();
      }
    };

    U1A4.prototype.showPhrase = function() {
      var fake, other, others, rand,
        _this = this;
      rand = Math.random() > 0.5 ? 1 : 2;
      other = rand === 1 ? 2 : 1;
      this.phrase = this.getPhrase();
      others = this.answers.filter(function(answer) {
        return answer.id !== _this.phrase.id;
      });
      fake = Math.floor(Math.random() * others.length);
      this.library["choose" + rand].sprite.gotoAndStop(this.phrase.id);
      this.library["choose" + other].sprite.gotoAndStop(others[fake].id);
      this.library['choose1'].addEventListener('click', this.evaluateAnswer);
      this.library['choose2'].addEventListener('click', this.evaluateAnswer);
      createjs.Sound.play("s" + this.phrase.id);
      return TweenMax.to([this.library['choose1'], this.library['choose2']], 1, {
        alpha: 1,
        scaleX: 1,
        scaleY: 1,
        ease: Elastic.easeOut
      });
    };

    U1A4.prototype.getPhrase = function() {
      var id, possible;
      possible = this.answers.filter(function(answer) {
        return answer.a === false;
      });
      id = Math.floor(Math.random() * possible.length);
      return possible[id];
    };

    U1A4.prototype.repeat = function(e) {
      createjs.Sound.stop();
      return createjs.Sound.play("s" + this.phrase.id);
    };

    U1A4.prototype.shuffle = function(a) {
      var i, j, _i, _ref, _ref1, _results;
      _results = [];
      for (i = _i = _ref = a.length; _ref <= 1 ? _i <= 1 : _i >= 1; i = _ref <= 1 ? ++_i : --_i) {
        j = Math.floor(Math.random() * (i + 1));
        _results.push((_ref1 = [a[j], a[i]], a[i] = _ref1[0], a[j] = _ref1[1], _ref1));
      }
      return _results;
    };

    U1A4.prototype.blink = function(obj, state) {
      if (state == null) {
        state = true;
      }
      TweenMax.killTweensOf(obj);
      obj.alpha = 1;
      if (state) {
        return TweenMax.to(obj, 0.5, {
          alpha: 0.5,
          repeat: -1,
          yoyo: true
        });
      }
    };

    U1A4.prototype.finish = function() {
      TweenLite.to(this.library['teacher'], 1, {
        alpha: 0,
        y: this.library['teacher'].y + 100,
        delay: 0.1
      });
      TweenLite.to(this.library['repeat'], 1, {
        alpha: 0,
        y: this.library['repeat'].y + 100,
        delay: 0.1
      });
      return U1A4.__super__.finish.apply(this, arguments);
    };

    window.U1A4 = U1A4;

    return U1A4;

  })(Oda);

}).call(this);
