/**
 * This Cellrender is for transparent use, without escaping! Use this Cellrender
 * to output plain HTML content.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Html')
.inherits('qx.ui.table.cellrenderer.Conditional')
.protos({
	/**
	 */
	_getCellClass : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL
})
.endType();