/**
 * Handles scheduling of requests to be sent to a server.
 * 
 * This class is a singleton and is used by qx.io.remote.Request to schedule its
 * requests. It should not be used directly.
 */
//>internal
vjo.ctype('qx.io.remote.RequestQueue')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Checks the queue if any request is left to send and uses the transport
	 * layer to send the open requests.
	 * This method calls itself until every request in the queue is send.
	 * 
	 */
	_check : vjo.NEEDS_IMPL,


	/**
	 * Generates debug output
	 * 
	 */
	_debug : vjo.NEEDS_IMPL,


	/**
	 * Listens for the &#8220;completed&#8221; event of the transport object and decreases
	 * the counter for active requests.
	 * 
	 */
	_oncompleted : vjo.NEEDS_IMPL,


	/**
	 * Listens for the &#8220;interval&#8221; event of the transport object and checks
	 * if the active requests are timed out.
	 * 
	 */
	_oninterval : vjo.NEEDS_IMPL,


	/**
	 * Listens for the &#8220;receiving&#8221; event of the transport object and delegate
	 * the event to the current request object.
	 * 
	 */
	_onreceiving : vjo.NEEDS_IMPL,


	/**
	 * Listens for the &#8220;sending&#8221; event of the transport object and increases
	 * the counter for active requests.
	 * 
	 */
	_onsending : vjo.NEEDS_IMPL,


	/**
	 * Removes a transport object from the active queue and disposes the
	 * transport object in order stop the request.
	 * 
	 */
	_remove : vjo.NEEDS_IMPL,


	/**
	 * Remove the request from the pending requests queue.
	 * 
	 * The underlying transport of the request is forced into the aborted
	 *  state (&#8220;aborted&#8221;) and listeners of the &#8220;aborted&#8221;
	 *  signal are notified about the event. If the request isn&#8217;t in the
	 *  pending requests queue, this method is a noop.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Add the request to the pending requests queue.
	 * 
	 */
	add : vjo.NEEDS_IMPL,


	/**
	 * Get a list of active queued requests, each one wrapped in an instance of
	 * {@link qx.io.remote.Exchange}
	 * 
	 */
	getActiveQueue : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property defaultTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #defaultTimeout}.
	 * 
	 */
	getDefaultTimeout : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxConcurrentRequests.
	 * 
	 * For further details take a look at the property definition: {@link #maxConcurrentRequests}.
	 * 
	 */
	getMaxConcurrentRequests : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxTotalRequests.
	 * 
	 * For further details take a look at the property definition: {@link #maxTotalRequests}.
	 * 
	 */
	getMaxTotalRequests : vjo.NEEDS_IMPL,


	/**
	 * Get a list of queued requests
	 * 
	 */
	getRequestQueue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property defaultTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #defaultTimeout}.
	 * 
	 */
	initDefaultTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxConcurrentRequests
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxConcurrentRequests}.
	 * 
	 */
	initMaxConcurrentRequests : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxTotalRequests
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxTotalRequests}.
	 * 
	 */
	initMaxTotalRequests : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property defaultTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #defaultTimeout}.
	 * 
	 */
	resetDefaultTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxConcurrentRequests.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxConcurrentRequests}.
	 * 
	 */
	resetMaxConcurrentRequests : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxTotalRequests.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxTotalRequests}.
	 * 
	 */
	resetMaxTotalRequests : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property defaultTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #defaultTimeout}.
	 * 
	 */
	setDefaultTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxConcurrentRequests.
	 * 
	 * For further details take a look at the property definition: {@link #maxConcurrentRequests}.
	 * 
	 */
	setMaxConcurrentRequests : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxTotalRequests.
	 * 
	 * For further details take a look at the property definition: {@link #maxTotalRequests}.
	 * 
	 */
	setMaxTotalRequests : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL
})
.endType();