/**
 * Delegate to customize a virtual list.
 * 
 * List delegates can choose to implement any subset of the methods defined in
 * this interface.
 * 
 * EXPERIMENTAL!
 */
//>public
vjo.itype('qx.ui.virtual.form.IListDelegate')
.protos({
	/**
	 * Get the cell data of the given row
	 * 
	 */
	getCellData : vjo.NEEDS_IMPL,


	/**
	 * Get the cell renderer for the given row.
	 * 
	 */
	getCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Whether the given row is selectable
	 * 
	 */
	isRowSelectable : vjo.NEEDS_IMPL
})
.endType();