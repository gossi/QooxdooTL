/**
 * This class provides an unified mouse event handler for Internet Explorer,
 * Firefox, Opera and Safari
 */
//>public
vjo.ctype('qx.event.handler.Mouse')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * If the mouseup event happens on a different target than the corresponding
	 * mousedown event the internet explorer dispatches a click event on the
	 * first common ancestor of both targets. The presence of this click event
	 * is essential for the qooxdoo widget system. All other browsers don&#8217;t fire
	 * the click event so it must be emulated.
	 * 
	 */
	__differentTargetClickFixPost : vjo.NEEDS_IMPL,


	/**
	 * Normalizes the click sequence of double click event in the Internet
	 * Explorer. The normalized sequence is:
	 * 
	 * 1. mousedown
	 *  2. mouseup
	 *  3. click
	 *  4. mousedown  
	 * 
	 * Note: This fix is only applied, when the IE event model is used, otherwise
	 *  the fix is ignored.
	 * 
	 */
	__doubleClickFixPre : vjo.NEEDS_IMPL,


	/**
	 * Fire a mouse event with the given parameters
	 * 
	 */
	__fireEvent : vjo.NEEDS_IMPL,


	/**
	 * Internal target for checking the target and mouse type for mouse
	 * scrolling on a feature detection base.
	 * 
	 */
	__getMouseWheelTarget : vjo.NEEDS_IMPL,


	/**
	 * Normalizes the click sequence of right click events in Webkit and Opera.
	 * The normalized sequence is:
	 * 
	 * 1. mousedown  
	 * 
	 */
	__rightClickFixPost : vjo.NEEDS_IMPL,


	/**
	 * Normalizes the click sequence of right click events in Webkit and Opera.
	 * The normalized sequence is:
	 * 
	 * 1. mousedown  
	 * 
	 */
	__rightClickFixPre : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native mouse button event listeners.
	 * 
	 */
	_initButtonObserver : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native mouse move event listeners.
	 * 
	 */
	_initMoveObserver : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native mouse wheel event listeners.
	 * 
	 */
	_initWheelObserver : vjo.NEEDS_IMPL,


	/**
	 * Global handler for all mouse button related events like &#8220;mouseup&#8221;,
	 * &#8220;mousedown&#8221;, &#8220;click&#8221;, &#8220;dblclick&#8221; and &#8220;contextmenu&#8221;.
	 * 
	 */
	_onButtonEvent : vjo.NEEDS_IMPL,


	/**
	 * Global handler for all mouse move related events like &#8220;mousemove&#8221;,
	 * &#8220;mouseout&#8221; and &#8220;mouseover&#8221;.
	 * 
	 */
	_onMoveEvent : vjo.NEEDS_IMPL,


	/**
	 * Global handler for the mouse wheel event.
	 * 
	 */
	_onWheelEvent : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the native mouse button event listeners.
	 * 
	 */
	_stopButtonObserver : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the native mouse move event listeners.
	 * 
	 */
	_stopMoveObserver : vjo.NEEDS_IMPL,


	/**
	 * Disconnects the native mouse wheel event listeners.
	 * 
	 */
	_stopWheelObserver : vjo.NEEDS_IMPL
})
.endType();