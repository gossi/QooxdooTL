/**
 * Interface describes the methods which the {@link qx.ui.tree.provider.WidgetProvider}
 * uses for communication.
 */
//>public
vjo.itype('qx.ui.tree.core.IVirtualTree')
.protos({
	/**
	 * Closes the passed node.
	 * 
	 */
	closeNode : vjo.NEEDS_IMPL,


	/**
	 * Returns the row&#8217;s nesting level.
	 * 
	 */
	getLevel : vjo.NEEDS_IMPL,


	/**
	 * Returns the internal data structure. The Array index is the row and the
	 * value is the model item.
	 * 
	 */
	getLookupTable : vjo.NEEDS_IMPL,


	/**
	 * Returns the current selection.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Return whether the node has visible children or not.
	 * 
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns if the passed item is a note or a leaf.
	 * 
	 */
	isNode : vjo.NEEDS_IMPL,


	/**
	 * Return whether the node is opened or closed.
	 * 
	 */
	isNodeOpen : vjo.NEEDS_IMPL,


	/**
	 * Return whether top level items should have an open/close button. The top
	 * level item item is normally the root item, but when the root is hidden,
	 * the root children are the top level items.
	 * 
	 */
	isShowTopLevelOpenCloseIcons : vjo.NEEDS_IMPL,


	/**
	 * Opens the passed node.
	 * 
	 */
	openNode : vjo.NEEDS_IMPL
})
.endType();