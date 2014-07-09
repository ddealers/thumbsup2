class U2A3 extends Oda
	constructor: ->
		manifest = [
			{id: 'head', src: 'pleca1.png'}
			{id: 'inst', src: 'inst.png'}
			{id: 'c1', src: 'circle1.png'}
			{id: 'c2', src: 'circle2.png'}
			{id: 'above', src: 'above-btn.png'}
		    {id: 'behind', src: 'behind-btn.png'}
		    {id: 'in', src: 'in-btn.png'}
		    {id: 'next', src: 'next-btn.png'}
		    {id: 'on', src: 'on-btn.png'}
		    {id: 'under', src: 'under-btn.png'}
		    {id: 'p1', src: 'p1-btn.png'}
		    {id: 'p2', src: 'p2-btn.png'}
		    {id: 'p3', src: 'p3-btn.png'}
		    {id: 'm1', src: 'marco-1.png'}
		    {id: 'm2', src: 'marco-2.png'}
		    {id: 'm3', src: 'marco-3.png'}
		    {id: 'p1p1', src: 'puzzle1-1.png'}
		    {id: 'p1p1back', src: 'puzzle1-1-back.png'}
		    {id: 'p1p2', src: 'puzzle1-2.png'}
		    {id: 'p1p2back', src: 'puzzle1-2-back.png'}
		    {id: 'p1p3', src: 'puzzle1-3.png'}
		    {id: 'p1p3back', src: 'puzzle1-3-back.png'}
		    {id: 'p1p4', src: 'puzzle1-4.png'}
		    {id: 'p1p4back', src: 'puzzle1-4-back.png'}
		    {id: 'p1p5', src: 'puzzle1-5.png'}
		    {id: 'p1p5back', src: 'puzzle1-5-back.png'}
		    {id: 'p1p6', src: 'puzzle1-6.png'}
		    {id: 'p1p6back', src: 'puzzle1-6-back.png'}
		    {id: 'p1p7', src: 'puzzle1-7.png'}
		    {id: 'p1p7back', src: 'puzzle1-7-back.png'}
		    {id: 'p1p8', src: 'puzzle1-8.png'}
		    {id: 'p1p8back', src: 'puzzle1-8-back.png'}
		    {id: 'p1p9', src: 'puzzle1-9.png'}
		    {id: 'p1p9back', src: 'puzzle1-9-back.png'}
		    {id: 'p1p10', src: 'puzzle1-10.png'}
		    {id: 'p1p10back', src: 'puzzle1-10-back.png'}
		    {id: 'p1p11', src: 'puzzle1-11.png'}
		    {id: 'p1p11back', src: 'puzzle1-11-back.png'}
		    {id: 'p1p12', src: 'puzzle1-12.png'}
		    {id: 'p1p12back', src: 'puzzle1-12-back.png'}
		    {id: 'p2p1', src: 'puzzle2-1.png'}
		    {id: 'p2p1back', src: 'puzzle2-1-back.png'}
		    {id: 'p2p2', src: 'puzzle2-2.png'}
		    {id: 'p2p2back', src: 'puzzle2-2-back.png'}
		    {id: 'p2p3', src: 'puzzle2-3.png'}
		    {id: 'p2p3back', src: 'puzzle2-3-back.png'}
		    {id: 'p2p4', src: 'puzzle2-4.png'}
		    {id: 'p2p4back', src: 'puzzle2-4-back.png'}
		    {id: 'p2p5', src: 'puzzle2-5.png'}
		    {id: 'p2p5back', src: 'puzzle2-5-back.png'}
		    {id: 'p2p6', src: 'puzzle2-6.png'}
		    {id: 'p2p6back', src: 'puzzle2-6-back.png'}
		    {id: 'p2p7', src: 'puzzle2-7.png'}
		    {id: 'p2p7back', src: 'puzzle2-7-back.png'}
		    {id: 'p2p8', src: 'puzzle2-8.png'}
		    {id: 'p2p8back', src: 'puzzle2-8-back.png'}
		    {id: 'p2p9', src: 'puzzle2-9.png'}
		    {id: 'p2p9back', src: 'puzzle2-9-back.png'}
		    {id: 'p2p10', src: 'puzzle2-10.png'}
		    {id: 'p2p10back', src: 'puzzle2-10-back.png'}
		    {id: 'p2p11', src: 'puzzle2-11.png'}
		    {id: 'p2p11back', src: 'puzzle2-11-back.png'}
		    {id: 'p2p12', src: 'puzzle2-12.png'}
		    {id: 'p2p12back', src: 'puzzle2-12-back.png'}
		    {id: 'p3p1', src: 'puzzle3-1.png'}
		    {id: 'p3p1back', src: 'puzzle3-1-back.png'}
		    {id: 'p3p2', src: 'puzzle3-2.png'}
		    {id: 'p3p2back', src: 'puzzle3-2-back.png'}
		    {id: 'p3p3', src: 'puzzle3-3.png'}
		    {id: 'p3p3back', src: 'puzzle3-3-back.png'}
		    {id: 'p3p4', src: 'puzzle3-4.png'}
		    {id: 'p3p4back', src: 'puzzle3-4-back.png'}
		    {id: 'p3p5', src: 'puzzle3-5.png'}
		    {id: 'p3p5back', src: 'puzzle3-5-back.png'}
		    {id: 'p3p6', src: 'puzzle3-6.png'}
		    {id: 'p3p6back', src: 'puzzle3-6-back.png'}
		    {id: 'p3p7', src: 'puzzle3-7.png'}
		    {id: 'p3p7back', src: 'puzzle3-7-back.png'}
		    {id: 'p3p8', src: 'puzzle3-8.png'}
		    {id: 'p3p8back', src: 'puzzle3-8-back.png'}
		    {id: 'p3p9', src: 'puzzle3-9.png'}
		    {id: 'p3p9back', src: 'puzzle3-9-back.png'}
		    {id: 'p3p10', src: 'puzzle3-10.png'}
		    {id: 'p3p10back', src: 'puzzle3-10-back.png'}
		    {id: 'p3p11', src: 'puzzle3-11.png'}
		    {id: 'p3p11back', src: 'puzzle3-11-back.png'}
		    {id: 'p3p12', src: 'puzzle3-12.png'}
		    {id: 'p3p12back', src: 'puzzle3-12-back.png'}
		]
		sounds = [
			{src:'sounds/TU2_U2_A3_instructions.mp3', id:'instructions'}
			{src:'sounds/boing.mp3', id:'boing'}
		    {src:'sounds/good.mp3', id:'good'}
		    {src:'sounds/wrong.mp3', id:'wrong'}
		]
		super null, manifest, sounds
	setStage: ->
		super
		@insertBitmap 'header', 'head', stageSize.w / 2, 0, 'tc'
		@insertInstructions 'instructions', ['Drag the puzzle pieces, read and click on the correct answers.'], 80, 200
		p1 = new Button 'p1', (@preload.getResult 'p1'), 0, 1462, 872
		p2 = new Button 'p2', (@preload.getResult 'p2'), 0, 1462, 966
		p3 = new Button 'p3', (@preload.getResult 'p3'), 0, 1462, 1060
		@addToMain p1, p2, p3
		@addToMain new Score 'score', (@preload.getResult 'c1'), (@preload.getResult 'c2'), 40, 1000, 8, 0
		@introEvaluation()
	introEvaluation: ->
		super
		TweenLite.from @library['header'], 1, {y:-@library['header'].height}
		TweenLite.from @library['instructions'], 1, {alpha :0, x: 0, delay: 1, onComplete: @playInstructions, onCompleteParams: [@]}
		TweenMax.from [@library['p1'], @library['p2'], @library['p3']], 1, {alpha:0, y:stageSize.h, delay:2}
	initEvaluation: (e) =>
		super
		for i in [1..3] by 1
			@blink @library['p'+i]
			@library['p'+i].addEventListener 'click', @selectPuzzle
	selectPuzzle: (e) =>
		for i in [1..3] by 1
			@blink @library["p#{i}"], off
			@library['p'+i].removeEventListener 'click', @selectPuzzle

		behind = new Button 'behind', (@preload.getResult 'behind'), 0, 236, 580
		inbtn = new Button 'in', (@preload.getResult 'in'), 0, 236, 694
		under = new Button 'under', (@preload.getResult 'under'), 0, 236, 808
		next = new Button 'next', (@preload.getResult 'next'), 0, 1256, 586
		onbtn = new Button 'on', (@preload.getResult 'on'), 0, 1256, 700
		above = new Button 'above', (@preload.getResult 'above'), 0, 1256, 814
		@addToMain behind, inbtn, under, next, onbtn, above
		switch e.target.name
			when 'p1'
				@pieces =
					p1p1: {x: 20, y: 20, texta:'The picture is',textb:'the fridge.', label:'above', back: on}
					p1p2: {x: 166, y: 20}
					p1p3: {x: 357, y: 20, texta:'The cat is',textb:'the flowers.', label:'next to', back: on}
					p1p4: {x: 20, y: 136}
					p1p5: {x: 164, y: 160, texta:'The apples are',textb:'the sink.', label:'in', back: on}
					p1p6: {x: 350, y: 160}
					p1p7: {x: 20, y: 300, texta:'The broom is',textb:'the fridge.', label:'next to', back: on}
					p1p8: {x: 154, y: 266, texta:'The fruit is',textb:'the table.', label:'on', back: on}
					p1p9: {x: 350, y: 270, texta:'The cake is',textb:'the oven.', label:'in', back: on}
					p1p10: {x: 20, y: 404, texta:'The mouse is',textb:'the chair.', label:'behind', back: on}
					p1p11: {x: 166, y: 406, texta:'The puppy is',textb:'the table.', label:'under', back: on}
					p1p12: {x: 360, y: 416}
				@answers = 8
				@setPuzzle 1
			when 'p2'
				@pieces =
					p2p1: {x: 77, y: 14, texta:'The picture is',textb:'the wall.', label:'on', back: on}
					p2p2: {x: 218, y: 14, texta:'The clock is',textb:'the window.', label:'above', back: on}
					p2p3: {x: 410, y: 14, texta:'The plant is',textb:'the bookcase.', label:'on', back: on}
					p2p4: {x: 77, y: 122, texta:'The lamp is',textb:'the sofa.', label:'next to', back: on}
					p2p5: {x: 218, y: 144}
					p2p6: {x: 405, y: 144, texta:'The books are',textb:'the bookcase.', label:'in', back: on}
					p2p7: {x: 77, y: 274, texta:'The boy is',textb:'the armchair.', label:'behind', back: on}
					p2p8: {x: 208, y: 245, texta:'The doll is',textb:'the sofa.', label:'on', back: on}
					p2p9: {x: 404, y: 248}
					p2p10: {x: 76, y: 376}
					p2p11: {x: 222, y: 374, texta:'The dog is',textb:'the table.', label:'under', back: on}
					p2p12: {x: 418, y: 385}
				@answers = 8
				@setPuzzle 2
			when 'p3'
				@pieces =
					p3p1: {x: 30, y: 24}
					p3p2: {x: 208, y: 24}
					p3p3: {x: 348, y: 24, texta:'The boots are',textb:'the teddy bear.', label:'next to', back: on}
					p3p4: {x: 536, y: 24}
					p3p5: {x: 30, y: 178, texta:'The picture is',textb:'the bed.', label:'above', back: on}
					p3p6: {x: 210, y: 178, texta:'The brown cat is',textb:'the bed.', label:'on', back: on}
					p3p7: {x: 346, y: 178, texta:'The dress is',textb:'the closet.', label:'in', back: on}
					p3p8: {x: 526, y: 178, texta:'The pencil case is',textb:'the dresser.', label:'on', back: on}
					p3p9: {x: 30, y: 340, texta:'The mouse is',textb:'the bed.', label:'behind', back: on}
					p3p10: {x: 176, y: 340, texta:'The white cat is',textb:'the bed.', label:'under', back: on}
					p3p11: {x: 384, y: 340}
					p3p12: {x: 524, y: 340, texta:'The schoolbag is',textb:'the dresser.', label:'next to', back: on}
				@answers = 8
				@setPuzzle 3

		TweenLite.from @library['behind'], 1, {alpha:0, y:@library['behind'].y - 40}
		TweenLite.from @library['in'], 1, {alpha:0, y:@library['in'].y - 40, delay: 0.2}
		TweenLite.from @library['under'], 1, {alpha:0, y:@library['under'].y - 40, delay: 0.4}
		TweenLite.from @library['next'], 1, {alpha:0, y:@library['next'].y - 40}
		TweenLite.from @library['on'], 1, {alpha:0, y:@library['on'].y - 40, delay: 0.2}
		TweenLite.from @library['above'], 1, {alpha:0, y:@library['above'].y - 40, delay: 0.4}
	setPuzzle: (num) ->
		@num = num
		puzzle = new createjs.Container()
		puzzle.x = switch num
			when 1 then 520
			when 2 then 480
			when 3 then 440
		puzzle.y = 460
		puzzle.name = 'puzzle'

		m = @createBitmap "m#{num}", "m#{num}", 0, 0
		puzzle.addChild m
		
		for i in [1..12] by 1
			if @pieces["p#{num}p#{i}"].back
				pp = new createjs.Container()
				pp.set {name: "p#{num}p#{i}b", x: @pieces["p#{num}p#{i}"].x, y: @pieces["p#{num}p#{i}"].y}
				bmp = @createBitmap "p#{num}p#{i}b", "p#{num}p#{i}back", 0, 0
				bmp.mouseEnabled = false

				shapebmp = new createjs.Shape()
				shapebmp.graphics.beginFill('rgba(255,255,255,0.01)').drawRect(0,0, bmp.getBounds().width, bmp.getBounds().height)
				shapebmp.name = "p#{num}p#{i}shape"
				@addToLibrary shapebmp

				shape = new createjs.Shape()
				shape.graphics.beginFill('rgba(255,255,255,0.0)').drawRect(-pp.x - puzzle.x, -pp.y - puzzle.y, stageSize.w, stageSize.h)
				pp.addChild bmp, shapebmp, shape
				pp.mouseChildren = false
			else
				pp = @createBitmap "p#{num}p#{i}", "p#{num}p#{i}", @pieces["p#{num}p#{i}"].x, @pieces["p#{num}p#{i}"].y
			
			@addToLibrary pp
			puzzle.addChild pp

		dragpieces = new createjs.Container()
		dragpieces.x = stageSize.w / 2
		dragpieces.y = 380
		dragpieces.name = 'dragpieces'
		index = 0
		@drops = []
		for i in [1..12] by 1
			predpp = @preload.getResult("p#{num}p#{i}")
			dpp = new Draggable "dp#{num}p#{i}", @preload.getResult("p#{num}p#{i}"), "p#{num}p#{i}", index * 176, 0 
			dpp.y = dpp.y - predpp.height / 2
			dpp.pos.y = dpp.y
			dpp.addEventListener 'drop', @evaluateAnswer
			@observer.subscribe 'init_drag', dpp.onInitEvaluation
			@observer.subscribe 'stop_drag', dpp.onStopEvaluation
			dpp.scaleX = dpp.scaleY = 0.6
			@addToLibrary dpp
			@drops.push dpp
				
			if @pieces["p#{num}p#{i}"].back
				index++
				dragpieces.addChild dpp
				
		dragpieces.width = index * 176
		@setReg(dragpieces, dragpieces.width / 2, 0)
		
		console.log @drops
		@addToMain puzzle
		@addToMain dragpieces

		TweenLite.from puzzle, 1, {alpha:0, y:puzzle.y - 40, delay: 0.6}
		TweenLite.from dragpieces, 1, {alpha:0, y:puzzle.y - 40, delay: 0.6, onComplete: @initDrag}
	initDrag: =>
		@observer.notify 'init_drag'
	initListeners: ->
		@library['behind'].addEventListener 'click', @evaluateLocation
		@library['in'].addEventListener 'click', @evaluateLocation
		@library['under'].addEventListener 'click', @evaluateLocation
		@library['next'].addEventListener 'click', @evaluateLocation
		@library['on'].addEventListener 'click', @evaluateLocation
		@library['above'].addEventListener 'click', @evaluateLocation
	stopListeners: ->
		@library['behind'].removeEventListener 'click', @evaluateLocation
		@library['in'].removeEventListener 'click', @evaluateLocation
		@library['under'].removeEventListener 'click', @evaluateLocation
		@library['next'].removeEventListener 'click', @evaluateLocation
		@library['on'].removeEventListener 'click', @evaluateLocation
		@library['above'].removeEventListener 'click', @evaluateLocation
	evaluateAnswer: (e) =>
		@answer = e.target
		console.log 'answer', @answer
		hit = @library[@answer.index+'shape']
		hitname = @library[@answer.name]
		pt = hit.globalToLocal @stage.mouseX, @stage.mouseY
		if hit.hitTest pt.x, pt.y
			console.log 'array drops ', @drops
			currentdrop = @drops.indexOf(@library[@answer.name])

			console.log 'indexof', currentdrop
			@drops.splice currentdrop, 1 
			console.log 'array nuevo ', @drops

			hpt = hit.parent.localToGlobal hit.x, hit.y
			htt = @answer.parent.globalToLocal hpt.x, hpt.y
			@wordcompleter = new AfterBeforeWord 'dropper', @pieces[@answer.index].texta, '', @pieces[@answer.index].textb, '#FFF', '#E90E2C', 300, 1120, 220, 60
			
			@wordcompleter.x = stageSize.w / 2 - @wordcompleter.width / 2
			
			if @library['dropper']
				@mainContainer.removeChild @library['dropper']
			@addToMain @wordcompleter
			
			@answer.complete = true
			@answer.putInPlace( htt )
			for i in [1..12] by 1
				ficha = @library["dp#{@num}p#{i}"]
				ficha.removeAllEventListeners() 

			@initListeners()
		else
			@answer.returnToPlace(@answer.alpha, @answer.scaleX, @answer.scaleY)
	evaluateLocation: (e) =>
		name = e.target.name
		name = 'next to' if name is 'next' 
		if name is @pieces[@answer.index].label
			@wordcompleter.changeText @pieces[@answer.index].label
			createjs.Sound.play 'good'
			@library['score'].plusOne()
		else
			@warning()
		
		setTimeout @finishEvaluation, 1 * 1000
		@stopListeners()
		for i in [1..12] by 1
			ficha = @library["dp#{@num}p#{i}"]
			currentficha = @drops.indexOf(@library["dp#{@num}p#{i}"])

			if currentficha != -1
				ficha.addEventListener 'drop', @evaluateAnswer
			else
	 			ficha.onStopEvaluation()
	finishEvaluation: =>
		TweenLite.to @library['dropper'], 0.5, {alpha: 0, y: stageSize.h, ease:Quart.easeOut, onComplete: @nextEvaluation}
	nextEvaluation: =>
		@index++
		if @index < @answers
			@initDrag()
		else
			@finish()
	blink: (obj, state = on) ->
		TweenMax.killTweensOf obj
		obj.alpha = 1
		TweenMax.to obj, 0.5, {alpha:.5, repeat:-1, yoyo:true}  if state
	finish: ->
		TweenLite.to @library['dragpieces'], 1, {alpha:0, y:@y - 40}
		TweenLite.to @library['puzzle'], 1, {alpha:0, y:@y - 40}
		TweenMax.to [@library['p1'], @library['p2'], @library['p3'], @library['behind'], @library['in'], @library['under'], @library['next'],@library['on'], @library['above']], 1, {alpha:0, y:stageSize.h}
		super
	window.U2A3 = U2A3