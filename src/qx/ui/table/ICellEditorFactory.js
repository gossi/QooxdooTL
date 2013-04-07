/**
 * A factory creating widgets to use for editing table cells.
 */
//>public
vjo.itype('qx.ui.table.ICellEditorFactory')
.protos({
	/**
	 * Creates a cell editor.
	 * 
	 * The cellInfo map contains the following properties:
	 * 
	 * value (var): the cell&#8217;s value.
	 * row (int): the model index of the row the cell belongs to.
	 * col (int): the model index of the column the cell belongs to.
	 * xPos (int): the x position of the cell in the table pane.
	 * table (qx.ui.table.Table) reference to the table, the cell belongs to. 

	 * 
	 */
	createCellEditor : vjo.NEEDS_IMPL,


	/**
	 * Returns the current value of a cell editor.
	 * 
	 */
	getCellEditorValue : vjo.NEEDS_IMPL
})
.endType();