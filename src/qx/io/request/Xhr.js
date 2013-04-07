/**
 * Send HTTP requests and handle responses using the HTTP client API.
 * 
 * Configuration of the request is done with properties. Events are fired for
 * various states in the life cycle of a request, such as &#8220;success&#8221;. Request
 * data is transparently processed.
 * 
 * Here is how to request a JSON file and listen to the &#8220;success&#8221; event:
 * 
 * 
 * var req = new qx.io.request.Xhr("/some/path/file.json");
 * 
 * req.addListener("success", function(e) {
 *   var req = e.getTarget();
 * 
 *   // Response parsed according to the server's
 *   // response content type, e.g. JSON
 *   req.getResponse();
 * }, this);
 * 
 * // Send request
 * req.send();
 * 
 * 
 * Some noteable features:
 * 
 * 
 * Abstraction of low-level request
 * Convenient setup using properties
 * Fine-grained events
 * Symbolic phases
 * Transparent processing of request data
 * Stream-lined authentication
 * Automagic parsing of response based on content type
 * 
 * 
 * Cross-origin requests are supported, but require browser support
 * (see caniuse.com) and backend configuration
 * (see MDN).
 * Note that IE&#8217;s XDomainRequest is not currently supported.
 * For a cross-browser alternative, consider {@link qx.io.request.Jsonp}.
 * 
 * In order to debug requests, set the environment flag
 * qx.debug.io.
 * 
 * Internally uses {@link qx.bom.request.Xhr}.
 */
//>public
vjo.ctype('qx.io.request.Xhr')
.inherits('qx.io.request.AbstractRequest')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Create XHR transport.
	 * 
	 */
	_createTransport : vjo.NEEDS_IMPL,


	/**
	 */
	_getConfiguredRequestHeaders : vjo.NEEDS_IMPL,


	/**
	 * Get configured URL.
	 * 
	 * Append request data to URL if HTTP method is GET. Append random
	 * string to URL if required by value of {@link #cache}.
	 * 
	 */
	_getConfiguredUrl : vjo.NEEDS_IMPL,


	/**
	 */
	_getMethod : vjo.NEEDS_IMPL,


	/**
	 * Returns response parsed with parser determined by
	 * {@link #_getParser}.
	 * 
	 */
	_getParsedResponse : vjo.NEEDS_IMPL,


	/**
	 * Get the parser.
	 * 
	 * If not defined explicitly using {@link #setParser},
	 * the parser is inferred from the content type.
	 * 
	 * Override this method to extend the list of content types
	 * being handled.
	 * 
	 */
	_getParser : vjo.NEEDS_IMPL,


	/**
	 */
	_isAsync : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property accept.
	 * 
	 * For further details take a look at the property definition: {@link #accept}.
	 * 
	 */
	getAccept : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property async.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	getAsync : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cache.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	getCache : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	getMethod : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property accept
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #accept}.
	 * 
	 */
	initAccept : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property async
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	initAsync : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property cache
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	initCache : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property async equals true.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	isAsync : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property accept.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #accept}.
	 * 
	 */
	resetAccept : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property async.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	resetAsync : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property cache.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	resetCache : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property accept.
	 * 
	 * For further details take a look at the property definition: {@link #accept}.
	 * 
	 */
	setAccept : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property async.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	setAsync : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property cache.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	setCache : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property method.
	 * 
	 * For further details take a look at the property definition: {@link #method}.
	 * 
	 */
	setMethod : vjo.NEEDS_IMPL,


	/**
	 * Set parser used to parse response once request has
	 * completed successfully.
	 * 
	 * Usually, the parser is correctly inferred from the
	 * content type of the response. This method allows to force the
	 * parser being used, e.g. if the content type returned from
	 * the backend is wrong or the response needs special parsing.
	 * 
	 * Parsers most typically used can be referenced symbolically.
	 * To cover edge cases, a function can be given. When parsing
	 * the response, this function is called with the raw response as
	 * first argument.
	 * 
	 */
	setParser : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property async.
	 * 
	 * For further details take a look at the property definition: {@link #async}.
	 * 
	 */
	toggleAsync : vjo.NEEDS_IMPL
})
.endType();