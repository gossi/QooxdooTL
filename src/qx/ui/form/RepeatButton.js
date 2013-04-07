/**
 * The RepeatButton is a special button, which fires repeatedly {@link #execute}
 * events, while the mouse button is pressed on the button. The initial delay
 * and the interval time can be set using the properties {@link #firstInterval}
 * and {@link #interval}. The {@link #execute} events will be fired in a shorter
 * amount of time if the mouse button is hold, until the min {@link #minTimer}
 * is reached. The {@link #timerDecrease} property sets the amount of milliseconds
 * which will decreased after every firing.
 * 
 * 
 *   var button = new qx.ui.form.RepeatButton("Hello World");
 * 
 *   button.addListener("execute", function(e) {
 *     alert("Button is executed");
 *   }, this);
 * 
 *   this.getRoot.add(button);
 * 
 * 
 * This example creates a button with the label &#8220;Hello World&#8221; and attaches an
 * event listener to the {@link #execute} event.
 * 
 * External Documentation
 * 
 * 
 * Documentation of this widget in the qooxdoo manual.
 */
//>public
vjo.ctype('qx.ui.form.RepeatButton')
.inherits('qx.ui.form.Button')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Starts the internal timer which causes firing of execution
	 * events in an interval. It also presses the button.
	 * 
	 */
	__startInternalTimer : vjo.NEEDS_IMPL,


	/**
	 * Stops the internal timer and releases the button.
	 * 
	 */
	__stopInternalTimer : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Callback for the interval event.
	 * 
	 * Stops the timer and starts it with a new interval
	 * (value of the &#8220;interval&#8221; property &#8211; value of the &#8220;timerDecrease&#8221; property).
	 * Dispatches the &#8220;execute&#8221; event.
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keydown&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221;. It also starts
	 * the internal timer (same like mousedown).
	 * 
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;keyup&#8221; event.
	 * 
	 * Removes &#8220;abandoned&#8221; and &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)
	 * for the keys &#8220;Enter&#8221; or &#8220;Space&#8221; and stopps the internal timer
	 * (same like mouse up).
	 * 
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the &#8220;mouseDown&#8221; method.
	 * 
	 * Sets the interval of the timer (value of firstInterval property) and
	 * starts the timer. Additionally removes the state &#8220;abandoned&#8221; and adds the
	 * state &#8220;pressed&#8221;.
	 * 
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseout&#8221; event
	 * 
	 * Removes &#8220;hovered&#8221; state
	 * Adds &#8220;abandoned&#8221; and removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)

	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event
	 * 
	 * Adds state &#8220;hovered&#8221;
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)

	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Callback method for the &#8220;mouseUp&#8221; event.
	 * 
	 * Handles the case that the user is releasing the mouse button
	 * before the timer interval method got executed. This way the
	 * &#8220;execute&#8221; method get executed at least one time.
	 * 
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property firstInterval.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	getFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	getInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property minTimer.
	 * 
	 * For further details take a look at the property definition: {@link #minTimer}.
	 * 
	 */
	getMinTimer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timerDecrease.
	 * 
	 * For further details take a look at the property definition: {@link #timerDecrease}.
	 * 
	 */
	getTimerDecrease : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property firstInterval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	initFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property interval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	initInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property minTimer
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #minTimer}.
	 * 
	 */
	initMinTimer : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property timerDecrease
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #timerDecrease}.
	 * 
	 */
	initTimerDecrease : vjo.NEEDS_IMPL,


	/**
	 * Calling this function is like a click from the user on the
	 * button with all consequences.
	 * Be sure to call the {@link #release} function.
	 * 
	 */
	press : vjo.NEEDS_IMPL,


	/**
	 * Calling this function is like a release from the user on the
	 * button with all consequences.
	 * Usually the {@link #release} function will be called before the call of
	 * this function.
	 * 
	 */
	release : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property firstInterval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	resetFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property interval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	resetInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property minTimer.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #minTimer}.
	 * 
	 */
	resetMinTimer : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property timerDecrease.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #timerDecrease}.
	 * 
	 */
	resetTimerDecrease : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property firstInterval.
	 * 
	 * For further details take a look at the property definition: {@link #firstInterval}.
	 * 
	 */
	setFirstInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	setInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property minTimer.
	 * 
	 * For further details take a look at the property definition: {@link #minTimer}.
	 * 
	 */
	setMinTimer : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property timerDecrease.
	 * 
	 * For further details take a look at the property definition: {@link #timerDecrease}.
	 * 
	 */
	setTimerDecrease : vjo.NEEDS_IMPL
})
.endType();