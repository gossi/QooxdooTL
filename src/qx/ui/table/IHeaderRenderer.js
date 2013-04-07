/**
 * A cell renderer for header cells.
 */
//>public
vjo.itype('qx.ui.table.IHeaderRenderer')
.protos({
	/**
	 * Creates a header cell.
	 * 
	 * The cellInfo map contains the following properties:
	 * 
	 * col (int): the model index of the column.
	 * xPos (int): the x position of the column in the table pane.
	 * name (string): the name of the column.
	 * editable (boolean): whether the column is editable.
	 * sorted (boolean): whether the column is sorted.
	 * sortedAscending (boolean): whether sorting is ascending.

	 * 
	 */
	createHeaderCell : vjo.NEEDS_IMPL,


	/**
	 * Updates a header cell.
	 * 
	 */
	updateHeaderCell : vjo.NEEDS_IMPL
})
.endType();