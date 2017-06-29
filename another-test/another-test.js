var	AnotherTestView = function ()
{
	positron.View.call (this);
};
monohm.inherits (AnotherTestView, positron.View);

// called just before a view's visible animation starts
AnotherTestView.prototype.onBeforeVisible = function ()
{
	positron.View.prototype.onBeforeVisible.call (this);

	console.log ("AnotherTestView.onBeforeVisible()");
}

// called when a view's markup is final
AnotherTestView.prototype.onDOMReady = function ()
{
	positron.View.prototype.onDOMReady.call (this);

	console.log ("AnotherTestView.onDOMReady()");

}

AnotherTestView.prototype.handleEvent = function (inEvent)
{
	console.log ("AnotherTestView.handleEvent()");

  if (inEvent.type === 'touchstart') {

  }

  else if (inEvent.type === 'touchmove') {

  }

  else if (inEvent.type === 'touchend') {

  }

}

// called when a view's markup is final AND its visible animation has completed
AnotherTestView.prototype.onVisible = function ()
{
	positron.View.prototype.onVisible.call (this);

	console.log ("AnotherTestView.onVisible()");
}

// called just before a view's invisible animation starts
AnotherTestView.prototype.onBeforeInvisible = function ()
{
	positron.View.prototype.onBeforeInvisible.call (this);

	console.log ("AnotherTestView.onBeforeInvisible()");
}

// called when a view's invisible animation completes
AnotherTestView.prototype.onInvisible = function ()
{
	positron.View.prototype.onInvisible.call (this);

	console.log ("AnotherTestView.onInvisible()");
}
