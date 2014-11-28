class U6A1 extends Oda
	constructor: ->
		manifest = [
			{id: 'head', src: 'pleca1.png'}
			{id: 'inst', src: 'inst.png'}
			{id: 'c1', src: 'circle1.png'}
			{id: 'c2', src: 'circle2.png'}
			{id: 'b1', src: 'p1-btn.png'}
		    {id: 'b2', src: 'p2-btn.png'}
		    {id: 'm1', src: 'marco-1.png'}
		    {id: 'm2', src: 'marco-2.png'}
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
		    {id: 'p1p6back', 		src: 'puzzle1-6-back.png'}
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
		    {id: 'btnfalse', src: 'false-btn.png'}
		    {id: 'btntrue', src: 'true-btn.png'}
		]
		sounds = [
			{src:'sounds/TU2_U6_A1_instructions.mp3', id:'instructions'}
			{src:'sounds/boing.mp3', id:'boing'}
		    {src:'sounds/good.mp3', id:'good'}
		    {src:'sounds/wrong.mp3', id:'wrong'}
		    {src:'sounds/bell_cow_3.mp3', id:'bell'}
		]
		super null, manifest, sounds
	setStage: ->
		super
		@insertBitmap 'header', 'head', stageSize.w / 2, 0, 'tc'
		@insertInstructions 'instructions', ['Drag the puzzle pieces, read and click on the correct answers.'], 80, 200
		
		b1 = @createBitmap 'b1', 'b1', 1462, 966
		b2 = @createBitmap 'b2', 'b2', 1462, 1060
		
		@addToMain b1, b2
		@addToLibrary b1, b2

		@addToMain new Score 'score', (@preload.getResult 'c1'), (@preload.getResult 'c2'), 40, 1000, 8, 0
		@introEvaluation()
	introEvaluation: ->
		super
		tl = new TimelineLite()
		tl.from @library['header'], 1, {y:-@library['header'].height}
		.from @library['instructions'], 1, {alpha :0, x: 0, onComplete: @playInstructions, onCompleteParams: [@]}
		.from [@library['b1'], @library['b2']], 1, {alpha:0, y:stageSize.h}
	initEvaluation: (e) =>
		super
		for i in [1..2] by 1
			@blink @library["b#{i}"]
			@library["b#{i}"].on 'click', @selectPuzzle
	selectPuzzle: (e) =>
		for i in [1..2] by 1
			@blink @library["b#{i}"], off
			@library["b#{i}"].off 'click', @selectPuzzle


		btnTrue = @createBitmap 'btntrue', 'btntrue', 600, 1080
		btnFalse = @createBitmap 'btnfalse', 'btnfalse', 840, 1080
		
		@addToMain btnTrue, btnFalse
		@addToLibrary btnTrue, btnFalse
 
		switch e.target.parent.name
			when 'b1'
				@pieces =
					p1p1:  {x: 304, y: 162,  text:'A firefighter puts out fires.', label:'true', back: on}
					p1p2:  {x: 493, y: 162} 
					p1p3:  {x: 634, y: 162,  text:'A nurse helps sick people.', label:'true', back: on}
					p1p4:  {x: 828, y: 163} 
					p1p5:  {x: 304, y: 334, text:'A mail carrier works at he post office.', label:'true', back: on}
					p1p6:  {x: 493, y: 334, text:'A bus driver works in an office.', label:'false', back: on}
					p1p7:  {x: 637, y: 334, text:'A waitress works at a grocery store.', label:'false', back: on}
					p1p8:  {x: 815, y: 333, text:'A salesclerk works at a bank.', label:'false', back: on}
					p1p9:  {x: 303, y: 515}
					p1p10: {x: 458, y: 516, text:'A librarian sells books.', label:'false', back: on}
					p1p11: {x: 676, y: 515}
					p1p12: {x: 815, y: 516, text:'A chef serves food.', label:'false', back: on}
				@answers = 8
				@setPuzzle 1
			when 'b2'
				@pieces =
					p2p1:  {x: 308, y: 166,  text:'A doctor works at a bank.', label:'false', back: on}
					p2p2:  {x: 497, y: 166} 
					p2p3:  {x: 641, y: 166,  text:'A teacher works at a library.', label:'false', back: on}
					p2p4:  {x: 834, y: 166} 
					p2p5:  {x: 306, y: 338, text:'A mechanic fixes cars.', label:'true', back: on}
					p2p6:  {x: 496, y: 336, text:'A police officer puts out fires.', label:'false', back: on}
					p2p7:  {x: 638, y: 337, text:'A farmer fixes cars.', label:'false', back: on}
					p2p8:  {x: 820, y: 336, text:'A waitress works at a restaurant.', label:'true', back: on}
					p2p9:  {x: 309, y: 520}
					p2p10: {x: 462, y: 520, text:'A vet helps sick animals.', label:'true', back: on}
					p2p11: {x: 678, y: 519}
					p2p12: {x: 820, y: 519, text:'A salesclerk works at a museum.', label:'false', back: on}
				@answers = 8
				@setPuzzle 2
	setPuzzle: (num) ->
		@num = num
		puzzle = new createjs.Container()
		puzzle.x = switch num
			when 1 then 150
			when 2 then 150
		puzzle.y = 300
		puzzle.name = 'puzzle'

		m = @createBitmap "m#{num}", "m#{num}", 290, 150
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
				shape.graphics.beginFill('rgba(255,255,255,0.01)').drawRect(-pp.x - puzzle.x, -pp.y - puzzle.y, stageSize.w, stageSize.h)
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
			dpp = new Draggable "dp#{num}p#{i}", @preload.getResult("p#{num}p#{i}"), "p#{num}p#{i}", index * 170, 0 
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
				
		dragpieces.width = index * 170
		@setReg(dragpieces, dragpieces.width / 2, 0)
		
		@addToMain puzzle, dragpieces
		#@addToMain dragpieces

		puzzle.cache 0,0,puzzle.getBounds().width * 2, puzzle.getBounds().height * 2
		dragpieces.cache 0, -dragpieces.getBounds().height, dragpieces.getBounds().width * 2, dragpieces.getBounds().height * 2
		
		tl = new TimelineLite()
		tl.from puzzle, 0.5, {alpha:0, y:puzzle.y - 40, force3D:true}
		.from dragpieces, 0.5, {alpha:0, y:puzzle.y - 40, force3D:true, onComplete: @initDrag, onCompleteParams:[puzzle,dragpieces]}
	initDrag:(puzzle,dragpieces) =>
		#if puzzle then puzzle.uncache()
		if dragpieces then dragpieces.uncache()
		@observer.notify 'init_drag'
	initListeners: ->
		@library.btntrue.addEventListener 'click', @evaluateLocation
		@library.btnfalse.addEventListener 'click', @evaluateLocation
	stopListeners: ->
		@library.btntrue.removeEventListener 'click', @evaluateLocation
		@library.btnfalse.removeEventListener 'click', @evaluateLocation
	evaluateAnswer: (e) =>
		@answer = e.target
		hit = @library[@answer.index+'shape']
		hitname = @library[@answer.name]
		pt = hit.globalToLocal @stage.mouseX, @stage.mouseY
		
		if hit.hitTest pt.x, pt.y
			currentdrop = @drops.indexOf(@library[@answer.name])
			@drops.splice currentdrop, 1 
			
			hpt = hit.parent.localToGlobal hit.x, hit.y
			htt = @answer.parent.globalToLocal hpt.x, hpt.y
			@insertText 'dropper', @pieces[@answer.index].text,'48px Quicksand','#333', stageSize.w / 2, 1020, 'center'
			createjs.Sound.play 'bell'

			@answer.complete = true

			@answer.putInPlace( htt )
			for i in [1..12] by 1
				ficha = @library["dp#{@num}p#{i}"]
				ficha.removeAllEventListeners() 
			@initListeners()
		else
			@answer.returnToPlace @answer.alpha, @answer.scaleX, @answer.scaleY
	evaluateLocation: (e) =>
		name = e.target.parent.name
		if name is "btn#{@pieces[@answer.index].label}"
			createjs.Sound.play 'good'
			@library['score'].plusOne()
			setTimeout @finishEvaluation, 1 * 1000
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
		TweenLite.to @library.dragpieces, 1, {alpha:0, y:@y - 40}
		TweenLite.to @library.puzzle, 1, {alpha:0, y:@y - 40}
		TweenMax.to [@library.p1, @library.p2, @library.btntrue, @library.btnfalse], 1, {alpha:0, y:stageSize.h}
		super
	window.U6A1 = U6A1