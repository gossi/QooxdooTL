/**
 * This class provides a handler for the online event.
 */
//>public
vjo.ctype('qx.event.handler.Offline')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Connects the native online and offline event listeners.
	 * 
	 */
	_initObserver : vjo.NEEDS_IMPL,


	/**
	 * Native handler function which fires a qooxdoo event.
	 * 
	 */
	_onNative : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the native online and offline event listeners.
	 * 
	 */
	_stopObserver : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the current window thinks its online or not.
	 * 
	 */
	isOnline : vjo.NEEDS_IMPL
})
.endType();