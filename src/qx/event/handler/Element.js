/**
 * This class supports typical DOM element inline events like scroll,
 * change, select, ...
 */
//>public
vjo.ctype('qx.event.handler.Element')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Default event handler.
	 * 
	 */
	_onNative : vjo.NEEDS_IMPL
})
.endType();