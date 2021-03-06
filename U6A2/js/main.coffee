class U6A2 extends Oda
	constructor: ->
		manifest = [
			{id: 'head', src: 'pleca1.png'}
			{id: 'inst', src: 'inst.png'}
			{id: 'c1', src: 'circle1.png'}
			{id: 'c2', src: 'circle2.png'}
			{id: 'repeatbtn', src: 'repeat-btn.png'}
			{id: 'playagain', src:'play_again.png'}
			{id: 'startgame', src:'start_game.png'}
 			{id: 'btnrepeat', src:'btn_repeat.png'}
			{id: 'calles', src:'calles.png'}
			{id: 'map1', src:'map_1.png'}
			{id: 'map2', src:'map_2.png'}
			{id: 'map3', src:'map_3.png'}
			{id: 'bus', src:'place_bus.png'}
			{id: 'cafe', src:'place_cafe.png'}
			{id: 'hospital', src:'place_hospital.png'}
			{id: 'library', src:'place_library.png'}
			{id: 'museum', src:'place_museum2.png'}
			{id: 'pet', src:'place_pet.png'}
			{id: 'restaurant', src:'place_restaurant.png'}
			{id: 'school', src:'place_school.png'}
			{id: 'theater', src:'place_theater.png'}
		]
		sounds = [
			{src:'sounds/good.mp3', id:'good'}
			{src:'sounds/wrong.mp3', id:'wrong'}
		    {src:'sounds/TU2_U6_A2_instructions.mp3', id:'instructions'}
		    {src:'sounds/TU2_U6_A2_map1_hospital.mp3', id:'shospital'}
		    {src:'sounds/TU2_U6_A2_map1_restaurant.mp3', id:'srestaurant'}
		    {src:'sounds/TU2_U6_A2_map1_theater.mp3', id:'stheater'}
		    {src:'sounds/TU2_U6_A2_map2_bus.mp3', id:'sbus'}
		    {src:'sounds/TU2_U6_A2_map2_museum.mp3', id:'smuseum'}
		    {src:'sounds/TU2_U6_A2_map2_school.mp3', id:'sschool'}
		    {src:'sounds/TU2_U6_A2_map3_cafe.mp3', id:'scafe'}
		    {src:'sounds/TU2_U6_A2_map3_library.mp3', id:'slibrary'}
		    {src:'sounds/TU2_U6_A2_map3_pet.mp3', id:'spet'}
		]
		@game =
			[
				[
					{i:'theater', x:290, y:-80, w:190, h:190}
					{i:'hospital', x:810, y:189, w:190, h:190}
					{i:'restaurant', x:105, y:460, w:190, h:190}
				]
				[
					{i:'bus', x:116, y:184, w:190, h:190}
					{i:'museum', x:618, y:196, w:190, h:190}
					{i:'school', x:280, y:-74, w:190, h:190}
				]
				[
					{i:'library', x:-94, y:210, w:190, h:190}
					{i:'cafe', x:120, y:-74, w:190, h:190}
					{i:'pet', x:800, y:-73, w:190, h:190}
				]
			]
		super null, manifest, sounds
	setStage: ->
		super
		@insertBitmap 'header', 'head', stageSize.w / 2, 0, 'tc'
		@insertInstructions 'instructions', ['Listen and drag the buildings to the correct place on the map.'], 80, 200

		boton = new createjs.Container()
		boton.x = stageSize.w / 2
		boton.y = 1140
		boton.name = "btnRepeat"

		bt = @createBitmap "repeat", 'repeatbtn', 0, 0, 'mc'
		bt.mouseEnabled = false

		shape = new createjs.Shape()
		shape.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(-bt.getBounds().width / 2, -bt.getBounds().height / 2 , bt.getBounds().width, bt.getBounds().height)
		boton.addChild bt, shape

		@addToLibrary boton, bt, shape
		@addToMain boton

		@addToMain new Score 'score', (@preload.getResult 'c1'), (@preload.getResult 'c2'), 40, 1000, 9, 0
		@intento = 0
		@setMap( 1 ).introEvaluation()
	setMap: (map) ->
		mapa = new createjs.Container()
		mapa.name = 'mapa'
		mapa.x = 300
		mapa.y = 360

		fondo = @createBitmap "map#{map}", "map#{map}", -100, -80
		calles = @createBitmap 'calles', 'calles', -100, -60
		mapa.addChild calles, fondo

		@current = @game[map - 1]
		drops = new Array()
		for drop in @current
			s = new createjs.Shape()
			s.name = "#{drop.i}"
			s.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, drop.w, drop.h)
			s.x = drop.x
			s.y = drop.y
			drops.push s
			@addToLibrary s
			mapa.addChild s

		d1 = new Droppable 'd1', (@preload.getResult @current[0].i), @current[0].i, 1100, 110, @stage, drops
		d2 = new Droppable 'd2', (@preload.getResult @current[1].i), @current[1].i, 1100, 310, @stage, drops
		d3 = new Droppable 'd3', (@preload.getResult @current[2].i), @current[2].i, 1100, 510, @stage, drops
		d1.scaleX = d1.scaleY = d2.scaleX = d2.scaleY = d3.scaleX = d3.scaleY = 0.7
 
		@addToLibrary d1, d2, d3
		mapa.addChild d1, d2, d3
		@addToMain mapa

		for i in [1..3] by 1
			@library["d#{i}"].addEventListener 'dropped', @evaluateAnswer
		@
	introEvaluation: ->
		super
		TweenLite.from @library.header, 1, {y:-@library.header.height}
		TweenLite.from @library.instructions, 1, {alpha :0, x: 0, delay: 1}
		TweenLite.from @library.btnRepeat, 1, {alpha :0, y: @library.btnRepeat.y + 20, delay: 2}
		TweenLite.from @library.mapa, 1, {alpha: 0, y: @library.mapa.y + 40, delay: 2, onComplete: @playInstructions, onCompleteParams: [@]}
	initEvaluation: (e) =>
		super
		@mindex = 0
		createjs.Sound.play "s#{@current[@mindex].i}"
		@library.btnRepeat.addEventListener 'click', @repeatSound
		for i in [1..3] by 1
			@library["d#{i}"].initDragListener()
	evaluateAnswer: (e) =>
		@answer = e.target
		@drop = e.drop
		if @answer.index is @drop.name
			@answer.endDragListener()
			@answer.putInPlace {x: @drop.x, y:@drop.y}
			@finishEvaluation()
			createjs.Sound.play 'good'

		else
			@warning()
			@intento = 1
			@answer.returnToPlace @answer.alpha, @answer.scaleX, @answer.scaleY
	finishEvaluation: =>
		@mindex++
		if @intento is 0
			@library.score.plusOne()
		@intento = 0
		createjs.Sound.stop()
		if @mindex < @current.length
			setTimeout @playsound, 2000

		else
			@mindex = 0
			setTimeout @nextEvaluation, 2 * 1000
			@library.btnRepeat.removeEventListener 'click', @repeatSound
	playsound: =>
		createjs.Sound.play "s#{@current[@mindex].i}"

	nextEvaluation: =>
		@index++
		TweenLite.to @library.mapa, 1, {alpha: 0, y: @library.mapa.y + 40}
		if @index < @game.length
			@setMap @index + 1
			createjs.Sound.play "s#{@current[@mindex].i}"
			@library.btnRepeat.addEventListener 'click', @repeatSound
			for i in [1..3] by 1
				@library["d#{i}"].initDragListener()
		else
			@finish()
	repeatSound: =>
		createjs.Sound.stop()
		createjs.Sound.play "s#{@current[@mindex].i}"
	finish: ->
		createjs.Sound.stop()
		TweenLite.to @library.btnRepeat, 1, {alpha :0, y: @library.btnRepeat.y + 20}
		super
	window.U6A2 = U6A2