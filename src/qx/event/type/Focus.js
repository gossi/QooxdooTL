/**
 * Common base class for all focus events.
 */
//>public
vjo.ctype('qx.event.type.Focus')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Initialize the fields of the event. The event must be initialized before
	 * it can be dispatched.
	 * 
	 */
	init : vjo.NEEDS_IMPL
})
.endType();