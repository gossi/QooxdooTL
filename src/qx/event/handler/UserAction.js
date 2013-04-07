/**
 * This handler accepts the useraction event fired by the keyboard and
 * and mouse handlers after an user triggered action has occurred.
 */
//>public
vjo.ctype('qx.event.handler.UserAction')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();