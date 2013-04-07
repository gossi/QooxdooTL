/**
 * Core effect &#8220;Highlight&#8221;
 * 
 * Cycles the background color of the element from initial to final color.
 */
//>public
vjo.ctype('qx.fx.effect.core.Highlight')
.inherits('qx.fx.Base')
.protos({
	/**
	 * Helper function to restore style attributes
	 * to the state before the effect was started.
	 * 
	 */
	_restore : vjo.NEEDS_IMPL,


	/**
	 */
	finish : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	getEndColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property keepBackgroundImage.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	getKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property restoreBackground.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	getRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property startColor.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	getStartColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property endColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	initEndColor : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property keepBackgroundImage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	initKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property restoreBackground
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	initRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property startColor
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	initStartColor : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property keepBackgroundImage equals true.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	isKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property restoreBackground equals true.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	isRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property endColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	resetEndColor : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property keepBackgroundImage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	resetKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property restoreBackground.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	resetRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property startColor.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	resetStartColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	setEndColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property keepBackgroundImage.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	setKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property restoreBackground.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	setRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property startColor.
	 * 
	 * For further details take a look at the property definition: {@link #startColor}.
	 * 
	 */
	setStartColor : vjo.NEEDS_IMPL,


	/**
	 */
	setup : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property keepBackgroundImage.
	 * 
	 * For further details take a look at the property definition: {@link #keepBackgroundImage}.
	 * 
	 */
	toggleKeepBackgroundImage : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property restoreBackground.
	 * 
	 * For further details take a look at the property definition: {@link #restoreBackground}.
	 * 
	 */
	toggleRestoreBackground : vjo.NEEDS_IMPL,


	/**
	 */
	update : vjo.NEEDS_IMPL
})
.endType();