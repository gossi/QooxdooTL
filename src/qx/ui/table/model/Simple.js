/**
 * A simple table model that provides an API for changing the model data.
 */
//>public
vjo.ctype('qx.ui.table.model.Simple')
.inherits('qx.ui.table.model.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Creates an array of maps to an array of arrays.
	 * 
	 */
	_mapArray2RowArr : vjo.NEEDS_IMPL,


	/**
	 * Set whether to sort in ascending order or not.
	 * 
	 * WARNING: This should be called only by subclasses with intimate
	 *          knowledge of what they are doing!
	 * 
	 */
	_setSortAscending : vjo.NEEDS_IMPL,


	/**
	 * Set the sort column index
	 * 
	 * WARNING: This should be called only by subclasses with intimate
	 *          knowledge of what they are doing!
	 * 
	 */
	_setSortColumnIndex : vjo.NEEDS_IMPL,


	/**
	 * Adds some rows to the model.
	 * 
	 * Warning: The given array will be altered!
	 * 
	 */
	addRows : vjo.NEEDS_IMPL,


	/**
	 * Adds some rows to the model.
	 * 
	 * Warning: The given array (mapArr) will be altered!
	 * 
	 */
	addRowsAsMapArray : vjo.NEEDS_IMPL,


	/**
	 * Clears the sorting.
	 * 
	 */
	clearSorting : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property caseSensitiveSorting.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	getCaseSensitiveSorting : vjo.NEEDS_IMPL,


	/**
	 * Returns the data of this model.
	 * 
	 * Warning: Do not alter this array! If you want to change the data use
	 * {@link #setData}, {@link #setDataAsMapArray} or {@link #setValue} instead.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Gets the whole data as an array of maps.
	 * 
	 * Note: Individual items are retrieved by {@link #getRowDataAsMap}.
	 * 
	 */
	getDataAsMapArray : vjo.NEEDS_IMPL,


	/**
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 */
	getRowData : vjo.NEEDS_IMPL,


	/**
	 * Returns the data of one row as map containing the column IDs as key and
	 * the cell values as value. Also the meta data is included.
	 * 
	 */
	getRowDataAsMap : vjo.NEEDS_IMPL,


	/**
	 */
	getSortColumnIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the sortMethod(s) for a table column.
	 * 
	 */
	getSortMethods : vjo.NEEDS_IMPL,


	/**
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property caseSensitiveSorting
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	initCaseSensitiveSorting : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property caseSensitiveSorting equals true.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	isCaseSensitiveSorting : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnEditable : vjo.NEEDS_IMPL,


	/**
	 */
	isColumnSortable : vjo.NEEDS_IMPL,


	/**
	 */
	isSortAscending : vjo.NEEDS_IMPL,


	/**
	 * Removes some rows from the model.
	 * 
	 */
	removeRows : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property caseSensitiveSorting.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	resetCaseSensitiveSorting : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property caseSensitiveSorting.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	setCaseSensitiveSorting : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a column is editable.
	 * 
	 */
	setColumnEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets whether a column is sortable.
	 * 
	 */
	setColumnSortable : vjo.NEEDS_IMPL,


	/**
	 * Sets the whole data in a bulk.
	 * 
	 */
	setData : vjo.NEEDS_IMPL,


	/**
	 * Sets the whole data in a bulk.
	 * 
	 */
	setDataAsMapArray : vjo.NEEDS_IMPL,


	/**
	 * Sets all columns editable or not editable.
	 * 
	 */
	setEditable : vjo.NEEDS_IMPL,


	/**
	 * Sets rows in the model. The rows overwrite the old rows starting at
	 * startIndex to startIndex+rowArr.length.
	 * 
	 * Warning: The given array will be altered!
	 * 
	 */
	setRows : vjo.NEEDS_IMPL,


	/**
	 * Set rows in the model. The rows overwrite the old rows starting at
	 * startIndex to startIndex+rowArr.length.
	 * 
	 * Warning: The given array (mapArr) will be altered!
	 * 
	 */
	setRowsAsMapArray : vjo.NEEDS_IMPL,


	/**
	 * Specify the methods to use for ascending and descending sorts of a
	 * particular column.
	 * 
	 */
	setSortMethods : vjo.NEEDS_IMPL,


	/**
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 */
	sortByColumn : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property caseSensitiveSorting.
	 * 
	 * For further details take a look at the property definition: {@link #caseSensitiveSorting}.
	 * 
	 */
	toggleCaseSensitiveSorting : vjo.NEEDS_IMPL
})
.endType();