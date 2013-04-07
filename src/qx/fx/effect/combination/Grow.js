/**
 * Combination effect &#8220;Grow&#8221;
 * 
 * Resizes the element from initial dimensions to final dimensions.
 */
//>public
vjo.ctype('qx.fx.effect.combination.Grow')
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
	 * Returns the (computed) value of the property moveTransition.
	 * 
	 * For further details take a look at the property definition: {@link #moveTransition}.
	 * 
	 */
	getMoveTransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleTransition.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTransition}.
	 * 
	 */
	getScaleTransition : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property moveTransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #moveTransition}.
	 * 
	 */
	initMoveTransition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleTransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTransition}.
	 * 
	 */
	initScaleTransition : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property moveTransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #moveTransition}.
	 * 
	 */
	resetMoveTransition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleTransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTransition}.
	 * 
	 */
	resetScaleTransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property direction.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	setDirection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property moveTransition.
	 * 
	 * For further details take a look at the property definition: {@link #moveTransition}.
	 * 
	 */
	setMoveTransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleTransition.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTransition}.
	 * 
	 */
	setScaleTransition : vjo.NEEDS_IMPL,


	/**
	 */
	setup : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL
})
.endType();