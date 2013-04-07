/**
 * EXPERIMENTAL &#8211; NOT READY FOR PRODUCTION
 * 
 * Orientation event object.
 */
//>public
vjo.ctype('qx.event.type.Orientation')
.inherits('qx.event.type.Event')
.protos({
	/**
	 * Get a copy of this object
	 * 
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the current orientation of the viewport in degree.
	 * 
	 * All possible values and their meaning:
	 * 
	 * 
	 * 0: &#8220;Portrait&#8221;
	 * -90: &#8220;Landscape (right, screen turned clockwise)&#8221;
	 * 90: &#8220;Landscape (left, screen turned counterclockwise)&#8221;
	 * 180: &#8220;Portrait (upside-down portrait)&#8221;

	 * 
	 */
	getOrientation : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event. The event must be initialized before
	 * it can be dispatched.
	 * 
	 */
	init : vjo.NEEDS_IMPL,


	/**
	 * Whether the viewport orientation is currently in landscape mode.
	 * 
	 */
	isLandscape : vjo.NEEDS_IMPL,


	/**
	 * Whether the viewport orientation is currently in portrait mode.
	 * 
	 */
	isPortrait : vjo.NEEDS_IMPL
})
.endType();