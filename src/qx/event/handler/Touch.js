/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * This class provides a unified touch event handler.
 */
//>public
vjo.ctype('qx.event.handler.Touch')
.inherits('qx.event.handler.TouchCore')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Call overriden method.
	 * 
	 */
	__callBase : vjo.NEEDS_IMPL,


	/**
	 * Creates and returns a Touch mock object.
	 * Fore more information see:
	 * http://developer.apple.com/safari/library/documentation/UserExperience/Reference/TouchClassReference/Touch/Touch.html
	 * 
	 */
	__createTouchObject : vjo.NEEDS_IMPL,


	/**
	 * Checks if the left mouse button is pressed.
	 * 
	 */
	__isLeftMouseButtonPressed : vjo.NEEDS_IMPL,


	/**
	 * Normalizes a mouse event to a touch event.
	 * 
	 */
	__normalizeMouseEvent : vjo.NEEDS_IMPL,


	/**
	 * Fire a touch event with the given parameters
	 * 
	 */
	_fireEvent : vjo.NEEDS_IMPL,


	/**
	 * Handler for the native mouse events.
	 * 
	 */
	_onMouseEvent : vjo.NEEDS_IMPL,


	/**
	 * Handler for the native touch events.
	 * 
	 */
	_onTouchEvent : vjo.NEEDS_IMPL,


	/**
	 * Dispose this object
	 * 
	 */
	dispose : vjo.NEEDS_IMPL
})
.endType();