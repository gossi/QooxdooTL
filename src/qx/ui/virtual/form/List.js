/**
 * Experimental virtual list widget.
 * 
 * This widget can either use HTML or widget cell renderer.
 * 
 * EXPERIMENTAL!
 */
//>public
vjo.ctype('qx.ui.virtual.form.List')
.inherits('qx.ui.virtual.core.Scroller')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property cellRenderer.
	 * 
	 * For further details take a look at the property definition: {@link #cellRenderer}.
	 * 
	 */
	_applyCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	_applyDelegate : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rowCount.
	 * 
	 * For further details take a look at the property definition: {@link #rowCount}.
	 * 
	 */
	_applyRowCount : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	_applyRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showGridLines.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	_applyShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property useWidgetCells.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	_applyUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Get the cell data of the given row
	 * 
	 */
	_getCellData : vjo.NEEDS_IMPL,


	/**
	 * Get the cell renderer for the given row.
	 * 
	 */
	_getCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Initialize the HTML cell layer
	 * 
	 */
	_initHtmlLayer : vjo.NEEDS_IMPL,


	/**
	 * Initialize the selection manager
	 * 
	 */
	_initSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Initialize the widget cell layer
	 * 
	 */
	_initWidgetLayer : vjo.NEEDS_IMPL,


	/**
	 * Resize event handler
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Visualize selection (HTML mode)
	 * 
	 */
	_styleHtmlSelectable : vjo.NEEDS_IMPL,


	/**
	 * Visualize selection (widget mode)
	 * 
	 */
	_styleWidgetSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cellRenderer.
	 * 
	 * For further details take a look at the property definition: {@link #cellRenderer}.
	 * 
	 */
	getCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	getDelegate : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rowCount.
	 * 
	 * For further details take a look at the property definition: {@link #rowCount}.
	 * 
	 */
	getRowCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	getRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Get the selection manager
	 * 
	 */
	getSelectionManager : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showGridLines.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	getShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useWidgetCells.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	getUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property cellRenderer
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #cellRenderer}.
	 * 
	 */
	initCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property delegate
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	initDelegate : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rowCount
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rowCount}.
	 * 
	 */
	initRowCount : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property showGridLines
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	initShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property useWidgetCells
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	initUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showGridLines equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	isShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useWidgetCells equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	isUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property cellRenderer.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #cellRenderer}.
	 * 
	 */
	resetCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property delegate.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	resetDelegate : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rowCount.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rowCount}.
	 * 
	 */
	resetRowCount : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property showGridLines.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	resetShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property useWidgetCells.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	resetUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property cellRenderer.
	 * 
	 * For further details take a look at the property definition: {@link #cellRenderer}.
	 * 
	 */
	setCellRenderer : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property delegate.
	 * 
	 * For further details take a look at the property definition: {@link #delegate}.
	 * 
	 */
	setDelegate : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rowCount.
	 * 
	 * For further details take a look at the property definition: {@link #rowCount}.
	 * 
	 */
	setRowCount : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rowHeight.
	 * 
	 * For further details take a look at the property definition: {@link #rowHeight}.
	 * 
	 */
	setRowHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showGridLines.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	setShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useWidgetCells.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	setUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showGridLines.
	 * 
	 * For further details take a look at the property definition: {@link #showGridLines}.
	 * 
	 */
	toggleShowGridLines : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useWidgetCells.
	 * 
	 * For further details take a look at the property definition: {@link #useWidgetCells}.
	 * 
	 */
	toggleUseWidgetCells : vjo.NEEDS_IMPL,


	/**
	 * Update the displayed list data
	 * 
	 */
	update : vjo.NEEDS_IMPL
})
.endType();