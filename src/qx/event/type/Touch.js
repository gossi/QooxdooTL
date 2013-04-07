/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Touch event object.
 * 
 * For more information see:
 *     http://developer.apple.com/safari/library/documentation/UserExperience/Reference/TouchEventClassReference/TouchEvent/TouchEvent.html
 */
//>public
vjo.ctype('qx.event.type.Touch')
.inherits('qx.event.type.Dom')
.protos({
	/**
	 * Returns an event specific touch on the target element. This function is
	 * used as the &#8220;touchend&#8221; event only offers Touch objects in the
	 * changedTouches array.
	 * 
	 */
	__getEventSpecificTouch : vjo.NEEDS_IMPL,


	/**
	 * Returns the event specific touches on the target element. This function
	 * is used as the &#8220;touchend&#8221; event only offers Touch objects in the
	 * changedTouches array.
	 * 
	 */
	__getEventSpecificTouches : vjo.NEEDS_IMPL,


	/**
	 */
	_cloneNativeEvent : vjo.NEEDS_IMPL,


	/**
	 * Indicates if the event occurs during the &#8220;touchend&#8221; phase. Needed to
	 * determine the event specific touches. Override this method if you derive
	 * from this class and want to indicate that the specific event occurred
	 * during the &#8220;touchend&#8221; phase.
	 * 
	 */
	_isTouchEnd : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of native Touch objects representing all current
	 * touches on the document.
	 * Returns an empty array for the &#8220;touchend&#8221; event.
	 * 
	 */
	getAllTouches : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of native Touch objects representing all touches of
	 * the target element that changed in this event.
	 * 
	 * On the &#8220;touchstart&#8221; event the array contains all touches that were
	 * added to the target element.
	 * On the &#8220;touchmove&#8221; event the array contains all touches that were
	 * moved on the target element.
	 * On the &#8220;touchend&#8221; event the array contains all touches that used
	 * to be on the target element.
	 * 
	 */
	getChangedTargetTouches : vjo.NEEDS_IMPL,


	/**
	 * Get the horizontal position at which the event occurred relative to the
	 * left of the document. This property takes into account any scrolling of
	 * the page.
	 * 
	 */
	getDocumentLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical position at which the event occurred relative to the
	 * top of the document. This property takes into account any scrolling of
	 * the page.
	 * 
	 */
	getDocumentTop : vjo.NEEDS_IMPL,


	/**
	 * Returns the unique identifier for a certain touch object.
	 * 
	 */
	getIdentifier : vjo.NEEDS_IMPL,


	/**
	 * iOS only: Returns the delta of the rotation since the start of the event, in degrees.
	 * Initial value is 0.0
	 * Clockwise > 0
	 * Counter-clockwise < 0.
	 * 
	 */
	getRotation : vjo.NEEDS_IMPL,


	/**
	 * iOS only: Returns the distance between two fingers since the start of the event.
	 * The distance is a multiplier of the initial distance.
	 * Initial value: 1.0.
	 * Gestures:
	 * < 1.0, pinch close / zoom out.
	 * > 1.0, pinch open / to zoom in.
	 * 
	 */
	getScale : vjo.NEEDS_IMPL,


	/**
	 * Get the horizontal coordinate at which the event occurred relative to
	 * the origin of the screen coordinate system.
	 * 
	 */
	getScreenLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical coordinate at which the event occurred relative to
	 * the origin of the screen coordinate system.
	 * 
	 */
	getScreenTop : vjo.NEEDS_IMPL,


	/**
	 * Returns an array of native Touch objects representing all touches
	 * associated with the event target element.
	 * Returns an empty array for the &#8220;touchend&#8221; event.
	 * 
	 */
	getTargetTouches : vjo.NEEDS_IMPL,


	/**
	 * Get the the horizontal coordinate at which the event occurred relative
	 * to the viewport.
	 * 
	 */
	getViewportLeft : vjo.NEEDS_IMPL,


	/**
	 * Get the vertical coordinate at which the event occurred relative
	 * to the viewport.
	 * 
	 */
	getViewportTop : vjo.NEEDS_IMPL,


	/**
	 * Checks whether more than one touch is associated with the event target
	 * element.
	 * 
	 */
	isMultiTouch : vjo.NEEDS_IMPL,


	/**
	 */
	stop : vjo.NEEDS_IMPL
})
.endType();