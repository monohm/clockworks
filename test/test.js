var	TestView = function ()
{
	positron.View.call (this);
};
monohm.inherits (TestView, positron.View);

// called just before a view's visible animation starts
TestView.prototype.onBeforeVisible = function ()
{
	positron.View.prototype.onBeforeVisible.call (this);

	console.log ("TestView.onBeforeVisible()");
}

// called when a view's markup is final
TestView.prototype.onDOMReady = function ()
{
	positron.View.prototype.onDOMReady.call (this);

	console.log ("TestView.onDOMReady()");

}

TestView.prototype.handleEvent = function (inEvent)
{
	console.log ("TestView.handleEvent()");

  if (inEvent.type === 'touchstart') {

  }

  else if (inEvent.type === 'touchmove') {

  }

  else if (inEvent.type === 'touchend') {

  }

}

// called when a view's markup is final AND its visible animation has completed
TestView.prototype.onVisible = function ()
{
	positron.View.prototype.onVisible.call (this);

	console.log ("TestView.onVisible()");
}

// called just before a view's invisible animation starts
TestView.prototype.onBeforeInvisible = function ()
{
	positron.View.prototype.onBeforeInvisible.call (this);

	console.log ("TestView.onBeforeInvisible()");
}

// called when a view's invisible animation completes
TestView.prototype.onInvisible = function ()
{
	positron.View.prototype.onInvisible.call (this);

	console.log ("TestView.onInvisible()");
}
