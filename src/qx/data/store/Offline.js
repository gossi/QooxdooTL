/**
 * This store is a read / write store for local or session storage.
 * It can be used like any other store by setting and manipulating the model
 * property or the model itself. Please keep in mind that if you want to have
 * the update functionality, you have to use a model which supports the
 * {@link qx.data.marshal.MEventBubbling#changeBubble} event.
 */
//>public
vjo.ctype('qx.data.store.Offline')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal helper for writing the set model to the browser storage.
	 * 
	 */
	__storeModel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	_applyModel : vjo.NEEDS_IMPL,


	/**
	 * Helper for reading the model from the browser storage.
	 * 
	 */
	_initializeModel : vjo.NEEDS_IMPL,


	/**
	 * Responsible for creating the model read from the brwoser storage.
	 * 
	 */
	_setModel : vjo.NEEDS_IMPL,


	/**
	 * Accessor for the unique key used to store the data.
	 * 
	 */
	getKey : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property model
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	initModel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property model.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	resetModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL
})
.endType();