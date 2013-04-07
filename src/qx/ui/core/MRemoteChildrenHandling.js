/**
 * This mixin redirects all children handling methods to a child widget of the
 * including class. This is e.g. used in {@link qx.ui.window.Window} to add
 * child widgets directly to the window pane.
 * 
 * The including class must implement the method getChildrenContainer,
 * which has to return the widget, to which the child widgets should be added.
 */
//>public
vjo.mtype('qx.ui.core.MRemoteChildrenHandling')
.protos({
	/**
	 * Forward the call with the given function name to the children container
	 * 
	 */
	__forward : vjo.NEEDS_IMPL,


	/**
	 * Adds a new child widget.
	 * 
	 * The supported keys of the layout options map depend on the layout manager
	 * used to position the widget. The options are documented in the class
	 * documentation of each layout manager {@link qx.ui.layout}.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Add an item after another already inserted item
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	addAfter : vjo.NEEDS_IMPL,


	/**
	 * Add a child at the specified index
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 * Add an item before another already inserted item
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	addBefore : vjo.NEEDS_IMPL,


	/**
	 * Returns the children list
	 * 
	 */
	getChildren : vjo.NEEDS_IMPL,


	/**
	 * Whether the widget contains children.
	 * 
	 */
	hasChildren : vjo.NEEDS_IMPL,


	/**
	 * Returns the index position of the given item if it is
	 * a child item. Otherwise it returns -1.
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Remove the given child item.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all children.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove the item at the specified index.
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	removeAt : vjo.NEEDS_IMPL
})
.endType();