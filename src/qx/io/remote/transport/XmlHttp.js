/**
 * Transports requests to a server using the native XmlHttpRequest object.
 * 
 * This class should not be used directly by client programmers.
 */
//>public
vjo.ctype('qx.io.remote.transport.XmlHttp')
.inherits('qx.io.remote.transport.Abstract')
.protos({
	/**
	 * Apply method for the &#8220;state&#8221; property.
	 * Fires an event for each state value to inform the listeners.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 * Listener method for change of the &#8220;readystate&#8221;.
	 * Sets the internal state and informs the transport layer.
	 * 
	 */
	_onreadystatechange : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the failed state (&#8220;failed&#8221;).
	 * 
	 * This method should be used only if the requests URI was local
	 * access. I.e. it started with &#8220;file://&#8221;.
	 * 
	 */
	failedLocally : vjo.NEEDS_IMPL,


	/**
	 * Returns the length of the content as fetched thus far
	 * 
	 */
	getFetchedLength : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	getParseJson : vjo.NEEDS_IMPL,


	/**
	 * Get the ready state of this transports request.
	 * 
	 * For qx.io.remote.transport.XmlHttp, ready state is a number between 1 to 4.
	 * 
	 */
	getReadyState : vjo.NEEDS_IMPL,


	/**
	 * Returns the native request object
	 * 
	 */
	getRequest : vjo.NEEDS_IMPL,


	/**
	 * Returns the content of the response
	 * 
	 */
	getResponseContent : vjo.NEEDS_IMPL,


	/**
	 * Returns a specific header provided by the server upon sending a request,
	 * with header name determined by the argument headerName.
	 * 
	 * Only available at readyState 3 and 4 universally and in readyState 2
	 * in Gecko.
	 * 
	 * Please note: Some servers/proxies (such as Selenium RC) will capitalize
	 * response header names. This is in accordance with RFC 26161, which
	 * states that HTTP 1.1 header names are case-insensitive, so your
	 * application should be case-agnostic when dealing with response headers.
	 * 
	 * [1]RFC 2616: HTTP Message Headers
	 * 
	 */
	getResponseHeader : vjo.NEEDS_IMPL,


	/**
	 * Provides a hash of all response headers.
	 * 
	 */
	getResponseHeaders : vjo.NEEDS_IMPL,


	/**
	 * Provides the response text from the request when available and null
	 * otherwise.  By passing true as the &#8220;partial&#8221; parameter of this method,
	 * incomplete data will be made available to the caller.
	 * 
	 */
	getResponseText : vjo.NEEDS_IMPL,


	/**
	 * Provides the XML provided by the response if any and null otherwise.  By
	 * passing true as the &#8220;partial&#8221; parameter of this method, incomplete data will
	 * be made available to the caller.
	 * 
	 */
	getResponseXml : vjo.NEEDS_IMPL,


	/**
	 * Returns the current status code of the request if available or -1 if not.
	 * 
	 */
	getStatusCode : vjo.NEEDS_IMPL,


	/**
	 * Provides the status text for the current request if available and null
	 * otherwise.
	 * 
	 */
	getStatusText : vjo.NEEDS_IMPL,


	/**
	 * Returns all response headers of the request.
	 * 
	 */
	getStringResponseHeaders : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property parseJson equals true.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	isParseJson : vjo.NEEDS_IMPL,


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
	 * Implementation for sending the request
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	setParseJson : vjo.NEEDS_IMPL,


	/**
	 * Set a request header to this transports request.
	 * 
	 */
	setRequestHeader : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property parseJson.
	 * 
	 * For further details take a look at the property definition: {@link #parseJson}.
	 * 
	 */
	toggleParseJson : vjo.NEEDS_IMPL
})
.endType();