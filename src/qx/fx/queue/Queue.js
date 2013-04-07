/**
 * This queue manages ordering and rendering of effects.
 */
//>public
vjo.ctype('qx.fx.queue.Queue')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method adds the given effect to the queue and starts the timer (if necessary).
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property limit.
	 * 
	 * For further details take a look at the property definition: {@link #limit}.
	 * 
	 */
	getLimit : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property limit
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #limit}.
	 * 
	 */
	initLimit : vjo.NEEDS_IMPL,


	/**
	 * This method executes all effects in queue.
	 * 
	 */
	loop : vjo.NEEDS_IMPL,


	/**
	 * This method removes the given effect from the queue.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property limit.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #limit}.
	 * 
	 */
	resetLimit : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property limit.
	 * 
	 * For further details take a look at the property definition: {@link #limit}.
	 * 
	 */
	setLimit : vjo.NEEDS_IMPL
})
.endType();