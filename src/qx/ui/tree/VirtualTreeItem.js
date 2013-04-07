/**
 * The tree item is a tree element for the {@link VirtualTree}, which can have
 * nested tree elements.
 */
//>public
vjo.ctype('qx.ui.tree.VirtualTreeItem')
.inherits('qx.ui.tree.core.AbstractItem')
.protos({
	/**
	 */
	_addWidgets : vjo.NEEDS_IMPL,


	/**
	 */
	_shouldShowOpenSymbol : vjo.NEEDS_IMPL,


	/**
	 */
	getLevel : vjo.NEEDS_IMPL,


	/**
	 */
	hasChildren : vjo.NEEDS_IMPL
})
.endType();