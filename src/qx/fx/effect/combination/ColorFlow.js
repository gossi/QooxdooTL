/**
 * Combination effect &#8220;Color Flow&#8221;
 * Changes the background color of an element to a given initial. After that the
 * effects waits a given amount of time before it modifies to background color
 * back to the initial value.
 */
//>public
vjo.ctype('qx.fx.effect.combination.ColorFlow')
.inherits('qx.fx.Base')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backwardDuration.
	 * 
	 * For further details take a look at the property definition: {@link #backwardDuration}.
	 * 
	 */
	getBackwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property backwardTransition.
	 * 
	 * For further details take a look at the property definition: {@link #backwardTransition}.
	 * 
	 */
	getBackwardTransition : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delayBetween.
	 * 
	 * For further details take a look at the property definition: {@link #delayBetween}.
	 * 
	 */
	getDelayBetween : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	getEndColor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property forwardDuration.
	 * 
	 * For further details take a look at the property definition: {@link #forwardDuration}.
	 * 
	 */
	getForwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property forwardTransition.
	 * 
	 * For further details take a look at the property definition: {@link #forwardTransition}.
	 * 
	 */
	getForwardTransition : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property backwardDuration
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backwardDuration}.
	 * 
	 */
	initBackwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property backwardTransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #backwardTransition}.
	 * 
	 */
	initBackwardTransition : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delayBetween
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delayBetween}.
	 * 
	 */
	initDelayBetween : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property forwardDuration
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #forwardDuration}.
	 * 
	 */
	initForwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property forwardTransition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #forwardTransition}.
	 * 
	 */
	initForwardTransition : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property backwardDuration.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backwardDuration}.
	 * 
	 */
	resetBackwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property backwardTransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #backwardTransition}.
	 * 
	 */
	resetBackwardTransition : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delayBetween.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delayBetween}.
	 * 
	 */
	resetDelayBetween : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property forwardDuration.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #forwardDuration}.
	 * 
	 */
	resetForwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property forwardTransition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #forwardTransition}.
	 * 
	 */
	resetForwardTransition : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property backwardDuration.
	 * 
	 * For further details take a look at the property definition: {@link #backwardDuration}.
	 * 
	 */
	setBackwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property backwardTransition.
	 * 
	 * For further details take a look at the property definition: {@link #backwardTransition}.
	 * 
	 */
	setBackwardTransition : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delayBetween.
	 * 
	 * For further details take a look at the property definition: {@link #delayBetween}.
	 * 
	 */
	setDelayBetween : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property endColor.
	 * 
	 * For further details take a look at the property definition: {@link #endColor}.
	 * 
	 */
	setEndColor : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property forwardDuration.
	 * 
	 * For further details take a look at the property definition: {@link #forwardDuration}.
	 * 
	 */
	setForwardDuration : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property forwardTransition.
	 * 
	 * For further details take a look at the property definition: {@link #forwardTransition}.
	 * 
	 */
	setForwardTransition : vjo.NEEDS_IMPL,


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
	start : vjo.NEEDS_IMPL,


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
	toggleRestoreBackground : vjo.NEEDS_IMPL
})
.endType();