class U2A6 extends Oda
	constructor: ->
		manifest = [
			{id: 'head', src: 'pleca1.png'}
			{id: 'inst', src: 'inst.png'}
			{id: 'c1', src: 'circle1.png'}
			{id: 'c2', src: 'circle2.png'}
			{id:'background', src: 'background.png'}
    		{id:'bucket', src: 'bucket.png'}
    		{id:'raindrop', src: 'raindrop.png'}
    		{id:'level1Btn', src: 'level1-btn.png'}
    		{id:'level2Btn', src: 'level2-btn.png'}
   			{id:'level3Btn', src: 'level3-btn.png'}
		]
		sounds = [
			{src:'sounds/TU2_U2_A6_instructions.mp3', id:'instructions'}
			{src:'sounds/boing.mp3', id:'boing'}
		    {src:'sounds/good.mp3', id:'good'}
		    {src:'sounds/wrong.mp3', id:'wrong'}
		]
		@counter =
			0: 'zero' 
			1: 'one'
			2: 'two'
			3: 'three'
			4: 'four'
			5: 'five'
			6: 'six'
			7: 'seven'
			8: 'eight'
			9: 'nine'
			10: 'ten'
			11: 'eleven'
			12: 'twelve'
			13: 'thirteen'
			14: 'fourteen'
			15: 'fifteen'
			16: 'sixteen'
			17: 'seventeen'
			18: 'eighteen'
			19: 'nineteen'
			20: 'twenty'
			30: 'thirty'
			40: 'forty'
			50: 'fifty'
			60: 'sixty'
			70: 'seventy'
			80: 'eighty'
			90: 'ninety'
			100: "one\r\nhundred"
		super null, manifest, sounds
	setStage: ->
		super
		@buckets = [
			{x:264, y:984, a: on}
			{x:464, y:932, a: on}
			{x:664, y:984, a: on}
			{x:864, y:932, a: on}
			{x:1064, y:984, a: on}
			{x:1264, y:932, a: on}
		]
		@random = []
		count = 0
		box = new createjs.Container()
		box.set {x: 0, y: 0, name: 'box'}

		while count < 6
			rand = Math.round Math.random() * 100
			@random.push rand
			count++
		
		@insertBitmap 'background', 'background', 0, 50
		@insertBitmap 'header', 'head', stageSize.w / 2, 0, 'tc'
		@insertInstructions 'instructions', ['Race the clock! Drag the numerals to the number words.'], 80, 200
		l1 = new Button 'l1', (@preload.getResult 'level1Btn'), 0, 1462, 872
		l2 = new Button 'l2', (@preload.getResult 'level2Btn'), 0, 1462, 966
		l3 = new Button 'l3', (@preload.getResult 'level3Btn'), 0, 1462, 1060
		@addToMain l1, l2, l3
		
		for i in [0..5] by 1
			c = new createjs.Container()
			n = @bucketName @random[i]
			t = new createjs.Text "#{n}", '32px Quicksand', '#FF0000'
			b = @createBitmap "bmp#{i}", 'bucket', 0, 0
			s = new createjs.Shape()
			s.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, b.getBounds().width, b.getBounds().height)
			t.set {textAlign: 'center', x: b.width / 2, y: b.height / 2}
			c.set {name: "b#{i}", index: @random[i], x: @buckets[i].x, y: @buckets[i].y, width: b.getBounds().width, height: b.getBounds().height, shape: s}
			#t.x = b.width / 2 - t.getMeasuredWidth() / 2 + 20
			c.addChild b, t, s
			@addToLibrary c
			box.addChild c
			
		@addToMain box
		@addToMain new Score 'score', (@preload.getResult 'c1'), (@preload.getResult 'c2'), 40, 1000, 90, 0
		@introEvaluation()
	bucketName: (num) ->
		strnum = ""+num
		name = switch strnum.length
			when 1
				@counter[strnum]
			when 2
				@buildName strnum
			when 3
				@counter[strnum]
	buildName: (strnum) ->
		d = (Math.floor strnum / 10) * 10 
		u = strnum % 10
		if u is 0
			@counter[d]
		else if strnum < 20
			@counter[strnum]
		else
			@counter[d] + "\r\n" + @counter[u]
	introEvaluation: ->
		super
		TweenLite.from @library['header'], 1, {y:-@library['header'].height}
		TweenLite.from @library['instructions'], 1, {alpha :0, x: 0, delay: 1}
		TweenLite.from @library['box'], 1, {alpha:0, y:stageSize.h, delay:2, onComplete: @playInstructions, onCompleteParams: [@]}
		TweenMax.from [@library['l1'], @library['l2'], @library['l3']], 1, {alpha:0, y:stageSize.h, delay:3}
	initEvaluation: (e) =>
		super
		for i in [1..3] by 1
			@blink @library["l#{i}"]
			@library["l#{i}"].addEventListener 'click', @selectLevel
	selectLevel: (e) =>
		for i in [1..3] by 1
			@blink @library["l#{i}"], off
			@library["l#{i}"].removeEventListener 'click', @selectLevel

		switch e.target.name
			when 'l1'
				@initRaindrops 1, 1500
			when 'l2'
				@initRaindrops 2, 1000
			when 'l3'
				@initRaindrops 3, 500
	initRaindrops: (level, interval) ->
		@raindrops = new createjs.Container()
		@raindrops.name = 'raindrops'
		@level = level
		@rnum = 0
		@time = 90
		@timer = setInterval @updateCounter, 1000
		@rinterval = setInterval @makeRaindropr, interval
		@binterval = setInterval @makeRaindropb, 2000
		@addToMain @raindrops
	updateCounter: =>
		@time--
		@library['score'].updateTotal @time
		@finish() if @time is 0
	makeRaindropr: =>
		rand = Math.round Math.random() * 100
		@makeRaindrop rand
	makeRaindropb: =>
		rbase = Math.round Math.random() * 5
		@makeRaindrop @random[rbase]
	makeRaindrop: (num) =>
		d = new Draggable 'd' + @rnum, @preload.getResult('raindrop'), num, Math.random() * (1400 - 200) + 200, @library['header'].height
		t = new createjs.Text "#{num}", '32px Quicksand', '#000099'
		t.textAlign = 'center'
		t.x = d.width / 2
		t.y = d.height / 2
		d.addChild t
		@raindrops.addChild d
		
		d.addEventListener 'drop', @evaluateAnswer
		d.initDragListener()
		@rnum++

		switch @level
			when 1
				TweenLite.to d, 9, {y: 780, ease: Linear.easeNone, onComplete: @killThis, onCompleteParams: [d]}
			when 2
				TweenLite.to d, 7, {y: 780, ease: Linear.easeNone, onComplete: @killThis, onCompleteParams: [d]}
			when 3
				TweenLite.to d, 5, {y: 780, ease: Linear.easeNone, onComplete: @killThis, onCompleteParams: [d]}
	killThis: (object) =>
		TweenLite.killTweensOf object
		@raindrops.removeChild object
	evaluateAnswer: (e) =>
		@answer = e.target
		dropped = off
		for i in [0..5] by 1
			hit = @library["b#{i}"]
			pt = hit.shape.globalToLocal @stage.mouseX, @stage.mouseY
			if (hit.shape.hitTest pt.x, pt.y) 
				if hit.index is @answer.index
					hpp = hit.parent.localToGlobal hit.x + hit.width / 2 - 60, hit.y + hit.height / 2 - 60
					app = @answer.parent.globalToLocal hpp.x, hpp.y
					@buckets[i].a = off
					dropped = on
					@answer.putInPlace app
					@library['score'].plusOne()
					createjs.Sound.play 'good'
					setTimeout @finishEvaluation, 2 * 1000
				else
					createjs.Sound.play 'wrong'
		@answer.takeMeOut() if not dropped
	finishEvaluation: =>
		@nextEvaluation()
	nextEvaluation: =>
		complete = on
		for i in [0..5] by 1
			if @buckets[i].a is on
				complete = off
		@finish() if complete
	blink: (obj, state = on) ->
		TweenMax.killTweensOf obj
		obj.alpha = 1
		TweenMax.to obj, 0.5, {alpha:.5, repeat:-1, yoyo:true}  if state
	finish: ->
		clearInterval @timer
		clearInterval @rinterval
		clearInterval @binterval
		TweenLite.to [@library['background'], @library['box'], @library['raindrops']], 0.5, {alpha:0}
		TweenMax.to [@library['l1'], @library['l2'], @library['l3']], 1, {alpha:0, y:stageSize.h}
		super
	window.U2A6 = U2A6