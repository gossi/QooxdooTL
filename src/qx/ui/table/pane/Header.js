/**
 * Shows the header of a table.
 */
//>public
vjo.ctype('qx.ui.table.pane.Header')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Cleans up all header cells.
	 * 
	 */
	_cleanUpCells : vjo.NEEDS_IMPL,


	/**
	 * Updates the content of the header.
	 * 
	 */
	_updateContent : vjo.NEEDS_IMPL,


	/**
	 * Returns the blocker of the header.
	 * 
	 */
	getBlocker : vjo.NEEDS_IMPL,


	/**
	 * Get the header widget for the given column
	 * 
	 */
	getHeaderWidgetAtColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns the TablePaneScroller this header belongs to.
	 * 
	 */
	getPaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Returns the table this header belongs to.
	 * 
	 */
	getTable : vjo.NEEDS_IMPL,


	/**
	 * Hides the feedback shown while a column is moved by the user.
	 * 
	 */
	hideColumnMoveFeedback : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the column move feedback is currently shown.
	 * 
	 */
	isShowingColumnMoveFeedback : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called the column order has changed.
	 * 
	 */
	onColOrderChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the pane model has changed.
	 * 
	 */
	onPaneModelChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model meta data has changed.
	 * 
	 */
	onTableModelMetaDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Sets the column width. This overrides the width from the column model.
	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the column the mouse is currently over.
	 * 
	 */
	setMouseOverColumn : vjo.NEEDS_IMPL,


	/**
	 * Shows the feedback shown while a column is moved by the user.
	 * 
	 */
	showColumnMoveFeedback : vjo.NEEDS_IMPL
})
.endType();