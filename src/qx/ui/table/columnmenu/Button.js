/**
 * The traditional qx.ui.menu.MenuButton to access the column visibility menu.
 */
//>public
vjo.ctype('qx.ui.table.columnmenu.Button')
.inherits('qx.ui.form.MenuButton')
.satisfies('qx.ui.table.IColumnMenuButton')
.protos({
	/**
	 * Create a new instance of a column visibility menu button. This button
	 * also contains the factory for creating each of the sub-widgets.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker of the columnmenu button.
	 * 
	 */
	getBlocker : vjo.NEEDS_IMPL
})
.endType();