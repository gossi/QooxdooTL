/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Tap event object.
 */
//>public
vjo.ctype('qx.event.type.Tap')
.inherits('qx.event.type.Touch')
.protos({
	/**
	 */
	_isTouchEnd : vjo.NEEDS_IMPL
})
.endType();