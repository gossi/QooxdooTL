/**
 * Transport layer to control which transport class (XmlHttp, Iframe or Script)
 * can be used.
 */
//>internal
vjo.ctype('qx.io.remote.Exchange')
.inherits('qx.core.Object')
.protos({
	/**
	 * Constructor method.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Disables the timer of the request to prevent that the timer is expiring
	 * even if the user handler (e.g. &#8220;completed&#8221;) was already called.
	 * 
	 */
	__disableRequestTimeout : vjo.NEEDS_IMPL,


	/**
	 * Apply method for the implementation property.
	 * 
	 */
	_applyImplementation : vjo.NEEDS_IMPL,


	/**
	 * Apply method for the state property.
	 * 
	 */
	_applyState : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;abort&#8221; event.
	 * 
	 */
	_onabort : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;completed&#8221; event.
	 * 
	 */
	_oncompleted : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;failed&#8221; event.
	 * 
	 */
	_onfailed : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;receiving&#8221; event.
	 * 
	 */
	_onreceiving : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;sending&#8221; event.
	 * 
	 */
	_onsending : vjo.NEEDS_IMPL,


	/**
	 * Event listener for &#8220;timeout&#8221; event.
	 * 
	 */
	_ontimeout : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the aborted (&#8220;aborted&#8221;)
	 *  state.
	 * 
	 */
	abort : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property implementation.
	 * 
	 * For further details take a look at the property definition: {@link #implementation}.
	 * 
	 */
	getImplementation : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property request.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	getRequest : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	getState : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property implementation
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #implementation}.
	 * 
	 */
	initImplementation : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property request
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	initRequest : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property implementation.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #implementation}.
	 * 
	 */
	resetImplementation : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property request.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	resetRequest : vjo.NEEDS_IMPL,


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
	 * Sends the request.
	 * 
	 */
	send : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property implementation.
	 * 
	 * For further details take a look at the property definition: {@link #implementation}.
	 * 
	 */
	setImplementation : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property request.
	 * 
	 * For further details take a look at the property definition: {@link #request}.
	 * 
	 */
	setRequest : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property state.
	 * 
	 * For further details take a look at the property definition: {@link #state}.
	 * 
	 */
	setState : vjo.NEEDS_IMPL,


	/**
	 * Force the transport into the timeout state.
	 * 
	 */
	timeout : vjo.NEEDS_IMPL
})
.endType();