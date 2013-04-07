/**
 * The JSON data store is responsible for fetching data from an url. The type
 * of the data has to be json.
 * 
 * The loaded data will be parsed and saved in qooxdoo objects. Every value
 * of the loaded data will be stored in a qooxdoo property. The model classes
 * for the data will be created automatically.
 * 
 * For the fetching itself it uses the {@link qx.io.request.Xhr} class and
 * for parsing the loaded javascript objects into qooxdoo objects, the
 * {@link qx.data.marshal.Json} class will be used.
 * 
 * Please note that if you
 * 
 * 
 * upgrade from qooxdoo 1.4 or lower
 * choose not to force the old transport
 * use a delegate with qx.data.store.IStoreDelegate#configureRequest
 * 
 * 
 * you probably need to change the implementation of your delegate to configure
 * the {@link qx.io.request.Xhr} request.
 */
//>public
vjo.ctype('qx.data.store.Json')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property url.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	_applyUrl : vjo.NEEDS_IMPL,


	/**
	 * Creates and sends a GET request with the given url.
	 * 
	 * Listeners will be added to respond to the request&#8217;s &#8220;success&#8221;,
	 * &#8220;changePhase&#8221; and &#8220;fail&#8221; event.
	 * 
	 */
	_createRequest : vjo.NEEDS_IMPL,


	/**
	 * Get request
	 * 
	 */
	_getRequest : vjo.NEEDS_IMPL,


	/**
	 * Handler called when request phase changes.
	 * 
	 * Sets the store&#8217;s state.
	 * 
	 */
	_onChangePhase : vjo.NEEDS_IMPL,


	/**
	 * Handler called when not completing the request successfully.
	 * 
	 */
	_onFail : vjo.NEEDS_IMPL,


	/**
	 * Handler for the completion of the requests. It invokes the creation of
	 * the needed classes and instances for the fetched data using
	 * {@link qx.data.marshal.Json}.
	 * 
	 */
	_onSuccess : vjo.NEEDS_IMPL,


	/**
	 * Set request.
	 * 
	 */
	_setRequest : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	getModel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property url.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	getUrl : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property state
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	initState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property url
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	initUrl : vjo.NEEDS_IMPL,


	/**
	 * Reloads the data with the url set in the {@link #url} property.
	 * 
	 */
	reload : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property state.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	resetState : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property url.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	resetUrl : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property model.
	 * 
	 * For further details take a look at the property definition: {@link #model}.
	 * 
	 */
	setModel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property url.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	setUrl : vjo.NEEDS_IMPL
})
.endType();