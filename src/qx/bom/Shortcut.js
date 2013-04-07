/**
 * Shortcuts can be used to globally define keyboard shortcuts.
 */
//>public
vjo.ctype('qx.bom.Shortcut')
.inherits('qx.core.Object')
.protos({
	/**
	 * Create a new instance of Command
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Checks whether the given key event matches the shortcut&#8217;s shortcut
	 * 
	 */
	__matchesKeyEvent : vjo.NEEDS_IMPL,


	/**
	 * Checks and normalizes the key identifier.
	 * 
	 */
	__normalizeKeyIdentifier : vjo.NEEDS_IMPL,


	/**
	 * Key down event handler.
	 * 
	 */
	__onKeyDown : vjo.NEEDS_IMPL,


	/**
	 * Key press event handler.
	 * 
	 */
	__onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	_applyEnabled : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property shortcut.
	 * 
	 * For further details take a look at the property definition: {@link #shortcut}.
	 * 
	 */
	_applyShortcut : vjo.NEEDS_IMPL,


	/**
	 * Fire the &#8220;execute&#8221; event on this shortcut.
	 * 
	 */
	execute : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property autoRepeat.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	getAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	getEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property shortcut.
	 * 
	 * For further details take a look at the property definition: {@link #shortcut}.
	 * 
	 */
	getShortcut : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property autoRepeat
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	initAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property enabled
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	initEnabled : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property shortcut
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #shortcut}.
	 * 
	 */
	initShortcut : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property autoRepeat equals true.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	isAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property enabled equals true.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	isEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property autoRepeat.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	resetAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property enabled.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	resetEnabled : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property shortcut.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #shortcut}.
	 * 
	 */
	resetShortcut : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property autoRepeat.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	setAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	setEnabled : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property shortcut.
	 * 
	 * For further details take a look at the property definition: {@link #shortcut}.
	 * 
	 */
	setShortcut : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property autoRepeat.
	 * 
	 * For further details take a look at the property definition: {@link #autoRepeat}.
	 * 
	 */
	toggleAutoRepeat : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property enabled.
	 * 
	 * For further details take a look at the property definition: {@link #enabled}.
	 * 
	 */
	toggleEnabled : vjo.NEEDS_IMPL,


	/**
	 * Returns the shortcut as string using the currently selected locale.
	 * 
	 */
	toString : vjo.NEEDS_IMPL
})
.endType();