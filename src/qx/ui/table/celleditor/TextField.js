/**
 * A cell editor factory creating text fields.
 */
//>public
vjo.ctype('qx.ui.table.celleditor.TextField')
.inherits('qx.ui.table.celleditor.AbstractField')
.protos({
	/**
	 */
	_createEditor : vjo.NEEDS_IMPL,


	/**
	 */
	getCellEditorValue : vjo.NEEDS_IMPL
})
.endType();