/**
 * The HoverButton is an {@link qx.ui.basic.Atom}, which fires repeatedly
 * execute events while the mouse is over the widget.
 * 
 * The rate at which the execute event is fired accelerates is the mouse keeps
 * inside of the widget. The initial delay and the interval time can be set using
 * the properties {@link #firstInterval} and {@link #interval}. The
 * {@link #execute} events will be fired in a shorter amount of time if the mouse
 * remains over the widget, until the min {@link #minTimer} is reached.
 * The {@link #timerDecrease} property sets the amount of milliseconds which will
 * decreased after every firing.
 * 
 * Example
 * 
 * Here is a little example of how to use the widget.
 * 
 * 
 *   var button = new qx.ui.form.HoverButton("Hello World");
 * 
 *   button.addListener("execute", function(e) {
 *     alert("Button is hovered");
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
vjo.ctype('qx.ui.form.HoverButton')
.inherits('qx.ui.basic.Atom')
.satisfies('qx.ui.form.IExecutable')
.mixin('qx.ui.core.MExecutable')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Fire execute event on timer interval event
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Stop timer on mouse out
	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Start timer on mouse over
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


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