/**
 * A cell renderer for data cells.
 */
//>public
vjo.itype('qx.ui.table.ICellRenderer')
.protos({
	/**
	 * Creates the HTML for a data cell.
	 * 
	 * The cellInfo map contains the following properties:
	 * 
	 * value (var): the cell&#8217;s value.
	 * rowData (var): contains the row data for the row, the cell belongs to.
	 *   The kind of this object depends on the table model, see
	 *   {@link qx.ui.table.ITableModel#getRowData}
	 * row (int): the model index of the row the cell belongs to.
	 * col (int): the model index of the column the cell belongs to.
	 * table (qx.ui.table.Table): the table the cell belongs to.
	 * xPos (int): the x position of the cell in the table pane.
	 * selected (boolean): whether the cell is selected.
	 * focusedRow (boolean): whether the cell is in the same row as the
	 *   focused cell.
	 * editable (boolean): whether the cell is editable.
	 * style (string): The CSS styles that should be applied to the outer HTML
	 *   element.
	 * styleLeft (string): The left position of the cell.
	 * styleWidth (string): The cell&#8217;s width (pixel).
	 * styleHeight (string): The cell&#8217;s height (pixel).

	 * 
	 */
	createDataCellHtml : vjo.NEEDS_IMPL
})
.endType();