/**
 * Combination effect &#8220;Drop Out&#8221;
 * 
 * Moves the element to the given direction while fading it out.
 */
//>public
vjo.ctype('qx.fx.effect.combination.Drop')
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
	 * Returns the (computed) value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	getMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	getModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property xAmount.
	 * 
	 * For further details take a look at the property definition: {@link #xAmount}.
	 * 
	 */
	getXAmount : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property yAmount.
	 * 
	 * For further details take a look at the property definition: {@link #yAmount}.
	 * 
	 */
	getYAmount : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property mode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	initMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property modifyDisplay
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	initModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property xAmount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #xAmount}.
	 * 
	 */
	initXAmount : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property yAmount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #yAmount}.
	 * 
	 */
	initYAmount : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property modifyDisplay equals true.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	isModifyDisplay : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property mode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	resetMode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property modifyDisplay.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	resetModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property xAmount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #xAmount}.
	 * 
	 */
	resetXAmount : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property yAmount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #yAmount}.
	 * 
	 */
	resetYAmount : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property direction.
	 * 
	 * For further details take a look at the property definition: {@link #direction}.
	 * 
	 */
	setDirection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	setMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	setModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property xAmount.
	 * 
	 * For further details take a look at the property definition: {@link #xAmount}.
	 * 
	 */
	setXAmount : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property yAmount.
	 * 
	 * For further details take a look at the property definition: {@link #yAmount}.
	 * 
	 */
	setYAmount : vjo.NEEDS_IMPL,


	/**
	 */
	start : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	toggleModifyDisplay : vjo.NEEDS_IMPL
})
.endType();