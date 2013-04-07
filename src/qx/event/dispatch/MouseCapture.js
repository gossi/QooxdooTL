/**
 * Implementation of the Internet Explorer specific event capturing mode for
 * mouse events http://msdn2.microsoft.com/en-us/library/ms536742.aspx.
 * 
 * This class is used internally by {@link qx.event.Manager} to do mouse event
 * capturing.
 */
//>public
vjo.ctype('qx.event.dispatch.MouseCapture')
.inherits('qx.event.dispatch.AbstractBubbling')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 */
	_getParent : vjo.NEEDS_IMPL,


	/**
	 * Set the given element as target for event
	 * 
	 */
	activateCapture : vjo.NEEDS_IMPL,


	/**
	 */
	canDispatchEvent : vjo.NEEDS_IMPL,


	/**
	 */
	dispatchEvent : vjo.NEEDS_IMPL,


	/**
	 * Get the element currently capturing events.
	 * 
	 */
	getCaptureElement : vjo.NEEDS_IMPL,


	/**
	 * If the browser supports native mouse capturing, removes mouse capture
	 * from the object in the current document.
	 * 
	 */
	nativeReleaseCapture : vjo.NEEDS_IMPL,


	/**
	 * If the browser supports native mouse capturing, sets the mouse capture to
	 * the object that belongs to the current document.
	 * 
	 */
	nativeSetCapture : vjo.NEEDS_IMPL,


	/**
	 * Stop capturing of mouse events.
	 * 
	 */
	releaseCapture : vjo.NEEDS_IMPL
})
.endType();