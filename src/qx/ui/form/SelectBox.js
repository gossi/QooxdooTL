/**
 * A form widget which allows a single selection. Looks somewhat like
 * a normal button, but opens a list of items to select when clicking on it.
 * 
 * Keep in mind that the SelectBox widget has always a selected item (due to the
 * single selection mode). Right after adding the first item a changeSelection
 * event is fired.
 * 
 * 
 * var selectBox = new qx.ui.form.SelectBox();
 * 
 * selectBox.addListener("changeSelection", function(e) {
 *   // ...
 * });
 * 
 * // now the 'changeSelection' event is fired
 * selectBox.add(new qx.ui.form.ListItem("Item 1");

 */
//>public
vjo.ctype('qx.ui.form.SelectBox')
.inherits('qx.ui.form.AbstractSelectBox')
.satisfies(['qx.ui.core.ISingleSelection','qx.ui.form.IModelSelection'])
.mixin(['qx.ui.core.MSingleSelectionHandling','qx.ui.form.MModelSelection'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Event handler for changeSelection.
	 * 
	 */
	__onChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the icon inside the list to match the selected ListItem.
	 * 
	 */
	__updateIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the label inside the list to match the selected ListItem.
	 * 
	 */
	__updateLabel : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Returns the list items for the selection.
	 * 
	 */
	_getItems : vjo.NEEDS_IMPL,


	/**
	 * Returns if the selection could be empty or not.
	 * 
	 */
	_isAllowEmptySelection : vjo.NEEDS_IMPL,


	/**
	 * Toggles the popup&#8217;s visibility.
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Forwards key event to list widget.
	 * 
	 */
	_onKeyInput : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 */
	_onListChangeSelection : vjo.NEEDS_IMPL,


	/**
	 */
	_onListMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseout&#8221; event
	 * 
	 * Removes &#8220;hovered&#8221; state
	 * Adds &#8220;abandoned&#8221; and removes &#8220;pressed&#8221; state (if &#8220;pressed&#8221; state is set)

	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event
	 * 
	 * Adds state &#8220;hovered&#8221;
	 * Removes &#8220;abandoned&#8221; and adds &#8220;pressed&#8221; state (if &#8220;abandoned&#8221; state is set)

	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Event handler for mousewheel event
	 * 
	 */
	_onMouseWheel : vjo.NEEDS_IMPL,


	/**
	 */
	_onPopupChangeVisibility : vjo.NEEDS_IMPL
})
.endType();