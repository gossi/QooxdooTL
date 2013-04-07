/**
 * This class stores the information needed to instruct a running test to wait.
 *  It is thrown as an exception to be caught by the method executing the test.
 */
//>public
vjo.ctype('qx.dev.unit.AsyncWrapper')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property context.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	getContext : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property deferredFunction.
	 * 
	 * For further details take a look at the property definition: {@link #deferredFunction}.
	 * 
	 */
	getDeferredFunction : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delay.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	getDelay : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property context
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	initContext : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property deferredFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #deferredFunction}.
	 * 
	 */
	initDeferredFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delay
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	initDelay : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property context.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	resetContext : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property deferredFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #deferredFunction}.
	 * 
	 */
	resetDeferredFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delay.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	resetDelay : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property context.
	 * 
	 * For further details take a look at the property definition: {@link #context}.
	 * 
	 */
	setContext : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property deferredFunction.
	 * 
	 * For further details take a look at the property definition: {@link #deferredFunction}.
	 * 
	 */
	setDeferredFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delay.
	 * 
	 * For further details take a look at the property definition: {@link #delay}.
	 * 
	 */
	setDelay : vjo.NEEDS_IMPL
})
.endType();