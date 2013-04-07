/**
 * Global timer support.
 * 
 * This class can be used to periodically fire an event. This event can be
 * used to simulate e.g. a background task. The static method
 * {@link #once} is a special case. It will call a function deferred after a
 * given timeout.
 */
//>public
vjo.ctype('qx.event.Timer')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply the enabled state of the timer.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Apply the interval of the timer.
	 * 
	 */
	_applyInterval : vjo.NEEDS_IMPL,


	/**
	 * timer callback
	 * 
	 */
	_oninterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	getInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


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
	 * Restart the timer.
	 * This makes it possible to change the interval of a running timer.
	 * 
	 */
	restart : vjo.NEEDS_IMPL,


	/**
	 * Restart the timer. with a given interval.
	 * 
	 */
	restartWith : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property interval.
	 * 
	 * For further details take a look at the property definition: {@link #interval}.
	 * 
	 */
	setInterval : vjo.NEEDS_IMPL,


	/**
	 * Start the timer
	 * 
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Start the timer with a given interval
	 * 
	 */
	startWith : vjo.NEEDS_IMPL,


	/**
	 * Stop the timer.
	 * 
	 */
	stop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL
})
.endType();