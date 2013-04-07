/**
 * The default data cell renderer.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Default')
.inherits('qx.ui.table.cellrenderer.Abstract')
.protos({
	/**
	 * Formats a value.
	 * 
	 */
	_formatValue : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellClass : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Determines the styles to apply to the cell
	 * 
	 */
	_getStyleFlags : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useAutoAlign.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	getUseAutoAlign : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useAutoAlign
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	initUseAutoAlign : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useAutoAlign equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	isUseAutoAlign : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useAutoAlign.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	resetUseAutoAlign : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useAutoAlign.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	setUseAutoAlign : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useAutoAlign.
	 * 
	 * For further details take a look at the property definition: {@link #useAutoAlign}.
	 * 
	 */
	toggleUseAutoAlign : vjo.NEEDS_IMPL
})
.endType();