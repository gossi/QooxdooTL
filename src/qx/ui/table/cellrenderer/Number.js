/**
 * Specific data cell renderer for numbers.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Number')
.inherits('qx.ui.table.cellrenderer.Conditional')
.protos({
	/**
	 */
	_getCellClass : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property numberFormat.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	getNumberFormat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property numberFormat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	initNumberFormat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property numberFormat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	resetNumberFormat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property numberFormat.
	 * 
	 * For further details take a look at the property definition: {@link #numberFormat}.
	 * 
	 */
	setNumberFormat : vjo.NEEDS_IMPL
})
.endType();