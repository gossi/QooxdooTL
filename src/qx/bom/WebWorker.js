/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Web Workers allows us to run JavaScript in parallel on a web page,
 * without blocking the user interface. A &#8216;worker&#8217; is just another script
 * file that will be loaded and executed in the background.
 * 
 * For more information see:
 * http://www.w3.org/TR/workers
 */
//>public
vjo.ctype('qx.bom.WebWorker')
.inherits('qx.core.Object')
.protos({
	/**
	 * Create a new instance.
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fake worker
	 * 
	 */
	__initFake : vjo.NEEDS_IMPL,


	/**
	 * Initialize the native worker
	 * 
	 */
	__initNative : vjo.NEEDS_IMPL,


	/**
	 * Error handler
	 * 
	 */
	_handleError : vjo.NEEDS_IMPL,


	/**
	 * Message handler
	 * 
	 */
	_handleMessage : vjo.NEEDS_IMPL,


	/**
	 * Send a message to the worker.
	 * 
	 */
	postMessage : vjo.NEEDS_IMPL
})
.endType();