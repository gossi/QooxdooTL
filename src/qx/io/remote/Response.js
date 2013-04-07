/**
 * This class is used to work with the result of a HTTP request.
 */
//>public
vjo.ctype('qx.io.remote.Response')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Keep lower-cased shadow of response headers for later
	 * case-insensitive matching.
	 * 
	 */
	_applyResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property content.
	 * 
	 * For further details take a look at the property definition: {@link #content}.
	 * 
	 */
	getContent : vjo.NEEDS_IMPL,


	/**
	 * Returns a specific response header
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property responseHeaders.
	 * 
	 * For further details take a look at the property definition: {@link #responseHeaders}.
	 * 
	 */
	getResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property statusCode.
	 * 
	 * For further details take a look at the property definition: {@link #statusCode}.
	 * 
	 */
	getStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property content
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #content}.
	 * 
	 */
	initContent : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property responseHeaders
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #responseHeaders}.
	 * 
	 */
	initResponseHeaders : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property statusCode
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #statusCode}.
	 * 
	 */
	initStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property content.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #content}.
	 * 
	 */
	resetContent : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property responseHeaders.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #responseHeaders}.
	 * 
	 */
	resetResponseHeaders : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property statusCode.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #statusCode}.
	 * 
	 */
	resetStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property content.
	 * 
	 * For further details take a look at the property definition: {@link #content}.
	 * 
	 */
	setContent : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property responseHeaders.
	 * 
	 * For further details take a look at the property definition: {@link #responseHeaders}.
	 * 
	 */
	setResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property statusCode.
	 * 
	 * For further details take a look at the property definition: {@link #statusCode}.
	 * 
	 */
	setStatusCode : vjo.NEEDS_IMPL
})
.endType();