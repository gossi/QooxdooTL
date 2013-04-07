/**
 * Generic selection manager to bring rich desktop like selection behavior
 * to widgets and low-level interactive controls.
 * 
 * The selection handling supports both Shift and Ctrl/Meta modifies like
 * known from native applications.
 */
//>public abstract
vjo.ctype('qx.ui.core.selection.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal method to convert a range to a map of hash
	 * codes for faster lookup during selection compare routines.
	 * 
	 */
	__rangeToMap : vjo.NEEDS_IMPL,


	/**
	 * Adds an item to the current selection.
	 * 
	 */
	_addToSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies the default selection. The default item is the first item.
	 * 
	 */
	_applyDefaultSelection : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	_applyMode : vjo.NEEDS_IMPL,


	/**
	 * Automatically selects items based on the mouse movement during a drag selection
	 * 
	 */
	_autoSelect : vjo.NEEDS_IMPL,


	/**
	 * Enables capturing of the container.
	 * 
	 */
	_capture : vjo.NEEDS_IMPL,


	/**
	 * Stops all timers, release capture etc. to cleanup drag selection
	 * 
	 */
	_cleanup : vjo.NEEDS_IMPL,


	/**
	 * Clears current selection
	 * 
	 */
	_clearSelection : vjo.NEEDS_IMPL,


	/**
	 * Deselect all items between item1 and item2.
	 * 
	 */
	_deselectItemRange : vjo.NEEDS_IMPL,


	/**
	 * Fires the selection change event if the selection has
	 * been modified.
	 * 
	 */
	_fireChange : vjo.NEEDS_IMPL,


	/**
	 * Returns the current anchor item. This is the item which is the starting
	 * point for all range selections. Normally this is the item which was
	 * clicked on the last time without any modifier keys pressed.
	 * 
	 */
	_getAnchorItem : vjo.NEEDS_IMPL,


	/**
	 * Returns the dimension of the container (available scrolling space).
	 * 
	 */
	_getDimension : vjo.NEEDS_IMPL,


	/**
	 * Returns the first selectable item.
	 * 
	 */
	_getFirstSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the last selectable item.
	 * 
	 */
	_getLastSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the location of the container
	 * 
	 */
	_getLocation : vjo.NEEDS_IMPL,


	/**
	 * Returns the item which should be selected on pageUp/pageDown.
	 * 
	 * May also scroll to the needed position.
	 * 
	 */
	_getPage : vjo.NEEDS_IMPL,


	/**
	 * Returns a selectable item which is related to the given
	 * item through the value of relation.
	 * 
	 */
	_getRelatedSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the scroll position of the container.
	 * 
	 */
	_getScroll : vjo.NEEDS_IMPL,


	/**
	 * Finds the selectable instance from a mouse event
	 * 
	 */
	_getSelectableFromMouseEvent : vjo.NEEDS_IMPL,


	/**
	 * Returns the relative (to the container) horizontal location of the given item.
	 * 
	 */
	_getSelectableLocationX : vjo.NEEDS_IMPL,


	/**
	 * Returns the relative (to the container) horizontal location of the given item.
	 * 
	 */
	_getSelectableLocationY : vjo.NEEDS_IMPL,


	/**
	 * Returns all selectable items between the two given items.
	 * 
	 * The items could be given in any order.
	 * 
	 */
	_getSelectableRange : vjo.NEEDS_IMPL,


	/**
	 * Returns the first selected item. Only makes sense
	 * when using manager in single selection mode.
	 * 
	 */
	_getSelectedItem : vjo.NEEDS_IMPL,


	/**
	 * Whether the given item is selectable.
	 * 
	 */
	_isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Event listener for timer used by drag selection
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL,


	/**
	 * Releases capturing of the container
	 * 
	 */
	_releaseCapture : vjo.NEEDS_IMPL,


	/**
	 * Removes the given item from the current selection.
	 * 
	 */
	_removeFromSelection : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with items from given array.
	 * 
	 */
	_replaceMultiSelection : vjo.NEEDS_IMPL,


	/**
	 * Scrolls by the given offset
	 * 
	 */
	_scrollBy : vjo.NEEDS_IMPL,


	/**
	 * Scrolls the given item into the view (make it visible)
	 * 
	 */
	_scrollItemIntoView : vjo.NEEDS_IMPL,


	/**
	 * Returns an unique hashcode for the given item.
	 * 
	 */
	_selectableToHashCode : vjo.NEEDS_IMPL,


	/**
	 * Adds all items to the selection
	 * 
	 */
	_selectAllItems : vjo.NEEDS_IMPL,


	/**
	 * Select a range from item1 to item2.
	 * 
	 */
	_selectItemRange : vjo.NEEDS_IMPL,


	/**
	 * Sets the anchor item. This is the item which is the starting
	 * point for all range selections. Normally this is the item which was
	 * clicked on the last time without any modifier keys pressed.
	 * 
	 */
	_setAnchorItem : vjo.NEEDS_IMPL,


	/**
	 * Sets the lead item. Generally the item which was last modified
	 * by the user (clicked on etc.)
	 * 
	 */
	_setLeadItem : vjo.NEEDS_IMPL,


	/**
	 * Replace current selection with given item.
	 * 
	 */
	_setSelectedItem : vjo.NEEDS_IMPL,


	/**
	 * Updates the style (appearance) of the given item.
	 * 
	 */
	_styleSelectable : vjo.NEEDS_IMPL,


	/**
	 * Toggles the item e.g. remove it when already selected
	 * or select it when currently not.
	 * 
	 */
	_toggleInSelection : vjo.NEEDS_IMPL,


	/**
	 * Adds the given item to the existing selection.
	 * 
	 * Use {@link #selectItem} instead if you want to replace
	 * the current selection.
	 * 
	 */
	addItem : vjo.NEEDS_IMPL,


	/**
	 * Clears the whole selection at once. Also
	 * resets the lead and anchor items and their
	 * styles.
	 * 
	 */
	clearSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property drag.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	getDrag : vjo.NEEDS_IMPL,


	/**
	 * Returns the current lead item. Generally the item which was last modified
	 * by the user (clicked on etc.)
	 * 
	 */
	getLeadItem : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	getMode : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property quick.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	getQuick : vjo.NEEDS_IMPL,


	/**
	 * Returns all selectable items of the container.
	 * 
	 */
	getSelectables : vjo.NEEDS_IMPL,


	/**
	 * Get the selected item. This method does only work in single
	 * selection mode.
	 * 
	 */
	getSelectedItem : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of currently selected items.
	 * 
	 * Note: The result is only a set of selected items, so the order can
	 * differ from the sequence in which the items were added.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Returns the selection context. One of click,
	 * quick, drag or key or
	 * null.
	 * 
	 */
	getSelectionContext : vjo.NEEDS_IMPL,


	/**
	 * Returns the selection sorted by the index in the
	 * container of the selection (the assigned widget)
	 * 
	 */
	getSortedSelection : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the addItem event
	 * of the managed object.
	 * 
	 */
	handleAddItem : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the keypress event
	 * of the managed object.
	 * 
	 */
	handleKeyPress : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the losecapture event
	 * of the managed object.
	 * 
	 */
	handleLoseCapture : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the mousedown event
	 * of the managed object.
	 * 
	 */
	handleMouseDown : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the mousemove event
	 * of the managed object.
	 * 
	 */
	handleMouseMove : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the mouseover event
	 * of the managed object.
	 * 
	 */
	handleMouseOver : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the mouseup event
	 * of the managed object.
	 * 
	 */
	handleMouseUp : vjo.NEEDS_IMPL,


	/**
	 * This method should be connected to the removeItem event
	 * of the managed object.
	 * 
	 */
	handleRemoveItem : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property drag
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	initDrag : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property mode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	initMode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property quick
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	initQuick : vjo.NEEDS_IMPL,


	/**
	 * Invert the selection. Select the non selected and deselect the selected.
	 * 
	 */
	invertSelection : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property drag equals true.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	isDrag : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the given item is currently selected.
	 * 
	 */
	isItemSelected : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property quick equals true.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	isQuick : vjo.NEEDS_IMPL,


	/**
	 * Whether the selection is empty
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Removes the given item from the selection.
	 * 
	 * Use {@link #clearSelection} when you want to clear
	 * the whole selection at once.
	 * 
	 */
	removeItem : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with given array of items.
	 * 
	 * Please note that in single selection scenarios it is more
	 * efficient to directly use {@link #selectItem}.
	 * 
	 */
	replaceSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property drag.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	resetDrag : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property mode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	resetMode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property quick.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	resetQuick : vjo.NEEDS_IMPL,


	/**
	 * Selects all items of the managed object.
	 * 
	 */
	selectAll : vjo.NEEDS_IMPL,


	/**
	 * Selects the given item. Replaces current selection
	 * completely with the new item.
	 * 
	 * Use {@link #addItem} instead if you want to add new
	 * items to an existing selection.
	 * 
	 */
	selectItem : vjo.NEEDS_IMPL,


	/**
	 * Selects an item range between two given items.
	 * 
	 */
	selectItemRange : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property drag.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	setDrag : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property mode.
	 * 
	 * For further details take a look at the property definition: {@link #mode}.
	 * 
	 */
	setMode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property quick.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	setQuick : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property drag.
	 * 
	 * For further details take a look at the property definition: {@link #drag}.
	 * 
	 */
	toggleDrag : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property quick.
	 * 
	 * For further details take a look at the property definition: {@link #quick}.
	 * 
	 */
	toggleQuick : vjo.NEEDS_IMPL
})
.endType();