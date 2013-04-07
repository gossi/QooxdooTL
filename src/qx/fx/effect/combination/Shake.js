/**
 * Combination effect &#8220;Shake&#8221;
 * 
 * Moves the element forwards and backwards several times.
 */
//>public
vjo.ctype('qx.fx.effect.combination.Shake')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property direction.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	getDirection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property distance.
	 * 
	 * For further details take a look at the property definition: {@link #distance}.
	 * 
	 */
	getDistance : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property direction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	initDirection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property distance
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #distance}.
	 * 
	 */
	initDistance : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property direction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	resetDirection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property distance.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #distance}.
	 * 
	 */
	resetDistance : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property direction.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	setDirection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property distance.
	 * 
	 * For further details take a look at the property definition: {@link #distance}.
	 * 
	 */
	setDistance : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL
})
.endType();