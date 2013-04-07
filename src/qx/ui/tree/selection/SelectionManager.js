/**
 * Responsible for the selection management of the {@link qx.ui.tree.Tree}.
 */
//>internal
vjo.ctype('qx.ui.tree.selection.SelectionManager')
.inherits('qx.ui.core.selection.ScrollArea')
.protos({
	/**
	 */
	_getFirstSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getLastSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getRelatedSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableFromMouseEvent : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableLocationY : vjo.NEEDS_IMPL,


	/**
	 */
	_getSelectableRange : vjo.NEEDS_IMPL,


	/**
	 */
	_isSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	getSelectables : vjo.NEEDS_IMPL
})
.endType();