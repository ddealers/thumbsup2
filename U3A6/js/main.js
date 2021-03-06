(function() {
  var U3A6,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U3A6 = (function(_super) {
    __extends(U3A6, _super);

    function U3A6() {
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
          id: 'ch01',
          src: 'chango0001.png'
        }, {
          id: 'ch02',
          src: 'chango0002.png'
        }, {
          id: 'ch03',
          src: 'chango0003.png'
        }, {
          id: 'ch04',
          src: 'chango0004.png'
        }, {
          id: 'ch05',
          src: 'chango0005.png'
        }, {
          id: 'ch06',
          src: 'chango0006.png'
        }, {
          id: 'ch07',
          src: 'chango0007.png'
        }, {
          id: 'ch08',
          src: 'chango0008.png'
        }, {
          id: 'ch09',
          src: 'chango0009.png'
        }, {
          id: 'ch10',
          src: 'chango0010.png'
        }, {
          id: 'ch11',
          src: 'chango0011.png'
        }, {
          id: 'ch12',
          src: 'chango0012.png'
        }, {
          id: 'ch13',
          src: 'chango0013.png'
        }, {
          id: 'ch14',
          src: 'chango0014.png'
        }, {
          id: 'ch15',
          src: 'chango0015.png'
        }, {
          id: 'ch16',
          src: 'chango0016.png'
        }, {
          id: 'bubble1',
          src: 'bubble1.png'
        }, {
          id: 'bubble2',
          src: 'bubble2.png'
        }, {
          id: 'aLetra',
          src: 'a.png'
        }, {
          id: 'bLetra',
          src: 'b.png'
        }, {
          id: 'cLetra',
          src: 'c.png'
        }, {
          id: 'dLetra',
          src: 'd.png'
        }, {
          id: 'eLetra',
          src: 'e.png'
        }, {
          id: 'fLetra',
          src: 'f.png'
        }, {
          id: 'gLetra',
          src: 'g.png'
        }, {
          id: 'hLetra',
          src: 'h.png'
        }, {
          id: 'iLetra',
          src: 'i.png'
        }, {
          id: 'jLetra',
          src: 'j.png'
        }, {
          id: 'kLetra',
          src: 'k.png'
        }, {
          id: 'lLetra',
          src: 'l.png'
        }, {
          id: 'mLetra',
          src: 'm.png'
        }, {
          id: 'nLetra',
          src: 'n.png'
        }, {
          id: 'oLetra',
          src: 'o.png'
        }, {
          id: 'pLetra',
          src: 'p.png'
        }, {
          id: 'qLetra',
          src: 'q.png'
        }, {
          id: 'rLetra',
          src: 'r.png'
        }, {
          id: 'sLetra',
          src: 's.png'
        }, {
          id: 'tLetra',
          src: 't.png'
        }, {
          id: 'uLetra',
          src: 'u.png'
        }, {
          id: 'vLetra',
          src: 'v.png'
        }, {
          id: 'wLetra',
          src: 'w.png'
        }, {
          id: 'xLetra',
          src: 'x.png'
        }, {
          id: 'yLetra',
          src: 'y.png'
        }, {
          id: 'zLetra',
          src: 'z.png'
        }, {
          id: 'applepie',
          src: 'apple-pie.png'
        }, {
          id: 'bananas',
          src: 'bananas.png'
        }, {
          id: 'bread',
          src: 'bread.png'
        }, {
          id: 'breakfast',
          src: 'breakfast.png'
        }, {
          id: 'broccoli',
          src: 'broccoli.png'
        }, {
          id: 'cheese',
          src: 'cheese.png'
        }, {
          id: 'cherries',
          src: 'cherries.png'
        }, {
          id: 'chicken',
          src: 'chicken.png'
        }, {
          id: 'chocolatecake',
          src: 'chocolate-cake.png'
        }, {
          id: 'cookies',
          src: 'cookies.png'
        }, {
          id: 'cutthefruit',
          src: 'cut-the-fruit.png'
        }, {
          id: 'dessert',
          src: 'dessert.png'
        }, {
          id: 'dinner',
          src: 'dinner.png'
        }, {
          id: 'grapefruit',
          src: 'grapefruit.png'
        }, {
          id: 'grapes',
          src: 'grapes.png'
        }, {
          id: 'icecream',
          src: 'ice-cream.png'
        }, {
          id: 'lunch',
          src: 'lunch.png'
        }, {
          id: 'mashedpotatoes',
          src: 'mashed-potatoes.png'
        }, {
          id: 'mixthefruit',
          src: 'mix-the-fruit.png'
        }, {
          id: 'orangejuice',
          src: 'orange-juice.png'
        }, {
          id: 'pancakes',
          src: 'pancakes.png'
        }, {
          id: 'pasta',
          src: 'pasta.png'
        }, {
          id: 'peach',
          src: 'peach.png'
        }, {
          id: 'peas',
          src: 'peas.png'
        }, {
          id: 'pineapple',
          src: 'pineapple.png'
        }, {
          id: 'salad',
          src: 'salad.png'
        }, {
          id: 'spinach',
          src: 'spinach.png'
        }, {
          id: 'tomato',
          src: 'tomato.png'
        }, {
          id: 'turkey',
          src: 'turkey.png'
        }, {
          id: 'washthefruit',
          src: 'wash-the-fruit.png'
        }, {
          id: 'washyourhands',
          src: 'wash-your-hands.png'
        }, {
          id: 'yogurt',
          src: 'yogurt.png'
        }
      ];
      this.abc = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
      sounds = [
        {
          src: 'sounds/boing.mp3',
          id: 'boing'
        }, {
          src: 'sounds/good.mp3',
          id: 'good'
        }, {
          src: 'sounds/TU2_U3_A6_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.game = {
        answers: [
          {
            t: 'apple pie',
            i: 'applepie'
          }, {
            t: 'bananas',
            i: 'bananas'
          }, {
            t: 'bread',
            i: 'bread'
          }, {
            t: 'breakfast',
            i: 'breakfast'
          }, {
            t: 'broccoli',
            i: 'broccoli'
          }, {
            t: 'cheese',
            i: 'cheese'
          }, {
            t: 'cherries',
            i: 'cherries'
          }, {
            t: 'chicken',
            i: 'chicken'
          }, {
            t: 'chocolate cake',
            i: 'chocolatecake'
          }, {
            t: 'cookies',
            i: 'cookies'
          }, {
            t: 'cut the fruit',
            i: 'cutthefruit'
          }, {
            t: 'dessert',
            i: 'dessert'
          }, {
            t: 'dinner',
            i: 'dinner'
          }, {
            t: 'grapefruit',
            i: 'grapefruit'
          }, {
            t: 'grapes',
            i: 'grapes'
          }, {
            t: 'ice cream',
            i: 'icecream'
          }, {
            t: 'lunch',
            i: 'lunch'
          }, {
            t: 'mashed potatoes',
            i: 'mashedpotatoes'
          }, {
            t: 'mix the fruit',
            i: 'mixthefruit'
          }, {
            t: 'orange juice',
            i: 'orangejuice'
          }, {
            t: 'pancakes',
            i: 'pancakes'
          }, {
            t: 'pasta',
            i: 'pasta'
          }, {
            t: 'peach',
            i: 'peach'
          }, {
            t: 'peas',
            i: 'peas'
          }, {
            t: 'pineapple',
            i: 'pineapple'
          }, {
            t: 'salad',
            i: 'salad'
          }, {
            t: 'spinach',
            i: 'spinach'
          }, {
            t: 'tomato',
            i: 'tomato'
          }, {
            t: 'turkey',
            i: 'turkey'
          }, {
            t: 'wash the fruit',
            i: 'washthefruit'
          }, {
            t: 'wash your hands',
            i: 'washyourhands'
          }, {
            t: 'yogurt',
            i: 'yogurt'
          }
        ]
      };
      U3A6.__super__.constructor.call(this, null, manifest, sounds);
    }

    U3A6.prototype.setStage = function() {
      U3A6.__super__.setStage.apply(this, arguments);
      this.answers = this.shuffleNoRepeat(this.game.answers, 10);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', ['Click on the letters and guess the word before George is complete.'], 80, 200);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 10, 0));
      return this.setChango().createAlphabet().introEvaluation();
    };

    U3A6.prototype.setChango = function() {
      var burbuja;
      this.insertSprite('chango', ['ch01', 'ch02', 'ch03', 'ch04', 'ch05', 'ch06', 'ch07', 'ch08', 'ch09', 'ch10', 'ch11', 'ch12', 'ch13', 'ch14'], null, 1098, 300, 'tl');
      burbuja = new createjs.Container();
      burbuja.name = 'burbuja';
      burbuja.y = 298;
      burbuja.x = 1100;
      this.addToMain(burbuja);
      return this;
    };

    U3A6.prototype.createAlphabet = function() {
      var alphabet, i, letter, letterObj, _i, _ref;
      alphabet = new createjs.Container();
      alphabet.x = 250;
      alphabet.y = 880;
      alphabet.name = 'alphabet';
      for (i = _i = 0, _ref = this.abc.length - 1; _i <= _ref; i = _i += 1) {
        letter = this.abc[i];
        if (i <= 9) {
          letterObj = new ClickableLetter("l" + i, letter, letter, 83 * i, 0);
        } else if (i <= 18) {
          letterObj = new ClickableLetter("l" + i, letter, letter, 83 * i - 790, 68);
        } else {
          letterObj = new ClickableLetter("l" + i, letter, letter, 83 * i - 1450, 136);
        }
        letterObj.text.font = '40px Quicksand';
        this.addToLibrary(letterObj);
        alphabet.addChild(letterObj);
      }
      this.addToMain(alphabet);
      return this;
    };

    U3A6.prototype.introEvaluation = function() {
      U3A6.__super__.introEvaluation.apply(this, arguments);
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 1
      });
      TweenLite.from(this.library['chango'], 1, {
        alpha: 0,
        x: this.library['chango'].x + 100,
        ease: Quart.easeOut,
        delay: 2
      });
      return TweenMax.from(this.library['alphabet'], 1, {
        alpha: 0,
        y: stageSize.h,
        delay: 2,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
    };

    U3A6.prototype.initEvaluation = function(e) {
      var comidas, i, imagen, wc, word, wordContainers, _i, _j, _ref, _ref1;
      U3A6.__super__.initEvaluation.apply(this, arguments);
      word = this.answers[this.index].t;
      this.col = word.split('');
      comidas = new createjs.Container();
      comidas.name = 'comidas';
      comidas.y = 500;
      comidas.x = 600;
      imagen = this.createBitmap(this.answers[this.index].i, this.answers[this.index].i, 0, 0, 'mc');
      imagen.scaleX = imagen.scaleY = 0.8;
      comidas.addChild(imagen);
      wordContainers = new createjs.Container();
      wordContainers.name = 'wordContainers';
      wordContainers.y = 800;
      wordContainers.x = (this.library['alphabet'].x + 314) - this.col.length * 60 / 2;
      for (i = _i = 0, _ref = this.abc.length - 1; 0 <= _ref ? _i <= _ref : _i >= _ref; i = 0 <= _ref ? ++_i : --_i) {
        this.library["l" + i].addEventListener('click', this.evaluateAnswer);
      }
      for (i = _j = 1, _ref1 = this.col.length; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 1 <= _ref1 ? ++_j : --_j) {
        if (this.col[i - 1] !== ' ') {
          wc = new WordContainer("w" + i, '', '#fff', '#0098d7', 60 * i, 0, 52, 52);
          wc.index = this.col[i - 1];
          this.addToLibrary(wc);
          wordContainers.addChild(wc);
        }
      }
      this.addToMain(wordContainers);
      return this.addToMain(comidas);
    };

    U3A6.prototype.evaluateAnswer = function(e) {
      var b, check, complete, current, i, wc, _i, _j, _ref, _ref1;
      this.answer = e.currentTarget;
      this.answer.visible = false;
      check = false;
      complete = true;
      for (i = _i = 1, _ref = this.col.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        if (this.col[i - 1] !== ' ') {
          if (this.answer.index === this.library["w" + i].index) {
            this.library["w" + i].changeText(this.answer.index);
            check = true;
            console.log('letra');
          }
        }
      }
      if (!check) {
        current = this.library.chango.currentFrame;
        current++;
        if (this.library.chango.currentFrame === this.library.chango.spriteSheet.getNumFrames() - 1) {
          current--;
          b = this.createBitmap('bubble2', 'bubble2', 0, 0);
          this.library.burbuja.addChild(b);
          this.library.chango.gotoAndStop(current);
          createjs.Sound.play('wrong');
          setTimeout(this.finishEvaluation, 3 * 1000);
          console.log('perdiste');
          return;
        } else {
          this.library.chango.gotoAndStop(current);
        }
      }
      for (i = _j = 1, _ref1 = this.col.length; 1 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 1 <= _ref1 ? ++_j : --_j) {
        if (this.col[i - 1] !== ' ') {
          wc = this.library["w" + i];
          if (wc.text.text !== wc.index) {
            complete = false;
          }
        }
      }
      if (complete) {
        b = this.createBitmap('bubble1', 'bubble1', 0, 0);
        this.library.burbuja.addChild(b);
        this.library['score'].plusOne();
        createjs.Sound.play('good');
        setTimeout(this.finishEvaluation, 3 * 1000);
        return console.log('ganaste');
      }
    };

    U3A6.prototype.finishEvaluation = function() {
      var i, _i, _ref, _results;
      TweenLite.to(this.library['comidas'], 0.5, {
        alpha: 0,
        ease: Back.easeOut
      });
      _results = [];
      for (i = _i = 1, _ref = this.col.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        if (this.col[i] !== ' ') {
          _results.push(TweenLite.to(this.library['wordContainers'], 0.5, {
            alpha: 0,
            ease: Back.easeOut,
            onComplete: this.nextEvaluation
          }));
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    U3A6.prototype.nextEvaluation = function() {
      var i, imagen, wc, word, _i, _j, _k, _ref, _ref1, _ref2;
      for (i = _i = 1, _ref = this.col.length; 1 <= _ref ? _i <= _ref : _i >= _ref; i = 1 <= _ref ? ++_i : --_i) {
        if (this.col[i] !== ' ') {
          TweenLite.to(this.library['wordContainers'], 0.5, {
            alpha: 0,
            ease: Back.easeOut,
            onComplete: this.nextEvaluation
          });
        }
      }
      TweenLite.to(this.library['comidas'], 0.5, {
        alpha: 0,
        ease: Back.easeOut
      });
      this.index++;
      if (this.index < this.answers.length) {
        word = this.answers[this.index].t;
        this.col = word.split('');
        this.library.comidas.removeAllChildren();
        this.library.burbuja.removeAllChildren();
        this.library.chango.gotoAndStop(0);
        imagen = this.createBitmap(this.answers[this.index].i, this.answers[this.index].i, 0, 0, 'mc');
        imagen.scaleX = imagen.scaleY = 0.8;
        this.library.comidas.addChild(imagen);
        this.library.wordContainers.removeAllChildren();
        this.library.wordContainers.x = (this.library['alphabet'].x + 354) - this.col.length * 60 / 2;
        for (i = _j = 0, _ref1 = this.abc.length - 1; 0 <= _ref1 ? _j <= _ref1 : _j >= _ref1; i = 0 <= _ref1 ? ++_j : --_j) {
          this.library["l" + i].visible = true;
        }
        for (i = _k = 1, _ref2 = this.col.length; 1 <= _ref2 ? _k <= _ref2 : _k >= _ref2; i = 1 <= _ref2 ? ++_k : --_k) {
          if (this.col[i - 1] !== ' ') {
            wc = new WordContainer("w" + i, '', '#fff', '#0098d7', 60 * i, 0, 52, 52);
            wc.index = this.col[i - 1];
            this.addToLibrary(wc);
            this.library.wordContainers.addChild(wc);
          }
        }
        TweenLite.to(this.library.wordContainers, 0.5, {
          alpha: 1,
          ease: Quart.easeOut
        });
        return TweenLite.to(this.library.comidas, 0.5, {
          alpha: 1,
          ease: Quart.easeOut
        });
      } else {
        return this.finish();
      }
    };

    U3A6.prototype.finish = function() {
      TweenLite.to(this.library.wordContainers, 0.5, {
        alpha: 0,
        ease: Quart.easeOut
      });
      TweenLite.to(this.library.alphabet, 1, {
        alpha: 0,
        ease: Quart.easeOut
      });
      TweenLite.to(this.library.chango, 1, {
        alpha: 0,
        ease: Quart.easeOut
      });
      TweenLite.to(this.library.comidas, 0.5, {
        alpha: 0,
        ease: Quart.easeOut
      });
      TweenLite.to(this.library.burbuja, 0.5, {
        alpha: 0,
        ease: Quart.easeOut
      });
      return U3A6.__super__.finish.apply(this, arguments);
    };

    window.U3A6 = U3A6;

    return U3A6;

  })(Oda);

}).call(this);
