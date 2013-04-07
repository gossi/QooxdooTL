/**
 * Event dispatcher for all bubbling events.
 */
//>public abstract
vjo.ctype('qx.event.dispatch.AbstractBubbling')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventDispatcher')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Returns the parent of the given target
	 * 
	 */
	_getParent : vjo.NEEDS_IMPL,


	/**
	 */
	dispatchEvent : vjo.NEEDS_IMPL
})
.endType();