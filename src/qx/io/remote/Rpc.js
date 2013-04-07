/**
 */
//>public
vjo.ctype('qx.io.remote.Rpc')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Internal RPC call method
	 * 
	 */
	_callInternal : vjo.NEEDS_IMPL,


	/**
	 * Whether to convert date objects to pseudo literals and
	 * parse with eval.
	 * 
	 * Controlled by {@link #CONVERT_DATES}.
	 * 
	 */
	_isConvertDates : vjo.NEEDS_IMPL,


	/**
	 * Whether to expect and verify a JSON response.
	 * 
	 * Controlled by {@link #RESPONSE_JSON}.
	 * 
	 */
	_isResponseJson : vjo.NEEDS_IMPL,


	/**
	 * Aborts an asynchronous server call. Consequently, the callback function
	 * provided to callAsync or callAsyncListeners
	 * will be called with an exception.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Makes an asynchronous server call. The method arguments (if any) follow
	 * after the method name (as normal JavaScript arguments, separated by
	 * commas, not as an array).
	 * 
	 * When an answer from the server arrives, the handler
	 * function is called with the result of the call as the first, an
	 * exception as the second parameter, and the id (aka sequence number) of
	 * the invoking request as the third parameter. If the call was
	 * successful, the second parameter is null. If there was a
	 * problem, the second parameter contains an exception, and the first one
	 * is null.
	 * 
	 * The return value of this method is a call reference that you can store
	 * if you want to abort the request later on. This value should be treated
	 * as opaque and can change completely in the future! The only thing you
	 * can rely on is that the abort method will accept this
	 * reference and that you can retrieve the sequence number of the request
	 * by invoking the getSequenceNumber() method (see below).
	 * 
	 * If a specific method is being called, asynchronously, a number of times
	 * in succession, the getSequenceNumber() method may be used to
	 * disambiguate which request a response corresponds to.  The sequence
	 * number value is a value which increments with each request.)
	 * 
	 */
	callAsync : vjo.NEEDS_IMPL,


	/**
	 * Makes an asynchronous server call and dispatches an event upon completion
	 * or failure. The method arguments (if any) follow after the method name
	 * (as normal JavaScript arguments, separated by commas, not as an array).
	 * 
	 * When an answer from the server arrives (or fails to arrive on time), if
	 * an exception occurred, a &#8220;failed&#8221;, &#8220;timeout&#8221; or &#8220;aborted&#8221; event, as
	 * appropriate, is dispatched to any waiting event listeners.  If no
	 * exception occurred, a &#8220;completed&#8221; event is dispatched.
	 * 
	 * When a &#8220;failed&#8221;, &#8220;timeout&#8221; or &#8220;aborted&#8221; event is dispatched, the event
	 * data contains an object with the properties &#8216;origin&#8217;, &#8216;code&#8217;, &#8216;message&#8217;
	 * and &#8216;id&#8217;.  The object has a toString() function which may be called to
	 * convert the exception to a string.
	 * 
	 * When a &#8220;completed&#8221; event is dispatched, the event data contains a
	 * map with the JSON-RPC sequence number and result:
	 * 
	 * {
	 *   id: rpc_id,
	 *   result: json-rpc result
	 * }
	 * 
	 * The return value of this method is a call reference that you can store
	 * if you want to abort the request later on. This value should be treated
	 * as opaque and can change completely in the future! The only thing you
	 * can rely on is that the abort method will accept this
	 * reference and that you can retrieve the sequence number of the request
	 * by invoking the getSequenceNumber() method (see below).
	 * 
	 * If a specific method is being called, asynchronously, a number of times
	 * in succession, the getSequenceNumber() method may be used to
	 * disambiguate which request a response corresponds to.  The sequence
	 * number value is a value which increments with each request.)
	 * 
	 */
	callAsyncListeners : vjo.NEEDS_IMPL,


	/**
	 * Makes a synchronous server call. The method arguments (if any) follow
	 * after the method name (as normal JavaScript arguments, separated by
	 * commas, not as an array).
	 * 
	 * If a problem occurs when making the call, an exception is thrown.
	 * 
	 * WARNING.  With some browsers, the synchronous interface
	 * causes the browser to hang while awaiting a response!  If the server
	 * decides to pause for a minute or two, your browser may do nothing
	 * (including refreshing following window changes) until the response is
	 * received.  Instead, use the asynchronous interface.
	 * 
	 * YOU HAVE BEEN WARNED.
	 * 
	 */
	callSync : vjo.NEEDS_IMPL,


	/**
	 * Factory method to create a request object. By default, a POST request
	 * will be made, and the expected response type will be
	 * &#8220;application/json&#8221;. Classes extending this one may override this method
	 * to obtain a Request object with different parameters.
	 * 
	 */
	createRequest : vjo.NEEDS_IMPL,


	/**
	 * Factory method to create the object containing the remote procedure
	 * call data. By default, a qooxdoo-style RPC request is built, which
	 * contains the following members: &#8220;service&#8221;, &#8220;method&#8221;, &#8220;id&#8221;, and
	 * &#8220;params&#8221;. If a different style of RPC request is desired, a class
	 * extending this one may override this method.
	 * 
	 */
	createRpcData : vjo.NEEDS_IMPL,


	/**
	 * Helper method to rewrite a URL with a stale session id (so that it includes
	 * the correct session id afterwards).
	 * 
	 */
	fixUrl : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	getCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	getPassword : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property protocol.
	 * 
	 * For further details take a look at the property definition: {@link #protocol}.
	 * 
	 */
	getProtocol : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property serverData.
	 * 
	 * For further details take a look at the property definition: {@link #serverData}.
	 * 
	 */
	getServerData : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property serviceName.
	 * 
	 * For further details take a look at the property definition: {@link #serviceName}.
	 * 
	 */
	getServiceName : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property timeout.
	 * 
	 * For further details take a look at the property definition: {@link #timeout}.
	 * 
	 */
	getTimeout : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property crossDomain
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	initCrossDomain : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property protocol
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #protocol}.
	 * 
	 */
	initProtocol : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property serverData
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #serverData}.
	 * 
	 */
	initServerData : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property serviceName
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #serviceName}.
	 * 
	 */
	initServiceName : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property crossDomain equals true.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	isCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property useBasicHttpAuth equals true.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	isUseBasicHttpAuth : vjo.NEEDS_IMPL,


	/**
	 * Refreshes a server session by retrieving the session id again from the
	 * server.
	 * 
	 * The specified handler function is called when the refresh is
	 * complete. The first parameter can be true (indicating that
	 * a refresh either wasn&#8217;t necessary at this time or it was successful) or
	 * false (indicating that a refresh would have been necessary
	 * but can&#8217;t be performed because the server backend doesn&#8217;t support
	 * it). If there is a non-null second parameter, it&#8217;s an exception
	 * indicating that there was an error when refreshing the session.
	 * 
	 */
	refreshSession : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property protocol.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #protocol}.
	 * 
	 */
	resetProtocol : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property serverData.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #serverData}.
	 * 
	 */
	resetServerData : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property serviceName.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #serviceName}.
	 * 
	 */
	resetServiceName : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	setCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property password.
	 * 
	 * For further details take a look at the property definition: {@link #password}.
	 * 
	 */
	setPassword : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property protocol.
	 * 
	 * For further details take a look at the property definition: {@link #protocol}.
	 * 
	 */
	setProtocol : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property serverData.
	 * 
	 * For further details take a look at the property definition: {@link #serverData}.
	 * 
	 */
	setServerData : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property serviceName.
	 * 
	 * For further details take a look at the property definition: {@link #serviceName}.
	 * 
	 */
	setServiceName : vjo.NEEDS_IMPL,


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
	 * Toggles the (computed) value of the boolean property crossDomain.
	 * 
	 * For further details take a look at the property definition: {@link #crossDomain}.
	 * 
	 */
	toggleCrossDomain : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property useBasicHttpAuth.
	 * 
	 * For further details take a look at the property definition: {@link #useBasicHttpAuth}.
	 * 
	 */
	toggleUseBasicHttpAuth : vjo.NEEDS_IMPL
})
.endType();