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
vjo.ctype('qx.ui.decoration.GridDiv')
.inherits('qx.ui.decoration.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	_applyBaseImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the sizes of the &#8220;top&#8221; and &#8220;bottom&#8221; heights and the &#8220;left&#8221; and
	 * &#8220;right&#8221; widths of the grid.
	 * 
	 */
	_computeEdgeSizes : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	getBaseImage : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property baseImage.
	 * 
	 * For further details take a look at the property definition: {@link #baseImage}.
	 * 
	 */
	setBaseImage : vjo.NEEDS_IMPL
})
.endType();