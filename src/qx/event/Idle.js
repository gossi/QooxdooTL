/**
 * A generic singleton that fires an &#8220;interval&#8221; event all 100 miliseconds. It
 * can be used whenever one needs to run code periodically. The main purpose of
 * this class is reduce the number of timers.
 */
//>public
vjo.ctype('qx.event.Idle')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property timeoutInterval.
	 * 
	 * For further details take a look at the property definition: {@link #timeoutInterval}.
	 * 
	 */
	_applyTimeoutInterval : vjo.NEEDS_IMPL,


	/**
	 * Fires an &#8220;interval&#8221; event
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timeoutInterval.
	 * 
	 * For further details take a look at the property definition: {@link #timeoutInterval}.
	 * 
	 */
	getTimeoutInterval : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property timeoutInterval
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #timeoutInterval}.
	 * 
	 */
	initTimeoutInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property timeoutInterval.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #timeoutInterval}.
	 * 
	 */
	resetTimeoutInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property timeoutInterval.
	 * 
	 * For further details take a look at the property definition: {@link #timeoutInterval}.
	 * 
	 */
	setTimeoutInterval : vjo.NEEDS_IMPL
})
.endType();