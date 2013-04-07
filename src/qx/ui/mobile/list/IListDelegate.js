/**
 * Objects which are used as delegates for the {@link qx.ui.mobile.list.List#delegate} may
 * implement any of the methods described in this interface. The delegate does
 * not need to implement all the methods of this interface. If a method is not
 * implemented the {@link qx.ui.mobile.list.provider.Provider} provides a default
 * implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * actually implemented.
 */
//>public
vjo.itype('qx.ui.mobile.list.IListDelegate')
.protos({
	/**
	 * Configure the list item renderer with the given data. Mandatory method.
	 * At least this method has to be defined for the delegate.
	 * 
	 */
	configureItem : vjo.NEEDS_IMPL,


	/**
	 * Creates an instance of the item renderer to use.
	 * 
	 */
	createItemRenderer : vjo.NEEDS_IMPL
})
.endType();