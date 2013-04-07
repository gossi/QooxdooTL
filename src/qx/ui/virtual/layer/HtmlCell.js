/**
 * EXPERIMENTAL!
 * 
 * The HtmlCell layer renders each cell with custom HTML markup. The concrete
 * markup for each cell is provided by a cell provider.
 */
//>public
vjo.ctype('qx.ui.virtual.layer.HtmlCell')
.inherits('qx.ui.virtual.layer.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_fullUpdate : vjo.NEEDS_IMPL,


	/**
	 * Get the cell size taking the box model into account
	 * 
	 */
	_getCellSizeStyle : vjo.NEEDS_IMPL
})
.endType();