/**
 * This mixin defines the contentPadding property, which is used
 * by widgets like the window or group box, which must have a property, which
 * defines the padding of an inner pane.
 * 
 * The including class must implement the method
 * _getContentPaddingTarget, which must return the widget on which
 * the padding should be applied.
 */
//>public
vjo.mtype('qx.ui.core.MContentPadding')
.protos({
	/**
	 * Applies changes of the property value of the properties contentPaddingBottom, contentPaddingLeft, contentPaddingRight and contentPaddingTop.
	 * 
	 * For further details take a look at the property definitions: {@link #contentPaddingBottom}, {@link #contentPaddingLeft}, {@link #contentPaddingRight} and {@link #contentPaddingTop}.
	 * 
	 */
	_applyContentPadding : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentPaddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingBottom}.
	 * 
	 */
	getContentPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentPaddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingLeft}.
	 * 
	 */
	getContentPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentPaddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingRight}.
	 * 
	 */
	getContentPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contentPaddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingTop}.
	 * 
	 */
	getContentPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentPaddingBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingBottom}.
	 * 
	 */
	initContentPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentPaddingLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingLeft}.
	 * 
	 */
	initContentPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentPaddingRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingRight}.
	 * 
	 */
	initContentPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contentPaddingTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingTop}.
	 * 
	 */
	initContentPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentPadding.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentPadding}.
	 * 
	 */
	resetContentPadding : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentPaddingBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingBottom}.
	 * 
	 */
	resetContentPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentPaddingLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingLeft}.
	 * 
	 */
	resetContentPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentPaddingRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingRight}.
	 * 
	 */
	resetContentPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contentPaddingTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingTop}.
	 * 
	 */
	resetContentPaddingTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group contentPadding.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #contentPadding}.
	 * 
	 */
	setContentPadding : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentPaddingBottom.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingBottom}.
	 * 
	 */
	setContentPaddingBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentPaddingLeft.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingLeft}.
	 * 
	 */
	setContentPaddingLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentPaddingRight.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingRight}.
	 * 
	 */
	setContentPaddingRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contentPaddingTop.
	 * 
	 * For further details take a look at the property definition: {@link #contentPaddingTop}.
	 * 
	 */
	setContentPaddingTop : vjo.NEEDS_IMPL
})
.endType();