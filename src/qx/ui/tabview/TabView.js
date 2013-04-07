/**
 * A tab view is a multi page view where only one page is visible
 * at each moment. It is possible to switch the pages using the
 * buttons rendered by each page.
 */
//>public
vjo.ctype('qx.ui.tabview.TabView')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.core.ISingleSelection')
.mixin('qx.ui.core.MContentPadding')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply method for the placeBarOnTop-Property.
	 * 
	 * Passes the desired value to the layout of the tabview so
	 * that the layout can handle it.
	 * It also sets the states to all buttons so they know the
	 * position of the bar.
	 * 
	 */
	_applyBarPosition : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the element, to which the content padding should be applied.
	 * 
	 */
	_getContentPaddingTarget : vjo.NEEDS_IMPL,


	/**
	 * Event handler for beforeChangeSelection.
	 * 
	 */
	_onBeforeChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Event handler for changeSelection.
	 * 
	 */
	_onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Removes the Page widget on which the close button was clicked.
	 * 
	 */
	_onPageClose : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the change of the selected item of the radio group.
	 * 
	 */
	_onRadioChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Adds a page to the tabview including its needed button
	 * (contained in the page).
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Adds a page to the tabview including its needed button
	 * (contained in the page).
	 * 
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property barPosition.
	 * 
	 * For further details take a look at the property definition: {@link #barPosition}.
	 * 
	 */
	getBarPosition : vjo.NEEDS_IMPL,


	/**
	 * Returns TabView&#8217;s children widgets.
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


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
	 * Returns the position of the given page in the TabView.
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property barPosition
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #barPosition}.
	 * 
	 */
	initBarPosition : vjo.NEEDS_IMPL,


	/**
	 * Detects whether the given item is currently selected.
	 * 
	 */
	isSelected : vjo.NEEDS_IMPL,


	/**
	 * Whether the selection is empty.
	 * 
	 */
	isSelectionEmpty : vjo.NEEDS_IMPL,


	/**
	 * Removes a page (and its corresponding button) from the TabView.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property barPosition.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #barPosition}.
	 * 
	 */
	resetBarPosition : vjo.NEEDS_IMPL,


	/**
	 * Clears the whole selection at once.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property barPosition.
	 * 
	 * For further details take a look at the property definition: {@link #barPosition}.
	 * 
	 */
	setBarPosition : vjo.NEEDS_IMPL,


	/**
	 * Replaces current selection with the given items.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL
})
.endType();