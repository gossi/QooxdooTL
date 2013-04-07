/**
 * Objects, which are used as delegates for a data binding controller may
 * implement any of the methods described in this interface. The delegate does
 * not need implement all of the methods of this interface. If a method is not
 * implemented the controller provides a default implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * really implemented.
 */
//>public
vjo.itype('qx.data.controller.IControllerDelegate')
.protos({
	/**
	 * Sets up the binding for the given item and index.
	 * 
	 * For every property you want to bind, use
	 * {@link qx.data.controller.List#bindProperty} like this:
	 * 
	 * controller.bindProperty(&#8220;path.in.the.model&#8221;, &#8220;label&#8221;, options, item, id);

	 * 
	 */
	bindItem : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to set individual styles and properties
	 * on the by the controller created widgets.
	 * 
	 */
	configureItem : vjo.NEEDS_IMPL,


	/**
	 * Creates an item which will be added to the target as child. Be sure to
	 * implement the {@link #bindItem} function as well to get the needed
	 * properties bound.
	 * 
	 */
	createItem : vjo.NEEDS_IMPL,


	/**
	 * Filter checks the current data and returns a boolean if the data should
	 * appear in the filtered data set or not.
	 * 
	 * The filter currently works only with the {@link qx.data.controller.List}
	 * controller!
	 * 
	 */
	filter : vjo.NEEDS_IMPL
})
.endType();