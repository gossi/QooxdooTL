/**
 * This handler fires a resize event if the size of a DOM element
 * changes.
 */
//>public
vjo.ctype('qx.event.handler.ElementResize')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks elements for width and height changes and fires resize event
	 * if needed.
	 * 
	 */
	_onInterval : vjo.NEEDS_IMPL
})
.endType();