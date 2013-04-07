/**
 * Shows a whole meta column. This includes a {@link Header},
 * a {@link Pane} and the needed scroll bars. This class handles the
 * virtual scrolling and does all the mouse event handling.
 */
//>public
vjo.ctype('qx.ui.table.pane.Scroller')
.inherits('qx.ui.core.Widget')
.mixin(['qx.ui.core.scroll.MTouchScroll','qx.ui.core.scroll.MScrollBarFactory'])
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Common column move logic.
	 * 
	 */
	__handleMoveColumn : vjo.NEEDS_IMPL,


	/**
	 * Common column resize logic.
	 * 
	 */
	__handleResizeColumn : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property horizontalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	_applyHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property scrollTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #scrollTimeout}.
	 * 
	 */
	_applyScrollTimeout : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	_applyShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property tablePaneModel.
	 * 
	 * For further details take a look at the property definition: {@link #tablePaneModel}.
	 * 
	 */
	_applyTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property verticalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	_applyVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Sets the focus to the cell that&#8217;s located at the page position
	 * pageX/pageY. If there is no cell at that position,
	 * nothing happens.
	 * 
	 */
	_focusCellAtPagePos : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of the column the mouse is over or null if the mouse
	 * is not over a column.
	 * 
	 */
	_getColumnForPageX : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of the column that should be resized when dragging
	 * starts here. Returns -1 if the mouse is in no resize region of any column.
	 * 
	 */
	_getResizeColumnForPageX : vjo.NEEDS_IMPL,


	/**
	 * Returns the model index of the row the mouse is currently over. Returns -1 if
	 * the mouse is over the header. Returns null if the mouse is not over any
	 * column.
	 * 
	 */
	_getRowForPagePos : vjo.NEEDS_IMPL,


	/**
	 * Hides the resize line.
	 * 
	 */
	_hideResizeLine : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the scroller&#8217;s appear event
	 * 
	 */
	_onAppear : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the modal window of the cell editor closes.
	 * 
	 */
	_onCellEditorModalWindowClose : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the event capturing of the header changed.
	 * Stops/finishes an active header resize/move session if it lost capturing
	 * during the session to stay in a stable state.
	 * 
	 */
	_onChangeCaptureHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user clicked a mouse button over the header.
	 * 
	 */
	_onClickHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user clicked a mouse button over the pane.
	 * 
	 */
	_onClickPane : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when a context menu is invoked in a cell.
	 * 
	 */
	_onContextMenu : vjo.NEEDS_IMPL,


	/**
	 */
	_onContextMenuOpen : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user double clicked a mouse button over the pane.
	 * 
	 */
	_onDblclickPane : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the disappear event
	 * 
	 */
	_onDisappear : vjo.NEEDS_IMPL,


	/**
	 * Timer event handler. Periodically checks whether a table update is
	 * required. The update interval is controlled by the {@link #scrollTimeout}
	 * property.
	 * 
	 */
	_oninterval : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user pressed a mouse button over the header.
	 * 
	 */
	_onMousedownHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user pressed a mouse button over the pane.
	 * 
	 */
	_onMousedownPane : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user moved the mouse over the header.
	 * 
	 */
	_onMousemoveHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user moved the mouse over the pane.
	 * 
	 */
	_onMousemovePane : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the mouse moved out.
	 * 
	 */
	_onMouseout : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the focus indicator&#8217;s mouseup event
	 * 
	 */
	_onMouseupFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user released a mouse button over the header.
	 * 
	 */
	_onMouseupHeader : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user released a mouse button over the pane.
	 * 
	 */
	_onMouseupPane : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the user moved the mouse wheel.
	 * 
	 */
	_onMousewheel : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the pane model has changed.
	 * 
	 */
	_onPaneModelChanged : vjo.NEEDS_IMPL,


	/**
	 * Event listener for the pane clipper&#8217;s resize event
	 * 
	 */
	_onResizePane : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the horizontal scroll bar moved.
	 * 
	 */
	_onScrollX : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the vertical scroll bar moved.
	 * 
	 */
	_onScrollY : vjo.NEEDS_IMPL,


	/**
	 * Does a postponed update of the content.
	 * 
	 */
	_postponedUpdateContent : vjo.NEEDS_IMPL,


	/**
	 * Shows the resize line.
	 * 
	 */
	_showResizeLine : vjo.NEEDS_IMPL,


	/**
	 * Starts the current running interval
	 * 
	 */
	_startInterval : vjo.NEEDS_IMPL,


	/**
	 * Start a move session of the header.
	 * 
	 */
	_startMoveHeader : vjo.NEEDS_IMPL,


	/**
	 * Start a resize session of the header.
	 * 
	 */
	_startResizeHeader : vjo.NEEDS_IMPL,


	/**
	 * stops the current running interval
	 * 
	 */
	_stopInterval : vjo.NEEDS_IMPL,


	/**
	 * Stop a move session of the header.
	 * 
	 */
	_stopMoveHeader : vjo.NEEDS_IMPL,


	/**
	 * Stop a resize session of the header.
	 * 
	 */
	_stopResizeHeader : vjo.NEEDS_IMPL,


	/**
	 * Updates the content. Sets the right section the table pane should show and
	 * does the scrolling.
	 * 
	 */
	_updateContent : vjo.NEEDS_IMPL,


	/**
	 * Updates the location and the visibility of the focus indicator.
	 * 
	 */
	_updateFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Stops editing without writing the editor&#8217;s value to the model.
	 * 
	 */
	cancelEditing : vjo.NEEDS_IMPL,


	/**
	 * Writes the editor&#8217;s value to the model.
	 * 
	 */
	flushEditor : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property contextMenuFromDataCellsOnly.
	 * 
	 * For further details take a look at the property definition: {@link #contextMenuFromDataCellsOnly}.
	 * 
	 */
	getContextMenuFromDataCellsOnly : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	getFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Returns the column of currently focused cell.
	 * 
	 */
	getFocusedColumn : vjo.NEEDS_IMPL,


	/**
	 * Returns the row of currently focused cell.
	 * 
	 */
	getFocusedRow : vjo.NEEDS_IMPL,


	/**
	 * Returns the header.
	 * 
	 */
	getHeader : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property horizontalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	getHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property liveResize.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	getLiveResize : vjo.NEEDS_IMPL,


	/**
	 * Returns which scrollbars are needed.
	 * 
	 */
	getNeededScrollBars : vjo.NEEDS_IMPL,


	/**
	 * Return the pane clipper. It is sometimes required for special activities
	 * such as tracking events for drag&amp;drop.
	 * 
	 */
	getPaneClipper : vjo.NEEDS_IMPL,


	/**
	 * The right inset of the pane. The right inset is the maximum of the
	 * top right widget width and the scrollbar width (if visible).
	 * 
	 */
	getPaneInsetRight : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	getResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property scrollTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #scrollTimeout}.
	 * 
	 */
	getScrollTimeout : vjo.NEEDS_IMPL,


	/**
	 * Get the current position of the vertical scroll bar.
	 * 
	 */
	getScrollX : vjo.NEEDS_IMPL,


	/**
	 * Get the current position of the vertical scroll bar.
	 * 
	 */
	getScrollY : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectBeforeFocus.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	getSelectBeforeFocus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	getShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Returns the table this scroller belongs to.
	 * 
	 */
	getTable : vjo.NEEDS_IMPL,


	/**
	 * Returns the table pane.
	 * 
	 */
	getTablePane : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property tablePaneModel.
	 * 
	 * For further details take a look at the property definition: {@link #tablePaneModel}.
	 * 
	 */
	getTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Get the top right widget
	 * 
	 */
	getTopRightWidget : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property verticalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	getVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Get the rendered width of the vertical scroll bar. The return value is
	 * 0 if the scroll bar is invisible or not yet rendered.
	 * 
	 */
	getVerticalScrollBarWidth : vjo.NEEDS_IMPL,


	/**
	 * Hides the feedback shown while a column is moved by the user.
	 * 
	 */
	hideColumnMoveFeedback : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property focusCellOnMouseMove
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	initFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property horizontalScrollBarVisible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	initHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property liveResize
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	initLiveResize : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property scrollTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #scrollTimeout}.
	 * 
	 */
	initScrollTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectBeforeFocus
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	initSelectBeforeFocus : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property tablePaneModel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #tablePaneModel}.
	 * 
	 */
	initTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property verticalScrollBarVisible
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	initVerticalScrollBarVisible : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property horizontalScrollBarVisible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	isHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property liveResize equals true.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	isLiveResize : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property resetSelectionOnHeaderClick equals true.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	isResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property selectBeforeFocus equals true.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	isSelectBeforeFocus : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showCellFocusIndicator equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	isShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property verticalScrollBarVisible equals true.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	isVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the column order has changed.
	 * 
	 */
	onColOrderChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the visibility of a column has changed.
	 * 
	 */
	onColVisibilityChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table gets or looses the focus.
	 * 
	 */
	onFocusChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table property &#8220;keepFirstVisibleRowComplete&#8221;
	 * changed.
	 * 
	 */
	onKeepFirstVisibleRowCompleteChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the selection has changed.
	 * 
	 */
	onSelectionChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model has changed.
	 * 
	 */
	onTableModelDataChanged : vjo.NEEDS_IMPL,


	/**
	 * Event handler. Called when the table model meta data has changed.
	 * 
	 */
	onTableModelMetaDataChanged : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property horizontalScrollBarVisible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	resetHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property liveResize.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	resetLiveResize : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property scrollTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #scrollTimeout}.
	 * 
	 */
	resetScrollTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectBeforeFocus.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	resetSelectBeforeFocus : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property tablePaneModel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #tablePaneModel}.
	 * 
	 */
	resetTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property verticalScrollBarVisible.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	resetVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Scrolls a cell visible.
	 * 
	 */
	scrollCellVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the column width.
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
	 * Sets the user value of the property focusCellOnMouseMove.
	 * 
	 * For further details take a look at the property definition: {@link #focusCellOnMouseMove}.
	 * 
	 */
	setFocusCellOnMouseMove : vjo.NEEDS_IMPL,


	/**
	 * Sets the currently focused cell.
	 * 
	 */
	setFocusedCell : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property horizontalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	setHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property liveResize.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	setLiveResize : vjo.NEEDS_IMPL,


	/**
	 * Set the pane&#8217;s width
	 * 
	 */
	setPaneWidth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	setResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property scrollTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #scrollTimeout}.
	 * 
	 */
	setScrollTimeout : vjo.NEEDS_IMPL,


	/**
	 * Set the current position of the vertical scroll bar.
	 * 
	 */
	setScrollX : vjo.NEEDS_IMPL,


	/**
	 * Set the current position of the vertical scroll bar.
	 * 
	 */
	setScrollY : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectBeforeFocus.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	setSelectBeforeFocus : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	setShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property tablePaneModel.
	 * 
	 * For further details take a look at the property definition: {@link #tablePaneModel}.
	 * 
	 */
	setTablePaneModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the widget that should be shown in the top right corner.
	 * 
	 * The widget will not be disposed, when this table scroller is disposed. So the
	 * caller has to dispose it.
	 * 
	 */
	setTopRightWidget : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property verticalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	setVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Shows the feedback shown while a column is moved by the user.
	 * 
	 */
	showColumnMoveFeedback : vjo.NEEDS_IMPL,


	/**
	 * Starts editing the currently focused cell. Does nothing if already
	 * editing, if the column is not editable, or if the cell editor for the
	 * column ascertains that the particular cell is not editable.
	 * 
	 */
	startEditing : vjo.NEEDS_IMPL,


	/**
	 * Stops editing and writes the editor&#8217;s value to the model.
	 * 
	 */
	stopEditing : vjo.NEEDS_IMPL,


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
	 * Toggles the (computed) value of the boolean property horizontalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #horizontalScrollBarVisible}.
	 * 
	 */
	toggleHorizontalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property liveResize.
	 * 
	 * For further details take a look at the property definition: {@link #liveResize}.
	 * 
	 */
	toggleLiveResize : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property resetSelectionOnHeaderClick.
	 * 
	 * For further details take a look at the property definition: {@link #resetSelectionOnHeaderClick}.
	 * 
	 */
	toggleResetSelectionOnHeaderClick : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property selectBeforeFocus.
	 * 
	 * For further details take a look at the property definition: {@link #selectBeforeFocus}.
	 * 
	 */
	toggleSelectBeforeFocus : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showCellFocusIndicator.
	 * 
	 * For further details take a look at the property definition: {@link #showCellFocusIndicator}.
	 * 
	 */
	toggleShowCellFocusIndicator : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property verticalScrollBarVisible.
	 * 
	 * For further details take a look at the property definition: {@link #verticalScrollBarVisible}.
	 * 
	 */
	toggleVerticalScrollBarVisible : vjo.NEEDS_IMPL,


	/**
	 * Updates the maximum of the horizontal scroll bar, so it corresponds to the
	 * total width of the columns in the table pane.
	 * 
	 */
	updateHorScrollBarMaximum : vjo.NEEDS_IMPL,


	/**
	 * Updates the maximum of the vertical scroll bar, so it corresponds to the
	 * number of rows in the table.
	 * 
	 */
	updateVerScrollBarMaximum : vjo.NEEDS_IMPL
})
.endType();