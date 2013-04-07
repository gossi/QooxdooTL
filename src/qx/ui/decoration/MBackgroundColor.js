/**
 * Mixin responsible for setting the background color of a widget.
 * This mixin is usually used by {@link qx.ui.decoration.DynamicDecorator}.
 */
//>public
vjo.mtype('qx.ui.decoration.MBackgroundColor')
.protos({
	/**
	 * Applies changes of the property value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	_applyBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Resize function for the background color. This is suitable for the
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_resizeBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Tint function for the background color. This is suitable for the
	 * {@link qx.ui.decoration.DynamicDecorator}.
	 * 
	 */
	_tintBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	getBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backgroundColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	initBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backgroundColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	resetBackgroundColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backgroundColor.
	 * 
	 * For further details take a look at the property definition: {@link #backgroundColor}.
	 * 
	 */
	setBackgroundColor : vjo.NEEDS_IMPL
})
.endType();