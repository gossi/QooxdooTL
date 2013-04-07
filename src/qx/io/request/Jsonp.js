/**
 * Query JSONP services using the script element. Requests may be cross-origin.
 * 
 * Configuration of the request is done with properties. Events are fired for
 * various states in the life cycle of a request, such as &#8220;success&#8221;. Request
 * data is transparently processed.
 * 
 * For an introduction to JSONP, please refer to
 * Ajaxian.com.
 * 
 * Here is how to request a JSON file from a REST service and listen to
 * the &#8220;success&#8221; event:
 * 
 * 
 * var req = new qx.io.request.Jsonp();
 * req.setUrl("http://feeds.delicious.com/v2/json/popular");
 * 
 * // Some services have a fixed callback name
 * // req.setCallbackName("callback");
 * 
 * req.addListener("success", function(e) {
 *   var req = e.getTarget();
 * 
 *   // HTTP status code indicating success, e.g. 200
 *   req.getStatus();
 * 
 *   // "success"
 *   req.getPhase();
 * 
 *   // JSON response
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
 * Flexible callback handling
 * Cross-origin requests
 * 
 * 
 * In order to debug requests, set the environment flag
 * qx.debug.io.
 * 
 * Internally uses {@link qx.bom.request.Jsonp}.
 */
//>public
vjo.ctype('qx.io.request.Jsonp')
.inherits('qx.io.request.AbstractRequest')
.protos({
	/**
	 * Create JSONP transport.
	 * 
	 */
	_createTransport : vjo.NEEDS_IMPL,


	/**
	 * Get configured URL.
	 * 
	 * Append request data to URL. Also append random string
	 * to URL if required by value of {@link #cache}.
	 * 
	 */
	_getConfiguredUrl : vjo.NEEDS_IMPL,


	/**
	 * Return the transport&#8217;s responseJson property.
	 * 
	 * See {@link qx.bom.request.Jsonp}.
	 * 
	 */
	_getParsedResponse : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property cache.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	getCache : vjo.NEEDS_IMPL,


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
	 * Check whether the (computed) value of the boolean property cache equals true.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	isCache : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property cache.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	setCache : vjo.NEEDS_IMPL,


	/**
	 * Set callback name.
	 * 
	 * See {@link qx.bom.request.Jsonp#setCallbackName}.
	 * 
	 */
	setCallbackName : vjo.NEEDS_IMPL,


	/**
	 * Set callback parameter.
	 * 
	 * See {@link qx.bom.request.Jsonp#setCallbackParam}.
	 * 
	 */
	setCallbackParam : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property cache.
	 * 
	 * For further details take a look at the property definition: {@link #cache}.
	 * 
	 */
	toggleCache : vjo.NEEDS_IMPL
})
.endType();