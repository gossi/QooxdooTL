/**
 * A selection model.
 */
//>public
vjo.ctype('qx.ui.table.selection.Model')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Adds a selection interval to the current selection, but doesn&#8217;t inform
	 * the listeners.
	 * 
	 */
	_addSelectionInterval : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	_applySelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Logs the current ranges for debug perposes.
	 * 
	 */
	_dumpRanges : vjo.NEEDS_IMPL,


	/**
	 * Fires the &#8220;changeSelection&#8221; event to all registered listeners. If the selection model
	 * currently is in batch mode, only one event will be thrown when batch mode is ended.
	 * 
	 */
	_fireChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns an array that holds all the selected ranges of the table. Each
	 * entry is a map holding information about the &#8220;minIndex&#8221; and &#8220;maxIndex&#8221; of the
	 * selection range.
	 * 
	 */
	_getSelectedRangeArr : vjo.NEEDS_IMPL,


	/**
	 * Resets (clears) the selection, but doesn&#8217;t inform the listeners.
	 * 
	 */
	_resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the anchor selection index. Only use this function, if you want manipulate
	 * the selection manually.
	 * 
	 */
	_setAnchorSelectionIndex : vjo.NEEDS_IMPL,


	/**
	 * Sets the lead selection index. Only use this function, if you want manipulate
	 * the selection manually.
	 * 
	 */
	_setLeadSelectionIndex : vjo.NEEDS_IMPL,


	/**
	 * Adds a selection interval to the current selection.
	 * 
	 */
	addSelectionInterval : vjo.NEEDS_IMPL,


	/**
	 * Returns the first argument of the last call to {@link #setSelectionInterval()},
	 * {@link #addSelectionInterval()} or {@link #removeSelectionInterval()}.
	 * 
	 */
	getAnchorSelectionIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the second argument of the last call to {@link #setSelectionInterval()},
	 * {@link #addSelectionInterval()} or {@link #removeSelectionInterval()}.
	 * 
	 */
	getLeadSelectionIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns the number of selected items.
	 * 
	 */
	getSelectedCount : vjo.NEEDS_IMPL,


	/**
	 * Returns the selected ranges as an array. Each array element has a
	 * minIndex and a maxIndex property.
	 * 
	 */
	getSelectedRanges : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	getSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Returns whether batch mode is active. See setter for a description of batch mode.
	 * 
	 */
	hasBatchMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selectionMode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	initSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Returns whether an index is selected.
	 * 
	 */
	isSelectedIndex : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the selection is empty.
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Calls an iterator function for each selected index.
	 * 
	 * Usage Example:
	 * 
	 * 
	 * var selectedRowData = [];
	 * mySelectionModel.iterateSelection(function(index) {
	 *   selectedRowData.push(myTableModel.getRowData(index));
	 * });

	 * 
	 */
	iterateSelection : vjo.NEEDS_IMPL,


	/**
	 * Removes an interval from the current selection.
	 * 
	 */
	removeSelectionInterval : vjo.NEEDS_IMPL,


	/**
	 * Resets (clears) the selection.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selectionMode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	resetSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Activates / Deactivates batch mode. In batch mode, no change events will be thrown but
	 * will be collected instead. When batch mode is turned off again and any events have
	 * been collected, one event is thrown to inform the listeners.
	 * 
	 * This method supports nested calling, i. e. batch mode can be turned more than once.
	 * In this case, batch mode will not end until it has been turned off once for each
	 * turning on.
	 * 
	 */
	setBatchMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the selected interval. This will clear the former selection.
	 * 
	 */
	setSelectionInterval : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	setSelectionMode : vjo.NEEDS_IMPL
})
.endType();