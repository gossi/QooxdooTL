/**
 * A model that contains all meta data about columns, such as width, renderer,
 * visibility and order.
 */
//>public
vjo.ctype('qx.ui.table.columnmodel.Basic')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the map that translates model indexes to x positions.
	 * 
	 * The returned map contains for a model index (int) a map having two
	 * properties: overX (the overall x position of the column, int) and
	 * visX (the visible x position of the column, int). visX is missing for
	 * hidden columns.
	 * 
	 */
	_getColToXPosMap : vjo.NEEDS_IMPL,


	/**
	 * Returns the cell editor factory of a column.
	 * 
	 */
	getCellEditorFactory : vjo.NEEDS_IMPL,


	/**
	 * Returns the width of a column.
	 * 
	 */
	getColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Returns the data renderer of a column.
	 * 
	 */
	getDataCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the header renderer of a column.
	 * 
	 */
	getHeaderCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of a column at a certain overall x position.
	 * 
	 */
	getOverallColumnAtX : vjo.NEEDS_IMPL,


	/**
	 * Returns the overall number of columns (including hidden columns).
	 * 
	 */
	getOverallColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the overall x position of a column.
	 * 
	 */
	getOverallX : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of a column at a certain visible x position.
	 * 
	 */
	getVisibleColumnAtX : vjo.NEEDS_IMPL,


	/**
	 * Returns the number of visible columns.
	 * 
	 */
	getVisibleColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Return the array of visible columns
	 * 
	 */
	getVisibleColumns : vjo.NEEDS_IMPL,


	/**
	 * Returns the visible x position of a column.
	 * 
	 */
	getVisibleX : vjo.NEEDS_IMPL,


	/**
	 * Initializes the column model.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Returns whether a certain column is visible.
	 * 
	 */
	isColumnVisible : vjo.NEEDS_IMPL,


	/**
	 * Moves a column.
	 * 
	 */
	moveColumn : vjo.NEEDS_IMPL,


	/**
	 * Sets the cell editor factory of a column.
	 * 
	 */
	setCellEditorFactory : vjo.NEEDS_IMPL,


	/**
	 * Reorders all columns to new overall positions. Will fire one &#8220;orderChanged&#8221; event
	 * without data afterwards
	 * 
	 */
	setColumnsOrder : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a certain column is visible.
	 * 
	 */
	setColumnVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the width of a column.
	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the data renderer of a column.
	 * 
	 */
	setDataCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Sets the header renderer of a column.
	 * 
	 */
	setHeaderCellRenderer : vjo.NEEDS_IMPL
})
.endType();