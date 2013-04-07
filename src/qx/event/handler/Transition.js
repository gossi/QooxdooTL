/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * This class provides support for HTML5 transition and animation events.
 * Currently only WebKit and Firefox are supported.
 */
//>public
vjo.ctype('qx.event.handler.Transition')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Global handler for the transition event.
	 * 
	 */
	_onNative : vjo.NEEDS_IMPL,


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