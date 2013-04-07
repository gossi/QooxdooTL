/**
 * A debug cell editor.  This displays cellInfo.value using
 * {@link qx.dev.Debug#debugObjectToString} so is useful as a starting point
 * during development of a table, before writing each of the cell renderers.
 */
//>public
vjo.ctype('qx.ui.table.cellrenderer.Debug')
.inherits('qx.ui.table.cellrenderer.Abstract')
.protos({
	/**
	 */
	_getContentHtml : vjo.NEEDS_IMPL
})
.endType();