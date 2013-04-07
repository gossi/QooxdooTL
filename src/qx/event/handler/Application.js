/**
 * This handler provides events for qooxdoo application startup/shutdown logic.
 */
//>public
vjo.ctype('qx.event.handler.Application')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Fires a global ready event.
	 * 
	 */
	__fireReady : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native mouse event listeners.
	 * 
	 */
	_initObserver : vjo.NEEDS_IMPL,


	/**
	 * Event listener for native load event
	 * 
	 */
	_onNativeLoad : vjo.NEEDS_IMPL,


	/**
	 * Event listener for native unload event
	 * 
	 */
	_onNativeUnload : vjo.NEEDS_IMPL,


	/**
	 * Disconnect the native mouse event listeners.
	 * 
	 */
	_stopObserver : vjo.NEEDS_IMPL,


	/**
	 * Whether the application is ready.
	 * 
	 */
	isApplicationReady : vjo.NEEDS_IMPL
})
.endType();