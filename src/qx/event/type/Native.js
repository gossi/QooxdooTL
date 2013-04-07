/**
 * Common base class for all native events (DOM events, IO events, ...).
 */
//>public
vjo.ctype('qx.event.type.Native')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Clone the native browser event
	 * 
	 */
	_cloneNativeEvent : vjo.NEEDS_IMPL,


	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Get the native browser event object of this event.
	 * 
	 */
	getNativeEvent : vjo.NEEDS_IMPL,


	/**
	 * Retrieves the event&#8217;s return value.
	 * 
	 */
	getReturnValue : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event. The event must be initialized before
	 * it can be dispatched.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Prevent browser default behavior, e.g. opening the context menu, ...
	 * 
	 */
	preventDefault : vjo.NEEDS_IMPL,


	/**
	 * Sets the event&#8217;s return value. If the return value is set in a
	 * beforeunload event, the user will be asked by the browser, whether
	 * he really wants to leave the page. The return string will be displayed in
	 * the message box.
	 * 
	 */
	setReturnValue : vjo.NEEDS_IMPL
})
.endType();