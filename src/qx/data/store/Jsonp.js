/**
 * The JSONP data store is a specialization of {@link qx.data.store.Json}. It
 * differs in the type of transport used ({@link qx.io.request.Jsonp}). In
 * order to fullfill requirements of the JSONP service, the method
 * {@link #setCallbackParam} can be used.
 * 
 * Please note that the upgrade notices described in {@link qx.data.store.Json}
 * also apply to this class.
 */
//>public
vjo.ctype('qx.data.store.Jsonp')
.inherits('qx.data.store.Json')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_createRequest : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property callbackName.
	 * 
	 * For further details take a look at the property definition: {@link #callbackName}.
	 * 
	 */
	getCallbackName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property callbackParam.
	 * 
	 * For further details take a look at the property definition: {@link #callbackParam}.
	 * 
	 */
	getCallbackParam : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property callbackName
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #callbackName}.
	 * 
	 */
	initCallbackName : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property callbackParam
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #callbackParam}.
	 * 
	 */
	initCallbackParam : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property callbackName.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #callbackName}.
	 * 
	 */
	resetCallbackName : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property callbackParam.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #callbackParam}.
	 * 
	 */
	resetCallbackParam : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property callbackName.
	 * 
	 * For further details take a look at the property definition: {@link #callbackName}.
	 * 
	 */
	setCallbackName : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property callbackParam.
	 * 
	 * For further details take a look at the property definition: {@link #callbackParam}.
	 * 
	 */
	setCallbackParam : vjo.NEEDS_IMPL
})
.endType();