/**
 * EXPERIMENTAL!
 * 
 * An extended HtmlCell layer, which adds the possibility to specify row and
 * column spans for specific cells.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.HtmlCellSpan')
.inherits('qx.ui.virtual.layer.HtmlCell')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Renders a cell
	 * 
	 */
	__renderCell : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Set the row and column span for a specific cell
	 * 
	 */
	setCellSpan : vjo.NEEDS_IMPL
})
.endType();