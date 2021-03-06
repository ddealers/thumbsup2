class U8A1 extends Oda
	constructor: ->
		manifest = [
			{id: 'head', src: 'pleca1.png'}
			{id: 'inst', src: 'inst.png'}
			{id: 'c1', src: 'circle1.png'}
			{id: 'c2', src: 'circle2.png'}
			{id: 'repeatbtn', src: 'repeat-btn.png'}
			{id: 'playagain', src:'play_again.png'}
			{id: 'startgame', src:'start_game.png'}
 			{id:'carta1', src:'carta1.png'}
			{id:'carta2', src:'carta2.png'}
			{id:'carta3', src:'carta3.png'}
			{id:'game1btn', src:'game1_btn.png'}
			{id:'game2btn', src:'game2_btn.png'}
			{id:'game3btn', src:'game3_btn.png'}

			{id:'game1Box', src:'game1/box.png'}
			{id:'game1Chopsticks', src:'game1/chopsticks.png'}
			{id:'game1Chopsticks2', src:'game1/chopsticks2.png'}
			{id:'game1Cookie', src:'game1/cookie.png'}
			{id:'game1Doll', src:'game1/doll.png'}
			{id:'game1Doll2', src:'game1/doll2.png'}
			{id:'game1Fan', src:'game1/fan.png'}
			{id:'game1Fan2', src:'game1/fan2.png'}
			{id:'game1Fourtunecookie', src:'game1/cookie2.png'}
			{id:'game1Mask', src:'game1/mask.png'}
			{id:'game1Mask2', src:'game1/mask2.png'}
			{id:'game1Necklace2', src:'game1/necklace2.png'}
			{id:'game1Puppet', src:'game1/puppet.png'}
			{id:'game1Box2', src:'game1/treasure-box.png'}
			{id:'game1Puppet2', src:'game1/wooden-puppet.png'}
			{id:'game1Necklace', src:'game1/necklace.png'}
			
			{id:'game2Australia2', src:'game2/australia2.png'}
			{id:'game2Australia', src:'game2/australia.png'}
			{id:'game2Brazil', src:'game2/brazil.png'}
			{id:'game2Brazil2', src:'game2/brazil2.png'}
			{id:'game2Canada2', src:'game2/canada2.png'}
			{id:'game2Canada', src:'game2/canada.png'}
			{id:'game2China2', src:'game2/china2.png'}
			{id:'game2China', src:'game2/china.png'}
			{id:'game2France2', src:'game2/france2.png'}
			{id:'game2France', src:'game2/france.png'}
			{id:'game2Germany2', src:'game2/germany2.png'}
			{id:'game2Germany', src:'game2/germany.png'}
			{id:'game2India2', src:'game2/india2.png'}
			{id:'game2India', src:'game2/india.png'}
			{id:'game2Mexico', src:'game2/mexico.png'}
			{id:'game2Mexico2', src:'game2/mexico2.png'}
			
			{id:'game3035', src:'game3/0-35.png'}
			{id:'game3050', src:'game3/0-50.png'}
			{id:'game3n1160', src:'game3/11-60.png'}
			{id:'game3n1340', src:'game3/13-40.png'}
			{id:'game3n1600', src:'game3/16-00.png'}
			{id:'game3n2150', src:'game3/21-50.png'}
			{id:'game3n2510', src:'game3/25-10.png'}
			{id:'game3n3210', src:'game3/32-10.png'}
			{id:'game3Evelendollarsandsixtycents', src:'game3/evelen-dollars-and-sixty-cents.png'}
			{id:'game3Fidtycents', src:'game3/fidty-cents.png'}
			{id:'game3Sixteendollars', src:'game3/sixteen-dollars.png'}
			{id:'game3Thirteendollarsandfortycents', src:'game3/thirteen-dollars-and-forty-cents.png'}
			{id:'game3Thirtyfivecents', src:'game3/thirty-five-cents.png'}
			{id:'game3Thirtytwodollarsandten', src:'game3/thirty-two-dollars-and-ten-cents.png'}
			{id:'game3Twentyfivedollarsandtencent', src:'game3/twenty-five-dollars-and-ten-cent.png'}
			{id:'game3Twentyonedollarsandfiftycents', src:'game3/twenty-one-dollars-and-fifty-cents.png'}
		]
		sounds = [
			{src:'sounds/good.mp3', id:'good'}
		    {src:'sounds/TU2_U8_A1_instructions.mp3', id:'instructions'}
		    {src:'sounds/wrong.mp3', id:'wrong'}
		]
		@game = [
			[
				{id:'game1Box', i:1}
				{id:'game1Chopsticks', i:2}
				{id:'game1Cookie', i:3}
				{id:'game1Doll', i:4}
				{id:'game1Fan', i:5}
				{id:'game1Mask', i:6}
				{id:'game1Puppet', i:7}
				{id:'game1Necklace', i:8}
				{id:'game1Box2', i:1}
				{id:'game1Chopsticks2', i:2}
				{id:'game1Fourtunecookie', i:3}
				{id:'game1Doll2', i:4}
				{id:'game1Fan2', i:5}
				{id:'game1Mask2', i:6}
				{id:'game1Puppet2', i:7}
				{id:'game1Necklace2', i:8}
			]
			[
				{id:'game2Australia', i:1}
				{id:'game2Brazil', i:2}
				{id:'game2Canada', i:3}
				{id:'game2China', i:4}
				{id:'game2France', i:5}
				{id:'game2Germany', i:6}
				{id:'game2India', i:7}
				{id:'game2Mexico', i:8}
				{id:'game2Australia2', i:1}
				{id:'game2Brazil2', i:2}
				{id:'game2Canada2', i:3}
				{id:'game2China2', i:4}
				{id:'game2France2', i:5}
				{id:'game2Germany2', i:6}
				{id:'game2India2', i:7}
				{id:'game2Mexico2', i:8}
			]
			[
				{id:'game3035', i:1}
				{id:'game3050', i:2}
				{id:'game3n1160', i:3}
				{id:'game3n1340', i:4}
				{id:'game3n1600', i:5}
				{id:'game3n2150', i:6}
				{id:'game3n2510', i:7}
				{id:'game3n3210', i:8}
				{id:'game3Evelendollarsandsixtycents', i:3}
				{id:'game3Fidtycents', i:2}
				{id:'game3Sixteendollars', i:5}
				{id:'game3Thirteendollarsandfortycents', i:4}
				{id:'game3Thirtyfivecents', i:1}
				{id:'game3Thirtytwodollarsandten', i:8}
				{id:'game3Twentyfivedollarsandtencent', i:7}
				{id:'game3Twentyonedollarsandfiftycents', i:6}
			]
		]
		super null, manifest, sounds
	setStage: ->
		super
		@insertBitmap 'header', 'head', stageSize.w / 2, 0, 'tc'
		@insertInstructions 'instructions', ['Click on two cards and see if they match.'], 80, 200
		b1 = new Button 'game1btn', (@preload.getResult 'game1btn'), 1, 1506, 920
		b2 = new Button 'game2btn', (@preload.getResult 'game2btn'), 2, 1506, 1010
		b3 = new Button 'game3btn', (@preload.getResult 'game3btn'), 3, 1506, 1100	
		@addToMain b1, b2, b3
		@addToMain new Score 'score', (@preload.getResult 'c1'), (@preload.getResult 'c2'), 40, 1000, 100, 0
		@clicked = 0
		@introEvaluation()
	setCards: (e) =>
		@time = 100
		@timer = setInterval @updateCounter, 1000
		j = 0
		game = e.currentTarget.index
		juego = new createjs.Container()
		juego.x = 400
		juego.y = 360
		juego.name = 'juego'
		@clearButtons()
		@selected = new Array()
		@cards = @shuffle @game[game - 1]
		for h in [0..3]
			for i in [0..3]

				b = @createBitmap "cartab#{game}", @cards[j].id, i * 260, h * 220, 'mc'

				carta = new createjs.Container()
				c = @createBitmap "carta#{game}", "carta#{game}", i * 260, h * 220, 'mc'

				shape = new createjs.Shape()
				shape.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(c.x - (c.getBounds().width) / 2, c.y - (c.getBounds().height) / 2, c.getBounds().width, c.getBounds().height)
				carta.index = @cards[j].i
				shape.addEventListener 'click', @evaluateAnswer
				carta.addChild c, shape

				juego.addChild b, carta
				@addToLibrary b, c, shape

				j++
		@addToMain juego
		TweenLite.from juego, 0.5, {alpha:0, y:juego.y - 40}
		@
	updateCounter: =>
		if @clicked is 1
			@time--
			@library['score'].updateTotal @time
			@finish() if @time is 0
	introEvaluation: ->
		super
		TweenLite.from @library.header, 1, {y:-@library.header.height}
		TweenLite.from @library.instructions, 1, {alpha :0, x: 0, delay: 1}
		TweenLite.from [@library.game1btn, @library.game2btn, @library.game3btn], 1, {alpha: 0, delay: 2, onComplete: @playInstructions, onCompleteParams: [@]}
	initEvaluation: (e) =>
		super
		@library.game1btn.blink()
		@library.game2btn.blink()
		@library.game3btn.blink()
		@library.game1btn.addEventListener 'click', @setCards
		@library.game2btn.addEventListener 'click', @setCards
		@library.game3btn.addEventListener 'click', @setCards
	clearButtons: ->
		@library.game1btn.blink off
		@library.game2btn.blink off
		@library.game3btn.blink off
		@library.game1btn.removeEventListener 'click', @setCards
		@library.game2btn.removeEventListener 'click', @setCards
		@library.game3btn.removeEventListener 'click', @setCards
	evaluateAnswer: (e) =>
		@clicked = 1
		if @selected.length < 2
			@selected.push e.target.parent
			TweenLite.to e.target.parent, 0.5, {alpha:0}
		if @selected.length is 2
			setTimeout @finishEvaluation, 1 * 1000
	finishEvaluation: =>
		if @selected[0].index is @selected[1].index
			@nextEvaluation()
		else
			TweenLite.to @selected[0], 0.5, {alpha:1}
			TweenLite.to @selected[1], 0.5, {alpha:1}
			@selected = new Array()
			#@warning()
	nextEvaluation: =>
		@index++
		@library.score.plusOne()
		if @index < @cards.length / 2
			@selected = new Array()
			createjs.Sound.play 'good'
		else
			@finish()
	finish: ->
		clearInterval @timer

		TweenLite.to [@library.game1btn, @library.game2btn, @library.game3btn], 1, {alpha: 0}
		TweenLite.to @library.juego, 1, {alpha:0, y:@library.juego.y - 40}
		super
	window.U8A1 = U8A1