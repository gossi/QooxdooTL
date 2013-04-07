/**
 * A form virtual widget which allows a single selection. Looks somewhat like
 * a normal button, but opens a virtual list of items to select when clicking
 * on it.
 */
//>public
vjo.ctype('qx.ui.form.VirtualSelectBox')
.inherits('qx.ui.form.core.AbstractVirtualBox')
.satisfies('qx.data.controller.ISelection')
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Converts the keyIdentifier to a printable character e.q. &#8220;Space&#8221;
	 * to &#8221; &#8221;.
	 * 
	 */
	__convertKeyIdentifier : vjo.NEEDS_IMPL,


	/**
	 * Preselects an item in the drop-down, when item starts with the
	 * __seachValue value.
	 * 
	 */
	__preselect : vjo.NEEDS_IMPL,


	/**
	 * This method is called when the binding can be added to the
	 * widget. For e.q. bind the drop-down selection with the widget.
	 * 
	 */
	_addBindings : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	_applySelection : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 */
	_getAction : vjo.NEEDS_IMPL,


	/**
	 */
	_handleKeyboard : vjo.NEEDS_IMPL,


	/**
	 */
	_handleMouse : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseout&#8221; event.
	 * 
	 * 
	 * Removes "hovered" state
	 * Adds "abandoned" and removes "pressed" state (if "pressed" state
	 *   is set)

	 * 
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event.
	 * 
	 * 
	 * Adds state "hovered"
	 * Removes "abandoned" and adds "pressed" state (if "abandoned" state
	 *   is set)

	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * This method is called when the binding can be removed from the
	 * widget. For e.q. remove the bound drop-down selection.
	 * 
	 */
	_removeBindings : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	getSelection : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property selection
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	initSelection : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property selection.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	resetSelection : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property selection.
	 * 
	 * For further details take a look at the property definition: {@link #selection}.
	 * 
	 */
	setSelection : vjo.NEEDS_IMPL,


	/**
	 */
	syncWidget : vjo.NEEDS_IMPL
})
.endType();