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

		@rand = if Math.random() > 0.5 then 1 else 2

		@firstOption = new createjs.Bitmap img1
		@firstOption.width = img1.width
		@firstOption.index = 1
		
		@secondOption = new createjs.Bitmap img2
		@secondOption.width = img2.width
		@secondOption.index = 2

		if @rand is 1
			@secondOption.x = @firstOption.width + 20
		else 
			@firstOption.x = @firstOption.width + 20
		
		@shape1 = new createjs.Shape()
		@shape1.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(@firstOption.x, 0, @firstOption.getBounds().width, @firstOption.getBounds().height)
		@shape1.index = 1
		@shape2 = new createjs.Shape()
		@shape2.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(@secondOption.x, 0, @secondOption.getBounds().width, @secondOption.getBounds().height)
		@shape2.index = 2

		@addChild @firstOption, @secondOption, @shape1, @shape2
		false
	initListeners: ->
		@shape1.addEventListener 'click', @_dispatchSelection
		@shape2.addEventListener 'click', @_dispatchSelection
	setImages: (img1, img2, success) ->
		@removeAllChildren()
		@firstOption = new createjs.Bitmap img1
		@firstOption.width = img1.width
		@firstOption.index = 1
		@secondOption = new createjs.Bitmap img2
		@secondOption.width = img2.width
		@secondOption.x = @firstOption.width + 20
		@secondOption.index = 2
		
		@shape1 = new createjs.Shape()
		@shape1.graphics.beginFill('rgba(0,0,0,0.4)').drawRect(@firstOption.x, 0, @firstOption.getBounds().width, @firstOption.getBounds().height)
		@shape1.index = 1
		@shape2 = new createjs.Shape()
		@shape2.graphics.beginFill('rgba(0,0,0,0.1)').drawRect(@secondOption.x, 0, @secondOption.getBounds().width, @secondOption.getBounds().height)
		@shape2.index = 2


		@addChild @firstOption, @secondOption, @shape1, @shape2
	setDistance: (dist, w) ->
		if @rand is 1
			width = w ? @secondOption.width
			@secondOption.x = dist
			@regX = @secondOption.x + width / 2
		else
			width = w ? @firstOption.width
			@firstOption.x = dist
			@regX = @firstOption.x + width / 2
	_dispatchSelection: (e) =>
		if e.target.index is @success
			if e.target.index is 1
				TweenLite.to @firstOption, 1, {x:@regX-@firstOption.width / 2}
				TweenLite.to @shape1, 1, {x:@regX-@firstOption.width / 2}
				TweenLite.to @secondOption, 1, {alpha:0}
				TweenLite.to @shape2, 1, {alpha:0}
			else
				TweenLite.to @firstOption, 1, {alpha:0}
				TweenLite.to @shape1, 1, {alpha:0}
				TweenLite.to @secondOption, 1, {x:@regX+@secondOption.width / 2}
				TweenLite.to @shape2, 1, {x:@regX+@secondOption.width / 2}
		@dispatchEvent {type:'selection', success: e.target.index is @success}
	window.ChooseBitmap = ChooseBitmap