(function() {
  var U3A2,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  U3A2 = (function(_super) {
    __extends(U3A2, _super);

    function U3A2() {
      this.nextEvaluation = __bind(this.nextEvaluation, this);
      this.finishEvaluation = __bind(this.finishEvaluation, this);
      this.evaluateAnswer = __bind(this.evaluateAnswer, this);
      this.evaluateClick = __bind(this.evaluateClick, this);
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
          id: 'guia1',
          src: 'guia1.png'
        }, {
          id: 'guia2',
          src: 'guia2.png'
        }, {
          id: 'guia3',
          src: 'guia3.png'
        }, {
          id: 'btnNoHeDoesnt',
          src: 'btn_NoHeDoesnt.png'
        }, {
          id: 'btnNoSheDoesnt',
          src: 'btn_NoSheDoesnt.png'
        }, {
          id: 'btnNoTheyDont',
          src: 'btn_NoTheyDont.png'
        }, {
          id: 'btnYesHeDoes',
          src: 'btn_YesHeDoes.png'
        }, {
          id: 'btnYesSheDoes',
          src: 'btn_YesSheDoes.png'
        }, {
          id: 'btnYesTheyDo',
          src: 'btn_YesTheyDo.png'
        }, {
          id: 'mattno',
          src: 'matt_no.png'
        }, {
          id: 'mattyes',
          src: 'matt_yes.png'
        }, {
          id: 'patno',
          src: 'pat_no.png'
        }, {
          id: 'patyes',
          src: 'pat_yes.png'
        }, {
          id: 'labelmatt',
          src: 'label_matt.png'
        }, {
          id: 'labelpat',
          src: 'label_pat.png'
        }, {
          id: 'lineastable1',
          src: 'lineas-table1.png'
        }, {
          id: 'lineastable2',
          src: 'lineas-table2.png'
        }, {
          id: 'lineastable3',
          src: 'lineas-table3.png'
        }, {
          id: 'table1foodmattno',
          src: 'table1/food_matt_no.png'
        }, {
          id: 'table1foodmattyes',
          src: 'table1/food_matt_yes.png'
        }, {
          id: 'table1foodpatno',
          src: 'table1/food_pat_no.png'
        }, {
          id: 'table1foodpatyes',
          src: 'table1/food_pat_yes.png'
        }, {
          id: 'table2foodmattno',
          src: 'table2/food_matt_no.png'
        }, {
          id: 'table2foodmattyes',
          src: 'table2/food_matt_yes.png'
        }, {
          id: 'table2foodpatno',
          src: 'table2/food_pat_no.png'
        }, {
          id: 'table2foodpatyes',
          src: 'table2/food_pat_yes.png'
        }, {
          id: 'table3foodmattno',
          src: 'table3/food_matt_no.png'
        }, {
          id: 'table3foodmattyes',
          src: 'table3/food_matt_yes.png'
        }, {
          id: 'table3foodpatno',
          src: 'table3/food_pat_no.png'
        }, {
          id: 'table3foodpatyes',
          src: 'table3/food_pat_yes.png'
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
          src: 'sounds/TU2_U3_A2_instructions.mp3',
          id: 'instructions'
        }, {
          src: 'sounds/wrong.mp3',
          id: 'wrong'
        }
      ];
      this.game = {
        common: [
          {
            id: 'mattno',
            x: 1212,
            y: 232
          }, {
            id: 'mattyes',
            x: 928,
            y: 242
          }, {
            id: 'patno',
            x: 548,
            y: 248
          }, {
            id: 'patyes',
            x: 254,
            y: 246
          }, {
            id: 'labelmatt',
            x: 1138,
            y: 466
          }, {
            id: 'labelpat',
            x: 470,
            y: 466
          }
        ],
        buttons: [
          {
            id: 'btnYesTheyDo',
            x: 332,
            y: 970
          }, {
            id: 'btnYesHeDoes',
            x: 722,
            y: 970
          }, {
            id: 'btnYesSheDoes',
            x: 1110,
            y: 970
          }, {
            id: 'btnNoTheyDont',
            x: 332,
            y: 1078
          }, {
            id: 'btnNoHeDoesnt',
            x: 722,
            y: 1078
          }, {
            id: 'btnNoSheDoesnt',
            x: 1110,
            y: 1078
          }
        ],
        m1: [
          {
            id: 'lineastable1',
            x: 300,
            y: 490
          }, {
            id: 'table1foodmattno',
            x: 1188,
            y: 570
          }, {
            id: 'table1foodmattyes',
            x: 848,
            y: 588
          }, {
            id: 'table1foodpatno',
            x: 530,
            y: 638
          }, {
            id: 'table1foodpatyes',
            x: 168,
            y: 612
          }
        ],
        m2: [
          {
            id: 'lineastable2',
            x: 364,
            y: 432
          }, {
            id: 'table2foodmattyes',
            x: 862,
            y: 620
          }, {
            id: 'table2foodmattno',
            x: 1224,
            y: 614
          }, {
            id: 'table2foodpatno',
            x: 568,
            y: 626
          }, {
            id: 'table2foodpatyes',
            x: 162,
            y: 640
          }
        ],
        m3: [
          {
            id: 'lineastable3',
            x: 326,
            y: 454
          }, {
            id: 'table3foodpatyes',
            x: 192,
            y: 622
          }, {
            id: 'table3foodmattno',
            x: 1258,
            y: 666
          }, {
            id: 'table3foodmattyes',
            x: 894,
            y: 622
          }, {
            id: 'table3foodpatno',
            x: 510,
            y: 654
          }
        ]
      };
      this.answers = [
        {
          values: [
            {
              text: 'Does Pat like salad?',
              index: 6
            }, {
              text: 'Does Matt like beets?',
              index: 5
            }, {
              text: 'Do Pat and Matt like beets?',
              index: 4
            }, {
              text: 'Does Pat like corn?',
              index: 3
            }, {
              text: 'Do Pat and Matt like steak?',
              index: 1
            }, {
              text: 'Does Matt like salad?',
              index: 2
            }
          ]
        }, {
          values: [
            {
              text: 'Does Pat like pineapple?',
              index: 6
            }, {
              text: 'Does Pat like ham?',
              index: 3
            }, {
              text: 'Does Matt like grapes?',
              index: 5
            }, {
              text: 'Do Matt and Pat like ham?',
              index: 1
            }, {
              text: 'Does Matt like eggs?',
              index: 5
            }, {
              text: 'Does Pat like grapes?',
              index: 3
            }
          ]
        }, {
          values: [
            {
              text: 'Do Matt and Pat like milk?',
              index: 1
            }, {
              text: 'Does Matt like cherries?',
              index: 2
            }, {
              text: 'Does Matt like cheese?',
              index: 5
            }, {
              text: 'Does Pat like milk?',
              index: 3
            }, {
              text: 'Does Pat like cherries?',
              index: 6
            }, {
              text: 'Do Matt and Pat like cucumbers?',
              index: 4
            }
          ]
        }
      ];
      U3A2.__super__.constructor.call(this, null, manifest, sounds);
    }

    U3A2.prototype.setStage = function() {
      U3A2.__super__.setStage.apply(this, arguments);
      this.insertBitmap('header', 'head', stageSize.w / 2, 0, 'tc');
      this.insertInstructions('instructions', ['Read, follow the lines and click on the correct answer.'], 80, 200);
      this.addToMain(new Score('score', this.preload.getResult('c1'), this.preload.getResult('c2'), 40, 1000, 18, 0));
      return this.setCommon().setMenu(1).introEvaluation();
    };

    U3A2.prototype.setCommon = function() {
      var common, i, v, value, _i, _j, _len, _ref, _ref1;
      common = new createjs.Container();
      common.name = 'common';
      _ref = this.game.common;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        v = this.createBitmap(value.id, value.id, value.x, value.y);
        common.addChild(v);
        this.addToLibrary(v);
      }
      for (i = _j = 1, _ref1 = this.game.buttons.length; _j <= _ref1; i = _j += 1) {
        value = this.game.buttons[i - 1];
        v = new Button("b" + i, this.preload.getResult(value.id), 0, value.x, value.y);
        common.addChild(v);
        this.addToLibrary(v);
      }
      this.phrase = new createjs.Text('', '40px Arial', '#333333');
      this.phrase.name = 'phrase';
      this.phrase.textAlign = 'center';
      this.phrase.x = stageSize.w / 2;
      this.phrase.y = 880;
      this.addToMain(common, this.phrase);
      return this;
    };

    U3A2.prototype.setMenu = function(num) {
      var menu, v, value, _i, _len, _ref;
      menu = new createjs.Container();
      menu.name = 'menu';
      _ref = this.game["m" + num];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        value = _ref[_i];
        v = this.createBitmap(value.id, value.id, value.x, value.y);
        menu.addChild(v);
        this.addToLibrary(v);
      }
      this.addToMain(menu);
      return this;
    };

    U3A2.prototype.introEvaluation = function() {
      U3A2.__super__.introEvaluation.apply(this, arguments);
      TweenLite.from(this.library['header'], 1, {
        y: -this.library['header'].height
      });
      TweenLite.from(this.library['instructions'], 1, {
        alpha: 0,
        x: 0,
        delay: 1
      });
      TweenLite.from(this.library['common'], 1, {
        alpha: 0,
        y: this.library['common'].y - 40,
        delay: 2
      });
      return TweenLite.from(this.library['menu'], 1, {
        alpha: 0,
        y: this.library['menu'].y - 40,
        delay: 3,
        onComplete: this.playInstructions,
        onCompleteParams: [this]
      });
    };

    U3A2.prototype.initEvaluation = function(e) {
      var i, _i, _ref;
      U3A2.__super__.initEvaluation.apply(this, arguments);
      this.a_index = 0;
      this.phrase.text = this.answers[this.index].values[this.a_index].text;
      for (i = _i = 1, _ref = this.game.buttons.length; _i <= _ref; i = _i += 1) {
        this.library["b" + i].index = i;
        this.library["b" + i].addEventListener('click', this.evaluateClick);
      }
      return TweenLite.from(this.library['phrase'], 1, {
        alpha: 0
      });
    };

    U3A2.prototype.evaluateClick = function(e) {
      this.answer = e.target;
      if (this.answer.index === this.answers[this.index].values[this.a_index].index) {
        this.library['score'].plusOne();
        createjs.Sound.play('good');
      } else {
        this.warning();
      }
      return TweenLite.to(this.library['phrase'], 1, {
        alpha: 0,
        onComplete: this.evaluateAnswer
      });
    };

    U3A2.prototype.evaluateAnswer = function() {
      this.a_index++;
      if (this.a_index < this.answers[this.index].values.length) {
        this.phrase.text = this.answers[this.index].values[this.a_index].text;
        return TweenLite.to(this.library['phrase'], 1, {
          alpha: 1
        });
      } else {
        return setTimeout(this.finishEvaluation, 1 * 1000);
      }
    };

    U3A2.prototype.finishEvaluation = function() {
      return TweenLite.to(this.library['menu'], 1, {
        alpha: 0,
        y: this.library['menu'].y - 40,
        ease: Back.easeOut,
        onComplete: this.nextEvaluation
      });
    };

    U3A2.prototype.nextEvaluation = function() {
      this.index++;
      if (this.index < this.answers.length) {
        this.a_index = 0;
        this.phrase.text = this.answers[this.index].values[this.a_index].text;
        this.setMenu(this.index + 1);
        TweenLite.to(this.library['phrase'], 1, {
          alpha: 1
        });
        return TweenLite.to(this.library['menu'], 1, {
          alpha: 1,
          y: 0
        });
      } else {
        return this.finish();
      }
    };

    U3A2.prototype.finish = function() {
      TweenLite.to(this.library['common'], 1, {
        alpha: 0,
        y: this.library['common'].y - 40
      });
      TweenLite.to(this.library['menu'], 1, {
        alpha: 0,
        y: this.library['menu'].y - 40
      });
      return U3A2.__super__.finish.apply(this, arguments);
    };

    window.U3A2 = U3A2;

    return U3A2;

  })(Oda);

}).call(this);
