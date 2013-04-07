/**
 * Mouse wheel event object.
 */
//>public
vjo.ctype('qx.event.type.MouseWheel')
.inherits('qx.event.type.Mouse')
.protos({
	/**
	 * Get the amount the wheel has been scrolled
	 * 
	 */
	__convertWheelDelta : vjo.NEEDS_IMPL,


	/**
	 * Normalizer for the mouse wheel data.
	 * 
	 */
	__normalize : vjo.NEEDS_IMPL,


	/**
	 * Recalculates the factor with which the calculated delta is normalized.
	 * 
	 */
	__recalculateMultiplicator : vjo.NEEDS_IMPL,


	/**
	 * Get the amount the wheel has been scrolled
	 * 
	 */
	getWheelDelta : vjo.NEEDS_IMPL,


	/**
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();