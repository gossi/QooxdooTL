/**
 * This handler provides event for the window object.
 */
//>public
vjo.ctype('qx.event.handler.Window')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native mouse event listeners.
	 * 
	 */
	_initWindowObserver : vjo.NEEDS_IMPL,


	/**
	 * Native listener for all supported events.
	 * 
	 */
	_onNative : vjo.NEEDS_IMPL,


	/**
	 * Disconnect the native mouse event listeners.
	 * 
	 */
	_stopWindowObserver : vjo.NEEDS_IMPL
})
.endType();