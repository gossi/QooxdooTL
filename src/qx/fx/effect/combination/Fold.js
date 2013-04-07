/**
 * Combination effect &#8220;Fold&#8221;
 * 
 * Shrinks the element in width and height until it gets invisible.
 */
//>public
vjo.ctype('qx.fx.effect.combination.Fold')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Restores style properties of animated element
	 * after effect has finished.
	 * 
	 */
	_cleanUp : vjo.NEEDS_IMPL,


	/**
	 * Retrieves style properties from element.
	 * 
	 */
	_getStyle : vjo.NEEDS_IMPL,


	/**
	 */
	afterFinish : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property modifyDisplay equals true.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	isModifyDisplay : vjo.NEEDS_IMPL,


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