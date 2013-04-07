/**
 * Core effect &#8220;Scale&#8221;
 * 
 * This effect scales the specified element (and its content, optionally) by given percentages.
 */
//>public
vjo.ctype('qx.fx.effect.core.Scale')
.inherits('qx.fx.Base')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper function which sets element&#8217;s
	 * dimensions to the given values and (optionally)
	 * moves it to scale centered.
	 * 
	 */
	_setDimensions : vjo.NEEDS_IMPL,


	/**
	 */
	finish : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alternateDimensions.
	 * 
	 * For further details take a look at the property definition: {@link #alternateDimensions}.
	 * 
	 */
	getAlternateDimensions : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property restoreAfterFinish.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	getRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleContent.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	getScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleFrom.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFrom}.
	 * 
	 */
	getScaleFrom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleFromCenter.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	getScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleTo.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTo}.
	 * 
	 */
	getScaleTo : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleX.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	getScaleX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scaleY.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	getScaleY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alternateDimensions
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alternateDimensions}.
	 * 
	 */
	initAlternateDimensions : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property restoreAfterFinish
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	initRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleContent
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	initScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleFrom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFrom}.
	 * 
	 */
	initScaleFrom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleFromCenter
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	initScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleTo
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTo}.
	 * 
	 */
	initScaleTo : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	initScaleX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property scaleY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	initScaleY : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property restoreAfterFinish equals true.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	isRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scaleContent equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	isScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scaleFromCenter equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	isScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scaleX equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	isScaleX : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property scaleY equals true.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	isScaleY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alternateDimensions.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alternateDimensions}.
	 * 
	 */
	resetAlternateDimensions : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property restoreAfterFinish.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	resetRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleContent.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	resetScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleFrom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFrom}.
	 * 
	 */
	resetScaleFrom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleFromCenter.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	resetScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleTo.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTo}.
	 * 
	 */
	resetScaleTo : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	resetScaleX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property scaleY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	resetScaleY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alternateDimensions.
	 * 
	 * For further details take a look at the property definition: {@link #alternateDimensions}.
	 * 
	 */
	setAlternateDimensions : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property restoreAfterFinish.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	setRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleContent.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	setScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleFrom.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFrom}.
	 * 
	 */
	setScaleFrom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleFromCenter.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	setScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleTo.
	 * 
	 * For further details take a look at the property definition: {@link #scaleTo}.
	 * 
	 */
	setScaleTo : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleX.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	setScaleX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scaleY.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	setScaleY : vjo.NEEDS_IMPL,


	/**
	 */
	setup : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property restoreAfterFinish.
	 * 
	 * For further details take a look at the property definition: {@link #restoreAfterFinish}.
	 * 
	 */
	toggleRestoreAfterFinish : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scaleContent.
	 * 
	 * For further details take a look at the property definition: {@link #scaleContent}.
	 * 
	 */
	toggleScaleContent : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scaleFromCenter.
	 * 
	 * For further details take a look at the property definition: {@link #scaleFromCenter}.
	 * 
	 */
	toggleScaleFromCenter : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scaleX.
	 * 
	 * For further details take a look at the property definition: {@link #scaleX}.
	 * 
	 */
	toggleScaleX : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property scaleY.
	 * 
	 * For further details take a look at the property definition: {@link #scaleY}.
	 * 
	 */
	toggleScaleY : vjo.NEEDS_IMPL,


	/**
	 */
	update : vjo.NEEDS_IMPL
})
.endType();