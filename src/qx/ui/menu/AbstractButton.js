/**
 * The abstract menu button class is used for all type of menu content
 * for example normal buttons, checkboxes or radiobuttons.
 */
//>public abstract
vjo.ctype('qx.ui.menu.AbstractButton')
.inherits('qx.ui.core.Widget')
.satisfies('qx.ui.form.IExecutable')
.mixin('qx.ui.core.MExecutable')
.protos({
	/**
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
	 * Applies changes of the property value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	_applyMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property showCommandLabel.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	_applyShowCommandLabel : vjo.NEEDS_IMPL,


	/**
	 */
	_createChildControlImpl : vjo.NEEDS_IMPL,


	/**
	 * Event listener for command changes. Updates the text of the shortcut.
	 * 
	 */
	_onChangeCommand : vjo.NEEDS_IMPL,


	/**
	 * Event listener for click
	 * 
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Event listener for mouseup event
	 * 
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Returns the dimensions of all children
	 * 
	 */
	getChildrenSizes : vjo.NEEDS_IMPL,


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
	 * Returns the (computed) value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	getMenu : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property showCommandLabel.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	getShowCommandLabel : vjo.NEEDS_IMPL,


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
	 * Calls the apply method and dispatches the change event of the property menu
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	initMenu : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property showCommandLabel
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	initShowCommandLabel : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property showCommandLabel equals true.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	isShowCommandLabel : vjo.NEEDS_IMPL,


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
	 * Resets the user value of the property menu.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	resetMenu : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property showCommandLabel.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	resetShowCommandLabel : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	setMenu : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property showCommandLabel.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	setShowCommandLabel : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property showCommandLabel.
	 * 
	 * For further details take a look at the property definition: {@link #showCommandLabel}.
	 * 
	 */
	toggleShowCommandLabel : vjo.NEEDS_IMPL
})
.endType();