/**
 * This mixin allows easily adding handlers for context menus on table columns.
 */
//>public
vjo.mtype('qx.ui.table.MTableContextMenu')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Return the registered context menu handler for a column.
	 * 
	 */
	getContextMenuHandler : vjo.NEEDS_IMPL,


	/**
	 * Add a handler for a context menu which is initiated in a specific
	 * column.
	 * 
	 */
	setContextMenuHandler : vjo.NEEDS_IMPL
})
.endType();