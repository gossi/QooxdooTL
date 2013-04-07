/**
 * A Tooltip provides additional information for widgets when the user hovers
 * over a widget.
 */
//>public
vjo.ctype('qx.ui.tooltip.ToolTip')
.inherits('qx.ui.popup.Popup')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	_applyIcon : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	_applyLabel : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	_applyRich : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Listener method for &#8220;mouseover&#8221; event
	 * 
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property hideTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #hideTimeout}.
	 * 
	 */
	getHideTimeout : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	getIcon : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	getLabel : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property opener.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	getOpener : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	getRich : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #showTimeout}.
	 * 
	 */
	getShowTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property hideTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #hideTimeout}.
	 * 
	 */
	initHideTimeout : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property icon
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	initIcon : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property label
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	initLabel : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property opener
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	initOpener : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property rich
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	initRich : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showTimeout
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showTimeout}.
	 * 
	 */
	initShowTimeout : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property rich equals true.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	isRich : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property hideTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #hideTimeout}.
	 * 
	 */
	resetHideTimeout : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property icon.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	resetIcon : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property label.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	resetLabel : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property opener.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	resetOpener : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property rich.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	resetRich : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showTimeout.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showTimeout}.
	 * 
	 */
	resetShowTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property hideTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #hideTimeout}.
	 * 
	 */
	setHideTimeout : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property icon.
	 * 
	 * For further details take a look at the property definition: {@link #icon}.
	 * 
	 */
	setIcon : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property label.
	 * 
	 * For further details take a look at the property definition: {@link #label}.
	 * 
	 */
	setLabel : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property opener.
	 * 
	 * For further details take a look at the property definition: {@link #opener}.
	 * 
	 */
	setOpener : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	setRich : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showTimeout.
	 * 
	 * For further details take a look at the property definition: {@link #showTimeout}.
	 * 
	 */
	setShowTimeout : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property rich.
	 * 
	 * For further details take a look at the property definition: {@link #rich}.
	 * 
	 */
	toggleRich : vjo.NEEDS_IMPL
})
.endType();