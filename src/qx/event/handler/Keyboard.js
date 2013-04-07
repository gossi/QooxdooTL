/**
 * This class provides unified key event handler for Internet Explorer,
 * Firefox, Opera and Safari.
 */
//>public
vjo.ctype('qx.event.handler.Keyboard')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * some keys like &#8220;up&#8221;, &#8220;down&#8221;, &#8220;pageup&#8221;, &#8220;pagedown&#8221; do not bubble a
	 * &#8220;keypress&#8221; event in Firefox. To work around this bug we attach keypress
	 * listeners directly to the input events.
	 * 
	 * https://bugzilla.mozilla.org/show_bug.cgi?id=467513
	 * 
	 */
	__firefoxInputFix : vjo.NEEDS_IMPL,


	/**
	 * Get the target element for mouse events
	 * 
	 */
	__getEventTarget : vjo.NEEDS_IMPL,


	/**
	 * Low level key press handler
	 * 
	 */
	__onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Low level handler for &#8220;keyup&#8221; and &#8220;keydown&#8221; events
	 * 
	 */
	__onKeyUpDown : vjo.NEEDS_IMPL,


	/**
	 * Fire a key input event with the given parameters
	 * 
	 */
	_fireInputEvent : vjo.NEEDS_IMPL,


	/**
	 * Fire a key up/down/press event with the given parameters
	 * 
	 */
	_fireSequenceEvent : vjo.NEEDS_IMPL,


	/**
	 * Key handler for an idealized browser.
	 * Runs after the browser specific key handlers have normalized the key events.
	 * 
	 */
	_idealKeyHandler : vjo.NEEDS_IMPL,


	/**
	 * converts a key identifier back to a keycode
	 * 
	 */
	_identifierToKeyCode : vjo.NEEDS_IMPL,


	/**
	 * Initializes the native key event listeners.
	 * 
	 */
	_initKeyObserver : vjo.NEEDS_IMPL,


	/**
	 * Stops the native key event listeners.
	 * 
	 */
	_stopKeyObserver : vjo.NEEDS_IMPL
})
.endType();