/**
 * EXPERIMENTAL!
 * 
 * Row selection manager
 */
//>public
vjo.ctype('qx.ui.virtual.selection.Row')
.inherits('qx.ui.virtual.selection.Abstract')
.protos({
	/**
	 */
	_getFirstSelectable : vjo.NEEDS_IMPL,


	/**
	 * Returns the number of all items in the pane. This number may contain
	 * unselectable items as well.
	 * 
	 */
	_getItemCount : vjo.NEEDS_IMPL,


	/**
	 */
	_getLastSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getPage : vjo.NEEDS_IMPL,


	/**
	 */
	_getRelatedSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableFromMouseEvent : vjo.NEEDS_IMPL,


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
	 */
	_scrollItemIntoView : vjo.NEEDS_IMPL,


	/**
	 */
	_selectableToHashCode : vjo.NEEDS_IMPL,


	/**
	 */
	getSelectables : vjo.NEEDS_IMPL
})
.endType();