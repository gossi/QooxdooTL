/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * This class provides a handler for the orientation event.
 */
//>public
vjo.ctype('qx.event.handler.Orientation')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native orientation change event listeners.
	 * 
	 */
	_initObserver : vjo.NEEDS_IMPL,


	/**
	 * Handler for the native orientation change event.
	 * 
	 */
	_onNative : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the native orientation change event listeners.
	 * 
	 */
	_stopObserver : vjo.NEEDS_IMPL
})
.endType();