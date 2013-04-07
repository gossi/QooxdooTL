/**
 * Dispatches events directly on the event target (no bubbling nor capturing).
 */
//>public
vjo.ctype('qx.event.dispatch.Direct')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventDispatcher')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	dispatchEvent : vjo.NEEDS_IMPL
})
.endType();