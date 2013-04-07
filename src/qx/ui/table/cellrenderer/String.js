/**
 * The string data cell renderer. All it does is escape the incoming String
 * values.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.String')
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