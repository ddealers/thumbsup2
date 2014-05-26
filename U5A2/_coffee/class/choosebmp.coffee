class ChooseBitmap
	constructor: (name, img1, img2, success, x, y)->
		@initialize name, img1, img2, success, x, y
	ChooseBitmap.prototype = new createjs.Container()
	ChooseBitmap::Container_initialize = ChooseBitmap::initialize
	ChooseBitmap::initialize = (name, img1, img2, success, x, y)->
		@Container_initialize()
		@name = name
		@x = x
		@y = y
		@pos = x:x, y:y
		@success = success

		@firstOption = new createjs.Container()
		@secondOption = new createjs.Container()

		@rand = if Math.random() > 0.5 then 1 else 2
		
		@first = new createjs.Bitmap img1
		@first.set {width: img1.width, index: 1, mouseEnabled: false}
		
		@second = new createjs.Bitmap img2
		@second.set {width: img2.width, index: 2, mouseEnabled: false}
		
		if @rand is 1
			@firstOption.x = 0
			@secondOption.x = @first.width + 20
		else
			@firstOption.x = @first.width + 20
			@secondOption.x = 0
			
		s1 = new createjs.Shape()
		s1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, @first.getBounds().width, @first.getBounds().height)
		s1.index = 1

		s2 = new createjs.Shape()
		s2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, @second.getBounds().width, @second.getBounds().height)
		s2.index = 2
		
		@firstOption.bmp = @first
		@secondOption.bmp = @second
		
		@firstOption.addChild @first,  s1
		@secondOption.addChild @second, s2

		@addChild @firstOption, @secondOption 
		false
	initListeners: ->
		@firstOption.addEventListener 'click', @_dispatchSelection
		@secondOption.addEventListener 'click', @_dispatchSelection
	setImages: (img1, img2, success) ->
		@firstOption = new createjs.Container()
		@secondOption = new createjs.Container()

		@rand = if Math.random() > 0.5 then 1 else 2
		
		@first = new createjs.Bitmap img1
		@first.set {width: img1.width, index: 1, mouseEnabled: false}
		
		@second = new createjs.Bitmap img2
		@second.set {width: img2.width, index: 2, mouseEnabled: false}
		
		if @rand is 1
			@firstOption.x = 0
			@secondOption.x = @first.width + 20
		else
			@firstOption.x = @first.width + 20
			@secondOption.x = 0
			
		s1 = new createjs.Shape()
		s1.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, @first.getBounds().width, @first.getBounds().height)
		s1.index = 1

		s2 = new createjs.Shape()
		s2.graphics.beginFill('rgba(255,255,255,0.1)').drawRect(0, 0, @second.getBounds().width, @second.getBounds().height)
		s2.index = 2
		
		@firstOption.bmp = @first
		@secondOption.bmp = @second
		
		@firstOption.addChild @first,  s1
		@secondOption.addChild @second, s2

		@addChild @firstOption, @secondOption 
	setDistance: (dist, w) ->
		if @rand is 1
			width = w ? @second.width
			@secondOption.x = dist
			@regX = @secondOption.x + width / 2
		else
			width = w ? @first.width
			@firstOption.x = dist
			@regX = @firstOption.x + width / 2
	_dispatchSelection: (e) =>
		console.log 'index', e.target.index
		if e.target.index is @success
			if e.target.index is 1
				TweenLite.to @firstOption, 1, {x:@regX - @firstOption.bmp.width / 2}
				TweenLite.to @secondOption, 1, {alpha:0}
			else
				TweenLite.to @firstOption, 1, {alpha:0}
				TweenLite.to @secondOption, 1, {x:@regX + @secondOption.bmp.width / 2}
		@dispatchEvent {type:'selection', success: e.target.index is @success}
	window.ChooseBitmap = ChooseBitmap