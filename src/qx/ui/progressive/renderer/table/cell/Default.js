/**
 * Table Cell Renderer for Progressive.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.cell.Default')
.inherits('qx.ui.progressive.renderer.table.cell.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Formats a value in a reasonably predictable fashion.
	 * 
	 */
	_formatValue : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL
})
.endType();