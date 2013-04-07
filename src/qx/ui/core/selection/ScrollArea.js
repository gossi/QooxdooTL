/**
 * A selection manager, which handles the selection in widgets extending
 * {@link qx.ui.core.scroll.AbstractScrollArea}.
 */
//>public
vjo.ctype('qx.ui.core.selection.ScrollArea')
.inherits('qx.ui.core.selection.Widget')
.protos({
	/**
	 */
	_getDimension : vjo.NEEDS_IMPL,


	/**
	 */
	_getPage : vjo.NEEDS_IMPL,


	/**
	 */
	_getScroll : vjo.NEEDS_IMPL,


	/**
	 */
	_isSelectable : vjo.NEEDS_IMPL,


	/**
	 */
	_scrollBy : vjo.NEEDS_IMPL
})
.endType();