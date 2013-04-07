/**
 * A selection manager, which handles the selection in widgets.
 */
//>public
vjo.ctype('qx.ui.core.selection.Widget')
.inherits('qx.ui.core.selection.Abstract')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_capture : vjo.NEEDS_IMPL,


	/**
	 */
	_getDimension : vjo.NEEDS_IMPL,


	/**
	 */
	_getFirstSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getLastSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getLocation : vjo.NEEDS_IMPL,


	/**
	 */
	_getPage : vjo.NEEDS_IMPL,


	/**
	 */
	_getRelatedSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getScroll : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableLocationX : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableLocationY : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableRange : vjo.NEEDS_IMPL,


	/**
	 * Returns the connected widget.
	 * 
	 */
	_getWidget : vjo.NEEDS_IMPL,


	/**
	 * Helper to return the selectability of the item concerning the
	 * user interaaction.
	 * 
	 */
	_isItemSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_isSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_releaseCapture : vjo.NEEDS_IMPL,


	/**
	 */
	_scrollBy : vjo.NEEDS_IMPL,


	/**
	 */
	_scrollItemIntoView : vjo.NEEDS_IMPL,


	/**
	 */
	_selectableToHashCode : vjo.NEEDS_IMPL,


	/**
	 */
	_styleSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	getSelectables : vjo.NEEDS_IMPL
})
.endType();