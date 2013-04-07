/**
 * A very complex decoration using two, partly combined and clipped images
 * to render a graphically impressive borders with gradients.
 * 
 * The decoration supports all forms of vertical gradients. The gradients must
 * be stretchable to support different heights.
 * 
 * The edges could use different styles of rounded borders. Even different
 * edge sizes are supported. The sizes are automatically detected by
 * the build system using the image meta data.
 * 
 * The decoration uses clipped images to reduce the number of external
 * resources to load.
 */
//>public
vjo.ctype('qx.ui.decoration.Grid')
.inherits('qx.core.Object')
.satisfies('qx.ui.decoration.IDecorator')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Configures the border image decorator
	 * 
	 */
	__setBorderImage : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	_applyBaseImage : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	_applyFill : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties insetBottom, insetLeft, insetRight and insetTop.
	 * 
	 * For further details take a look at the property definitions: {@link #insetBottom}, {@link #insetLeft}, {@link #insetRight} and {@link #insetTop}.
	 * 
	 */
	_applyInsets : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the properties sliceBottom, sliceLeft, sliceRight and sliceTop.
	 * 
	 * For further details take a look at the property definitions: {@link #sliceBottom}, {@link #sliceLeft}, {@link #sliceRight} and {@link #sliceTop}.
	 * 
	 */
	_applySlices : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	getBaseImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	getFill : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	getInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	getInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetRight.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	getInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property insetTop.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	getInsetTop : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property baseImage
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	initBaseImage : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property insetBottom
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	initInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetLeft
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	initInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetRight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	initInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property insetTop
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	initInsetTop : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property baseImage.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	resetBaseImage : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property insetBottom.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	resetInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetLeft.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	resetInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetRight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	resetInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insets.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insets}.
	 * 
	 */
	resetInsets : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property insetTop.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	resetInsetTop : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property slices.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #slices}.
	 * 
	 */
	resetSlices : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	setBaseImage : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fill.
	 * 
	 * For further details take a look at the property definition: {@link #fill}.
	 * 
	 */
	setFill : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetBottom.
	 * 
	 * For further details take a look at the property definition: {@link #insetBottom}.
	 * 
	 */
	setInsetBottom : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetLeft.
	 * 
	 * For further details take a look at the property definition: {@link #insetLeft}.
	 * 
	 */
	setInsetLeft : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetRight.
	 * 
	 * For further details take a look at the property definition: {@link #insetRight}.
	 * 
	 */
	setInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Sets the values of the property group insets.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #insets}.
	 * 
	 */
	setInsets : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property insetTop.
	 * 
	 * For further details take a look at the property definition: {@link #insetTop}.
	 * 
	 */
	setInsetTop : vjo.NEEDS_IMPL,


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
	 * Sets the values of the property group slices.
	 * 
	 * This setter supports a shorthand mode compatible with the way margins and paddins are set in CSS.
	 * 
	 * For further details take a look at the property definition: {@link #slices}.
	 * 
	 */
	setSlices : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property sliceTop.
	 * 
	 * For further details take a look at the property definition: {@link #sliceTop}.
	 * 
	 */
	setSliceTop : vjo.NEEDS_IMPL
})
.endType();