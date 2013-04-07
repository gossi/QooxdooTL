/**
 * This mixin links all methods to manage the multi selection from the
 * internal selection manager to the widget.
 */
//>public
vjo.mtype('qx.ui.core.MMultiSelectionHandling')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	_applyDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	_applyQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	_applySelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the current lead item. Generally the item which was last modified
	 * by the user (clicked on etc.)
	 * 
	 */
	_getLeadItem : vjo.NEEDS_IMPL,


	/**
	 * Returns the internal selection manager. Use this with
	 * caution!
	 * 
	 */
	_getManager : vjo.NEEDS_IMPL,


	/**
	 * Event listener for changeSelection event on selection manager.
	 * 
	 */
	_onSelectionChange : vjo.NEEDS_IMPL,


	/**
	 * Adds the given item to the existing selection.
	 * 
	 * Use {@link #setSelection} instead if you want to replace
	 * the current selection.
	 * 
	 */
	addToSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	getDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	getQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns all elements which are selectable.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of currently selected items.
	 * 
	 * Note: The result is only a set of selected items, so the order can
	 * differ from the sequence in which the items were added.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the last selection context.
	 * 
	 */
	getSelectionContext : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	getSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of currently selected items sorted
	 * by their index in the container.
	 * 
	 */
	getSortedSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property dragSelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	initDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property quickSelection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	initQuickSelection : vjo.NEEDS_IMPL,


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
	 * Invert the selection. Select the non selected and deselect the selected.
	 * 
	 */
	invertSelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property dragSelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	isDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property quickSelection equals true.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	isQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the given item is currently selected.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Whether the selection is empty
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Removes the given item from the selection.
	 * 
	 * Use {@link #resetSelection} when you want to clear
	 * the whole selection at once.
	 * 
	 */
	removeFromSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property dragSelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	resetDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property quickSelection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	resetQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Clears the whole selection at once. Also
	 * resets the lead and anchor items and their
	 * styles.
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
	 * Selects all items of the managed object.
	 * 
	 */
	selectAll : vjo.NEEDS_IMPL,


	/**
	 * Selects an item range between two given items.
	 * 
	 */
	selectRange : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	setDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	setQuickSelection : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with the given items.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selectionMode.
	 * 
	 * For further details take a look at the property definition: {@link #selectionMode}.
	 * 
	 */
	setSelectionMode : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property dragSelection.
	 * 
	 * For further details take a look at the property definition: {@link #dragSelection}.
	 * 
	 */
	toggleDragSelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property quickSelection.
	 * 
	 * For further details take a look at the property definition: {@link #quickSelection}.
	 * 
	 */
	toggleQuickSelection : vjo.NEEDS_IMPL
})
.endType();