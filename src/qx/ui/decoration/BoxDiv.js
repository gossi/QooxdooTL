/**
 * Abstract base class for the HBox and VBox decorators.
 * 
 * This decorator uses three images, which are positioned in a vertical/horizontal
 * line. The first and last image always keep their original size. The center
 * image is stretched.
 */
//>public
vjo.ctype('qx.ui.decoration.BoxDiv')
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
	 */
	_getDefaultInsets : vjo.NEEDS_IMPL,


	/**
	 */
	_isInitialized : vjo.NEEDS_IMPL,


	/**
	 * Helper to set the orientation.
	 * 
	 */
	_setOrientation : vjo.NEEDS_IMPL,


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