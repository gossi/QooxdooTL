/**
 * Abstract for all transport implementations
 */
//>public abstract
vjo.ctype('qx.io.remote.transport.Abstract')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Apply method for &#8220;state&#8221; property. For each state value a corresponding
	 * event is fired to inform the listeners.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the aborted state (&#8220;aborted&#8221;).
	 * 
	 * Listeners of the &#8220;aborted&#8221; signal are notified about the event.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the failed state (&#8220;failed&#8221;).
	 * 
	 * Listeners of the &#8220;failed&#8221; signal are notified about the event.
	 * 
	 */
	failed : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property asynchronous.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	getAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns the length of the content as fetched thus far.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getFetchedLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property formFields.
	 * 
	 * For further details take a look at the property definition: {@link #formFields}.
	 * 
	 */
	getFormFields : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	getMethod : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property parameters.
	 * 
	 * For further details take a look at the property definition: {@link #parameters}.
	 * 
	 */
	getParameters : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	getPassword : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property requestHeaders.
	 * 
	 * For further details take a look at the property definition: {@link #requestHeaders}.
	 * 
	 */
	getRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Returns the request header of the request.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Provides an hash of all response headers.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Provides the response text from the request when available and null otherwise.
	 * By passing true as the &#8220;partial&#8221; parameter of this method, incomplete data will
	 * be made available to the caller.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getResponseText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property responseType.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	getResponseType : vjo.NEEDS_IMPL,


	/**
	 * Provides the XML provided by the response if any and null otherwise.
	 * By passing true as the &#8220;partial&#8221; parameter of this method, incomplete data will
	 * be made available to the caller.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getResponseXml : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Returns the current status code of the request if available or -1 if not.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Provides the status text for the current request if available and null otherwise.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	getStatusText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property url.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	getUrl : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property useBasicHttpAuth.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	getUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property username.
	 * 
	 * For further details take a look at the property definition: {@link #username}.
	 * 
	 */
	getUsername : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property asynchronous
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	initAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property data
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	initData : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property formFields
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #formFields}.
	 * 
	 */
	initFormFields : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property method
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	initMethod : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property parameters
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #parameters}.
	 * 
	 */
	initParameters : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property password
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	initPassword : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property requestHeaders
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #requestHeaders}.
	 * 
	 */
	initRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property responseType
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	initResponseType : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property useBasicHttpAuth
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	initUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property username
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #username}.
	 * 
	 */
	initUsername : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property asynchronous equals true.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	isAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useBasicHttpAuth equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	isUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property asynchronous.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	resetAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property data.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	resetData : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property formFields.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #formFields}.
	 * 
	 */
	resetFormFields : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property method.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	resetMethod : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property parameters.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #parameters}.
	 * 
	 */
	resetParameters : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property password.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	resetPassword : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property requestHeaders.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #requestHeaders}.
	 * 
	 */
	resetRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property responseType.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	resetResponseType : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property useBasicHttpAuth.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	resetUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property username.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #username}.
	 * 
	 */
	resetUsername : vjo.NEEDS_IMPL,


	/**
	 * Sending a request.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property asynchronous.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	setAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	setData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property formFields.
	 * 
	 * For further details take a look at the property definition: {@link #formFields}.
	 * 
	 */
	setFormFields : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	setMethod : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property parameters.
	 * 
	 * For further details take a look at the property definition: {@link #parameters}.
	 * 
	 */
	setParameters : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	setPassword : vjo.NEEDS_IMPL,


	/**
	 * Add a request header to this transports qx.io.remote.Request.
	 * 
	 * This method is virtual and concrete subclasses are supposed to
	 * implement it.
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property requestHeaders.
	 * 
	 * For further details take a look at the property definition: {@link #requestHeaders}.
	 * 
	 */
	setRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property responseType.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	setResponseType : vjo.NEEDS_IMPL,


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
	setUrl : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property useBasicHttpAuth.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	setUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property username.
	 * 
	 * For further details take a look at the property definition: {@link #username}.
	 * 
	 */
	setUsername : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the timeout state (&#8220;timeout&#8221;).
	 * 
	 * Listeners of the &#8220;timeout&#8221; signal are notified about the event.
	 * 
	 */
	timeout : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property asynchronous.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	toggleAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useBasicHttpAuth.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	toggleUseBasicHttpAuth : vjo.NEEDS_IMPL
})
.endType();