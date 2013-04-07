/**
 * This mixin provides scrolling for scroller widgets.
 */
//>public
vjo.mtype('qx.ui.core.scroll.MTouchScroll')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper for momentum scrolling.
	 * 
	 */
	__handleScrollImpulse : vjo.NEEDS_IMPL,


	/**
	 * Handler for touchend event. Stops event propagation if needed.
	 * 
	 */
	_onTouchEnd : vjo.NEEDS_IMPL,


	/**
	 * Event handler for the touch move.
	 * 
	 */
	_onTouchMove : vjo.NEEDS_IMPL,


	/**
	 * Touch move handler for one direction.
	 * 
	 */
	_onTouchMoveDirectional : vjo.NEEDS_IMPL,


	/**
	 * Handler for touchstart event. Clears timers and flags.
	 * 
	 */
	_onTouchStart : vjo.NEEDS_IMPL,


	/**
	 * Returns true if touch momentum is currently on progress.
	 * 
	 */
	inTouchMomentum : vjo.NEEDS_IMPL
})
.endType();