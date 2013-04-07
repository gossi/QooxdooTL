/**
 * This class manages the timer used for deferred calls. All
 * {@link qx.util.DeferredCall} instances use the single timer from this class.
 */
//>public
vjo.ctype('qx.util.DeferredCallManager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper function for the timer.
	 * 
	 */
	__timeout : vjo.NEEDS_IMPL,


	/**
	 * Cancel a scheduled deferred call
	 * 
	 */
	cancel : vjo.NEEDS_IMPL,


	/**
	 * Schedule a deferred call
	 * 
	 */
	schedule : vjo.NEEDS_IMPL
})
.endType();