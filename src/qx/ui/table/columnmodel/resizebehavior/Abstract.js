/**
 * An abstract resize behavior.  All resize behaviors should extend this
 * class.
 */
//>public abstract
vjo.ctype('qx.ui.table.columnmodel.resizebehavior.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 * Determine the inner width available to columns in the table.
	 * 
	 */
	_getAvailableWidth : vjo.NEEDS_IMPL,


	/**
	 * Called when the ResizeTableColumnModel is initialized, and upon loading of
	 * a new TableModel, to allow the Resize Behaviors to know how many columns
	 * are in use.
	 * 
	 */
	_setNumColumns : vjo.NEEDS_IMPL,


	/**
	 * Called when the table has first been rendered.
	 * 
	 */
	onAppear : vjo.NEEDS_IMPL,


	/**
	 * Called when a column width is changed.
	 * 
	 */
	onColumnWidthChanged : vjo.NEEDS_IMPL,


	/**
	 * Called when the table width changes due to either a window size change
	 * or a parent object changing size causing the table to change size.
	 * 
	 */
	onTableWidthChanged : vjo.NEEDS_IMPL,


	/**
	 * Called when the use of vertical scroll bar in the table changes, either
	 * from present to not present, or vice versa.
	 * 
	 */
	onVerticalScrollBarChanged : vjo.NEEDS_IMPL,


	/**
	 * Called when a column visibility is changed.
	 * 
	 */
	onVisibilityChanged : vjo.NEEDS_IMPL
})
.endType();