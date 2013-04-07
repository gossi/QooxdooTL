/**
 * This handler is used to normalize all focus/activation requirements
 * and normalize all cross browser quirks in this area.
 * 
 * Notes:
 * 
 * 
 * Webkit and Opera (before 9.5) do not support tabIndex for all elements
 * (See also: http://bugs.webkit.org/show_bug.cgi?id=7138)
 * 
 * 
 * 
 * TabIndex is normally 0, which means all naturally focusable elements are focusable.
 * TabIndex > 0 means that the element is focusable and tabable
 * TabIndex < 0 means that the element, even if naturally possible, is not focusable.

 */
//>public
vjo.ctype('qx.event.handler.Focus')
.inherits('qx.core.Object')
.satisfies('qx.event.IEventHandler')
.protos({
	/**
	 * Create a new instance
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Helper for native event listeners to react on window blur
	 * 
	 */
	__doWindowBlur : vjo.NEEDS_IMPL,


	/**
	 * Helper for native event listeners to react on window focus
	 * 
	 */
	__doWindowFocus : vjo.NEEDS_IMPL,


	/**
	 * Returns the next activatable element. May be the element itself.
	 * Works a bit different than the method {@link #__findFocusableElement}
	 * as it looks up for a parent which is has a keep focus flag. When
	 * there is such a parent it returns null otherwise the original
	 * incoming element.
	 * 
	 */
	__findActivatableElement : vjo.NEEDS_IMPL,


	/**
	 * Returns the next focusable parent element of an activated DOM element.
	 * 
	 */
	__findFocusableElement : vjo.NEEDS_IMPL,


	/**
	 * Shorthand to fire events from within this class.
	 * 
	 */
	__fireEvent : vjo.NEEDS_IMPL,


	/**
	 * Fix for bug #2602.
	 * 
	 */
	__fixFocus : vjo.NEEDS_IMPL,


	/**
	 * Whether the given element is focusable. This is perfectly modeled to the
	 * browsers behavior and this way may differ in the various clients.
	 * 
	 */
	__isFocusable : vjo.NEEDS_IMPL,


	/**
	 * Whether the given el (or its content) should be selectable
	 * by the user.
	 * 
	 */
	__isSelectable : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for blur.
	 * 
	 */
	__onNativeBlur : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for draggesture event
	 * supported by gecko. Used to stop native drag and drop when
	 * selection is disabled.
	 * 
	 */
	__onNativeDragGesture : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for focus.
	 * 
	 */
	__onNativeFocus : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for DOMFocusIn or focusin
	 * depending on the client&#8217;s engine.
	 * 
	 */
	__onNativeFocusIn : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for DOMFocusOut or focusout
	 * depending on the client&#8217;s engine.
	 * 
	 */
	__onNativeFocusOut : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for mousedown.
	 * 
	 */
	__onNativeMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for mouseup.
	 * 
	 */
	__onNativeMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Native event listener for selectstart.
	 * 
	 */
	__onNativeSelectStart : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	_applyActive : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property focus.
	 * 
	 * For further details take a look at the property definition: {@link #focus}.
	 * 
	 */
	_applyFocus : vjo.NEEDS_IMPL,


	/**
	 * Initializes event listeners.
	 * 
	 */
	_initObserver : vjo.NEEDS_IMPL,


	/**
	 * Disconnects event listeners.
	 * 
	 */
	_stopObserver : vjo.NEEDS_IMPL,


	/**
	 * Activates the given DOM element
	 * 
	 */
	activate : vjo.NEEDS_IMPL,


	/**
	 * Blurs the given DOM element
	 * 
	 */
	blur : vjo.NEEDS_IMPL,


	/**
	 * Deactivates the given DOM element
	 * 
	 */
	deactivate : vjo.NEEDS_IMPL,


	/**
	 * Focuses the given DOM element
	 * 
	 */
	focus : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	getActive : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property focus.
	 * 
	 * For further details take a look at the property definition: {@link #focus}.
	 * 
	 */
	getFocus : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property active
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	initActive : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property focus
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #focus}.
	 * 
	 */
	initFocus : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property active.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	resetActive : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property focus.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #focus}.
	 * 
	 */
	resetFocus : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property active.
	 * 
	 * For further details take a look at the property definition: {@link #active}.
	 * 
	 */
	setActive : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property focus.
	 * 
	 * For further details take a look at the property definition: {@link #focus}.
	 * 
	 */
	setFocus : vjo.NEEDS_IMPL,


	/**
	 * Tries to activate the given element. This checks whether
	 * the activation is allowed first.
	 * 
	 */
	tryActivate : vjo.NEEDS_IMPL
})
.endType();