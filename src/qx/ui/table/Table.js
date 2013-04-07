/**
 * Table
 * 
 * A detailed description can be found in the package description
 * {@link qx.ui.table}.
 */
//>public
vjo.ctype('qx.ui.table.Table')
.inherits('qx.ui.core.Widget')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property additionalStatusBarText.
	 * 
	 * For further details take a look at the property definition: {@link #additionalStatusBarText}.
	 * 
	 */
	_applyAdditionalStatusBarText : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property columnVisibilityButtonVisible.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	_applyColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property contextMenuFromDataCellsOnly.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	_applyContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	_applyFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property headerCellHeight.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellHeight}.
	 * 
	 */
	_applyHeaderCellHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property headerCellsVisible.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	_applyHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property keepFirstVisibleRowComplete.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	_applyKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property metaColumnCounts.
	 * 
	 * For further details take a look at the property definition: {@link #metaColumnCounts}.
	 * 
	 */
	_applyMetaColumnCounts : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	_applyResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	_applyRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	_applySelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	_applyShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property statusBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	_applyStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property tableModel.
	 * 
	 * For further details take a look at the property definition: {@link #tableModel}.
	 * 
	 */
	_applyTableModel : vjo.NEEDS_IMPL,


	/**
	 * Cleans up the meta columns.
	 * 
	 */
	_cleanUpMetaColumns : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Creates a handler for a check box of the column visibility menu.
	 * 
	 */
	_createColumnVisibilityCheckBoxHandler : vjo.NEEDS_IMPL,


	/**
	 * Returns the meta column a column is shown in. If the column is not shown at
	 * all, -1 is returned.
	 * 
	 */
	_getMetaColumnAtColumnX : vjo.NEEDS_IMPL,


	/**
	 * Gets the meta column at a certain x position in the page. If there is no
	 * meta column at this position, -1 is returned.
	 * 
	 */
	_getMetaColumnAtPageX : vjo.NEEDS_IMPL,


	/**
	 * Returns an array containing all TablePaneScrollers in this table.
	 * 
	 */
	_getPaneScrollerArr : vjo.NEEDS_IMPL,


	/**
	 * Initialize the column menu
	 * 
	 */
	_initColumnMenu : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the locale has changed.
	 * 
	 */
	_onChangeLocale : vjo.NEEDS_IMPL,


	/**
	 */
	_onChangeTheme : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the column order has changed.
	 * 
	 */
	_onColOrderChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the visibility of a column has changed.
	 * 
	 */
	_onColVisibilityChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the width of a column has changed.
	 * 
	 */
	_onColWidthChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table gets the focus.
	 * 
	 */
	_onFocusChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a key was pressed.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Resize event handler
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a TablePaneScroller has been scrolled vertically.
	 * 
	 */
	_onScrollY : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the selection has changed.
	 * 
	 */
	_onSelectionChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model data has changed.
	 * 
	 */
	_onTableModelDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model meta data has changed.
	 * 
	 */
	_onTableModelMetaDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Updates the visibility of the scrollbars in the meta columns.
	 * 
	 */
	_updateScrollBarVisibility : vjo.NEEDS_IMPL,


	/**
	 * Updates the widths of all scrollers.
	 * 
	 */
	_updateScrollerWidths : vjo.NEEDS_IMPL,


	/**
	 * Updates the text shown in the status bar.
	 * 
	 */
	_updateStatusBar : vjo.NEEDS_IMPL,


	/**
	 * To update the table if the table model has changed and remove selection.
	 * 
	 */
	_updateTableData : vjo.NEEDS_IMPL,


	/**
	 */
	addListener : vjo.NEEDS_IMPL,


	/**
	 * Activates the blocker widgets on all column headers and the
	 * column button
	 * 
	 */
	blockHeaderElements : vjo.NEEDS_IMPL,


	/**
	 * Stops editing without writing the editor&#8217;s value to the model.
	 * 
	 */
	cancelEditing : vjo.NEEDS_IMPL,


	/**
	 * Remove the highlighting of the current focus row.
	 * 
	 * This is used to temporarily remove the highlighting of the currently
	 * focused row, and is expected to be used most typically by adding a
	 * listener on the &#8220;mouseout&#8221; event, so that the focus highlighting is
	 * suspended when the mouse leaves the table:
	 * 
	 * table.addListener(&#8220;mouseout&#8221;, table.clearFocusedRowHighlight);
	 * 
	 */
	clearFocusedRowHighlight : vjo.NEEDS_IMPL,


	/**
	 */
	destroy : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property additionalStatusBarText.
	 * 
	 * For further details take a look at the property definition: {@link #additionalStatusBarText}.
	 * 
	 */
	getAdditionalStatusBarText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property alwaysUpdateCells.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	getAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property columnVisibilityButtonVisible.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	getColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contextMenuFromDataCellsOnly.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	getContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dataRowRenderer.
	 * 
	 * For further details take a look at the property definition: {@link #dataRowRenderer}.
	 * 
	 */
	getDataRowRenderer : vjo.NEEDS_IMPL,


	/**
	 * Get an empty table model instance to use for this table. Use this table
	 * to configure the table with no table model.
	 * 
	 */
	getEmptyTableModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	getFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Returns the column of the currently focused cell.
	 * 
	 */
	getFocusedColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns the row of the currently focused cell.
	 * 
	 */
	getFocusedRow : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property forceLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	getForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property headerCellHeight.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellHeight}.
	 * 
	 */
	getHeaderCellHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property headerCellsVisible.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	getHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property initiallyHiddenColumns.
	 * 
	 * For further details take a look at the property definition: {@link #initiallyHiddenColumns}.
	 * 
	 */
	getInitiallyHiddenColumns : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property keepFirstVisibleRowComplete.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	getKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property metaColumnCounts.
	 * 
	 * For further details take a look at the property definition: {@link #metaColumnCounts}.
	 * 
	 */
	getMetaColumnCounts : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property modalCellEditorPreOpenFunction.
	 * 
	 * For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.
	 * 
	 */
	getModalCellEditorPreOpenFunction : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newColumnMenu.
	 * 
	 * For further details take a look at the property definition: {@link #newColumnMenu}.
	 * 
	 */
	getNewColumnMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newSelectionManager.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionManager}.
	 * 
	 */
	getNewSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newSelectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionModel}.
	 * 
	 */
	getNewSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newTableColumnModel.
	 * 
	 * For further details take a look at the property definition: {@link #newTableColumnModel}.
	 * 
	 */
	getNewTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newTablePane.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePane}.
	 * 
	 */
	getNewTablePane : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newTablePaneHeader.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneHeader}.
	 * 
	 */
	getNewTablePaneHeader : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newTablePaneModel.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneModel}.
	 * 
	 */
	getNewTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property newTablePaneScroller.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneScroller}.
	 * 
	 */
	getNewTablePaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Returns a TablePaneScroller of this table.
	 * 
	 */
	getPaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	getResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rowFocusChangeModifiesSelection.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	getRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	getRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Returns the selection manager.
	 * 
	 */
	getSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	getSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	getShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property statusBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	getStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Get the The table column model.
	 * 
	 */
	getTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property tableModel.
	 * 
	 * For further details take a look at the property definition: {@link #tableModel}.
	 * 
	 */
	getTableModel : vjo.NEEDS_IMPL,


	/**
	 * Gets the TablePaneScroller at a certain x position in the page. If there is
	 * no TablePaneScroller at this position, null is returned.
	 * 
	 */
	getTablePaneScrollerAtPageX : vjo.NEEDS_IMPL,


	/**
	 * Select whether the focused row is highlighted
	 * 
	 */
	highlightFocusedRow : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property additionalStatusBarText
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #additionalStatusBarText}.
	 * 
	 */
	initAdditionalStatusBarText : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property alwaysUpdateCells
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	initAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property columnVisibilityButtonVisible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	initColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property contextMenuFromDataCellsOnly
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	initContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dataRowRenderer
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dataRowRenderer}.
	 * 
	 */
	initDataRowRenderer : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property focusCellOnMouseMove
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	initFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property forceLineHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	initForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property headerCellHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellHeight}.
	 * 
	 */
	initHeaderCellHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property headerCellsVisible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	initHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property initiallyHiddenColumns
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #initiallyHiddenColumns}.
	 * 
	 */
	initInitiallyHiddenColumns : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property keepFirstVisibleRowComplete
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	initKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property metaColumnCounts
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #metaColumnCounts}.
	 * 
	 */
	initMetaColumnCounts : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property modalCellEditorPreOpenFunction
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.
	 * 
	 */
	initModalCellEditorPreOpenFunction : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newColumnMenu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newColumnMenu}.
	 * 
	 */
	initNewColumnMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newSelectionManager
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionManager}.
	 * 
	 */
	initNewSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newSelectionModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionModel}.
	 * 
	 */
	initNewSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newTableColumnModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newTableColumnModel}.
	 * 
	 */
	initNewTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newTablePane
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePane}.
	 * 
	 */
	initNewTablePane : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newTablePaneHeader
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneHeader}.
	 * 
	 */
	initNewTablePaneHeader : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newTablePaneModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneModel}.
	 * 
	 */
	initNewTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property newTablePaneScroller
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneScroller}.
	 * 
	 */
	initNewTablePaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property resetSelectionOnHeaderClick
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	initResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rowFocusChangeModifiesSelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	initRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rowHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	initRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectionModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	initSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showCellFocusIndicator
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	initShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property statusBarVisible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	initStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property tableModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #tableModel}.
	 * 
	 */
	initTableModel : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property alwaysUpdateCells equals true.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	isAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property columnVisibilityButtonVisible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	isColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property contextMenuFromDataCellsOnly equals true.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	isContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Returns whether currently a cell is editing.
	 * 
	 */
	isEditing : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property focusCellOnMouseMove equals true.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	isFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property forceLineHeight equals true.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	isForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property headerCellsVisible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	isHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property keepFirstVisibleRowComplete equals true.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	isKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resetSelectionOnHeaderClick equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	isResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property rowFocusChangeModifiesSelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	isRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showCellFocusIndicator equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	isShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property statusBarVisible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	isStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Moves the focus.
	 * 
	 */
	moveFocusedCell : vjo.NEEDS_IMPL,


	/**
	 */
	removeListener : vjo.NEEDS_IMPL,


	/**
	 */
	removeListenerById : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property additionalStatusBarText.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #additionalStatusBarText}.
	 * 
	 */
	resetAdditionalStatusBarText : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property alwaysUpdateCells.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	resetAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Resets the focused cell.
	 * 
	 */
	resetCellFocus : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property columnVisibilityButtonVisible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	resetColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property contextMenuFromDataCellsOnly.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	resetContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dataRowRenderer.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dataRowRenderer}.
	 * 
	 */
	resetDataRowRenderer : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property focusCellOnMouseMove.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	resetFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property forceLineHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	resetForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property headerCellHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellHeight}.
	 * 
	 */
	resetHeaderCellHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property headerCellsVisible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	resetHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property initiallyHiddenColumns.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #initiallyHiddenColumns}.
	 * 
	 */
	resetInitiallyHiddenColumns : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property keepFirstVisibleRowComplete.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	resetKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property metaColumnCounts.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #metaColumnCounts}.
	 * 
	 */
	resetMetaColumnCounts : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property modalCellEditorPreOpenFunction.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.
	 * 
	 */
	resetModalCellEditorPreOpenFunction : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newColumnMenu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newColumnMenu}.
	 * 
	 */
	resetNewColumnMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newSelectionManager.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionManager}.
	 * 
	 */
	resetNewSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newSelectionModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionModel}.
	 * 
	 */
	resetNewSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newTableColumnModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newTableColumnModel}.
	 * 
	 */
	resetNewTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newTablePane.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePane}.
	 * 
	 */
	resetNewTablePane : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newTablePaneHeader.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneHeader}.
	 * 
	 */
	resetNewTablePaneHeader : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newTablePaneModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneModel}.
	 * 
	 */
	resetNewTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property newTablePaneScroller.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneScroller}.
	 * 
	 */
	resetNewTablePaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property resetSelectionOnHeaderClick.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	resetResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rowFocusChangeModifiesSelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	resetRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rowHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	resetRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Resets (clears) the current selection
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectionModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	resetSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showCellFocusIndicator.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	resetShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property statusBarVisible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	resetStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property tableModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #tableModel}.
	 * 
	 */
	resetTableModel : vjo.NEEDS_IMPL,


	/**
	 * Scrolls a cell visible.
	 * 
	 */
	scrollCellVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property additionalStatusBarText.
	 * 
	 * For further details take a look at the property definition: {@link #additionalStatusBarText}.
	 * 
	 */
	setAdditionalStatusBarText : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property alwaysUpdateCells.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	setAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property columnVisibilityButtonVisible.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	setColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the width of a column.
	 * 
	 */
	setColumnWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property contextMenuFromDataCellsOnly.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	setContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dataRowRenderer.
	 * 
	 * For further details take a look at the property definition: {@link #dataRowRenderer}.
	 * 
	 */
	setDataRowRenderer : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	setFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Sets the currently focused cell. A value of null hides the
	 * focus cell.
	 * 
	 */
	setFocusedCell : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property forceLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	setForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property headerCellHeight.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellHeight}.
	 * 
	 */
	setHeaderCellHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property headerCellsVisible.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	setHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property initiallyHiddenColumns.
	 * 
	 * For further details take a look at the property definition: {@link #initiallyHiddenColumns}.
	 * 
	 */
	setInitiallyHiddenColumns : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property keepFirstVisibleRowComplete.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	setKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property metaColumnCounts.
	 * 
	 * For further details take a look at the property definition: {@link #metaColumnCounts}.
	 * 
	 */
	setMetaColumnCounts : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property modalCellEditorPreOpenFunction.
	 * 
	 * For further details take a look at the property definition: {@link #modalCellEditorPreOpenFunction}.
	 * 
	 */
	setModalCellEditorPreOpenFunction : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newColumnMenu.
	 * 
	 * For further details take a look at the property definition: {@link #newColumnMenu}.
	 * 
	 */
	setNewColumnMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newSelectionManager.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionManager}.
	 * 
	 */
	setNewSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newSelectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #newSelectionModel}.
	 * 
	 */
	setNewSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newTableColumnModel.
	 * 
	 * For further details take a look at the property definition: {@link #newTableColumnModel}.
	 * 
	 */
	setNewTableColumnModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newTablePane.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePane}.
	 * 
	 */
	setNewTablePane : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newTablePaneHeader.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneHeader}.
	 * 
	 */
	setNewTablePaneHeader : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newTablePaneModel.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneModel}.
	 * 
	 */
	setNewTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property newTablePaneScroller.
	 * 
	 * For further details take a look at the property definition: {@link #newTablePaneScroller}.
	 * 
	 */
	setNewTablePaneScroller : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	setResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rowFocusChangeModifiesSelection.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	setRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	setRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectionModel.
	 * 
	 * For further details take a look at the property definition: {@link #selectionModel}.
	 * 
	 */
	setSelectionModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	setShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property statusBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	setStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property tableModel.
	 * 
	 * For further details take a look at the property definition: {@link #tableModel}.
	 * 
	 */
	setTableModel : vjo.NEEDS_IMPL,


	/**
	 * Starts editing the currently focused cell. Does nothing if already editing
	 * or if the column is not editable.
	 * 
	 */
	startEditing : vjo.NEEDS_IMPL,


	/**
	 * Stops editing and writes the editor&#8217;s value to the model.
	 * 
	 */
	stopEditing : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property alwaysUpdateCells.
	 * 
	 * For further details take a look at the property definition: {@link #alwaysUpdateCells}.
	 * 
	 */
	toggleAlwaysUpdateCells : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property columnVisibilityButtonVisible.
	 * 
	 * For further details take a look at the property definition: {@link #columnVisibilityButtonVisible}.
	 * 
	 */
	toggleColumnVisibilityButtonVisible : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property contextMenuFromDataCellsOnly.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	toggleContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	toggleFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property forceLineHeight.
	 * 
	 * For further details take a look at the property definition: {@link #forceLineHeight}.
	 * 
	 */
	toggleForceLineHeight : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property headerCellsVisible.
	 * 
	 * For further details take a look at the property definition: {@link #headerCellsVisible}.
	 * 
	 */
	toggleHeaderCellsVisible : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property keepFirstVisibleRowComplete.
	 * 
	 * For further details take a look at the property definition: {@link #keepFirstVisibleRowComplete}.
	 * 
	 */
	toggleKeepFirstVisibleRowComplete : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	toggleResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property rowFocusChangeModifiesSelection.
	 * 
	 * For further details take a look at the property definition: {@link #rowFocusChangeModifiesSelection}.
	 * 
	 */
	toggleRowFocusChangeModifiesSelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	toggleShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property statusBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #statusBarVisible}.
	 * 
	 */
	toggleStatusBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Deactivates the blocker widgets on all column headers and the
	 * column button
	 * 
	 */
	unblockHeaderElements : vjo.NEEDS_IMPL,


	/**
	 * Update the table content of every attached table pane.
	 * 
	 */
	updateContent : vjo.NEEDS_IMPL
})
.endType();