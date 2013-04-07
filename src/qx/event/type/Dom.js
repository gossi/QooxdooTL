/**
 * Common base class for all DOM events.
 */
//>public
vjo.ctype('qx.event.type.Dom')
.inherits('qx.event.type.Native')
.protos({
	/**
	 */
	_cloneNativeEvent : vjo.NEEDS_IMPL,


	/**
	 * Return in a bit map, which modifier keys are pressed. The constants
	 * {@link #SHIFT_MASK}, {@link #CTRL_MASK}, {@link #ALT_MASK} and
	 * {@link #META_MASK} define the bit positions of the corresponding keys.
	 * 
	 */
	getModifiers : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the alt key is pressed.
	 * 
	 */
	isAltPressed : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the ctrl key or (on the Mac) the command key is pressed.
	 * 
	 */
	isCtrlOrCommandPressed : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the ctrl key is pressed.
	 * 
	 */
	isCtrlPressed : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the meta key is pressed.
	 * 
	 */
	isMetaPressed : vjo.NEEDS_IMPL,


	/**
	 * Returns whether the shift key is pressed.
	 * 
	 */
	isShiftPressed : vjo.NEEDS_IMPL
})
.endType();