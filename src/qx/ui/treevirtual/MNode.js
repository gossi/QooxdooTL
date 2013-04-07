/**
 * Utility functions for working with nodes.  These methods allow reference
 * to a node by either the object itself or the object&#8217;s node id.
 */
//>public
vjo.mtype('qx.ui.treevirtual.MNode')
.protos({
	/**
	 * Get a node object given its node id.
	 * 
	 */
	nodeGet : vjo.NEEDS_IMPL,


	/**
	 * Get the cell style for a node
	 * 
	 */
	nodeGetCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Get the hideOpenClose state for a node.
	 * 
	 */
	nodeGetHideOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Get the icon for a node when in its unselected (normal) state.
	 * 
	 */
	nodeGetIcon : vjo.NEEDS_IMPL,


	/**
	 * Get the label for a node.
	 * 
	 */
	nodeGetLabel : vjo.NEEDS_IMPL,


	/**
	 * Get the label style for a node
	 * 
	 */
	nodeGetLabelStyle : vjo.NEEDS_IMPL,


	/**
	 * Get the opened state for a node.
	 * 
	 */
	nodeGetOpened : vjo.NEEDS_IMPL,


	/**
	 * Get the selected state for a node.
	 * 
	 */
	nodeGetSelected : vjo.NEEDS_IMPL,


	/**
	 * Get the icon for a node when in its selected state.
	 * 
	 */
	nodeGetSelectedIcon : vjo.NEEDS_IMPL,


	/**
	 * Set the cell style for a node
	 * 
	 */
	nodeSetCellStyle : vjo.NEEDS_IMPL,


	/**
	 * Set the hideOpenClose state for a node.
	 * 
	 */
	nodeSetHideOpenClose : vjo.NEEDS_IMPL,


	/**
	 * Set the icon for a node when in its unselected (normal) state.
	 * 
	 */
	nodeSetIcon : vjo.NEEDS_IMPL,


	/**
	 * Set the label for a node.
	 * 
	 */
	nodeSetLabel : vjo.NEEDS_IMPL,


	/**
	 * Set the label style for a node
	 * 
	 */
	nodeSetLabelStyle : vjo.NEEDS_IMPL,


	/**
	 * Set the opened state for a node.  (Note that this method has no effect
	 * if the requested state is the same as the current state.)
	 * 
	 */
	nodeSetOpened : vjo.NEEDS_IMPL,


	/**
	 * Set the selected state for a node.
	 * 
	 */
	nodeSetSelected : vjo.NEEDS_IMPL,


	/**
	 * Set the icon for a node when in its selected state.
	 * 
	 * NOTE: As of 13 Mar 2009, this feature is disabled by default, by
	 *       virtue of the fact that the tree&#8217;s &#8220;alwaysUpdateCells&#8221; property
	 *       has a setting of &#8216;false&#8217; now instead of &#8216;true&#8217;. Setting this
	 *       property to true allows the icon to change upon selection, but
	 *       causes problems such as single clicks not always selecting a
	 *       row, and, in IE, double click operations failing
	 *       completely. (For more information, see bugs 605 and 2021.) To
	 *       re-enable the option to have an unique icon that is displayed
	 *       when the node is selected, issue
	 *       tree.setAlwaysUpdateCells(true);
	 * 
	 */
	nodeSetSelectedIcon : vjo.NEEDS_IMPL,


	/**
	 * Set state attributes of a tree node.
	 * 
	 */
	nodeSetState : vjo.NEEDS_IMPL,


	/**
	 * Toggle the opened state of the node: if the node is opened, close
	 * it; if it is closed, open it.
	 * 
	 */
	nodeToggleOpened : vjo.NEEDS_IMPL
})
.endType();