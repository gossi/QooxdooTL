/**
 * Renders a special checkbox button inside a menu. The button behaves like
 * a normal {@link qx.ui.form.CheckBox} and shows a check icon when
 * checked; normally shows no icon when not checked (depends on the theme).
 */
//>public
vjo.ctype('qx.ui.menu.CheckBox')
.inherits('qx.ui.menu.AbstractButton')
.satisfies('qx.ui.form.IBooleanForm')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	_applyValue : vjo.NEEDS_IMPL,


	/**
	 */
	_onClick : vjo.NEEDS_IMPL,


	/**
	 * Handler for the execute event.
	 * 
	 */
	_onExecute : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyPress : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	getValue : vjo.NEEDS_IMPL,


	/**
	 * Calls the apply method and dispatches the change event of the property value
	 * with the default value defined by the class developer. This function can
	 * only be called from the constructor of a class.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	initValue : vjo.NEEDS_IMPL,


	/**
	 * Check whether the (computed) value of the boolean property value equals true.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	isValue : vjo.NEEDS_IMPL,


	/**
	 * Resets the user value of the property value.
	 * 
	 * The computed value falls back to the next available value e.g. appearance, init or
	 * inheritance value depeneding on the property configuration and value availability.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	resetValue : vjo.NEEDS_IMPL,


	/**
	 * Sets the user value of the property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	setValue : vjo.NEEDS_IMPL,


	/**
	 * Toggles the (computed) value of the boolean property value.
	 * 
	 * For further details take a look at the property definition: {@link #value}.
	 * 
	 */
	toggleValue : vjo.NEEDS_IMPL
})
.endType();