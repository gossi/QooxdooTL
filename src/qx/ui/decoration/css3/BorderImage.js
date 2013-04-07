/**
 * Decorator, which uses the CSS3 border image properties.
 * 
 * This decorator can be used as replacement for {@link qx.ui.layout.Grid},
 * {@link qx.ui.layout.HBox} and {@link qx.ui.layout.VBox} decorators in
 * browsers, which support it.
 * 
 * Supported browsers are:
 * 
 *   Firefox >= 3.5
 *   Safari >= 4
 *   Chrome >= 3

 */
//>public
vjo.ctype('qx.ui.decoration.css3.BorderImage')
.inherits('qx.ui.decoration.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties borderImage, repeatX, repeatY, sliceBottom, sliceLeft, sliceRight and sliceTop.
	 * 
	 * For further details take a look at the property definitions: {@link #borderImage}, {@link #repeatX}, {@link #repeatY}, {@link #sliceBottom}, {@link #sliceLeft}, {@link #sliceRight} and {@link #sliceTop}.
	 * 
	 */
	_applyStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 */
	_isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Resolve the url of the given image
	 * 
	 */
	_resolveImageUrl : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property borderImage.
	 * 
	 * For further details take a look at the property definition: {@link #borderImage}.
	 * 
	 */
	getBorderImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	getFill : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property repeatX.
	 * 
	 * For further details take a look at the property definition: {@link #repeatX}.
	 * 
	 */
	getRepeatX : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property repeatY.
	 * 
	 * For further details take a look at the property definition: {@link #repeatY}.
	 * 
	 */
	getRepeatY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sliceBottom.
	 * 
	 * For further details take a look at the property definition: {@link #sliceBottom}.
	 * 
	 */
	getSliceBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sliceLeft.
	 * 
	 * For further details take a look at the property definition: {@link #sliceLeft}.
	 * 
	 */
	getSliceLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sliceRight.
	 * 
	 * For further details take a look at the property definition: {@link #sliceRight}.
	 * 
	 */
	getSliceRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property sliceTop.
	 * 
	 * For further details take a look at the property definition: {@link #sliceTop}.
	 * 
	 */
	getSliceTop : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property borderImage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #borderImage}.
	 * 
	 */
	initBorderImage : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property fill
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	initFill : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property repeatX
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #repeatX}.
	 * 
	 */
	initRepeatX : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property repeatY
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #repeatY}.
	 * 
	 */
	initRepeatY : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sliceBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sliceBottom}.
	 * 
	 */
	initSliceBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sliceLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sliceLeft}.
	 * 
	 */
	initSliceLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sliceRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sliceRight}.
	 * 
	 */
	initSliceRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property sliceTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #sliceTop}.
	 * 
	 */
	initSliceTop : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property fill equals true.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	isFill : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property borderImage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #borderImage}.
	 * 
	 */
	resetBorderImage : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property fill.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	resetFill : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property repeat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #repeat}.
	 * 
	 */
	resetRepeat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property repeatX.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #repeatX}.
	 * 
	 */
	resetRepeatX : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property repeatY.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #repeatY}.
	 * 
	 */
	resetRepeatY : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property slice.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #slice}.
	 * 
	 */
	resetSlice : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sliceBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sliceBottom}.
	 * 
	 */
	resetSliceBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sliceLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sliceLeft}.
	 * 
	 */
	resetSliceLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sliceRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sliceRight}.
	 * 
	 */
	resetSliceRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property sliceTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #sliceTop}.
	 * 
	 */
	resetSliceTop : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property borderImage.
	 * 
	 * For further details take a look at the property definition: {@link #borderImage}.
	 * 
	 */
	setBorderImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	setFill : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group repeat.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #repeat}.
	 * 
	 */
	setRepeat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property repeatX.
	 * 
	 * For further details take a look at the property definition: {@link #repeatX}.
	 * 
	 */
	setRepeatX : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property repeatY.
	 * 
	 * For further details take a look at the property definition: {@link #repeatY}.
	 * 
	 */
	setRepeatY : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group slice.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #slice}.
	 * 
	 */
	setSlice : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sliceBottom.
	 * 
	 * For further details take a look at the property definition: {@link #sliceBottom}.
	 * 
	 */
	setSliceBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sliceLeft.
	 * 
	 * For further details take a look at the property definition: {@link #sliceLeft}.
	 * 
	 */
	setSliceLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sliceRight.
	 * 
	 * For further details take a look at the property definition: {@link #sliceRight}.
	 * 
	 */
	setSliceRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sliceTop.
	 * 
	 * For further details take a look at the property definition: {@link #sliceTop}.
	 * 
	 */
	setSliceTop : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	toggleFill : vjo.NEEDS_IMPL
})
.endType();