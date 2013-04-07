/**
 * This mixin exposes all basic methods to manage widget children as public methods.
 * It can only be included into instances of {@link Widget}.
 * 
 * To optimize the method calls the including widget should call the method
 * {@link #remap} in its defer function. This will map the protected
 * methods to the public ones and save one method call for each function.
 */
//>public
vjo.mtype('qx.ui.core.MChildrenHandling')
.protos({
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
	 * Add a widget after another already inserted widget
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	addAfter : vjo.NEEDS_IMPL,


	/**
	 * Add a child widget at the specified index
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	addAt : vjo.NEEDS_IMPL,


	/**
	 * Add a widget before another already inserted widget
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
	 * Returns the index position of the given widget if it is
	 * a child widget. Otherwise it returns -1.
	 * 
	 * This method works on the widget&#8217;s children list. Some layout managers
	 * (e.g. {@link qx.ui.layout.HBox}) use the children order as additional
	 * layout information. Other layout manager (e.g. {@link qx.ui.layout.Grid})
	 * ignore the children order for the layout process.
	 * 
	 */
	indexOf : vjo.NEEDS_IMPL,


	/**
	 * Remove the given child widget.
	 * 
	 */
	remove : vjo.NEEDS_IMPL,


	/**
	 * Remove all children.
	 * 
	 */
	removeAll : vjo.NEEDS_IMPL,


	/**
	 * Remove the widget at the specified index.
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