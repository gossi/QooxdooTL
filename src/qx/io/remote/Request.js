/**
 * This class is used to send HTTP requests to the server.
 * 
 * Note: This class will be deprecated in a future release. Instead,
 * please use classes found in {@link qx.io.request}.
 */
//>public
vjo.ctype('qx.io.remote.Request')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	_applyMethod : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property prohibitCaching.
	 * 
	 * For further details take a look at the property definition: {@link #prohibitCaching}.
	 * 
	 */
	_applyProhibitCaching : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property responseType.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	_applyResponseType : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the aborted state.
	 * 
	 */
	_onaborted : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the completed state.
	 * 
	 */
	_oncompleted : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the failed state.
	 * 
	 */
	_onfailed : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the queued state.
	 * 
	 */
	_onqueued : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the receiving state.
	 * 
	 */
	_onreceiving : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the sending state.
	 * 
	 */
	_onsending : vjo.NEEDS_IMPL,


	/**
	 * Event handler called when the request enters the timeout state.
	 * 
	 */
	_ontimeout : vjo.NEEDS_IMPL,


	/**
	 * Abort sending this request.
	 * 
	 * The request is removed from the singleton class qx.io.remote.RequestQueue&#8217;s
	 * list of pending events. If the request haven&#8217;t been scheduled this
	 * method is a noop.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property asynchronous.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	getAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	getCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	getData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property fileUpload.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	getFileUpload : vjo.NEEDS_IMPL,


	/**
	 * Get a form field in the POST request.
	 * 
	 */
	getFormField : vjo.NEEDS_IMPL,


	/**
	 * Returns the object containg all form fields for the POST request.
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
	 * Get a parameter in the request.
	 * 
	 */
	getParameter : vjo.NEEDS_IMPL,


	/**
	 * Returns the object containg all parameters for the request.
	 * 
	 */
	getParameters : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	getParseJson : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	getPassword : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property prohibitCaching.
	 * 
	 * For further details take a look at the property definition: {@link #prohibitCaching}.
	 * 
	 */
	getProhibitCaching : vjo.NEEDS_IMPL,


	/**
	 * Retrieve the value of a header which was previously set
	 * 
	 */
	getRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Return the object containing all of the headers which have been added.
	 * 
	 */
	getRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property responseType.
	 * 
	 * For further details take a look at the property definition: {@link #responseType}.
	 * 
	 */
	getResponseType : vjo.NEEDS_IMPL,


	/**
	 * Obtain the sequence (id) number used for this request
	 * 
	 */
	getSequenceNumber : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	getTimeout : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property transport.
	 * 
	 * For further details take a look at the property definition: {@link #transport}.
	 * 
	 */
	getTransport : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property crossDomain
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	initCrossDomain : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property fileUpload
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	initFileUpload : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property parseJson
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	initParseJson : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property prohibitCaching
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #prohibitCaching}.
	 * 
	 */
	initProhibitCaching : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property timeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	initTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property transport
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #transport}.
	 * 
	 */
	initTransport : vjo.NEEDS_IMPL,


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
	 * Determine if this request is in the aborted state.
	 * 
	 */
	isAborted : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property asynchronous equals true.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	isAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the completed state.
	 * 
	 */
	isCompleted : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the configured state.
	 * 
	 */
	isConfigured : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property crossDomain equals true.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	isCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the failed state.
	 * 
	 */
	isFailed : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property fileUpload equals true.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	isFileUpload : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property parseJson equals true.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	isParseJson : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the queued state.
	 * 
	 */
	isQueued : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the receiving state.
	 * 
	 */
	isReceiving : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the sending state.
	 * 
	 */
	isSending : vjo.NEEDS_IMPL,


	/**
	 * Determine if this request is in the timeout state.
	 * 
	 */
	isTimeout : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useBasicHttpAuth equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	isUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Remove a form field from the POST request.
	 * 
	 */
	removeFormField : vjo.NEEDS_IMPL,


	/**
	 * Remove a parameter from the request.
	 * 
	 */
	removeParameter : vjo.NEEDS_IMPL,


	/**
	 * Remove a previously-added request header
	 * 
	 */
	removeRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Abort sending this request if it has not already been aborted.
	 * 
	 */
	reset : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property crossDomain.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	resetCrossDomain : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property fileUpload.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	resetFileUpload : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property parseJson.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	resetParseJson : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property prohibitCaching.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #prohibitCaching}.
	 * 
	 */
	resetProhibitCaching : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property timeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	resetTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property transport.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #transport}.
	 * 
	 */
	resetTransport : vjo.NEEDS_IMPL,


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
	 * Schedule this request for transport to server.
	 * 
	 * The request is added to the singleton class qx.io.remote.RequestQueue&#8217;s
	 * list of pending requests.
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
	 * Sets the user value of the property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	setCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property data.
	 * 
	 * For further details take a look at the property definition: {@link #data}.
	 * 
	 */
	setData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property fileUpload.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	setFileUpload : vjo.NEEDS_IMPL,


	/**
	 * Add a form field to the POST request.
	 * 
	 * NOTE: Adding any programatic form fields using this method will switch the
	 *       Transport implementation to IframeTransport.
	 * 
	 * NOTE: Use of these programatic form fields disallow use of synchronous
	 *       requests and cross-domain requests.  Be sure that you do not need
	 *       those features when setting these programatic form fields.
	 * 
	 */
	setFormField : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	setMethod : vjo.NEEDS_IMPL,


	/**
	 * Add a parameter to the request.
	 * 
	 */
	setParameter : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	setParseJson : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	setPassword : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property prohibitCaching.
	 * 
	 * For further details take a look at the property definition: {@link #prohibitCaching}.
	 * 
	 */
	setProhibitCaching : vjo.NEEDS_IMPL,


	/**
	 * Add a request header to the request.
	 * 
	 * Example: request.setRequestHeader(&#8220;Content-Type&#8221;, &#8220;text/html&#8221;)
	 * 
	 * Please note: Some browsers, such as Safari 3 and 4, will capitalize
	 * header field names. This is in accordance with RFC 26161, which states
	 * that HTTP 1.1 header names are case-insensitive, so your server backend
	 * should be case-agnostic when dealing with request headers.
	 * 
	 * [1]RFC 2616: HTTP Message Headers
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	setTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property transport.
	 * 
	 * For further details take a look at the property definition: {@link #transport}.
	 * 
	 */
	setTransport : vjo.NEEDS_IMPL,


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
	 * Toggles the (computed) value of the boolean property asynchronous.
	 * 
	 * For further details take a look at the property definition: {@link #asynchronous}.
	 * 
	 */
	toggleAsynchronous : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	toggleCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property fileUpload.
	 * 
	 * For further details take a look at the property definition: {@link #fileUpload}.
	 * 
	 */
	toggleFileUpload : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	toggleParseJson : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useBasicHttpAuth.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	toggleUseBasicHttpAuth : vjo.NEEDS_IMPL
})
.endType();