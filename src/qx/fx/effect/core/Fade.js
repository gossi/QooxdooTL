/**
 * Core effect &#8220;Fade&#8221;
 * 
 * Fades in the specified element: it changes to opacity from a given value to
 * another. If target value is 0, it will hide the element, if value is 1, it
 * will show it using the &#8220;display&#8221; property.
 * You can toggle this behavior using the &#8220;modifyDisplay&#8221; property:
 * {@link qx.fx.effect.core.Fade#modifyDisplay}.
 */
//>public
vjo.ctype('qx.fx.effect.core.Fade')
.inherits('qx.fx.Base')
.protos({
	/**
	 */
	afterFinishInternal : vjo.NEEDS_IMPL,


	/**
	 */
	beforeSetup : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	getModifyDisplay : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	setModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property modifyDisplay.
	 * 
	 * For further details take a look at the property definition: {@link #modifyDisplay}.
	 * 
	 */
	toggleModifyDisplay : vjo.NEEDS_IMPL,


	/**
	 */
	update : vjo.NEEDS_IMPL
})
.endType();