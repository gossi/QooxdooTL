/**
 * The default resize behavior.  Until a resize model is loaded, the default
 * behavior is to:
 * 
 *   
 *     Upon the table initially appearing, and upon any window resize, divide
 *     the table space equally between the visible columns.
 *   
 *   
 *     When a column is increased in width, all columns to its right are
 *     pushed to the right with no change to their widths.  This may push some
 *     columns off the right edge of the table, causing a horizontal scroll
 *     bar to appear.
 *   
 *   
 *     When a column is decreased in width, if the total width of all columns
 *     is greater than the table width, no additional column width
 *     change is made.
 *   
 *   
 *     When a column is decreased in width, if the total width of all columns
 *     is less than the table width, the visible column
 *     immediately to the right of the column which decreased in width has its
 *     width increased to fill the remaining space.
 *   
 * 
 * 
 * A resize model may be loaded to provide more guidance on how to adjust
 * column width upon each of the events: initial appear, window resize, and
 * column resize. *** TO BE FILLED IN ***
 */
//>public
vjo.ctype('qx.ui.table.columnmodel.resizebehavior.Default')
.inherits('qx.ui.table.columnmodel.resizebehavior.Abstract')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Clear all layout caches of the column datas.
	 * 
	 */
	__clearLayoutCaches : vjo.NEEDS_IMPL,


	/**
	 * Computes the width of all flexible children.
	 * 
	 */
	_computeColumnsFlexWidth : vjo.NEEDS_IMPL,


	/**
	 * If a column was just made invisible, extend the last column to fill any
	 * available space within the inner width of the table.  This means that
	 * if the sum of the widths of all columns exceeds the inner width of the
	 * table, no change is made.  If, on the other hand, the sum of the widths
	 * of all columns is less than the inner width of the table, the last
	 * column is extended to take up the width available within the inner
	 * width of the table.
	 * 
	 */
	_extendLastColumn : vjo.NEEDS_IMPL,


	/**
	 * Extend the visible column to right of the column which just changed
	 * width, to fill any available space within the inner width of the table.
	 * This means that if the sum of the widths of all columns exceeds the
	 * inner width of the table, no change is made.  If, on the other hand,
	 * the sum of the widths of all columns is less than the inner width of
	 * the table, the visible column to the right of the column which just
	 * changed width is extended to take up the width available within the
	 * inner width of the table.
	 * 
	 */
	_extendNextColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of the resizing information of a column.
	 * 
	 */
	_getResizeColumnData : vjo.NEEDS_IMPL,


	/**
	 */
	_setNumColumns : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property initializeWidthsOnEveryAppear.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	getInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL,


	/**
	 * This method is required by the box layout. If returns an array of items
	 * to relayout.
	 * 
	 */
	getLayoutChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newResizeBehaviorColumnData.
	 * 
	 * For further details take a look at the property definition: {@link #newResizeBehaviorColumnData}.
	 * 
	 */
	getNewResizeBehaviorColumnData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property tableColumnModel.
	 * 
	 * For further details take a look at the property definition: {@link #tableColumnModel}.
	 * 
	 */
	getTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property initializeWidthsOnEveryAppear
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	initInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newResizeBehaviorColumnData
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newResizeBehaviorColumnData}.
	 * 
	 */
	initNewResizeBehaviorColumnData : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property tableColumnModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #tableColumnModel}.
	 * 
	 */
	initTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property initializeWidthsOnEveryAppear equals true.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	isInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL,


	/**
	 */
	onAppear : vjo.NEEDS_IMPL,


	/**
	 */
	onColumnWidthChanged : vjo.NEEDS_IMPL,


	/**
	 */
	onTableWidthChanged : vjo.NEEDS_IMPL,


	/**
	 */
	onVerticalScrollBarChanged : vjo.NEEDS_IMPL,


	/**
	 */
	onVisibilityChanged : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property initializeWidthsOnEveryAppear.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	resetInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newResizeBehaviorColumnData.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newResizeBehaviorColumnData}.
	 * 
	 */
	resetNewResizeBehaviorColumnData : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property tableColumnModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #tableColumnModel}.
	 * 
	 */
	resetTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Set any or all of the width, minimum width, and maximum width of a
	 * column in a single call.
	 * 
	 */
	set : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property initializeWidthsOnEveryAppear.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	setInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL,


	/**
	 * Set the maximum width of a column.
	 * 
	 */
	setMaxWidth : vjo.NEEDS_IMPL,


	/**
	 * Set the minimum width of a column.
	 * 
	 */
	setMinWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newResizeBehaviorColumnData.
	 * 
	 * For further details take a look at the property definition: {@link #newResizeBehaviorColumnData}.
	 * 
	 */
	setNewResizeBehaviorColumnData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property tableColumnModel.
	 * 
	 * For further details take a look at the property definition: {@link #tableColumnModel}.
	 * 
	 */
	setTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Set the width of a column.
	 * 
	 */
	setWidth : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property initializeWidthsOnEveryAppear.
	 * 
	 * For further details take a look at the property definition: {@link #initializeWidthsOnEveryAppear}.
	 * 
	 */
	toggleInitializeWidthsOnEveryAppear : vjo.NEEDS_IMPL
})
.endType();