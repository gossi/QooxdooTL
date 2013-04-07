/**
 * This class represents a wrapper for functions, which should be called after
 * the current thread of JavaScript has finished and the control is returned to
 * the browser. The wrapped function will at most be called once after the control
 * has been given back to the browser, independent of the number of {@link #call}
 * calls.
 */
//>public
vjo.ctype('qx.util.DeferredCall')
.inherits('qx.core.Object')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Calls the callback directly.
	 * 
	 */
	call : vjo.NEEDS_IMPL,


	/**
	 * Prevent the callback from being called.
	 * 
	 */
	cancel : vjo.NEEDS_IMPL,


	/**
	 * Issue a deferred call of the callback.
	 * 
	 */
	schedule : vjo.NEEDS_IMPL
})
.endType();