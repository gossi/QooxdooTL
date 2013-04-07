/**
 * Objects which are used as delegates for the qx.ui.list.List may
 * implement any of the methods described in this interface. The delegate does
 * not need to implement all the methods of this interface. If a method is not
 * implemented the qx.ui.list.List provides a default
 * implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * actually implemented.
 */
//>public
vjo.itype('qx.ui.list.core.IListDelegate')
.protos({
	/**
	 * Sets up the binding for the given group item and index.
	 * 
	 * For every property you want to bind, use
	 * {@link MWidgetController#bindProperty} like this:
	 * 
	 * controller.bindProperty(null, &#8220;value&#8221;, options, item, id);

	 * 
	 */
	bindGroupItem : vjo.NEEDS_IMPL,


	/**
	 * Sets up the binding for the given item and index.
	 * 
	 * For every property you want to bind, use
	 * {@link MWidgetController#bindProperty} like this:
	 * 
	 * controller.bindProperty(&#8220;path.in.the.model&#8221;, &#8220;label&#8221;, options, item, id);

	 * 
	 */
	bindItem : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to set individual styles and properties
	 * on the group widget cells created by the controller.
	 * 
	 */
	configureGroupItem : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to set individual styles and properties
	 * on the item widget cells created by the controller.
	 * 
	 */
	configureItem : vjo.NEEDS_IMPL,


	/**
	 * Creates a group cell which will be used for rendering. Be sure to
	 * implement the {@link #bindGroupItem} function as well to get the needed
	 * properties bound.
	 * 
	 */
	createGroupItem : vjo.NEEDS_IMPL,


	/**
	 * Creates an item cell which will be used for rendering. Be sure to
	 * implement the {@link #bindItem} function as well to get the needed
	 * properties bound.
	 * 
	 */
	createItem : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to filter the model. The filter
	 * method has to return true if the given data should be
	 * shown and false if the given data should be ignored.
	 * 
	 */
	filter : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to group the model. The group method
	 * should return unique identifier for the passed data.
	 * 
	 * Note: When you returning null the passed data will added
	 * to the default group, which is ??? from the type
	 * String. But keep in mind that you can only use the default
	 * group feature when each other group identifier is also a String.
	 * Otherwise an exception occurs, because you can&#8217;t mix Object
	 * and String group identifiers.
	 * 
	 */
	group : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to reset properties or states.
	 * 
	 */
	onPool : vjo.NEEDS_IMPL,


	/**
	 * Gives the user the opportunity to sort the model. The sorting method
	 * should return a negative value if a < b, zero if a = b, or a positive
	 * value if a > b.
	 * 
	 */
	sorter : vjo.NEEDS_IMPL
})
.endType();