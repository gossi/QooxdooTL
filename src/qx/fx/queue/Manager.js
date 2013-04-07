/**
 * Manager for access to effect queues.
 */
//>public
vjo.ctype('qx.fx.queue.Manager')
.inherits('qx.core.Object')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns existing default queue or creates a new queue object and returns it.
	 * 
	 */
	getDefaultQueue : vjo.NEEDS_IMPL,


	/**
	 * Returns existing queue by name or creates a new queue object and returns it.
	 * 
	 */
	getQueue : vjo.NEEDS_IMPL
})
.endType();