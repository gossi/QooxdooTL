/**
 * EXPERIMENTAL!
 * 
 * Column selection manager
 */
//>public
vjo.ctype('qx.ui.virtual.selection.Column')
.inherits('qx.ui.virtual.selection.Row')
.protos({
	/**
	 * Returns the number of all items in the pane. This number may contain
	 * unselectable items as well.
	 * 
	 */
	_getItemCount : vjo.NEEDS_IMPL,


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
	_scrollItemIntoView : vjo.NEEDS_IMPL
})
.endType();