var	RemoteView = function ()
{
	positron.View.call (this);
};
monohm.inherits (RemoteView, positron.View);

// called just before a view's visible animation starts
RemoteView.prototype.onBeforeVisible = function ()
{
	positron.View.prototype.onBeforeVisible.call (this);

	console.log ("RemoteView.onBeforeVisible()");
}

// called when a view's markup is final
RemoteView.prototype.onDOMReady = function ()
{
	positron.View.prototype.onDOMReady.call (this);

	console.log ("RemoteView.onDOMReady()");

}

RemoteView.prototype.handleEvent = function (inEvent)
{
	console.log ("RemoteView.handleEvent()");

  if (inEvent.type === 'touchstart') {

  }

  else if (inEvent.type === 'touchmove') {

  }

  else if (inEvent.type === 'touchend') {

  }

}

// called when a view's markup is final AND its visible animation has completed
RemoteView.prototype.onVisible = function ()
{
	positron.View.prototype.onVisible.call (this);

	console.log ("RemoteView.onVisible()");
}

// called just before a view's invisible animation starts
RemoteView.prototype.onBeforeInvisible = function ()
{
	positron.View.prototype.onBeforeInvisible.call (this);

	console.log ("RemoteView.onBeforeInvisible()");
}

// called when a view's invisible animation completes
RemoteView.prototype.onInvisible = function ()
{
	positron.View.prototype.onInvisible.call (this);

	console.log ("RemoteView.onInvisible()");
}
