/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Swipe event object.
 */
//>public
vjo.ctype('qx.event.type.Swipe')
.inherits('qx.event.type.Touch')
.protos({
	/**
	 */
	_cloneNativeEvent : vjo.NEEDS_IMPL,


	/**
	 */
	_isTouchEnd : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the performed swipe was on the x or y axis.
	 * 
	 */
	getAxis : vjo.NEEDS_IMPL,


	/**
	 * Returns the direction of the performed swipe in reference to the axis.
	 * y = up / down
	 * x = left / right
	 * 
	 */
	getDirection : vjo.NEEDS_IMPL,


	/**
	 * Returns the distance of the performed swipe.
	 * 
	 */
	getDistance : vjo.NEEDS_IMPL,


	/**
	 * Returns the duration the performed swipe took.
	 * 
	 */
	getDuration : vjo.NEEDS_IMPL,


	/**
	 * Returns the start time of the performed swipe.
	 * 
	 */
	getStartTime : vjo.NEEDS_IMPL,


	/**
	 * Returns the velocity of the performed swipe.
	 * 
	 */
	getVelocity : vjo.NEEDS_IMPL
})
.endType();