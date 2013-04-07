/**
 * Objects which are used as delegates for the qx.ui.tree.VirtualTree may
 * implement any of the methods described in this interface. The delegate does
 * not need to implement all the methods of this interface. If a method is not
 * implemented the qx.ui.tree.VirtualTree provides a default
 * implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * actually implemented.
 */
//>public
vjo.itype('qx.ui.tree.core.IVirtualTreeDelegate')
.protos({
	/**
	 * Sets up the binding for the given widget cell and index.
	 * 
	 * For every property you want to bind, use
	 * {@link MWidgetController#bindProperty} like this:
	 * 
	 * controller.bindProperty(null, &#8220;value&#8221;, options, item, id);

	 * 
	 */
	bindItem : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to set individual styles and properties
	 * on the widget cells created by the controller.
	 * 
	 */
	configureItem : vjo.NEEDS_IMPL,


	/**
	 * Creates a widget cell which will be used for rendering. Be sure to
	 * implement the {@link #bindItem} function as well to get the needed
	 * properties bound.
	 * 
	 */
	createItem : vjo.NEEDS_IMPL,


	/**
	 * Filter checks the current data and returns a boolean if the data should
	 * appear in the filtered data set or not.
	 * 
	 */
	filter : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to reset properties or states.
	 * 
	 */
	onPool : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to sort the children items from a node.
	 * The sorting method should return a negative value if a < b, zero
	 * if a = b, or a positive value if a > b.
	 * 
	 */
	sorter : vjo.NEEDS_IMPL
})
.endType();