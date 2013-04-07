/**
 * Objects, which are used as delegates for a data binding store may
 * implement any of the methods described in this interface. The delegate does
 * not need implement all of the methods of this interface. If a method is not
 * implemented the store provides a default implementation.
 * 
 * Note: This interface is meant to document the delegate but should not be
 * listed in the implement key of a class unless all methods are
 * really implemented.
 */
//>public
vjo.itype('qx.data.store.IStoreDelegate')
.protos({
	/**
	 * This method can change the settings on the used request by the store.
	 * 
	 */
	configureRequest : vjo.NEEDS_IMPL,


	/**
	 * This method manipulates the data from the request and returns the
	 * manipulated data.
	 * 
	 */
	manipulateData : vjo.NEEDS_IMPL
})
.endType();