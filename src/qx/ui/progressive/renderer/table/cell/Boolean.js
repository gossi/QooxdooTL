/**
 * Table Cell Boolean Renderer.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.cell.Boolean')
.inherits('qx.ui.progressive.renderer.table.cell.Icon')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Resolve the boolean images using the alias and resource manager.
	 * 
	 */
	__resolveImages : vjo.NEEDS_IMPL,


	/**
	 */
	_getCellStyle : vjo.NEEDS_IMPL,


	/**
	 */
	_identifyImage : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property allowToggle.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	getAllowToggle : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property allowToggle
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	initAllowToggle : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property allowToggle equals true.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	isAllowToggle : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property allowToggle.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	resetAllowToggle : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property allowToggle.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	setAllowToggle : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property allowToggle.
	 * 
	 * For further details take a look at the property definition: {@link #allowToggle}.
	 * 
	 */
	toggleAllowToggle : vjo.NEEDS_IMPL
})
.endType();