var	ThreeHandsView = function ()
{
	positron.View.call (this);
};
monohm.inherits (ThreeHandsView, positron.View);

// called just before a view's visible animation starts
ThreeHandsView.prototype.onBeforeVisible = function ()
{
	positron.View.prototype.onBeforeVisible.call (this);

	console.log ("ThreeHandsView.onBeforeVisible()");
}

// called when a view's markup is final
ThreeHandsView.prototype.onDOMReady = function ()
{
	positron.View.prototype.onDOMReady.call (this);

	console.log ("ThreeHandsView.onDOMReady()");

}

ThreeHandsView.prototype.handleEvent = function (inEvent)
{
	console.log ("ThreeHandsView.handleEvent()");

  if (inEvent.type === 'touchstart') {

  }

  else if (inEvent.type === 'touchmove') {

  }

  else if (inEvent.type === 'touchend') {

  }

}

// called when a view's markup is final AND its visible animation has completed
ThreeHandsView.prototype.onVisible = function ()
{
	positron.View.prototype.onVisible.call (this);

	console.log ("ThreeHandsView.onVisible()");
}

// called just before a view's invisible animation starts
ThreeHandsView.prototype.onBeforeInvisible = function ()
{
	positron.View.prototype.onBeforeInvisible.call (this);

	console.log ("ThreeHandsView.onBeforeInvisible()");
}

// called when a view's invisible animation completes
ThreeHandsView.prototype.onInvisible = function ()
{
	positron.View.prototype.onInvisible.call (this);

	console.log ("ThreeHandsView.onInvisible()");
}
