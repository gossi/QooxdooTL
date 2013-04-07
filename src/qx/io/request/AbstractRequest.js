/**
 * AbstractRequest serves as a base class for {@link qx.io.request.Xhr}
 * and {@link qx.io.request.Jsonp}. It contains methods to conveniently
 * communicate with transports found in {@link qx.bom.request}.
 * 
 * The general procedure to derive a new request is to choose a
 * transport (override {@link #_createTransport}) and link
 * the transport&#8217;s response (override {@link #_getParsedResponse}).
 * The transport must implement {@link qx.bom.request.IRequest}.
 * 
 * To adjust the behavior of {@link #send} override
 * {@link #_getConfiguredUrl} and {@link #_getConfiguredRequestHeaders}.
 */
//>public abstract
vjo.ctype('qx.io.request.AbstractRequest')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Retrieve authentication headers from auth delegate.
	 * 
	 */
	__getAuthRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Called internally when readyState is DONE.
	 * 
	 */
	__onReadyStateDone : vjo.NEEDS_IMPL,


	/**
	 * Create and return transport.
	 * 
	 * This method MUST be overridden, unless the constructor is overridden as
	 * well. It is called by the constructor and should return the transport that
	 * is to be interfaced.
	 * 
	 */
	_createTransport : vjo.NEEDS_IMPL,


	/**
	 * Fire stateful event.
	 * 
	 * Fires event and sets phase to name of event.
	 * 
	 */
	_fireStatefulEvent : vjo.NEEDS_IMPL,


	/**
	 * Get all request headers.
	 * 
	 */
	_getAllRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Get configuration related request headers.
	 * 
	 * This method MAY be overridden to add request headers for features limited
	 * to a certain transport.
	 * 
	 */
	_getConfiguredRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Get configured URL.
	 * 
	 * A configured URL typically includes a query string that
	 * encapsulates transport specific settings such as request
	 * data or no-cache settings.
	 * 
	 * This method MAY be overridden. It is called in {@link #send}
	 * before the request is initialized.
	 * 
	 */
	_getConfiguredUrl : vjo.NEEDS_IMPL,


	/**
	 * Get method.
	 * 
	 * This method MAY be overridden. It is called in {@link #send}
	 * before the request is initialized.
	 * 
	 */
	_getMethod : vjo.NEEDS_IMPL,


	/**
	 * Get parsed response.
	 * 
	 * Is called in the {@link #_onReadyStateChange} event handler
	 * to parse and store the transport&#8217;s response.
	 * 
	 * This method MUST be overridden.
	 * 
	 */
	_getParsedResponse : vjo.NEEDS_IMPL,


	/**
	 * Whether async.
	 * 
	 * This method MAY be overridden. It is called in {@link #send}
	 * before the request is initialized.
	 * 
	 */
	_isAsync : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;abort&#8221; event.
	 * 
	 */
	_onAbort : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;error&#8221; event.
	 * 
	 */
	_onError : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;load&#8221; event.
	 * 
	 */
	_onLoad : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;loadEnd&#8221; event.
	 * 
	 */
	_onLoadEnd : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;readyStateChange&#8221; event.
	 * 
	 */
	_onReadyStateChange : vjo.NEEDS_IMPL,


	/**
	 * Handle &#8220;timeout&#8221; event.
	 * 
	 */
	_onTimeout : vjo.NEEDS_IMPL,


	/**
	 * Serialize data
	 * 
	 */
	_serializeData : vjo.NEEDS_IMPL,


	/**
	 * Set phase.
	 * 
	 */
	_setPhase : vjo.NEEDS_IMPL,


	/**
	 * Apply configured request headers to transport.
	 * 
	 * This method MAY be overridden to customize application of request headers
	 * to transport.
	 * 
	 */
	_setRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Set response.
	 * 
	 */
	_setResponse : vjo.NEEDS_IMPL,


	/**
	 * Abort request.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Get all response headers from response.
	 * 
	 */
	getAllResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property authentication.
	 * 
	 * For further details take a look at the property definition: {@link #authentication}.
	 * 
	 */
	getAuthentication : vjo.NEEDS_IMPL,


	/**
	 * Get current phase.
	 * 
	 * A more elaborate version of {@link #getReadyState}, this method indicates
	 * the current phase of the request. Maps to stateful (i.e. deterministic)
	 * events (success, abort, timeout, statusError) and intermediate
	 * readyStates (unsent, configured, loading, load).
	 * 
	 * When the requests is successful, it progresses the states:
	 * 
	 * &#8216;unsent&#8217;, &#8216;opened&#8217;, &#8216;sent&#8217;, &#8216;loading&#8217;, &#8216;load&#8217;, &#8216;success&#8217;
	 * 
	 * In case of failure, the final state is one of:
	 * 
	 * &#8216;abort&#8217;, &#8216;timeout&#8217;, &#8216;statusError&#8217;
	 * 
	 * For each change of the phase, a {@link #changePhase} data event is fired.
	 * 
	 */
	getPhase : vjo.NEEDS_IMPL,


	/**
	 * Get current ready state.
	 * 
	 * States can be:
	 * UNSENT:           0,
	 * OPENED:           1,
	 * HEADERS_RECEIVED: 2,
	 * LOADING:          3,
	 * DONE:             4
	 * 
	 */
	getReadyState : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property requestData.
	 * 
	 * For further details take a look at the property definition: {@link #requestData}.
	 * 
	 */
	getRequestData : vjo.NEEDS_IMPL,


	/**
	 * Get a request header.
	 * 
	 */
	getRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Get parsed response.
	 * 
	 */
	getResponse : vjo.NEEDS_IMPL,


	/**
	 * Get the content type response header from response.
	 * 
	 */
	getResponseContentType : vjo.NEEDS_IMPL,


	/**
	 * Get a single response header from response.
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Get raw (unprocessed) response.
	 * 
	 */
	getResponseText : vjo.NEEDS_IMPL,


	/**
	 * Get status code.
	 * 
	 */
	getStatus : vjo.NEEDS_IMPL,


	/**
	 * Get status text.
	 * 
	 */
	getStatusText : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	getTimeout : vjo.NEEDS_IMPL,


	/**
	 * Get low-level transport.
	 * 
	 * Note: To be used with caution!
	 * 
	 * This method can be used to query the transport directly,
	 * but should be used with caution. Especially, it
	 * is not advisable to call any destructive methods
	 * such as open or send.
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
	 * Calls the apply method and dispatches the change event of the property authentication
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #authentication}.
	 * 
	 */
	initAuthentication : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property requestData
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #requestData}.
	 * 
	 */
	initRequestData : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property url
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	initUrl : vjo.NEEDS_IMPL,


	/**
	 * Whether request completed (is done).
	 * 
	 */
	isDone : vjo.NEEDS_IMPL,


	/**
	 * Remove a request header.
	 * 
	 * Note: Removing request headers has no effect after the request was send.
	 * 
	 */
	removeRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property authentication.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #authentication}.
	 * 
	 */
	resetAuthentication : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property requestData.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #requestData}.
	 * 
	 */
	resetRequestData : vjo.NEEDS_IMPL,


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
	 * Send request.
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property authentication.
	 * 
	 * For further details take a look at the property definition: {@link #authentication}.
	 * 
	 */
	setAuthentication : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property requestData.
	 * 
	 * For further details take a look at the property definition: {@link #requestData}.
	 * 
	 */
	setRequestData : vjo.NEEDS_IMPL,


	/**
	 * Set a request header.
	 * 
	 * Note: Setting request headers has no effect after the request was send.
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	setTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property url.
	 * 
	 * For further details take a look at the property definition: {@link #url}.
	 * 
	 */
	setUrl : vjo.NEEDS_IMPL
})
.endType();