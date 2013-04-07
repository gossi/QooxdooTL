/**
 * Central instance pool for event objects. All event objects dispatched by the
 * event loader are pooled using this class.
 */
//>public
vjo.ctype('qx.event.Pool')
.inherits('qx.util.ObjectPool')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL
})
.endType();