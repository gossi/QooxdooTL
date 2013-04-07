/**
 * Event dispatcher for all bubbling events on DOM elements.
 */
//>public
vjo.ctype('qx.event.dispatch.DomBubbling')
.inherits('qx.event.dispatch.AbstractBubbling')
.protos({
	/**
	 */
	_getParent : vjo.NEEDS_IMPL,


	/**
	 */
	canDispatchEvent : vjo.NEEDS_IMPL
})
.endType();