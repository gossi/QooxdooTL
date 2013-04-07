/**
 * Table Cell Renderer for Progressive.
 */
//>public
vjo.ctype('qx.ui.progressive.renderer.table.cell.String')
.inherits('qx.ui.progressive.renderer.table.cell.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL
})
.endType();