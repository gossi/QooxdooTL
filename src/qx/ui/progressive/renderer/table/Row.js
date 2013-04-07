/**
 * Table Row renderer for Progressive.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.Row')
.inherits('qx.ui.progressive.renderer.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper to link the theme colors to the current class
	 * 
	 */
	__linkColors : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the &#8220;resize&#8221; event.  We recalculate the
	 * widths of each of the columns, and modify the stylesheet rule
	 * applicable to each column, to apply the new widths.
	 * 
	 */
	_resizeColumns : vjo.NEEDS_IMPL,


	/**
	 * Add a cell renderer for use within a row rendered by this row
	 * renderer.
	 * 
	 */
	addRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultRowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #defaultRowHeight}.
	 * 
	 */
	getDefaultRowHeight : vjo.NEEDS_IMPL,


	/**
	 * This method is required by the box layout. If returns an array of items
	 * to relayout.
	 * 
	 */
	getLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultRowHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultRowHeight}.
	 * 
	 */
	initDefaultRowHeight : vjo.NEEDS_IMPL,


	/**
	 */
	join : vjo.NEEDS_IMPL,


	/**
	 * Remove a cell renderer previously added with {@link #addRenderer}.
	 * 
	 */
	removeRenderer : vjo.NEEDS_IMPL,


	/**
	 */
	render : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultRowHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultRowHeight}.
	 * 
	 */
	resetDefaultRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultRowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #defaultRowHeight}.
	 * 
	 */
	setDefaultRowHeight : vjo.NEEDS_IMPL
})
.endType();