/**
 * The tree file is a leaf tree item. It cannot contain any nested tree items.
 */
//>public
vjo.ctype('qx.ui.tree.TreeFile')
.inherits('qx.ui.tree.core.AbstractTreeItem')
.protos({
	/**
	 */
	_addWidgets : vjo.NEEDS_IMPL
})
.endType();