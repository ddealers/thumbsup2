class Button
	constructor: (name, image, index, x, y)->
		@initialize name, image, index, x, y
	Button.prototype = new createjs.Container()
	Button::Container_initialize = Button::initialize
	Button::initialize = (name, image, index, x, y)->
		@Container_initialize()
		@set {name: name, index: index, x: x, y: y, pos: {x: x, y: y}, mouseChildren: false}
		@bitmap = new createjs.Bitmap image
		@bitmap.mouseEnabled = false
		@shape = new createjs.Shape()
		@shape.graphics.beginFill('rgba(0,255,255,0.1)').drawRect(0, 0, @bitmap.getBounds().width, @bitmap.getBounds().height)
		@set {width: @bitmap.getBounds().width, height: @bitmap.getBounds().height}
		@addChild @bitmap, @shape
		false
	blink: (state=on) ->
		TweenMax.killTweensOf @
		@.alpha = 1
		TweenMax.to @, 0.5, {alpha:.2, repeat:-1, yoyo:true}  if state
	window.Button = Button