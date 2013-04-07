/**
 * A template class for cell renderer, which display images. Concrete
 * implementations must implement the method {@link #_identifyImage}.
 */
//>public abstract
vjo.ctype('qx.ui.table.cellrenderer.AbstractImage')
.inherits('qx.ui.table.cellrenderer.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Compute the size of the given image
	 * 
	 */
	__getImageSize : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellAttributes : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellClass : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Retrieves the image infos.
	 * 
	 */
	_getImageInfos : vjo.NEEDS_IMPL,


	/**
	 * Identifies the Image to show. This is a template method, which must be
	 * implemented by sub classes.
	 * 
	 */
	_identifyImage : vjo.NEEDS_IMPL,


	/**
	 */
	createDataCellHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property repeat.
	 * 
	 * For further details take a look at the property definition: {@link #repeat}.
	 * 
	 */
	getRepeat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property repeat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #repeat}.
	 * 
	 */
	initRepeat : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property repeat.
	 * 
	 * For further details take a look at the property definition: {@link #repeat}.
	 * 
	 */
	setRepeat : vjo.NEEDS_IMPL
})
.endType();