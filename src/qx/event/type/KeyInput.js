/**
 * Keyboard input event object.
 * 
 * the interface of this class is based on the DOM Level 3 keyboard event
 * interface: http://www.w3.org/TR/DOM-Level-3-Events/#events-keyboardevents
 */
//>public
vjo.ctype('qx.event.type.KeyInput')
.inherits('qx.event.type.Dom')
.protos({
	/**
	 */
	clone : vjo.NEEDS_IMPL,


	/**
	 * Returns the pressed character
	 * 
	 */
	getChar : vjo.NEEDS_IMPL,


	/**
	 * Unicode number of the pressed character.
	 * 
	 */
	getCharCode : vjo.NEEDS_IMPL,


	/**
	 * Initialize the fields of the event.
	 * 
	 */
	init : vjo.NEEDS_IMPL
})
.endType();