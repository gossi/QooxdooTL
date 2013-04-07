/**
 * The data model of a table.
 */
//>public
vjo.itype('qx.ui.table.ITableModel')
.protos({
	/**
	 * Returns the number of columns in the model.
	 * 
	 */
	getColumnCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the ID of column. The ID may be used to identify columns
	 * independent from their index in the model. E.g. for being aware of added
	 * columns when saving the width of a column.
	 * 
	 */
	getColumnId : vjo.NEEDS_IMPL,


	/**
	 * Returns the index of a column.
	 * 
	 */
	getColumnIndexById : vjo.NEEDS_IMPL,


	/**
	 * Returns the name of a column. This name will be shown to the user in the
	 * table header.
	 * 
	 */
	getColumnName : vjo.NEEDS_IMPL,


	/**
	 * Returns the number of rows in the model.
	 * 
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the data of one row. This function may be overridden by models which hold
	 * all data of a row in one object. By using this function, clients have a way of
	 * quickly retrieving the entire row data.
	 * 
	 * Important:Models which do not have their row data accessible in one object
	 * may return null.
	 * 
	 */
	getRowData : vjo.NEEDS_IMPL,


	/**
	 * Returns the column index the model is sorted by. If the model is not sorted
	 * -1 is returned.
	 * 
	 */
	getSortColumnIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns a cell value by column index.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Returns a cell value by column ID.
	 * 
	 * Whenever you have the choice, use {@link #getValue()} instead,
	 * because this should be faster.
	 * 
	 */
	getValueById : vjo.NEEDS_IMPL,


	/**
	 * Returns whether a column is editable.
	 * 
	 */
	isColumnEditable : vjo.NEEDS_IMPL,


	/**
	 * Returns whether a column is sortable.
	 * 
	 */
	isColumnSortable : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the model is sorted ascending.
	 * 
	 */
	isSortAscending : vjo.NEEDS_IMPL,


	/**
	 * Prefetches some rows. This is a hint to the model that the specified rows
	 * will be read soon.
	 * 
	 */
	prefetchRows : vjo.NEEDS_IMPL,


	/**
	 * Sets a cell value by column index.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Sets a cell value by column ID.
	 * 
	 * Whenever you have the choice, use {@link #setValue()} instead,
	 * because this should be faster.
	 * 
	 */
	setValueById : vjo.NEEDS_IMPL,


	/**
	 * Sorts the model by a column.
	 * 
	 */
	sortByColumn : vjo.NEEDS_IMPL
})
.endType();