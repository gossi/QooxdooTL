/**
 * Interface for a row renderer.
 */
//>public
vjo.itype('qx.ui.table.IRowRenderer')
.protos({
	/**
	 * Create a style string, which will be set as the style property of the row.
	 * 
	 */
	createRowStyle : vjo.NEEDS_IMPL,


	/**
	 * Create a HTML class string, which will be set as the class property of the row.
	 * 
	 */
	getRowClass : vjo.NEEDS_IMPL,


	/**
	 * Get the row&#8217;s height CSS style taking the box model into account
	 * 
	 */
	getRowHeightStyle : vjo.NEEDS_IMPL,


	/**
	 * Updates a data row.
	 * 
	 * The rowInfo map contains the following properties:
	 * 
	 * rowData (var): contains the row data for the row.
	 *   The kind of this object depends on the table model, see
	 *   {@link ITableModel#getRowData()}
	 * row (int): the model index of the row.
	 * selected (boolean): whether a cell in this row is selected.
	 * focusedRow (boolean): whether the focused cell is in this row.
	 * table (qx.ui.table.Table): the table the row belongs to.

	 * 
	 */
	updateDataRowElement : vjo.NEEDS_IMPL
})
.endType();