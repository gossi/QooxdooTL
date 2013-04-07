/**
 * Basic class for a selectbox like lists. Basically supports a popup
 * with a list and the whole children management.
 */
//>public abstract
vjo.ctype('qx.ui.form.AbstractSelectBox')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IForm')
.mixin(['qx.ui.core.MRemoteChildrenHandling','qx.ui.form.MForm'])
.protos({
	/**
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	_applyMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Return the formatted label text from the ListItem.
	 * The formatter removes all HTML tags and converts all HTML entities
	 * to string characters when the rich property is true.
	 * 
	 */
	_defaultFormat : vjo.NEEDS_IMPL,


	/**
	 * Handler for the blur event of the current widget.
	 * 
	 */
	_onBlur : vjo.NEEDS_IMPL,


	/**
	 * Reacts on special keys and forwards other key events to the list widget.
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Syncs the own property from the list change
	 * 
	 */
	_onListChangeSelection : vjo.NEEDS_IMPL,


	/**
	 * Redirects mousedown event from the list to this widget.
	 * 
	 */
	_onListMouseDown : vjo.NEEDS_IMPL,


	/**
	 * Close the pop-up if the mousewheel event isn&#8217;t on the pup-up window.
	 * 
	 */
	_onMousewheel : vjo.NEEDS_IMPL,


	/**
	 * Redirects changeVisibility event from the list to this widget.
	 * 
	 */
	_onPopupChangeVisibility : vjo.NEEDS_IMPL,


	/**
	 * Updates list minimum size.
	 * 
	 */
	_onResize : vjo.NEEDS_IMPL,


	/**
	 * Hides the list popup.
	 * 
	 */
	close : vjo.NEEDS_IMPL,


	/**
	 * Returns the list widget.
	 * 
	 */
	getChildrenContainer : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property format.
	 * 
	 * For further details take a look at the property definition: {@link #format}.
	 * 
	 */
	getFormat : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	getMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property format
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #format}.
	 * 
	 */
	initFormat : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property maxListHeight
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	initMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Shows the list popup.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property format.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #format}.
	 * 
	 */
	resetFormat : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property maxListHeight.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	resetMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property format.
	 * 
	 * For further details take a look at the property definition: {@link #format}.
	 * 
	 */
	setFormat : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property maxListHeight.
	 * 
	 * For further details take a look at the property definition: {@link #maxListHeight}.
	 * 
	 */
	setMaxListHeight : vjo.NEEDS_IMPL,


	/**
	 * Toggles the popup&#8217;s visibility.
	 * 
	 */
	toggle : vjo.NEEDS_IMPL
})
.endType();