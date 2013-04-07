/**
 * A button which opens the connected menu when clicking on it.
 */
//>public
vjo.ctype('qx.ui.form.MenuButton')
.inherits('qx.ui.form.Button')
.protos({
	/**
	 * 
	 */
	constructs : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	_applyMenu : vjo.NEEDS_IMPL,


	/**
	 * Applies changes of the property value of the property visibility.
	 * 
	 * For further details take a look at the property definition: {@link #visibility}.
	 * 
	 */
	_applyVisibility : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyDown : vjo.NEEDS_IMPL,


	/**
	 */
	_onKeyUp : vjo.NEEDS_IMPL,


	/**
	 * Listener for visibility property changes of the attached menu
	 * 
	 */
	_onMenuChange : vjo.NEEDS_IMPL,


	/**
	 */
	_onMouseDown : vjo.NEEDS_IMPL,


	/**
	 */
	_onMouseOut : vjo.NEEDS_IMPL,


	/**
	 */
	_onMouseOver : vjo.NEEDS_IMPL,


	/**
	 */
	_onMouseUp : vjo.NEEDS_IMPL,


	/**
	 * Returns the (computed) value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	getMenu : vjo.NEEDS_IMPL,


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
	 * Positions and shows the attached menu widget.
	 * 
	 */
	open : vjo.NEEDS_IMPL,


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
	 * Sets the user value of the property menu.
	 * 
	 * For further details take a look at the property definition: {@link #menu}.
	 * 
	 */
	setMenu : vjo.NEEDS_IMPL
})
.endType();