/**
 * The tree folder is a tree element, which can have nested tree elements.
 */
//>public
vjo.ctype('qx.ui.tree.TreeFolder')
.inherits('qx.ui.tree.core.AbstractTreeItem')
.protos({
	/**
	 */
	_addWidgets : vjo.NEEDS_IMPL
})
.endType();