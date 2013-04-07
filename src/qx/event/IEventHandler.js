/**
 * Event handler Interface.
 * 
 * All custom event handler like mouse or keyboard event handler must implement
 * this interface.
 */
//>public
vjo.itype('qx.event.IEventHandler')
.protos({
	/**
	 * Whether the event handler can handle events of the given type. If the
	 * event handler class has a static variable called IGNORE_CAN_HANDLE
	 * with the value true this function is not called. Whether the
	 * handler can handle the event is them only determined by the static variables
	 * SUPPORTED_TYPES and TARGET_CHECK.
	 * 
	 */
	canHandleEvent : vjo.NEEDS_IMPL,


	/**
	 * This method is called each time an event listener, for one of the
	 * supported events, is added using {@link qx.event.Manager#addListener}.
	 * 
	 */
	registerEvent : vjo.NEEDS_IMPL,


	/**
	 * This method is called each time an event listener, for one of the
	 * supported events, is removed by using {@link qx.event.Manager#removeListener}
	 * and no other event listener is listening on this type.
	 * 
	 */
	unregisterEvent : vjo.NEEDS_IMPL
})
.endType();