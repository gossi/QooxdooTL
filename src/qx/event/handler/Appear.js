/**
 * This class supports appear and disappear events
 * on DOM level.
 */
//>public
vjo.ctype('qx.event.handler.Appear')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * This method should be called by all DOM tree modifying routines
	 * to check the registered nodes for changes.
	 * 
	 */
	refresh : vjo.NEEDS_IMPL
})
.endType();