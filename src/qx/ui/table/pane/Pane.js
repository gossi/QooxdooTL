/**
 * The table pane that shows a certain section from a table. This class handles
 * the display of the data part of a table and is therefore the base for virtual
 * scrolling.
 */
//>public
vjo.ctype('qx.ui.table.pane.Pane')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Clear the row cache
	 * 
	 */
	__rowCacheClear : vjo.NEEDS_IMPL,


	/**
	 * Get a line from the row cache.
	 * 
	 */
	__rowCacheGet : vjo.NEEDS_IMPL,


	/**
	 * Add a line to the row cache.
	 * 
	 */
	__rowCacheSet : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property firstVisibleRow.
	 * 
	 * For further details take a look at the property definition: {@link #firstVisibleRow}.
	 * 
	 */
	_applyFirstVisibleRow : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maxCacheLines.
	 * 
	 * For further details take a look at the property definition: {@link #maxCacheLines}.
	 * 
	 */
	_applyMaxCacheLines : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibleRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #visibleRowCount}.
	 * 
	 */
	_applyVisibleRowCount : vjo.NEEDS_IMPL,


	/**
	 */
	_getContentHint : vjo.NEEDS_IMPL,


	/**
	 * Get the HTML table fragment for the given row range.
	 * 
	 */
	_getRowsHtml : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the pane&#8217;s contents by the given offset.
	 * 
	 */
	_scrollContent : vjo.NEEDS_IMPL,


	/**
	 * Updates the content of the pane (implemented using array joins).
	 * 
	 */
	_updateAllRows : vjo.NEEDS_IMPL,


	/**
	 * If only focus or selection changes it is sufficient to only update the
	 * row styles. This method updates the row styles of all visible rows or
	 * of just one row.
	 * 
	 */
	_updateRowStyles : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property firstVisibleRow.
	 * 
	 * For further details take a look at the property definition: {@link #firstVisibleRow}.
	 * 
	 */
	getFirstVisibleRow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxCacheLines.
	 * 
	 * For further details take a look at the property definition: {@link #maxCacheLines}.
	 * 
	 */
	getMaxCacheLines : vjo.NEEDS_IMPL,


	/**
	 * Returns the TablePaneScroller this pane belongs to.
	 * 
	 */
	getPaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Returns the table this pane belongs to.
	 * 
	 */
	getTable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property visibleRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #visibleRowCount}.
	 * 
	 */
	getVisibleRowCount : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property firstVisibleRow
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #firstVisibleRow}.
	 * 
	 */
	initFirstVisibleRow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxCacheLines
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxCacheLines}.
	 * 
	 */
	initMaxCacheLines : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property visibleRowCount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #visibleRowCount}.
	 * 
	 */
	initVisibleRowCount : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called the column order has changed.
	 * 
	 */
	onColOrderChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table gets or looses the focus.
	 * 
	 */
	onFocusChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the pane model has changed.
	 * 
	 */
	onPaneModelChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the selection has changed.
	 * 
	 */
	onSelectionChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model data has changed.
	 * 
	 */
	onTableModelDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model meta data has changed.
	 * 
	 */
	onTableModelMetaDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property firstVisibleRow.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #firstVisibleRow}.
	 * 
	 */
	resetFirstVisibleRow : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxCacheLines.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxCacheLines}.
	 * 
	 */
	resetMaxCacheLines : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property visibleRowCount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #visibleRowCount}.
	 * 
	 */
	resetVisibleRowCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the column width.
	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property firstVisibleRow.
	 * 
	 * For further details take a look at the property definition: {@link #firstVisibleRow}.
	 * 
	 */
	setFirstVisibleRow : vjo.NEEDS_IMPL,


	/**
	 * Sets the currently focused cell.
	 * 
	 */
	setFocusedCell : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxCacheLines.
	 * 
	 * For further details take a look at the property definition: {@link #maxCacheLines}.
	 * 
	 */
	setMaxCacheLines : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property visibleRowCount.
	 * 
	 * For further details take a look at the property definition: {@link #visibleRowCount}.
	 * 
	 */
	setVisibleRowCount : vjo.NEEDS_IMPL,


	/**
	 * Updates the content of the pane.
	 * 
	 */
	updateContent : vjo.NEEDS_IMPL
})
.endType();