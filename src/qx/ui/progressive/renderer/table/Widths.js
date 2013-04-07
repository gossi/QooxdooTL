/**
 * Column width array for a whole set of columns
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.Widths')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Get the array of column data.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Set the width, minimum width and/or maximum width of a column at one
	 * time.
	 * 
	 */
	set : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum width of a column.
	 * 
	 */
	setMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the minimum width of a column.
	 * 
	 */
	setMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the width of a column.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL
})
.endType();