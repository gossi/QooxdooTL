/**
 * EXPERIMENTAL!
 * 
 * Cell selection manager
 */
//>public
vjo.ctype('qx.ui.virtual.selection.CellLines')
.inherits('qx.ui.virtual.selection.CellRectangle')
.protos({
	/**
	 */
	_getSelectableRange : vjo.NEEDS_IMPL
})
.endType();